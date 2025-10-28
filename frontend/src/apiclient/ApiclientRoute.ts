import {
  AddChatMessageData,
  AddChatMessageRequest,
  AddTaskCommentData,
  AddTaskCommentRequest,
  BuildPreviewData,
  ChatStreamData,
  CheckHealthData,
  CheckRepositoryExistsData,
  CreateFileData,
  CreateFileRequest,
  CreateProjectBackendData,
  CreateProjectData,
  CreateRepoRequest,
  CreateRepositoryData,
  CreateTaskData,
  CreateTaskRequest,
  DeleteErrorData,
  DeleteFileData,
  DeleteProjectData,
  DeleteRepositoryData,
  DeleteTaskData,
  EnableIntegrationData,
  EnableIntegrationRequest,
  ErrorReport,
  GetBackendStatusData,
  GetChatHistoryData,
  GetContextData,
  GetErrorsData,
  GetFileTreeData,
  GetInstalledPackagesData,
  GetOpenErrorsData,
  GetProjectData,
  GetProjectErrorsData,
  GetProjectFilesData,
  GetProjectStatsData,
  GetRateLimitData,
  GetRepositoryData,
  GetSqlSchemaData,
  InitProjectData,
  InstallPackagesEndpointData,
  InstallPackagesRequest,
  ListBackendsData,
  ListIntegrationsData,
  ListProjectsData,
  ListReposRequest,
  ListRepositoriesData,
  ListTasksData,
  ProjectCreate,
  ProjectUpdate,
  PushFileData,
  PushFileRequest,
  PushFilesData,
  PushFilesRequest,
  ReadFilesData,
  ReadLogsData,
  ReportErrorData,
  RequestDataData,
  RequestDataRequest,
  ResetContextData,
  ResolveErrorData,
  ResolveErrorRequest,
  RestartBackendData,
  RunMigrationEndpointData,
  RunMigrationRequest,
  RunPythonScriptData,
  RunPythonScriptRequest,
  RunSQLQueryRequest,
  RunSqlQueryData,
  ScrapeApiDocsData,
  ScrapeRequest,
  SearchCodeData,
  SearchCodeRequest,
  ServePreviewAssetsData,
  ServePreviewData,
  SimplePreviewData,
  StartBackendData,
  StopAllBackendsData,
  StopBackendData,
  TestEndpointData,
  TestEndpointRequest,
  TestErrorDetectionData,
  TestErrorFeedbackLoopData,
  TestPackageInstallationData,
  TestPreviewData,
  TroubleshootData,
  TroubleshootRequest,
  UpdateContextData,
  UpdateContextRequest,
  UpdateFileData,
  UpdateFileRequest,
  UpdateProjectData,
  UpdateTaskData,
  UpdateTaskRequest,
  VisualizeDataData,
  VisualizeDataRequest,
} from "./data-contracts";

export namespace Apiclient {
  /**
   * @description Check health of application. Returns 200 when OK, 500 when not.
   * @name check_health
   * @summary Check Health
   * @request GET:/_healthz
   */
  export namespace check_health {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CheckHealthData;
  }

  /**
   * @description Start FastAPI backend for a project. Creates isolated backend process running in project workspace.
   * @tags project-backend, dbtn/module:project_backend_manager
   * @name start_backend
   * @summary Start Backend
   * @request POST:/routes/project-backend/start/{project_id}
   */
  export namespace start_backend {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StartBackendData;
  }

  /**
   * @description Stop backend process for project.
   * @tags project-backend, dbtn/module:project_backend_manager
   * @name stop_backend
   * @summary Stop Backend
   * @request POST:/routes/project-backend/stop/{project_id}
   */
  export namespace stop_backend {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StopBackendData;
  }

  /**
   * @description Restart backend (useful after code changes).
   * @tags project-backend, dbtn/module:project_backend_manager
   * @name restart_backend
   * @summary Restart Backend
   * @request POST:/routes/project-backend/restart/{project_id}
   */
  export namespace restart_backend {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = RestartBackendData;
  }

  /**
   * @description Get status of backend for project.
   * @tags project-backend, dbtn/module:project_backend_manager
   * @name get_backend_status
   * @summary Get Backend Status
   * @request GET:/routes/project-backend/status/{project_id}
   */
  export namespace get_backend_status {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetBackendStatusData;
  }

  /**
   * @description List all running backends.
   * @tags project-backend, dbtn/module:project_backend_manager
   * @name list_backends
   * @summary List Backends
   * @request GET:/routes/project-backend/list
   */
  export namespace list_backends {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListBackendsData;
  }

  /**
   * @description Stop all running backends.
   * @tags project-backend, dbtn/module:project_backend_manager
   * @name stop_all_backends
   * @summary Stop All Backends
   * @request POST:/routes/project-backend/stop-all
   */
  export namespace stop_all_backends {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = StopAllBackendsData;
  }

  /**
   * @description Get all installed packages for a specific project (both Python and NPM) Returns package name, version, and package manager type from PROJECT workspace
   * @tags dbtn/module:installed_packages
   * @name get_installed_packages
   * @summary Get Installed Packages
   * @request GET:/routes/installed-packages/{project_id}
   */
  export namespace get_installed_packages {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetInstalledPackagesData;
  }

  /**
   * @description Get all errors for a project. Args: project_id: The project ID status: Filter by status ('open', 'resolved') - optional
   * @tags dbtn/module:errors
   * @name get_errors
   * @summary Get Errors
   * @request GET:/routes/errors/{project_id}
   */
  export namespace get_errors {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {
      /** Status */
      status?: string | null;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetErrorsData;
  }

  /**
   * @description Report a new error. Args: error: Error details
   * @tags dbtn/module:errors
   * @name report_error
   * @summary Report Error
   * @request POST:/routes/errors/report
   */
  export namespace report_error {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ErrorReport;
    export type RequestHeaders = {};
    export type ResponseBody = ReportErrorData;
  }

  /**
   * @description Mark an error as resolved. Args: error_id: The error ID request: Optional resolution notes
   * @tags dbtn/module:errors
   * @name resolve_error
   * @summary Resolve Error
   * @request PUT:/routes/errors/{error_id}/resolve
   */
  export namespace resolve_error {
    export type RequestParams = {
      /** Error Id */
      errorId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ResolveErrorRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ResolveErrorData;
  }

  /**
   * @description Delete an error. Args: error_id: The error ID
   * @tags dbtn/module:errors
   * @name delete_error
   * @summary Delete Error
   * @request DELETE:/routes/errors/{error_id}
   */
  export namespace delete_error {
    export type RequestParams = {
      /** Error Id */
      errorId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteErrorData;
  }

  /**
   * @description Test endpoint to verify error detection is working. Creates a test project with intentional errors.
   * @tags dbtn/module:errors
   * @name test_error_detection
   * @summary Test Error Detection
   * @request POST:/routes/errors/test/{project_id}
   */
  export namespace test_error_detection {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TestErrorDetectionData;
  }

  /**
   * @description Scrape API documentation from a given URL This uses Scrapy to extract API endpoints, methods, and descriptions from API documentation pages.
   * @tags dbtn/module:api_scraper
   * @name scrape_api_docs
   * @summary Scrape Api Docs
   * @request POST:/routes/scrape-api-docs
   */
  export namespace scrape_api_docs {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ScrapeRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ScrapeApiDocsData;
  }

  /**
   * No description
   * @tags dbtn/module:package_manager
   * @name install_packages_endpoint
   * @summary Install Packages Endpoint
   * @request POST:/routes/install
   */
  export namespace install_packages_endpoint {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = InstallPackagesRequest;
    export type RequestHeaders = {};
    export type ResponseBody = InstallPackagesEndpointData;
  }

  /**
   * @description Test package detection and installation in project venv. 1. Creates backend workspace if not exists 2. Generates test Python code with imports 3. Detects packages from code 4. Installs packages in project venv 5. Verifies installation
   * @tags dbtn/module:preview
   * @name test_package_installation
   * @summary Test Package Installation
   * @request POST:/routes/preview/packages/test/{project_id}
   */
  export namespace test_package_installation {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TestPackageInstallationData;
  }

  /**
   * @description Super simple test endpoint - hardcoded HTML.
   * @tags dbtn/module:preview
   * @name test_preview
   * @summary Test Preview
   * @request GET:/routes/preview/test
   */
  export namespace test_preview {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TestPreviewData;
  }

  /**
   * @description Test endpoint: Create backend workspace for a project.
   * @tags dbtn/module:preview
   * @name create_project_backend
   * @summary Create Project Backend
   * @request POST:/routes/preview/backend/create/{project_id}
   */
  export namespace create_project_backend {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CreateProjectBackendData;
  }

  /**
   * @description Simple hardcoded counter app - all inline, no external assets.
   * @tags dbtn/module:preview
   * @name simple_preview
   * @summary Simple Preview
   * @request GET:/routes/preview/simple/{project_id}
   */
  export namespace simple_preview {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = SimplePreviewData;
  }

  /**
   * @description Build preview from AI-generated code in database.
   * @tags dbtn/module:preview
   * @name build_preview
   * @summary Build Preview
   * @request POST:/routes/preview/build/{project_id}
   */
  export namespace build_preview {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = BuildPreviewData;
  }

  /**
   * @description Serve the built preview HTML from cache.
   * @tags dbtn/module:preview
   * @name serve_preview
   * @summary Serve Preview
   * @request GET:/routes/preview/{project_id}
   */
  export namespace serve_preview {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ServePreviewData;
  }

  /**
   * @description Serve static assets (CSS, JS) for preview builds.
   * @tags dbtn/module:preview
   * @name serve_preview_assets
   * @summary Serve Preview Assets
   * @request GET:/routes/preview/{project_id}/assets/{filepath}
   */
  export namespace serve_preview_assets {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
      /** Filepath */
      filepath: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ServePreviewAssetsData;
  }

  /**
   * @description Create a new task for a project. This is used by the AI to break down work into manageable pieces.
   * @tags dbtn/module:ai_agent_tools
   * @name create_task
   * @summary Create Task
   * @request POST:/routes/ai-tools/tasks/create
   */
  export namespace create_task {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateTaskRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CreateTaskData;
  }

  /**
   * @description Update an existing task. Used by AI to change task status, update descriptions, etc.
   * @tags dbtn/module:ai_agent_tools
   * @name update_task
   * @summary Update Task
   * @request POST:/routes/ai-tools/tasks/update
   */
  export namespace update_task {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateTaskRequest;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateTaskData;
  }

  /**
   * @description List all tasks for a project. Used by AI to understand what work is planned/in progress.
   * @tags dbtn/module:ai_agent_tools
   * @name list_tasks
   * @summary List Tasks
   * @request GET:/routes/ai-tools/tasks/list/{project_id}
   */
  export namespace list_tasks {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListTasksData;
  }

  /**
   * @description Delete a task. Used by AI to remove obsolete or duplicate tasks.
   * @tags dbtn/module:ai_agent_tools
   * @name delete_task
   * @summary Delete Task
   * @request DELETE:/routes/ai-tools/tasks/delete/{task_id}
   */
  export namespace delete_task {
    export type RequestParams = {
      /** Task Id */
      taskId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteTaskData;
  }

  /**
   * @description Add a comment/note to a task. Used by AI to document progress, decisions, and learnings.
   * @tags dbtn/module:ai_agent_tools
   * @name add_task_comment
   * @summary Add Task Comment
   * @request POST:/routes/ai-tools/tasks/add-comment
   */
  export namespace add_task_comment {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddTaskCommentRequest;
    export type RequestHeaders = {};
    export type ResponseBody = AddTaskCommentData;
  }

  /**
   * @description Get all errors for a project. Used by AI to check if there are build/runtime errors after code generation. Returns errors sorted by most recent first.
   * @tags dbtn/module:ai_agent_tools
   * @name get_project_errors
   * @summary Get Project Errors
   * @request GET:/routes/ai-tools/errors/{project_id}
   */
  export namespace get_project_errors {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetProjectErrorsData;
  }

  /**
   * @description Get only open/unresolved errors for a project. This is what AI should check after code generation to see if fixes are needed.
   * @tags dbtn/module:ai_agent_tools
   * @name get_open_errors
   * @summary Get Open Errors
   * @request GET:/routes/ai-tools/errors/{project_id}/open
   */
  export namespace get_open_errors {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetOpenErrorsData;
  }

  /**
   * @description Create a new file in the virtual file system. Used by AI to generate code files.
   * @tags dbtn/module:ai_agent_tools
   * @name create_file
   * @summary Create File
   * @request POST:/routes/ai-tools/files/create
   */
  export namespace create_file {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateFileRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CreateFileData;
  }

  /**
   * @description Update an existing file. Used by AI to modify generated code.
   * @tags dbtn/module:ai_agent_tools
   * @name update_file
   * @summary Update File
   * @request PUT:/routes/ai-tools/files/update
   */
  export namespace update_file {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateFileRequest;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateFileData;
  }

  /**
   * @description Read file(s) from the virtual file system. If file_path provided, returns that file. Otherwise returns all files.
   * @tags dbtn/module:ai_agent_tools
   * @name read_files
   * @summary Read Files
   * @request GET:/routes/ai-tools/files/read/{project_id}
   */
  export namespace read_files {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {
      /** File Path */
      file_path?: string | null;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ReadFilesData;
  }

  /**
   * @description Search for code across all files in a project. Used by AI to find relevant code before making changes.
   * @tags dbtn/module:ai_agent_tools
   * @name search_code
   * @summary Search Code
   * @request POST:/routes/ai-tools/files/search
   */
  export namespace search_code {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = SearchCodeRequest;
    export type RequestHeaders = {};
    export type ResponseBody = SearchCodeData;
  }

  /**
   * @description Delete a file from the virtual file system. Used by AI to remove obsolete files.
   * @tags dbtn/module:ai_agent_tools
   * @name delete_file
   * @summary Delete File
   * @request DELETE:/routes/ai-tools/files/delete/{project_id}/{file_path}
   */
  export namespace delete_file {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
      /** File Path */
      filePath: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteFileData;
  }

  /**
   * @description Test the complete error feedback loop: 1. Create broken code file 2. Detect errors (simulated) 3. Read errors via AI tools 4. Fix errors (simulated) 5. Verify resolution
   * @tags dbtn/module:ai_agent_tools
   * @name test_error_feedback_loop
   * @summary Test Error Feedback Loop
   * @request POST:/routes/ai-tools/test/error-feedback-loop/{project_id}
   */
  export namespace test_error_feedback_loop {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = TestErrorFeedbackLoopData;
  }

  /**
   * @description Stream AI response to a user message with tool execution. This is the main endpoint for the chat interface. Uses intelligent planning pipeline for feature requests.
   * @tags stream, dbtn/module:ai_agent_tools
   * @name chat_stream
   * @summary Chat Stream
   * @request POST:/routes/ai-tools/chat/stream
   */
  export namespace chat_stream {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddChatMessageRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ChatStreamData;
  }

  /**
   * @description Add a message to the chat history and get AI response (non-streaming). Kept for backwards compatibility. Use /chat/stream for better UX.
   * @tags dbtn/module:ai_agent_tools
   * @name add_chat_message
   * @summary Add Chat Message
   * @request POST:/routes/ai-tools/chat/add-message
   */
  export namespace add_chat_message {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = AddChatMessageRequest;
    export type RequestHeaders = {};
    export type ResponseBody = AddChatMessageData;
  }

  /**
   * @description Get chat message history for a project. Used by AI to load context.
   * @tags dbtn/module:ai_agent_tools
   * @name get_chat_history
   * @summary Get Chat History
   * @request GET:/routes/ai-tools/chat/history/{project_id}
   */
  export namespace get_chat_history {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {
      /**
       * Limit
       * @default 50
       */
      limit?: number;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetChatHistoryData;
  }

  /**
   * @description Initialize or get the default project. Creates a project if none exists, otherwise returns existing project. Used by frontend to get a valid project_id on mount.
   * @tags dbtn/module:ai_agent_tools
   * @name init_project
   * @summary Init Project
   * @request POST:/routes/ai-tools/project/init
   */
  export namespace init_project {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = InitProjectData;
  }

  /**
   * @description Get the file tree structure for a project. Used by AI to understand project structure.
   * @tags dbtn/module:ai_agent_tools
   * @name get_file_tree
   * @summary Get File Tree
   * @request GET:/routes/ai-tools/project/file-tree/{project_id}
   */
  export namespace get_file_tree {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetFileTreeData;
  }

  /**
   * @description Get statistics about a project. Used by AI to understand project size and complexity.
   * @tags dbtn/module:ai_agent_tools
   * @name get_project_stats
   * @summary Get Project Stats
   * @request GET:/routes/ai-tools/project/stats/{project_id}
   */
  export namespace get_project_stats {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetProjectStatsData;
  }

  /**
   * @description Run a database migration. Used by AI to create/modify database schema.
   * @tags dbtn/module:ai_agent_tools
   * @name run_migration_endpoint
   * @summary Run Migration Endpoint
   * @request POST:/routes/ai-tools/database/run-migration
   */
  export namespace run_migration_endpoint {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RunMigrationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = RunMigrationEndpointData;
  }

  /**
   * @description Execute a SQL query. Used by AI to query data for analysis or verification.
   * @tags dbtn/module:ai_agent_tools
   * @name run_sql_query
   * @summary Run Sql Query
   * @request POST:/routes/ai-tools/database/run-query
   */
  export namespace run_sql_query {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RunSQLQueryRequest;
    export type RequestHeaders = {};
    export type ResponseBody = RunSqlQueryData;
  }

  /**
   * @description Get the database schema for tables related to a project. Used by AI to understand data structure.
   * @tags dbtn/module:ai_agent_tools
   * @name get_sql_schema
   * @summary Get Sql Schema
   * @request GET:/routes/ai-tools/database/schema/{project_id}
   */
  export namespace get_sql_schema {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetSqlSchemaData;
  }

  /**
   * @description Execute Python code in a sandboxed environment. Used by AI to test logic, experiment with APIs, etc.
   * @tags dbtn/module:ai_agent_tools
   * @name run_python_script
   * @summary Run Python Script
   * @request POST:/routes/ai-tools/development/run-python
   */
  export namespace run_python_script {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RunPythonScriptRequest;
    export type RequestHeaders = {};
    export type ResponseBody = RunPythonScriptData;
  }

  /**
   * @description Read application logs for a project. Used by AI to debug issues.
   * @tags dbtn/module:ai_agent_tools
   * @name read_logs
   * @summary Read Logs
   * @request GET:/routes/ai-tools/development/logs/{project_id}
   */
  export namespace read_logs {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {
      /**
       * Limit
       * @default 100
       */
      limit?: number;
      /** Level */
      level?: string | null;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ReadLogsData;
  }

  /**
   * @description Test an API endpoint. Used by AI to verify endpoints are working correctly.
   * @tags dbtn/module:ai_agent_tools
   * @name test_endpoint
   * @summary Test Endpoint
   * @request POST:/routes/ai-tools/development/test-endpoint
   */
  export namespace test_endpoint {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TestEndpointRequest;
    export type RequestHeaders = {};
    export type ResponseBody = TestEndpointData;
  }

  /**
   * @description Analyze an error and suggest solutions. Used by AI to debug issues.
   * @tags dbtn/module:ai_agent_tools
   * @name troubleshoot
   * @summary Troubleshoot
   * @request POST:/routes/ai-tools/development/troubleshoot
   */
  export namespace troubleshoot {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = TroubleshootRequest;
    export type RequestHeaders = {};
    export type ResponseBody = TroubleshootData;
  }

  /**
   * @description Enable a third-party integration for a project. Used by AI to connect external services.
   * @tags dbtn/module:ai_agent_tools
   * @name enable_integration
   * @summary Enable Integration
   * @request POST:/routes/ai-tools/integrations/enable
   */
  export namespace enable_integration {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = EnableIntegrationRequest;
    export type RequestHeaders = {};
    export type ResponseBody = EnableIntegrationData;
  }

  /**
   * @description List all integrations for a project. Used by AI to see what services are connected.
   * @tags dbtn/module:ai_agent_tools
   * @name list_integrations
   * @summary List Integrations
   * @request GET:/routes/ai-tools/integrations/list/{project_id}
   */
  export namespace list_integrations {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListIntegrationsData;
  }

  /**
   * @description Create a data visualization. Used by AI to display data insights to user.
   * @tags dbtn/module:ai_agent_tools
   * @name visualize_data
   * @summary Visualize Data
   * @request POST:/routes/ai-tools/data/visualize
   */
  export namespace visualize_data {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = VisualizeDataRequest;
    export type RequestHeaders = {};
    export type ResponseBody = VisualizeDataData;
  }

  /**
   * @description Request data from user. Used by AI to ask user for files or information.
   * @tags dbtn/module:ai_agent_tools
   * @name request_data
   * @summary Request Data
   * @request POST:/routes/ai-tools/data/request
   */
  export namespace request_data {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RequestDataRequest;
    export type RequestHeaders = {};
    export type ResponseBody = RequestDataData;
  }

  /**
   * @description Get GitHub API rate limit status Returns current rate limit information including: - Total limit - Remaining requests - Reset timestamp - Used requests
   * @tags GitHub, dbtn/module:github
   * @name get_rate_limit
   * @summary Get Rate Limit
   * @request GET:/routes/github/rate-limit
   */
  export namespace get_rate_limit {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetRateLimitData;
  }

  /**
   * @description List authenticated user's GitHub repositories Returns a list of repositories with details like: - Name, full name, description - URLs (html_url, clone_url, ssh_url) - Visibility (public/private) - Timestamps (created, updated, pushed)
   * @tags GitHub, dbtn/module:github
   * @name list_repositories
   * @summary List Repositories
   * @request POST:/routes/github/repos/list
   */
  export namespace list_repositories {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ListReposRequest;
    export type RequestHeaders = {};
    export type ResponseBody = ListRepositoriesData;
  }

  /**
   * @description Get information about a specific repository Args: owner: Repository owner username repo: Repository name Returns detailed repository information
   * @tags GitHub, dbtn/module:github
   * @name get_repository
   * @summary Get Repository
   * @request GET:/routes/github/repos/{owner}/{repo}
   */
  export namespace get_repository {
    export type RequestParams = {
      /** Owner */
      owner: string;
      /** Repo */
      repo: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetRepositoryData;
  }

  /**
   * @description Delete a GitHub repository ⚠️ WARNING: This action is irreversible! Args: owner: Repository owner username repo: Repository name Returns success message
   * @tags GitHub, dbtn/module:github
   * @name delete_repository
   * @summary Delete Repository
   * @request DELETE:/routes/github/repos/{owner}/{repo}
   */
  export namespace delete_repository {
    export type RequestParams = {
      /** Owner */
      owner: string;
      /** Repo */
      repo: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteRepositoryData;
  }

  /**
   * @description Create a new GitHub repository for the authenticated user Creates a new repository with the specified settings. Returns the created repository details including clone URLs.
   * @tags GitHub, dbtn/module:github
   * @name create_repository
   * @summary Create Repository
   * @request POST:/routes/github/repos/create
   */
  export namespace create_repository {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateRepoRequest;
    export type RequestHeaders = {};
    export type ResponseBody = CreateRepositoryData;
  }

  /**
   * @description Push a single file to a GitHub repository Creates or updates a file in the repository. File content will be base64-encoded automatically.
   * @tags GitHub, dbtn/module:github
   * @name push_file
   * @summary Push File
   * @request POST:/routes/github/files/push
   */
  export namespace push_file {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PushFileRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PushFileData;
  }

  /**
   * @description Check if a repository exists Args: owner: Repository owner username repo: Repository name Returns dict with exists boolean and repository details if it exists
   * @tags GitHub, dbtn/module:github
   * @name check_repository_exists
   * @summary Check Repository Exists
   * @request GET:/routes/github/repos/{owner}/{repo}/exists
   */
  export namespace check_repository_exists {
    export type RequestParams = {
      /** Owner */
      owner: string;
      /** Repo */
      repo: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = CheckRepositoryExistsData;
  }

  /**
   * @description Push multiple files to a GitHub repository using atomic commit All files are committed in a single atomic commit using the Git Data API. This is the proper Git workflow that allows pushing to existing repositories. Returns commit SHA and details.
   * @tags GitHub, dbtn/module:github
   * @name push_files
   * @summary Push Files
   * @request POST:/routes/github/files/push-batch
   */
  export namespace push_files {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = PushFilesRequest;
    export type RequestHeaders = {};
    export type ResponseBody = PushFilesData;
  }

  /**
   * @description Collect all project files from the workspace Returns a list of files with their paths and content, ready to be pushed to GitHub
   * @tags GitHub, dbtn/module:github
   * @name get_project_files
   * @summary Get Project Files
   * @request GET:/routes/github/project-files
   */
  export namespace get_project_files {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetProjectFilesData;
  }

  /**
   * @description List all projects for the authenticated user. Returns a summary view with counts of features and integrations. Only active projects are returned (soft-deleted projects are excluded).
   * @tags dbtn/module:projects
   * @name list_projects
   * @summary List Projects
   * @request GET:/routes/projects
   */
  export namespace list_projects {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ListProjectsData;
  }

  /**
   * @description Create a new project with features, integrations, and design preferences. This endpoint creates: - Main project record - Associated features - Associated integrations - Design preferences All operations are wrapped in a transaction for data consistency.
   * @tags dbtn/module:projects
   * @name create_project
   * @summary Create Project
   * @request POST:/routes/projects
   */
  export namespace create_project {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = ProjectCreate;
    export type RequestHeaders = {};
    export type ResponseBody = CreateProjectData;
  }

  /**
   * @description Get full project details including all related entities. Returns: - Project info - All features - All integrations - Design preferences Also updates the last_accessed_at timestamp.
   * @tags dbtn/module:projects
   * @name get_project
   * @summary Get Project
   * @request GET:/routes/projects/{project_id}
   */
  export namespace get_project {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetProjectData;
  }

  /**
   * @description Update a project and its related entities. Updates: - Project title/description if provided - Features (replaces all features if provided) - Integrations (upserts integrations if provided) - Design (upserts design if provided) All operations are wrapped in a transaction.
   * @tags dbtn/module:projects
   * @name update_project
   * @summary Update Project
   * @request PUT:/routes/projects/{project_id}
   */
  export namespace update_project {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = ProjectUpdate;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateProjectData;
  }

  /**
   * @description Soft delete a project. Sets the project status to 'deleted' instead of actually deleting the record. This allows for potential recovery and maintains referential integrity.
   * @tags dbtn/module:projects
   * @name delete_project
   * @summary Delete Project
   * @request DELETE:/routes/projects/{project_id}
   */
  export namespace delete_project {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = DeleteProjectData;
  }

  /**
   * @description Get AI context for a project. Returns the agent's memory and awareness of project state.
   * @tags dbtn/module:ai_context
   * @name get_context
   * @summary Get Context
   * @request GET:/routes/context/{project_id}
   */
  export namespace get_context {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = GetContextData;
  }

  /**
   * @description Update AI context for a project. If merge=True, merges with existing context. If merge=False, replaces entire context.
   * @tags dbtn/module:ai_context
   * @name update_context
   * @summary Update Context
   * @request POST:/routes/context/update
   */
  export namespace update_context {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = UpdateContextRequest;
    export type RequestHeaders = {};
    export type ResponseBody = UpdateContextData;
  }

  /**
   * @description Reset AI context for a project. Clears all stored memory and state.
   * @tags dbtn/module:ai_context
   * @name reset_context
   * @summary Reset Context
   * @request POST:/routes/context/reset/{project_id}
   */
  export namespace reset_context {
    export type RequestParams = {
      /** Project Id */
      projectId: string;
    };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ResetContextData;
  }
}
