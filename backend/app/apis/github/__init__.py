"""
GitHub Integration API

Endpoints for integrating with GitHub:
- List user's repositories
- Create new repository from project
- Push generated files to repository
- Get repository information
"""

import os
from pathlib import Path
from typing import List, Optional
from fastapi import APIRouter, HTTPException
from pydantic import BaseModel, Field

from app.libs.github_client import (
    GitHubClient,
    GitHubRepo,
    GitHubError,
    GitHubCommitResponse
)

router = APIRouter(prefix="/github", tags=["GitHub"])


# Request/Response Models
class CreateRepoRequest(BaseModel):
    """Request to create a new GitHub repository"""
    name: str = Field(..., description="Repository name")
    description: Optional[str] = Field(None, description="Repository description")
    private: bool = Field(False, description="Make repository private")
    auto_init: bool = Field(True, description="Initialize with README")
    gitignore_template: Optional[str] = Field(None, description="Gitignore template (e.g., 'Python', 'Node')")


class PushFileRequest(BaseModel):
    """Request to push a single file"""
    owner: str = Field(..., description="Repository owner")
    repo: str = Field(..., description="Repository name")
    path: str = Field(..., description="File path in repo (e.g., 'src/main.py')")
    content: str = Field(..., description="File content")
    message: str = Field(..., description="Commit message")
    branch: str = Field("main", description="Branch name")


class PushFilesRequest(BaseModel):
    """Request to push multiple files"""
    owner: str = Field(..., description="Repository owner")
    repo: str = Field(..., description="Repository name")
    files: List[dict] = Field(
        ...,
        description="List of files with 'path' and 'content' keys"
    )
    message: str = Field("Update project files", description="Commit message")
    branch: str = Field("main", description="Branch name")


class ListReposRequest(BaseModel):
    """Request parameters for listing repositories"""
    visibility: str = Field("all", description="Filter by visibility (all, public, private)")
    sort: str = Field("updated", description="Sort by (created, updated, pushed, full_name)")
    per_page: int = Field(30, description="Results per page (max 100)")
    page: int = Field(1, description="Page number")


class RateLimitResponse(BaseModel):
    """GitHub API rate limit information"""
    limit: int
    remaining: int
    reset: int
    used: int


class ProjectFile(BaseModel):
    """Project file with path and content"""
    path: str
    content: str


@router.get("/rate-limit")
async def get_rate_limit() -> RateLimitResponse:
    """
    Get GitHub API rate limit status
    
    Returns current rate limit information including:
    - Total limit
    - Remaining requests
    - Reset timestamp
    - Used requests
    """
    try:
        client = GitHubClient()
        rate_limit = client.get_rate_limit()
        return RateLimitResponse(**rate_limit)
    except GitHubError as e:
        raise HTTPException(status_code=e.status_code or 500, detail=e.message)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get rate limit: {str(e)}")


@router.post("/repos/list")
async def list_repositories(request: ListReposRequest) -> List[GitHubRepo]:
    """
    List authenticated user's GitHub repositories
    
    Returns a list of repositories with details like:
    - Name, full name, description
    - URLs (html_url, clone_url, ssh_url)
    - Visibility (public/private)
    - Timestamps (created, updated, pushed)
    """
    try:
        client = GitHubClient()
        repos = client.list_repositories(
            visibility=request.visibility,
            sort=request.sort,
            per_page=request.per_page,
            page=request.page
        )
        return repos
    except GitHubError as e:
        raise HTTPException(status_code=e.status_code or 500, detail=e.message)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to list repositories: {str(e)}")


@router.get("/repos/{owner}/{repo}")
async def get_repository(owner: str, repo: str) -> GitHubRepo:
    """
    Get information about a specific repository
    
    Args:
        owner: Repository owner username
        repo: Repository name
    
    Returns detailed repository information
    """
    try:
        client = GitHubClient()
        repository = client.get_repository(owner, repo)
        return repository
    except GitHubError as e:
        raise HTTPException(status_code=e.status_code or 500, detail=e.message)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to get repository: {str(e)}")


@router.post("/repos/create")
async def create_repository(request: CreateRepoRequest) -> GitHubRepo:
    """
    Create a new GitHub repository for the authenticated user
    
    Creates a new repository with the specified settings.
    Returns the created repository details including clone URLs.
    """
    try:
        client = GitHubClient()
        repo = client.create_repository(
            name=request.name,
            description=request.description,
            private=request.private,
            auto_init=request.auto_init,
            gitignore_template=request.gitignore_template
        )
        return repo
    except GitHubError as e:
        # Handle specific errors
        if e.status_code == 422 and e.response:
            # Repository name already exists or validation error
            errors = e.response.get('errors', [])
            if errors:
                error_msg = ", ".join([err.get('message', '') for err in errors])
                raise HTTPException(status_code=422, detail=f"Validation error: {error_msg}")
        raise HTTPException(status_code=e.status_code or 500, detail=e.message)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to create repository: {str(e)}")


@router.post("/files/push")
async def push_file(request: PushFileRequest) -> GitHubCommitResponse:
    """
    Push a single file to a GitHub repository
    
    Creates or updates a file in the repository.
    File content will be base64-encoded automatically.
    """
    try:
        client = GitHubClient()
        
        # Check if file exists to get SHA
        sha = None
        try:
            sha = client.get_file_sha(request.owner, request.repo, request.path, request.branch)
        except GitHubError:
            # File doesn't exist, will create new
            pass
        
        commit = client.push_file(
            owner=request.owner,
            repo=request.repo,
            path=request.path,
            content=request.content,
            message=request.message,
            branch=request.branch,
            sha=sha
        )
        return commit
    except GitHubError as e:
        raise HTTPException(status_code=e.status_code or 500, detail=e.message)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to push file: {str(e)}")


@router.get("/repos/{owner}/{repo}/exists")
async def check_repository_exists(owner: str, repo: str) -> dict:
    """
    Check if a repository exists
    
    Args:
        owner: Repository owner username
        repo: Repository name
    
    Returns dict with exists boolean and repository details if it exists
    """
    try:
        client = GitHubClient()
        repository = client.get_repository(owner, repo)
        return {
            "exists": True,
            "repository": repository
        }
    except GitHubError as e:
        if e.status_code == 404:
            return {"exists": False}
        raise HTTPException(status_code=e.status_code or 500, detail=e.message)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to check repository: {str(e)}")


@router.post("/files/push-batch")
async def push_files(request: PushFilesRequest) -> dict:
    """
    Push multiple files to a GitHub repository using atomic commit
    
    All files are committed in a single atomic commit using the Git Data API.
    This is the proper Git workflow that allows pushing to existing repositories.
    
    Returns commit SHA and details.
    """
    try:
        client = GitHubClient()
        
        # Use the new atomic commit method
        commit_sha = client.commit_changes(
            owner=request.owner,
            repo=request.repo,
            files=request.files,
            message=request.message,
            branch=request.branch
        )
        
        return {
            "success": True,
            "commit_sha": commit_sha,
            "files_count": len(request.files),
            "message": f"Successfully committed {len(request.files)} files in atomic commit",
            "repository_url": f"https://github.com/{request.owner}/{request.repo}",
            "commit_url": f"https://github.com/{request.owner}/{request.repo}/commit/{commit_sha}"
        }
    except GitHubError as e:
        raise HTTPException(status_code=e.status_code or 500, detail=e.message)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to push files: {str(e)}")


@router.delete("/repos/{owner}/{repo}")
async def delete_repository(owner: str, repo: str) -> dict:
    """
    Delete a GitHub repository
    
    ⚠️ WARNING: This action is irreversible!
    
    Args:
        owner: Repository owner username
        repo: Repository name
    
    Returns success message
    """
    try:
        client = GitHubClient()
        success = client.delete_repository(owner, repo)
        if success:
            return {"message": f"Repository {owner}/{repo} deleted successfully"}
        else:
            raise HTTPException(status_code=500, detail="Failed to delete repository")
    except GitHubError as e:
        raise HTTPException(status_code=e.status_code or 500, detail=e.message)
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to delete repository: {str(e)}")

@router.get("/project-files")
async def get_project_files() -> List[ProjectFile]:
    """
    Collect all project files from the workspace
    
    Returns a list of files with their paths and content,
    ready to be pushed to GitHub
    """
    try:
        project_root = Path("/disk")
        files = []
        
        # Files and directories to exclude
        exclude_patterns = [
            "__pycache__",
            "node_modules",
            ".venv",
            "venv",
            "dist",
            "build",
            ".git",
            ".next",
            ".cache",
            ".mypy_cache",
            ".pytest_cache",
            "*.pyc",
            ".DS_Store",
            "*.swp",
            "*.swo",
            ".rsync-filter",
            ".dirlock",
            "CACHEDIR.TAG",
            "missing_stubs"
        ]
        
        def should_exclude(path: Path) -> bool:
            """Check if file/dir should be excluded"""
            path_str = str(path)
            path_name = path.name
            
            # Check against exclude patterns
            for pattern in exclude_patterns:
                if pattern.startswith("*."):
                    # Extension pattern
                    if path_name.endswith(pattern[1:]):
                        return True
                elif pattern in path_str or path_name == pattern:
                    return True
            return False
        
        def collect_files_recursive(directory: Path, base_path: str = ""):
            """Recursively collect all files from directory"""
            if not directory.exists() or not directory.is_dir():
                return
            
            for item in directory.iterdir():
                if should_exclude(item):
                    continue
                
                relative_path = f"{base_path}/{item.name}" if base_path else item.name
                
                if item.is_file():
                    try:
                        # Try to read as text file
                        content = item.read_text(encoding="utf-8")
                        files.append(ProjectFile(
                            path=relative_path,
                            content=content
                        ))
                        print(f"✓ Collected: {relative_path}")
                    except UnicodeDecodeError:
                        # Skip binary files
                        print(f"⊘ Skipped binary: {relative_path}")
                    except Exception as e:
                        print(f"✗ Error reading {relative_path}: {e}")
                
                elif item.is_dir():
                    # Recursively collect from subdirectory
                    collect_files_recursive(item, relative_path)
        
        # Collect backend files
        backend_dir = project_root / "backend"
        if backend_dir.exists():
            print("\n📦 Collecting backend files...")
            collect_files_recursive(backend_dir, "backend")
        
        # Collect frontend files
        frontend_dir = project_root / "frontend"
        if frontend_dir.exists():
            print("\n📦 Collecting frontend files...")
            collect_files_recursive(frontend_dir, "frontend")
        
        # Add README
        readme_content = """# Riff AI Studio

An AI-powered platform for building apps through natural language.

## Features
- 🤖 Conversational AI chat interface for app ideation
- 📋 Interactive project plan editor
- 🔄 Natural language to code generation (Python + React)
- 👀 Live app preview and testing environment
- 🚀 One-click GitHub deployment
- 🔌 Integration marketplace
- 🧠 Context-aware AI assistant with company knowledge

## Tech Stack
- **Frontend:** React + TypeScript + Vite + Tailwind CSS + shadcn/ui
- **Backend:** FastAPI + Python 3.11
- **Database:** PostgreSQL
- **AI:** OpenAI GPT-4 (via AI orchestrator)
- **Auth:** Stack Auth
- **Deployment:** GitHub integration

## Project Structure
```
backend/
├── app/
│   ├── apis/           # FastAPI route handlers
│   ├── libs/           # Reusable Python modules
│   ├── auth/           # Authentication utilities
│   ├── integrations/   # Third-party integrations
│   └── internal/       # Internal framework code
│       ├── mw/         # Middleware
│       └── extensions/ # Extensions
├── main.py             # FastAPI app entry point
└── pyproject.toml      # Python dependencies

frontend/
├── src/
│   ├── pages/          # React page components
│   ├── components/     # Reusable UI components
│   ├── utils/          # Frontend utilities
│   ├── apiclient/      # Generated TypeScript API client
│   └── app/            # App configuration (auth, routing)
├── package.json        # NPM dependencies
├── vite.config.ts      # Vite configuration
└── index.html          # App entry point
```

## Getting Started

### Prerequisites
- Python 3.11+
- Node.js 18+
- PostgreSQL database
- OpenAI API key
- GitHub token (for deployment)

### Backend Setup
```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # On Windows: .venv\\Scripts\\activate
pip install -e .
uvicorn main:app --reload
```

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### Environment Variables
Create `.env` file in backend directory:
```
DATABASE_URL=postgresql://...
OPENAI_API_KEY=sk-...
GITHUB_TOKEN=ghp_...
STACK_SECRET_SERVER_KEY=...
```

## Key Features Implemented

### AI Orchestration
- Context-aware conversation with project knowledge
- Tool calling capabilities for code generation
- Planning and debugging modes
- Package detection and auto-installation

### Code Generation
- Python backend (FastAPI endpoints, libraries)
- React frontend (pages, components, utilities)
- Type-safe TypeScript API client generation
- Automatic code validation and error detection

### GitHub Integration
- OAuth authentication with GitHub
- Repository creation and management
- Batch file push to repositories
- Full project deployment

### Project Management
- Project CRUD operations
- File tree visualization
- Project statistics tracking
- Context persistence

## Architecture

### Backend APIs
- `ai_agent_tools` - AI tool registry and execution
- `ai_context` - Context management
- `api_scraper` - Documentation scraping
- `errors` - Error tracking and reporting
- `github` - GitHub integration
- `installed_packages` - Package management
- `package_manager` - NPM/pip operations
- `preview` - Frontend build and preview
- `project_backend_manager` - Backend process management
- `projects` - Project CRUD

### Frontend Pages
- `App.tsx` - Home/chat workspace
- `Projects.tsx` - Project list
- `GitHub.tsx` - GitHub integration
- `Settings.tsx` - Project settings

## Development

### Adding New API Endpoints
1. Create `backend/app/apis/<api_name>/__init__.py`
2. Define FastAPI router and endpoints
3. Add Pydantic models for request/response
4. API client auto-generated on save

### Adding New Frontend Pages
1. Create `frontend/src/pages/PageName.tsx`
2. Export default React component
3. Router auto-updated
4. Use `apiClient` for backend calls

### Adding Reusable Code
- Backend: `backend/app/libs/module_name.py`
- Frontend: `frontend/src/utils/utilName.ts`
- UI Components: `frontend/src/components/ComponentName.tsx`

## License
MIT

## Built With
Built with ❤️ using Riff - https://riff.new
"""
        files.append(ProjectFile(path="README.md", content=readme_content))
        print("✓ Added README.md")
        
        # Add .gitignore
        gitignore_content = """# Python
__pycache__/
*.py[cod]
*$py.class
*.so
.Python
build/
develop-eggs/
dist/
downloads/
eggs/
.eggs/
lib/
lib64/
parts/
sdist/
var/
wheels/
*.egg-info/
.installed.cfg
*.egg
.venv/
venv/
ENV/
env/
.mypy_cache/
.pytest_cache/

# Node
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
lerna-debug.log*
.pnpm-debug.log*

# Build outputs
dist/
build/
.next/
out/
.nuxt/
.cache/
.parcel-cache/

# Environment variables
.env
.env.local
.env.development.local
.env.test.local
.env.production.local

# IDE
.vscode/
.idea/
*.swp
*.swo
*~
.DS_Store

# Logs
*.log
logs/

# OS
Thumbs.db
.DS_Store

# Temporary files
*.tmp
*.temp
"""
        files.append(ProjectFile(path=".gitignore", content=gitignore_content))
        print("✓ Added .gitignore")
        
        print(f"\n✅ Collected {len(files)} total project files")
        return files
        
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Failed to collect project files: {str(e)}")
