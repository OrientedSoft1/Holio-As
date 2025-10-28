# Riff AI Studio

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
source .venv/bin/activate  # On Windows: .venv\Scripts\activate
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
