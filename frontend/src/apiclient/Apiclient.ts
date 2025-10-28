import {
  AddChatMessageData,
  AddChatMessageError,
  AddChatMessageRequest,
  AddTaskCommentData,
  AddTaskCommentError,
  AddTaskCommentRequest,
  BuildPreviewData,
  BuildPreviewError,
  BuildPreviewParams,
  ChatStreamData,
  ChatStreamError,
  CheckHealthData,
  CheckRepositoryExistsData,
  CheckRepositoryExistsError,
  CheckRepositoryExistsParams,
  CreateFileData,
  CreateFileError,
  CreateFileRequest,
  CreateProjectBackendData,
  CreateProjectBackendError,
  CreateProjectBackendParams,
  CreateProjectData,
  CreateProjectError,
  CreateRepoRequest,
  CreateRepositoryData,
  CreateRepositoryError,
  CreateTaskData,
  CreateTaskError,
  CreateTaskRequest,
  DeleteErrorData,
  DeleteErrorError,
  DeleteErrorParams,
  DeleteFileData,
  DeleteFileError,
  DeleteFileParams,
  DeleteProjectData,
  DeleteProjectError,
  DeleteProjectParams,
  DeleteRepositoryData,
  DeleteRepositoryError,
  DeleteRepositoryParams,
  DeleteTaskData,
  DeleteTaskError,
  DeleteTaskParams,
  EnableIntegrationData,
  EnableIntegrationError,
  EnableIntegrationRequest,
  ErrorReport,
  GetBackendStatusData,
  GetBackendStatusError,
  GetBackendStatusParams,
  GetChatHistoryData,
  GetChatHistoryError,
  GetChatHistoryParams,
  GetContextData,
  GetContextError,
  GetContextParams,
  GetErrorsData,
  GetErrorsError,
  GetErrorsParams,
  GetFileTreeData,
  GetFileTreeError,
  GetFileTreeParams,
  GetInstalledPackagesData,
  GetInstalledPackagesError,
  GetInstalledPackagesParams,
  GetOpenErrorsData,
  GetOpenErrorsError,
  GetOpenErrorsParams,
  GetProjectData,
  GetProjectError,
  GetProjectErrorsData,
  GetProjectErrorsError,
  GetProjectErrorsParams,
  GetProjectFilesData,
  GetProjectParams,
  GetProjectStatsData,
  GetProjectStatsError,
  GetProjectStatsParams,
  GetRateLimitData,
  GetRepositoryData,
  GetRepositoryError,
  GetRepositoryParams,
  GetSqlSchemaData,
  GetSqlSchemaError,
  GetSqlSchemaParams,
  InitProjectData,
  InstallPackagesEndpointData,
  InstallPackagesEndpointError,
  InstallPackagesRequest,
  ListBackendsData,
  ListIntegrationsData,
  ListIntegrationsError,
  ListIntegrationsParams,
  ListProjectsData,
  ListReposRequest,
  ListRepositoriesData,
  ListRepositoriesError,
  ListTasksData,
  ListTasksError,
  ListTasksParams,
  ProjectCreate,
  ProjectUpdate,
  PushFileData,
  PushFileError,
  PushFileRequest,
  PushFilesData,
  PushFilesError,
  PushFilesRequest,
  ReadFilesData,
  ReadFilesError,
  ReadFilesParams,
  ReadLogsData,
  ReadLogsError,
  ReadLogsParams,
  ReportErrorData,
  ReportErrorError,
  RequestDataData,
  RequestDataError,
  RequestDataRequest,
  ResetContextData,
  ResetContextError,
  ResetContextParams,
  ResolveErrorData,
  ResolveErrorError,
  ResolveErrorParams,
  ResolveErrorRequest,
  RestartBackendData,
  RestartBackendError,
  RestartBackendParams,
  RunMigrationEndpointData,
  RunMigrationEndpointError,
  RunMigrationRequest,
  RunPythonScriptData,
  RunPythonScriptError,
  RunPythonScriptRequest,
  RunSQLQueryRequest,
  RunSqlQueryData,
  RunSqlQueryError,
  ScrapeApiDocsData,
  ScrapeApiDocsError,
  ScrapeRequest,
  SearchCodeData,
  SearchCodeError,
  SearchCodeRequest,
  ServePreviewAssetsData,
  ServePreviewAssetsError,
  ServePreviewAssetsParams,
  ServePreviewData,
  ServePreviewError,
  ServePreviewParams,
  SimplePreviewData,
  SimplePreviewError,
  SimplePreviewParams,
  StartBackendData,
  StartBackendError,
  StartBackendParams,
  StopAllBackendsData,
  StopBackendData,
  StopBackendError,
  StopBackendParams,
  TestEndpointData,
  TestEndpointError,
  TestEndpointRequest,
  TestErrorDetectionData,
  TestErrorDetectionError,
  TestErrorDetectionParams,
  TestErrorFeedbackLoopData,
  TestErrorFeedbackLoopError,
  TestErrorFeedbackLoopParams,
  TestPackageInstallationData,
  TestPackageInstallationError,
  TestPackageInstallationParams,
  TestPreviewData,
  TroubleshootData,
  TroubleshootError,
  TroubleshootRequest,
  UpdateContextData,
  UpdateContextError,
  UpdateContextRequest,
  UpdateFileData,
  UpdateFileError,
  UpdateFileRequest,
  UpdateProjectData,
  UpdateProjectError,
  UpdateProjectParams,
  UpdateTaskData,
  UpdateTaskError,
  UpdateTaskRequest,
  VisualizeDataData,
  VisualizeDataError,
  VisualizeDataRequest,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Apiclient<SecurityDataType = unknown> extends HttpClient<SecurityDataType> {
  /**
   * @description Check health of application. Returns 200 when OK, 500 when not.
   *
   * @name check_health
   * @summary Check Health
   * @request GET:/_healthz
   */
  check_health = (params: RequestParams = {}) =>
    this.request<CheckHealthData, any>({
      path: `/_healthz`,
      method: "GET",
      ...params,
    });

  /**
   * @description Start FastAPI backend for a project. Creates isolated backend process running in project workspace.
   *
   * @tags project-backend, dbtn/module:project_backend_manager
   * @name start_backend
   * @summary Start Backend
   * @request POST:/routes/project-backend/start/{project_id}
   */
  start_backend = ({ projectId, ...query }: StartBackendParams, params: RequestParams = {}) =>
    this.request<StartBackendData, StartBackendError>({
      path: `/routes/project-backend/start/${projectId}`,
      method: "POST",
      ...params,
    });

  /**
   * @description Stop backend process for project.
   *
   * @tags project-backend, dbtn/module:project_backend_manager
   * @name stop_backend
   * @summary Stop Backend
   * @request POST:/routes/project-backend/stop/{project_id}
   */
  stop_backend = ({ projectId, ...query }: StopBackendParams, params: RequestParams = {}) =>
    this.request<StopBackendData, StopBackendError>({
      path: `/routes/project-backend/stop/${projectId}`,
      method: "POST",
      ...params,
    });

  /**
   * @description Restart backend (useful after code changes).
   *
   * @tags project-backend, dbtn/module:project_backend_manager
   * @name restart_backend
   * @summary Restart Backend
   * @request POST:/routes/project-backend/restart/{project_id}
   */
  restart_backend = ({ projectId, ...query }: RestartBackendParams, params: RequestParams = {}) =>
    this.request<RestartBackendData, RestartBackendError>({
      path: `/routes/project-backend/restart/${projectId}`,
      method: "POST",
      ...params,
    });

  /**
   * @description Get status of backend for project.
   *
   * @tags project-backend, dbtn/module:project_backend_manager
   * @name get_backend_status
   * @summary Get Backend Status
   * @request GET:/routes/project-backend/status/{project_id}
   */
  get_backend_status = ({ projectId, ...query }: GetBackendStatusParams, params: RequestParams = {}) =>
    this.request<GetBackendStatusData, GetBackendStatusError>({
      path: `/routes/project-backend/status/${projectId}`,
      method: "GET",
      ...params,
    });

  /**
   * @description List all running backends.
   *
   * @tags project-backend, dbtn/module:project_backend_manager
   * @name list_backends
   * @summary List Backends
   * @request GET:/routes/project-backend/list
   */
  list_backends = (params: RequestParams = {}) =>
    this.request<ListBackendsData, any>({
      path: `/routes/project-backend/list`,
      method: "GET",
      ...params,
    });

  /**
   * @description Stop all running backends.
   *
   * @tags project-backend, dbtn/module:project_backend_manager
   * @name stop_all_backends
   * @summary Stop All Backends
   * @request POST:/routes/project-backend/stop-all
   */
  stop_all_backends = (params: RequestParams = {}) =>
    this.request<StopAllBackendsData, any>({
      path: `/routes/project-backend/stop-all`,
      method: "POST",
      ...params,
    });

  /**
   * @description Get all installed packages for a specific project (both Python and NPM) Returns package name, version, and package manager type from PROJECT workspace
   *
   * @tags dbtn/module:installed_packages
   * @name get_installed_packages
   * @summary Get Installed Packages
   * @request GET:/routes/installed-packages/{project_id}
   */
  get_installed_packages = ({ projectId, ...query }: GetInstalledPackagesParams, params: RequestParams = {}) =>
    this.request<GetInstalledPackagesData, GetInstalledPackagesError>({
      path: `/routes/installed-packages/${projectId}`,
      method: "GET",
      ...params,
    });

  /**
   * @description Get all errors for a project. Args: project_id: The project ID status: Filter by status ('open', 'resolved') - optional
   *
   * @tags dbtn/module:errors
   * @name get_errors
   * @summary Get Errors
   * @request GET:/routes/errors/{project_id}
   */
  get_errors = ({ projectId, ...query }: GetErrorsParams, params: RequestParams = {}) =>
    this.request<GetErrorsData, GetErrorsError>({
      path: `/routes/errors/${projectId}`,
      method: "GET",
      query: query,
      ...params,
    });

  /**
   * @description Report a new error. Args: error: Error details
   *
   * @tags dbtn/module:errors
   * @name report_error
   * @summary Report Error
   * @request POST:/routes/errors/report
   */
  report_error = (data: ErrorReport, params: RequestParams = {}) =>
    this.request<ReportErrorData, ReportErrorError>({
      path: `/routes/errors/report`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Mark an error as resolved. Args: error_id: The error ID request: Optional resolution notes
   *
   * @tags dbtn/module:errors
   * @name resolve_error
   * @summary Resolve Error
   * @request PUT:/routes/errors/{error_id}/resolve
   */
  resolve_error = ({ errorId, ...query }: ResolveErrorParams, data: ResolveErrorRequest, params: RequestParams = {}) =>
    this.request<ResolveErrorData, ResolveErrorError>({
      path: `/routes/errors/${errorId}/resolve`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete an error. Args: error_id: The error ID
   *
   * @tags dbtn/module:errors
   * @name delete_error
   * @summary Delete Error
   * @request DELETE:/routes/errors/{error_id}
   */
  delete_error = ({ errorId, ...query }: DeleteErrorParams, params: RequestParams = {}) =>
    this.request<DeleteErrorData, DeleteErrorError>({
      path: `/routes/errors/${errorId}`,
      method: "DELETE",
      ...params,
    });

  /**
   * @description Test endpoint to verify error detection is working. Creates a test project with intentional errors.
   *
   * @tags dbtn/module:errors
   * @name test_error_detection
   * @summary Test Error Detection
   * @request POST:/routes/errors/test/{project_id}
   */
  test_error_detection = ({ projectId, ...query }: TestErrorDetectionParams, params: RequestParams = {}) =>
    this.request<TestErrorDetectionData, TestErrorDetectionError>({
      path: `/routes/errors/test/${projectId}`,
      method: "POST",
      ...params,
    });

  /**
   * @description Scrape API documentation from a given URL This uses Scrapy to extract API endpoints, methods, and descriptions from API documentation pages.
   *
   * @tags dbtn/module:api_scraper
   * @name scrape_api_docs
   * @summary Scrape Api Docs
   * @request POST:/routes/scrape-api-docs
   */
  scrape_api_docs = (data: ScrapeRequest, params: RequestParams = {}) =>
    this.request<ScrapeApiDocsData, ScrapeApiDocsError>({
      path: `/routes/scrape-api-docs`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * No description
   *
   * @tags dbtn/module:package_manager
   * @name install_packages_endpoint
   * @summary Install Packages Endpoint
   * @request POST:/routes/install
   */
  install_packages_endpoint = (data: InstallPackagesRequest, params: RequestParams = {}) =>
    this.request<InstallPackagesEndpointData, InstallPackagesEndpointError>({
      path: `/routes/install`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Test package detection and installation in project venv. 1. Creates backend workspace if not exists 2. Generates test Python code with imports 3. Detects packages from code 4. Installs packages in project venv 5. Verifies installation
   *
   * @tags dbtn/module:preview
   * @name test_package_installation
   * @summary Test Package Installation
   * @request POST:/routes/preview/packages/test/{project_id}
   */
  test_package_installation = ({ projectId, ...query }: TestPackageInstallationParams, params: RequestParams = {}) =>
    this.request<TestPackageInstallationData, TestPackageInstallationError>({
      path: `/routes/preview/packages/test/${projectId}`,
      method: "POST",
      ...params,
    });

  /**
   * @description Super simple test endpoint - hardcoded HTML.
   *
   * @tags dbtn/module:preview
   * @name test_preview
   * @summary Test Preview
   * @request GET:/routes/preview/test
   */
  test_preview = (params: RequestParams = {}) =>
    this.request<TestPreviewData, any>({
      path: `/routes/preview/test`,
      method: "GET",
      ...params,
    });

  /**
   * @description Test endpoint: Create backend workspace for a project.
   *
   * @tags dbtn/module:preview
   * @name create_project_backend
   * @summary Create Project Backend
   * @request POST:/routes/preview/backend/create/{project_id}
   */
  create_project_backend = ({ projectId, ...query }: CreateProjectBackendParams, params: RequestParams = {}) =>
    this.request<CreateProjectBackendData, CreateProjectBackendError>({
      path: `/routes/preview/backend/create/${projectId}`,
      method: "POST",
      ...params,
    });

  /**
   * @description Simple hardcoded counter app - all inline, no external assets.
   *
   * @tags dbtn/module:preview
   * @name simple_preview
   * @summary Simple Preview
   * @request GET:/routes/preview/simple/{project_id}
   */
  simple_preview = ({ projectId, ...query }: SimplePreviewParams, params: RequestParams = {}) =>
    this.request<SimplePreviewData, SimplePreviewError>({
      path: `/routes/preview/simple/${projectId}`,
      method: "GET",
      ...params,
    });

  /**
   * @description Build preview from AI-generated code in database.
   *
   * @tags dbtn/module:preview
   * @name build_preview
   * @summary Build Preview
   * @request POST:/routes/preview/build/{project_id}
   */
  build_preview = ({ projectId, ...query }: BuildPreviewParams, params: RequestParams = {}) =>
    this.request<BuildPreviewData, BuildPreviewError>({
      path: `/routes/preview/build/${projectId}`,
      method: "POST",
      ...params,
    });

  /**
   * @description Serve the built preview HTML from cache.
   *
   * @tags dbtn/module:preview
   * @name serve_preview
   * @summary Serve Preview
   * @request GET:/routes/preview/{project_id}
   */
  serve_preview = ({ projectId, ...query }: ServePreviewParams, params: RequestParams = {}) =>
    this.request<ServePreviewData, ServePreviewError>({
      path: `/routes/preview/${projectId}`,
      method: "GET",
      ...params,
    });

  /**
   * @description Serve static assets (CSS, JS) for preview builds.
   *
   * @tags dbtn/module:preview
   * @name serve_preview_assets
   * @summary Serve Preview Assets
   * @request GET:/routes/preview/{project_id}/assets/{filepath}
   */
  serve_preview_assets = ({ projectId, filepath, ...query }: ServePreviewAssetsParams, params: RequestParams = {}) =>
    this.request<ServePreviewAssetsData, ServePreviewAssetsError>({
      path: `/routes/preview/${projectId}/assets/${filepath}`,
      method: "GET",
      ...params,
    });

  /**
   * @description Create a new task for a project. This is used by the AI to break down work into manageable pieces.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name create_task
   * @summary Create Task
   * @request POST:/routes/ai-tools/tasks/create
   */
  create_task = (data: CreateTaskRequest, params: RequestParams = {}) =>
    this.request<CreateTaskData, CreateTaskError>({
      path: `/routes/ai-tools/tasks/create`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Update an existing task. Used by AI to change task status, update descriptions, etc.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name update_task
   * @summary Update Task
   * @request POST:/routes/ai-tools/tasks/update
   */
  update_task = (data: UpdateTaskRequest, params: RequestParams = {}) =>
    this.request<UpdateTaskData, UpdateTaskError>({
      path: `/routes/ai-tools/tasks/update`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description List all tasks for a project. Used by AI to understand what work is planned/in progress.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name list_tasks
   * @summary List Tasks
   * @request GET:/routes/ai-tools/tasks/list/{project_id}
   */
  list_tasks = ({ projectId, ...query }: ListTasksParams, params: RequestParams = {}) =>
    this.request<ListTasksData, ListTasksError>({
      path: `/routes/ai-tools/tasks/list/${projectId}`,
      method: "GET",
      ...params,
    });

  /**
   * @description Delete a task. Used by AI to remove obsolete or duplicate tasks.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name delete_task
   * @summary Delete Task
   * @request DELETE:/routes/ai-tools/tasks/delete/{task_id}
   */
  delete_task = ({ taskId, ...query }: DeleteTaskParams, params: RequestParams = {}) =>
    this.request<DeleteTaskData, DeleteTaskError>({
      path: `/routes/ai-tools/tasks/delete/${taskId}`,
      method: "DELETE",
      ...params,
    });

  /**
   * @description Add a comment/note to a task. Used by AI to document progress, decisions, and learnings.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name add_task_comment
   * @summary Add Task Comment
   * @request POST:/routes/ai-tools/tasks/add-comment
   */
  add_task_comment = (data: AddTaskCommentRequest, params: RequestParams = {}) =>
    this.request<AddTaskCommentData, AddTaskCommentError>({
      path: `/routes/ai-tools/tasks/add-comment`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Get all errors for a project. Used by AI to check if there are build/runtime errors after code generation. Returns errors sorted by most recent first.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name get_project_errors
   * @summary Get Project Errors
   * @request GET:/routes/ai-tools/errors/{project_id}
   */
  get_project_errors = ({ projectId, ...query }: GetProjectErrorsParams, params: RequestParams = {}) =>
    this.request<GetProjectErrorsData, GetProjectErrorsError>({
      path: `/routes/ai-tools/errors/${projectId}`,
      method: "GET",
      ...params,
    });

  /**
   * @description Get only open/unresolved errors for a project. This is what AI should check after code generation to see if fixes are needed.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name get_open_errors
   * @summary Get Open Errors
   * @request GET:/routes/ai-tools/errors/{project_id}/open
   */
  get_open_errors = ({ projectId, ...query }: GetOpenErrorsParams, params: RequestParams = {}) =>
    this.request<GetOpenErrorsData, GetOpenErrorsError>({
      path: `/routes/ai-tools/errors/${projectId}/open`,
      method: "GET",
      ...params,
    });

  /**
   * @description Create a new file in the virtual file system. Used by AI to generate code files.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name create_file
   * @summary Create File
   * @request POST:/routes/ai-tools/files/create
   */
  create_file = (data: CreateFileRequest, params: RequestParams = {}) =>
    this.request<CreateFileData, CreateFileError>({
      path: `/routes/ai-tools/files/create`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Update an existing file. Used by AI to modify generated code.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name update_file
   * @summary Update File
   * @request PUT:/routes/ai-tools/files/update
   */
  update_file = (data: UpdateFileRequest, params: RequestParams = {}) =>
    this.request<UpdateFileData, UpdateFileError>({
      path: `/routes/ai-tools/files/update`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Read file(s) from the virtual file system. If file_path provided, returns that file. Otherwise returns all files.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name read_files
   * @summary Read Files
   * @request GET:/routes/ai-tools/files/read/{project_id}
   */
  read_files = ({ projectId, ...query }: ReadFilesParams, params: RequestParams = {}) =>
    this.request<ReadFilesData, ReadFilesError>({
      path: `/routes/ai-tools/files/read/${projectId}`,
      method: "GET",
      query: query,
      ...params,
    });

  /**
   * @description Search for code across all files in a project. Used by AI to find relevant code before making changes.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name search_code
   * @summary Search Code
   * @request POST:/routes/ai-tools/files/search
   */
  search_code = (data: SearchCodeRequest, params: RequestParams = {}) =>
    this.request<SearchCodeData, SearchCodeError>({
      path: `/routes/ai-tools/files/search`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Delete a file from the virtual file system. Used by AI to remove obsolete files.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name delete_file
   * @summary Delete File
   * @request DELETE:/routes/ai-tools/files/delete/{project_id}/{file_path}
   */
  delete_file = ({ projectId, filePath, ...query }: DeleteFileParams, params: RequestParams = {}) =>
    this.request<DeleteFileData, DeleteFileError>({
      path: `/routes/ai-tools/files/delete/${projectId}/${filePath}`,
      method: "DELETE",
      ...params,
    });

  /**
   * @description Test the complete error feedback loop: 1. Create broken code file 2. Detect errors (simulated) 3. Read errors via AI tools 4. Fix errors (simulated) 5. Verify resolution
   *
   * @tags dbtn/module:ai_agent_tools
   * @name test_error_feedback_loop
   * @summary Test Error Feedback Loop
   * @request POST:/routes/ai-tools/test/error-feedback-loop/{project_id}
   */
  test_error_feedback_loop = ({ projectId, ...query }: TestErrorFeedbackLoopParams, params: RequestParams = {}) =>
    this.request<TestErrorFeedbackLoopData, TestErrorFeedbackLoopError>({
      path: `/routes/ai-tools/test/error-feedback-loop/${projectId}`,
      method: "POST",
      ...params,
    });

  /**
   * @description Stream AI response to a user message with tool execution. This is the main endpoint for the chat interface. Uses intelligent planning pipeline for feature requests.
   *
   * @tags stream, dbtn/module:ai_agent_tools
   * @name chat_stream
   * @summary Chat Stream
   * @request POST:/routes/ai-tools/chat/stream
   */
  chat_stream = (data: AddChatMessageRequest, params: RequestParams = {}) =>
    this.requestStream<ChatStreamData, ChatStreamError>({
      path: `/routes/ai-tools/chat/stream`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Add a message to the chat history and get AI response (non-streaming). Kept for backwards compatibility. Use /chat/stream for better UX.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name add_chat_message
   * @summary Add Chat Message
   * @request POST:/routes/ai-tools/chat/add-message
   */
  add_chat_message = (data: AddChatMessageRequest, params: RequestParams = {}) =>
    this.request<AddChatMessageData, AddChatMessageError>({
      path: `/routes/ai-tools/chat/add-message`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Get chat message history for a project. Used by AI to load context.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name get_chat_history
   * @summary Get Chat History
   * @request GET:/routes/ai-tools/chat/history/{project_id}
   */
  get_chat_history = ({ projectId, ...query }: GetChatHistoryParams, params: RequestParams = {}) =>
    this.request<GetChatHistoryData, GetChatHistoryError>({
      path: `/routes/ai-tools/chat/history/${projectId}`,
      method: "GET",
      query: query,
      ...params,
    });

  /**
   * @description Initialize or get the default project. Creates a project if none exists, otherwise returns existing project. Used by frontend to get a valid project_id on mount.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name init_project
   * @summary Init Project
   * @request POST:/routes/ai-tools/project/init
   */
  init_project = (params: RequestParams = {}) =>
    this.request<InitProjectData, any>({
      path: `/routes/ai-tools/project/init`,
      method: "POST",
      ...params,
    });

  /**
   * @description Get the file tree structure for a project. Used by AI to understand project structure.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name get_file_tree
   * @summary Get File Tree
   * @request GET:/routes/ai-tools/project/file-tree/{project_id}
   */
  get_file_tree = ({ projectId, ...query }: GetFileTreeParams, params: RequestParams = {}) =>
    this.request<GetFileTreeData, GetFileTreeError>({
      path: `/routes/ai-tools/project/file-tree/${projectId}`,
      method: "GET",
      ...params,
    });

  /**
   * @description Get statistics about a project. Used by AI to understand project size and complexity.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name get_project_stats
   * @summary Get Project Stats
   * @request GET:/routes/ai-tools/project/stats/{project_id}
   */
  get_project_stats = ({ projectId, ...query }: GetProjectStatsParams, params: RequestParams = {}) =>
    this.request<GetProjectStatsData, GetProjectStatsError>({
      path: `/routes/ai-tools/project/stats/${projectId}`,
      method: "GET",
      ...params,
    });

  /**
   * @description Run a database migration. Used by AI to create/modify database schema.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name run_migration_endpoint
   * @summary Run Migration Endpoint
   * @request POST:/routes/ai-tools/database/run-migration
   */
  run_migration_endpoint = (data: RunMigrationRequest, params: RequestParams = {}) =>
    this.request<RunMigrationEndpointData, RunMigrationEndpointError>({
      path: `/routes/ai-tools/database/run-migration`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Execute a SQL query. Used by AI to query data for analysis or verification.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name run_sql_query
   * @summary Run Sql Query
   * @request POST:/routes/ai-tools/database/run-query
   */
  run_sql_query = (data: RunSQLQueryRequest, params: RequestParams = {}) =>
    this.request<RunSqlQueryData, RunSqlQueryError>({
      path: `/routes/ai-tools/database/run-query`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Get the database schema for tables related to a project. Used by AI to understand data structure.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name get_sql_schema
   * @summary Get Sql Schema
   * @request GET:/routes/ai-tools/database/schema/{project_id}
   */
  get_sql_schema = ({ projectId, ...query }: GetSqlSchemaParams, params: RequestParams = {}) =>
    this.request<GetSqlSchemaData, GetSqlSchemaError>({
      path: `/routes/ai-tools/database/schema/${projectId}`,
      method: "GET",
      ...params,
    });

  /**
   * @description Execute Python code in a sandboxed environment. Used by AI to test logic, experiment with APIs, etc.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name run_python_script
   * @summary Run Python Script
   * @request POST:/routes/ai-tools/development/run-python
   */
  run_python_script = (data: RunPythonScriptRequest, params: RequestParams = {}) =>
    this.request<RunPythonScriptData, RunPythonScriptError>({
      path: `/routes/ai-tools/development/run-python`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Read application logs for a project. Used by AI to debug issues.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name read_logs
   * @summary Read Logs
   * @request GET:/routes/ai-tools/development/logs/{project_id}
   */
  read_logs = ({ projectId, ...query }: ReadLogsParams, params: RequestParams = {}) =>
    this.request<ReadLogsData, ReadLogsError>({
      path: `/routes/ai-tools/development/logs/${projectId}`,
      method: "GET",
      query: query,
      ...params,
    });

  /**
   * @description Test an API endpoint. Used by AI to verify endpoints are working correctly.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name test_endpoint
   * @summary Test Endpoint
   * @request POST:/routes/ai-tools/development/test-endpoint
   */
  test_endpoint = (data: TestEndpointRequest, params: RequestParams = {}) =>
    this.request<TestEndpointData, TestEndpointError>({
      path: `/routes/ai-tools/development/test-endpoint`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Analyze an error and suggest solutions. Used by AI to debug issues.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name troubleshoot
   * @summary Troubleshoot
   * @request POST:/routes/ai-tools/development/troubleshoot
   */
  troubleshoot = (data: TroubleshootRequest, params: RequestParams = {}) =>
    this.request<TroubleshootData, TroubleshootError>({
      path: `/routes/ai-tools/development/troubleshoot`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Enable a third-party integration for a project. Used by AI to connect external services.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name enable_integration
   * @summary Enable Integration
   * @request POST:/routes/ai-tools/integrations/enable
   */
  enable_integration = (data: EnableIntegrationRequest, params: RequestParams = {}) =>
    this.request<EnableIntegrationData, EnableIntegrationError>({
      path: `/routes/ai-tools/integrations/enable`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description List all integrations for a project. Used by AI to see what services are connected.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name list_integrations
   * @summary List Integrations
   * @request GET:/routes/ai-tools/integrations/list/{project_id}
   */
  list_integrations = ({ projectId, ...query }: ListIntegrationsParams, params: RequestParams = {}) =>
    this.request<ListIntegrationsData, ListIntegrationsError>({
      path: `/routes/ai-tools/integrations/list/${projectId}`,
      method: "GET",
      ...params,
    });

  /**
   * @description Create a data visualization. Used by AI to display data insights to user.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name visualize_data
   * @summary Visualize Data
   * @request POST:/routes/ai-tools/data/visualize
   */
  visualize_data = (data: VisualizeDataRequest, params: RequestParams = {}) =>
    this.request<VisualizeDataData, VisualizeDataError>({
      path: `/routes/ai-tools/data/visualize`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Request data from user. Used by AI to ask user for files or information.
   *
   * @tags dbtn/module:ai_agent_tools
   * @name request_data
   * @summary Request Data
   * @request POST:/routes/ai-tools/data/request
   */
  request_data = (data: RequestDataRequest, params: RequestParams = {}) =>
    this.request<RequestDataData, RequestDataError>({
      path: `/routes/ai-tools/data/request`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Get GitHub API rate limit status Returns current rate limit information including: - Total limit - Remaining requests - Reset timestamp - Used requests
   *
   * @tags GitHub, dbtn/module:github
   * @name get_rate_limit
   * @summary Get Rate Limit
   * @request GET:/routes/github/rate-limit
   */
  get_rate_limit = (params: RequestParams = {}) =>
    this.request<GetRateLimitData, any>({
      path: `/routes/github/rate-limit`,
      method: "GET",
      ...params,
    });

  /**
   * @description List authenticated user's GitHub repositories Returns a list of repositories with details like: - Name, full name, description - URLs (html_url, clone_url, ssh_url) - Visibility (public/private) - Timestamps (created, updated, pushed)
   *
   * @tags GitHub, dbtn/module:github
   * @name list_repositories
   * @summary List Repositories
   * @request POST:/routes/github/repos/list
   */
  list_repositories = (data: ListReposRequest, params: RequestParams = {}) =>
    this.request<ListRepositoriesData, ListRepositoriesError>({
      path: `/routes/github/repos/list`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Get information about a specific repository Args: owner: Repository owner username repo: Repository name Returns detailed repository information
   *
   * @tags GitHub, dbtn/module:github
   * @name get_repository
   * @summary Get Repository
   * @request GET:/routes/github/repos/{owner}/{repo}
   */
  get_repository = ({ owner, repo, ...query }: GetRepositoryParams, params: RequestParams = {}) =>
    this.request<GetRepositoryData, GetRepositoryError>({
      path: `/routes/github/repos/${owner}/${repo}`,
      method: "GET",
      ...params,
    });

  /**
   * @description Delete a GitHub repository ⚠️ WARNING: This action is irreversible! Args: owner: Repository owner username repo: Repository name Returns success message
   *
   * @tags GitHub, dbtn/module:github
   * @name delete_repository
   * @summary Delete Repository
   * @request DELETE:/routes/github/repos/{owner}/{repo}
   */
  delete_repository = ({ owner, repo, ...query }: DeleteRepositoryParams, params: RequestParams = {}) =>
    this.request<DeleteRepositoryData, DeleteRepositoryError>({
      path: `/routes/github/repos/${owner}/${repo}`,
      method: "DELETE",
      ...params,
    });

  /**
   * @description Create a new GitHub repository for the authenticated user Creates a new repository with the specified settings. Returns the created repository details including clone URLs.
   *
   * @tags GitHub, dbtn/module:github
   * @name create_repository
   * @summary Create Repository
   * @request POST:/routes/github/repos/create
   */
  create_repository = (data: CreateRepoRequest, params: RequestParams = {}) =>
    this.request<CreateRepositoryData, CreateRepositoryError>({
      path: `/routes/github/repos/create`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Push a single file to a GitHub repository Creates or updates a file in the repository. File content will be base64-encoded automatically.
   *
   * @tags GitHub, dbtn/module:github
   * @name push_file
   * @summary Push File
   * @request POST:/routes/github/files/push
   */
  push_file = (data: PushFileRequest, params: RequestParams = {}) =>
    this.request<PushFileData, PushFileError>({
      path: `/routes/github/files/push`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Check if a repository exists Args: owner: Repository owner username repo: Repository name Returns dict with exists boolean and repository details if it exists
   *
   * @tags GitHub, dbtn/module:github
   * @name check_repository_exists
   * @summary Check Repository Exists
   * @request GET:/routes/github/repos/{owner}/{repo}/exists
   */
  check_repository_exists = ({ owner, repo, ...query }: CheckRepositoryExistsParams, params: RequestParams = {}) =>
    this.request<CheckRepositoryExistsData, CheckRepositoryExistsError>({
      path: `/routes/github/repos/${owner}/${repo}/exists`,
      method: "GET",
      ...params,
    });

  /**
   * @description Push multiple files to a GitHub repository using atomic commit All files are committed in a single atomic commit using the Git Data API. This is the proper Git workflow that allows pushing to existing repositories. Returns commit SHA and details.
   *
   * @tags GitHub, dbtn/module:github
   * @name push_files
   * @summary Push Files
   * @request POST:/routes/github/files/push-batch
   */
  push_files = (data: PushFilesRequest, params: RequestParams = {}) =>
    this.request<PushFilesData, PushFilesError>({
      path: `/routes/github/files/push-batch`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Collect all project files from the workspace Returns a list of files with their paths and content, ready to be pushed to GitHub
   *
   * @tags GitHub, dbtn/module:github
   * @name get_project_files
   * @summary Get Project Files
   * @request GET:/routes/github/project-files
   */
  get_project_files = (params: RequestParams = {}) =>
    this.request<GetProjectFilesData, any>({
      path: `/routes/github/project-files`,
      method: "GET",
      ...params,
    });

  /**
   * @description List all projects for the authenticated user. Returns a summary view with counts of features and integrations. Only active projects are returned (soft-deleted projects are excluded).
   *
   * @tags dbtn/module:projects
   * @name list_projects
   * @summary List Projects
   * @request GET:/routes/projects
   */
  list_projects = (params: RequestParams = {}) =>
    this.request<ListProjectsData, any>({
      path: `/routes/projects`,
      method: "GET",
      ...params,
    });

  /**
   * @description Create a new project with features, integrations, and design preferences. This endpoint creates: - Main project record - Associated features - Associated integrations - Design preferences All operations are wrapped in a transaction for data consistency.
   *
   * @tags dbtn/module:projects
   * @name create_project
   * @summary Create Project
   * @request POST:/routes/projects
   */
  create_project = (data: ProjectCreate, params: RequestParams = {}) =>
    this.request<CreateProjectData, CreateProjectError>({
      path: `/routes/projects`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Get full project details including all related entities. Returns: - Project info - All features - All integrations - Design preferences Also updates the last_accessed_at timestamp.
   *
   * @tags dbtn/module:projects
   * @name get_project
   * @summary Get Project
   * @request GET:/routes/projects/{project_id}
   */
  get_project = ({ projectId, ...query }: GetProjectParams, params: RequestParams = {}) =>
    this.request<GetProjectData, GetProjectError>({
      path: `/routes/projects/${projectId}`,
      method: "GET",
      ...params,
    });

  /**
   * @description Update a project and its related entities. Updates: - Project title/description if provided - Features (replaces all features if provided) - Integrations (upserts integrations if provided) - Design (upserts design if provided) All operations are wrapped in a transaction.
   *
   * @tags dbtn/module:projects
   * @name update_project
   * @summary Update Project
   * @request PUT:/routes/projects/{project_id}
   */
  update_project = ({ projectId, ...query }: UpdateProjectParams, data: ProjectUpdate, params: RequestParams = {}) =>
    this.request<UpdateProjectData, UpdateProjectError>({
      path: `/routes/projects/${projectId}`,
      method: "PUT",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Soft delete a project. Sets the project status to 'deleted' instead of actually deleting the record. This allows for potential recovery and maintains referential integrity.
   *
   * @tags dbtn/module:projects
   * @name delete_project
   * @summary Delete Project
   * @request DELETE:/routes/projects/{project_id}
   */
  delete_project = ({ projectId, ...query }: DeleteProjectParams, params: RequestParams = {}) =>
    this.request<DeleteProjectData, DeleteProjectError>({
      path: `/routes/projects/${projectId}`,
      method: "DELETE",
      ...params,
    });

  /**
   * @description Get AI context for a project. Returns the agent's memory and awareness of project state.
   *
   * @tags dbtn/module:ai_context
   * @name get_context
   * @summary Get Context
   * @request GET:/routes/context/{project_id}
   */
  get_context = ({ projectId, ...query }: GetContextParams, params: RequestParams = {}) =>
    this.request<GetContextData, GetContextError>({
      path: `/routes/context/${projectId}`,
      method: "GET",
      ...params,
    });

  /**
   * @description Update AI context for a project. If merge=True, merges with existing context. If merge=False, replaces entire context.
   *
   * @tags dbtn/module:ai_context
   * @name update_context
   * @summary Update Context
   * @request POST:/routes/context/update
   */
  update_context = (data: UpdateContextRequest, params: RequestParams = {}) =>
    this.request<UpdateContextData, UpdateContextError>({
      path: `/routes/context/update`,
      method: "POST",
      body: data,
      type: ContentType.Json,
      ...params,
    });

  /**
   * @description Reset AI context for a project. Clears all stored memory and state.
   *
   * @tags dbtn/module:ai_context
   * @name reset_context
   * @summary Reset Context
   * @request POST:/routes/context/reset/{project_id}
   */
  reset_context = ({ projectId, ...query }: ResetContextParams, params: RequestParams = {}) =>
    this.request<ResetContextData, ResetContextError>({
      path: `/routes/context/reset/${projectId}`,
      method: "POST",
      ...params,
    });
}
