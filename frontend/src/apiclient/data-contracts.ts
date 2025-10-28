/**
 * AddChatMessageRequest
 * Request to add chat message
 */
export interface AddChatMessageRequest {
  /** Project Id */
  project_id: string;
  /**
   * Content
   * @minLength 1
   */
  content: string;
  /**
   * Chat message role values
   * @default "user"
   */
  role?: ChatRole;
  /** Metadata */
  metadata?: Record<string, any> | null;
}

/**
 * AddTaskCommentRequest
 * Request to add a comment to a task
 */
export interface AddTaskCommentRequest {
  /**
   * Task Id
   * Task ID
   */
  task_id: string;
  /**
   * Comment
   * @minLength 1
   */
  comment: string;
  /**
   * Comment Type
   * Type: note, key-decision, learning, blocker
   * @default "note"
   */
  comment_type?: string;
}

/**
 * ApiEndpoint
 * Model for a scraped API endpoint
 */
export interface ApiEndpoint {
  /** Method */
  method: string;
  /** Path */
  path: string;
  /** Description */
  description?: string | null;
  /**
   * Parameters
   * @default []
   */
  parameters?: string[];
}

/** BackendStatus */
export interface BackendStatus {
  /** Project Id */
  project_id: string;
  /** Status */
  status: string;
  /** Pid */
  pid?: number | null;
  /** Port */
  port?: number | null;
  /** Started At */
  started_at?: number | null;
  /** Uptime Seconds */
  uptime_seconds?: number | null;
  /** Workspace Path */
  workspace_path?: string | null;
  /** Health */
  health?: string | null;
}

/**
 * ChatRole
 * Chat message role values
 */
export enum ChatRole {
  User = "user",
  Assistant = "assistant",
  System = "system",
}

/**
 * ContextData
 * Structure for AI context data.
 */
export interface ContextData {
  /** Current Phase */
  current_phase?: string | null;
  /**
   * Files Generated
   * @default []
   */
  files_generated?: string[];
  /**
   * Tasks Completed
   * @default []
   */
  tasks_completed?: string[];
  /** Current Task */
  current_task?: string | null;
  /**
   * Recent Errors
   * @default []
   */
  recent_errors?: Record<string, any>[];
  /**
   * Ai Memory
   * @default {}
   */
  ai_memory?: Record<string, any>;
}

/**
 * ContextResponse
 * Response containing AI context.
 */
export interface ContextResponse {
  /** Project Id */
  project_id: string;
  /** Session Id */
  session_id?: string | null;
  /** Structure for AI context data. */
  context_data: ContextData;
  /**
   * Updated At
   * @format date-time
   */
  updated_at: string;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
}

/**
 * CreateFileRequest
 * Request to create a file
 */
export interface CreateFileRequest {
  /** Project Id */
  project_id: string;
  /**
   * File Path
   * @minLength 1
   */
  file_path: string;
  /** File Content */
  file_content: string;
  /** Language */
  language?: string | null;
  /** File Type */
  file_type?: string | null;
}

/**
 * CreateFileResponse
 * Response for creating a file
 */
export interface CreateFileResponse {
  /** Success */
  success: boolean;
  /** Message */
  message: string;
  /** File Id */
  file_id: string;
  /** File Path */
  file_path: string;
}

/**
 * CreateRepoRequest
 * Request to create a new GitHub repository
 */
export interface CreateRepoRequest {
  /**
   * Name
   * Repository name
   */
  name: string;
  /**
   * Description
   * Repository description
   */
  description?: string | null;
  /**
   * Private
   * Make repository private
   * @default false
   */
  private?: boolean;
  /**
   * Auto Init
   * Initialize with README
   * @default true
   */
  auto_init?: boolean;
  /**
   * Gitignore Template
   * Gitignore template (e.g., 'Python', 'Node')
   */
  gitignore_template?: string | null;
}

/**
 * CreateTaskRequest
 * Request to create a task
 */
export interface CreateTaskRequest {
  /**
   * Project Id
   * Project ID
   */
  project_id: string;
  /**
   * Title
   * @minLength 1
   * @maxLength 200
   */
  title: string;
  /** Description */
  description?: string | null;
  /**
   * Task priority values
   * @default "medium"
   */
  priority?: TaskPriority;
  /**
   * Order Index
   * @min 0
   * @default 0
   */
  order_index?: number;
}

/**
 * DesignCreate
 * Design preferences for project.
 */
export interface DesignCreate {
  /**
   * Theme
   * @default "light"
   */
  theme?: string | null;
  /**
   * Color Scheme
   * @default "blue"
   */
  color_scheme?: string | null;
  /** Design Preferences */
  design_preferences?: Record<string, any> | null;
}

/**
 * DesignResponse
 * Design response model.
 */
export interface DesignResponse {
  /** Id */
  id: string;
  /** Theme */
  theme: string | null;
  /** Color Scheme */
  color_scheme: string | null;
  /** Design Preferences */
  design_preferences: Record<string, any> | null;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
}

/**
 * EnableIntegrationRequest
 * Request to enable an integration
 */
export interface EnableIntegrationRequest {
  /** Project Id */
  project_id: string;
  /**
   * Integration Name
   * @minLength 1
   */
  integration_name: string;
  /** Config */
  config?: Record<string, any> | null;
}

/**
 * Error
 * Error from database.
 */
export interface Error {
  /** Id */
  id: string;
  /** Project Id */
  project_id: string;
  /** Error Type */
  error_type: string;
  /** Message */
  message: string;
  /** Stack Trace */
  stack_trace?: string | null;
  /** File Path */
  file_path?: string | null;
  /** Line Number */
  line_number?: number | null;
  /** Code Snippet */
  code_snippet?: string | null;
  /** Context */
  context?: Record<string, any> | null;
  /** Status */
  status: string;
  /** Resolved At */
  resolved_at?: string | null;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at: string;
}

/**
 * ErrorReport
 * Error report from frontend or build process.
 */
export interface ErrorReport {
  /** Project Id */
  project_id: string;
  /** Error Type */
  error_type: string;
  /** Message */
  message: string;
  /** Stack Trace */
  stack_trace?: string | null;
  /** File Path */
  file_path?: string | null;
  /** Line Number */
  line_number?: number | null;
  /** Code Snippet */
  code_snippet?: string | null;
  /** Context */
  context?: Record<string, any> | null;
}

/**
 * ErrorsResponse
 * List of errors.
 */
export interface ErrorsResponse {
  /** Errors */
  errors: Error[];
  /** Total */
  total: number;
}

/**
 * FeatureCreate
 * Feature definition for project creation.
 */
export interface FeatureCreate {
  /** Text */
  text: string;
  /**
   * Order Index
   * @default 0
   */
  order_index?: number;
}

/**
 * FeatureResponse
 * Feature response model.
 */
export interface FeatureResponse {
  /** Id */
  id: string;
  /** Text */
  text: string;
  /** Order Index */
  order_index: number;
  /** Status */
  status: string | null;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
}

/**
 * GitHubCommitResponse
 * Response from file commit operation
 */
export interface GitHubCommitResponse {
  /** Sha */
  sha: string;
  /** Url */
  url: string;
  /** Html Url */
  html_url: string;
}

/**
 * GitHubRepo
 * GitHub repository model
 */
export interface GitHubRepo {
  /** Id */
  id: number;
  /** Name */
  name: string;
  /** Full Name */
  full_name: string;
  /** Description */
  description?: string | null;
  /** Html Url */
  html_url: string;
  /** Clone Url */
  clone_url: string;
  /** Ssh Url */
  ssh_url: string;
  /** Default Branch */
  default_branch: string;
  /** Private */
  private: boolean;
  /** Created At */
  created_at: string;
  /** Updated At */
  updated_at: string;
  /** Pushed At */
  pushed_at?: string | null;
}

/** HTTPValidationError */
export interface HTTPValidationError {
  /** Detail */
  detail?: ValidationError[];
}

/** HealthResponse */
export interface HealthResponse {
  /** Status */
  status: string;
}

/** InstallPackagesRequest */
export interface InstallPackagesRequest {
  /** Packages */
  packages: string[];
  /** Package Manager */
  package_manager: string;
}

/** InstallPackagesResponse */
export interface InstallPackagesResponse {
  /** Success */
  success: boolean;
  /** Installed Packages */
  installed_packages: string[];
  /** Failed Packages */
  failed_packages: string[];
  /** Message */
  message: string;
  /** Details */
  details?: string | null;
}

/**
 * InstalledPackage
 * Model for an installed package
 */
export interface InstalledPackage {
  /** Name */
  name: string;
  /** Version */
  version: string;
  /** Package Manager */
  package_manager: string;
  /** Description */
  description?: string | null;
}

/**
 * InstalledPackagesResponse
 * Response model for installed packages
 */
export interface InstalledPackagesResponse {
  /** Python Packages */
  python_packages: InstalledPackage[];
  /** Npm Packages */
  npm_packages: InstalledPackage[];
  /** Total Count */
  total_count: number;
}

/**
 * IntegrationCreate
 * Integration definition for project creation.
 */
export interface IntegrationCreate {
  /** Name */
  name: string;
  /**
   * Enabled
   * @default true
   */
  enabled?: boolean;
  /** Config */
  config?: Record<string, any> | null;
}

/**
 * IntegrationResponse
 * Integration response model.
 */
export interface IntegrationResponse {
  /** Id */
  id: string;
  /** Name */
  name: string;
  /** Enabled */
  enabled: boolean;
  /** Config */
  config: Record<string, any> | null;
  /** Enabled At */
  enabled_at: string | null;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
}

/**
 * ListReposRequest
 * Request parameters for listing repositories
 */
export interface ListReposRequest {
  /**
   * Visibility
   * Filter by visibility (all, public, private)
   * @default "all"
   */
  visibility?: string;
  /**
   * Sort
   * Sort by (created, updated, pushed, full_name)
   * @default "updated"
   */
  sort?: string;
  /**
   * Per Page
   * Results per page (max 100)
   * @default 30
   */
  per_page?: number;
  /**
   * Page
   * Page number
   * @default 1
   */
  page?: number;
}

/**
 * ProjectCreate
 * Request model for creating a new project.
 */
export interface ProjectCreate {
  /** Title */
  title: string;
  /** Description */
  description?: string | null;
  /**
   * Features
   * @default []
   */
  features?: FeatureCreate[];
  /**
   * Integrations
   * @default []
   */
  integrations?: IntegrationCreate[];
  design?: DesignCreate | null;
}

/**
 * ProjectFile
 * Project file with path and content
 */
export interface ProjectFile {
  /** Path */
  path: string;
  /** Content */
  content: string;
}

/**
 * ProjectListItem
 * Summary project info for list view.
 */
export interface ProjectListItem {
  /** Id */
  id: string;
  /** Title */
  title: string;
  /** Description */
  description: string | null;
  /** Status */
  status: string;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at: string;
  /** Feature Count */
  feature_count: number;
  /** Integration Count */
  integration_count: number;
}

/**
 * ProjectResponse
 * Full project response with all related data.
 */
export interface ProjectResponse {
  /** Id */
  id: string;
  /** User Id */
  user_id: string;
  /** Title */
  title: string;
  /** Description */
  description: string | null;
  /** Status */
  status: string;
  /**
   * Created At
   * @format date-time
   */
  created_at: string;
  /**
   * Updated At
   * @format date-time
   */
  updated_at: string;
  /** Last Accessed At */
  last_accessed_at: string | null;
  /** Features */
  features: FeatureResponse[];
  /** Integrations */
  integrations: IntegrationResponse[];
  design: DesignResponse | null;
}

/**
 * ProjectUpdate
 * Request model for updating a project.
 */
export interface ProjectUpdate {
  /** Title */
  title?: string | null;
  /** Description */
  description?: string | null;
  /** Features */
  features?: FeatureCreate[] | null;
  /** Integrations */
  integrations?: IntegrationCreate[] | null;
  design?: DesignCreate | null;
}

/**
 * PushFileRequest
 * Request to push a single file
 */
export interface PushFileRequest {
  /**
   * Owner
   * Repository owner
   */
  owner: string;
  /**
   * Repo
   * Repository name
   */
  repo: string;
  /**
   * Path
   * File path in repo (e.g., 'src/main.py')
   */
  path: string;
  /**
   * Content
   * File content
   */
  content: string;
  /**
   * Message
   * Commit message
   */
  message: string;
  /**
   * Branch
   * Branch name
   * @default "main"
   */
  branch?: string;
}

/**
 * PushFilesRequest
 * Request to push multiple files
 */
export interface PushFilesRequest {
  /**
   * Owner
   * Repository owner
   */
  owner: string;
  /**
   * Repo
   * Repository name
   */
  repo: string;
  /**
   * Files
   * List of files with 'path' and 'content' keys
   */
  files: Record<string, any>[];
  /**
   * Message
   * Commit message
   * @default "Update project files"
   */
  message?: string;
  /**
   * Branch
   * Branch name
   * @default "main"
   */
  branch?: string;
}

/**
 * RateLimitResponse
 * GitHub API rate limit information
 */
export interface RateLimitResponse {
  /** Limit */
  limit: number;
  /** Remaining */
  remaining: number;
  /** Reset */
  reset: number;
  /** Used */
  used: number;
}

/**
 * RequestDataRequest
 * Request data from user
 */
export interface RequestDataRequest {
  /** Project Id */
  project_id: string;
  /** Message */
  message: string;
  /**
   * Data Type
   * @default "file"
   * @pattern ^(file|text|json)$
   */
  data_type?: string;
}

/**
 * ResolveErrorRequest
 * Request to mark error as resolved.
 */
export interface ResolveErrorRequest {
  /** Resolution Notes */
  resolution_notes?: string | null;
}

/**
 * RunMigrationRequest
 * Request to run a database migration
 */
export interface RunMigrationRequest {
  /** Project Id */
  project_id: string;
  /**
   * Migration Name
   * @minLength 1
   */
  migration_name: string;
  /**
   * Sql
   * @minLength 1
   */
  sql: string;
}

/**
 * RunPythonScriptRequest
 * Request to run Python script
 */
export interface RunPythonScriptRequest {
  /** Project Id */
  project_id: string;
  /**
   * Code
   * @minLength 1
   */
  code: string;
  /**
   * Timeout
   * @min 1
   * @max 300
   * @default 30
   */
  timeout?: number;
}

/**
 * RunSQLQueryRequest
 * Request to run SQL query
 */
export interface RunSQLQueryRequest {
  /** Project Id */
  project_id: string;
  /**
   * Query
   * @minLength 1
   */
  query: string;
  /** Params */
  params?: any[] | null;
}

/**
 * ScrapeRequest
 * Request to scrape API documentation
 */
export interface ScrapeRequest {
  /**
   * Url
   * @format uri
   * @minLength 1
   * @maxLength 2083
   */
  url: string;
}

/**
 * ScrapeResponse
 * Response with scraped API endpoints
 */
export interface ScrapeResponse {
  /** Url */
  url: string;
  /** Endpoints */
  endpoints: ApiEndpoint[];
  /** Total Count */
  total_count: number;
  /** Page Title */
  page_title?: string | null;
}

/**
 * SearchCodeRequest
 * Request to search code
 */
export interface SearchCodeRequest {
  /** Project Id */
  project_id: string;
  /**
   * Keywords
   * @minItems 1
   */
  keywords: string[];
}

/**
 * TaskPriority
 * Task priority values
 */
export enum TaskPriority {
  Low = "low",
  Medium = "medium",
  High = "high",
  Urgent = "urgent",
}

/**
 * TaskStatus
 * Task status values
 */
export enum TaskStatus {
  Todo = "todo",
  Inprogress = "inprogress",
  Done = "done",
  Blocked = "blocked",
}

/**
 * TestEndpointRequest
 * Request to test an endpoint
 */
export interface TestEndpointRequest {
  /** Project Id */
  project_id: string;
  /** Endpoint Path */
  endpoint_path: string;
  /**
   * Method
   * @default "GET"
   * @pattern ^(GET|POST|PUT|DELETE|PATCH)$
   */
  method?: string;
  /** Body */
  body?: Record<string, any> | null;
  /** Query Params */
  query_params?: Record<string, any> | null;
}

/**
 * ToolResponse
 * Generic tool response
 */
export interface ToolResponse {
  /** Success */
  success: boolean;
  /** Message */
  message: string;
  /** Data */
  data?: Record<string, any> | null;
}

/**
 * TroubleshootRequest
 * Request to troubleshoot an error
 */
export interface TroubleshootRequest {
  /** Project Id */
  project_id: string;
  /** Error Message */
  error_message: string;
  /** Error Type */
  error_type?: string | null;
  /** Stack Trace */
  stack_trace?: string | null;
  /** Context */
  context?: Record<string, any> | null;
}

/**
 * UpdateContextRequest
 * Request to update AI context.
 */
export interface UpdateContextRequest {
  /** Project Id */
  project_id: string;
  /** Session Id */
  session_id?: string | null;
  /** Structure for AI context data. */
  context_data: ContextData;
  /**
   * Merge
   * @default true
   */
  merge?: boolean;
}

/**
 * UpdateFileRequest
 * Request to update a file
 */
export interface UpdateFileRequest {
  /** Project Id */
  project_id: string;
  /** File Path */
  file_path: string;
  /** File Content */
  file_content: string;
  /** Language */
  language?: string | null;
}

/**
 * UpdateTaskRequest
 * Request to update a task
 */
export interface UpdateTaskRequest {
  /**
   * Task Id
   * Task ID
   */
  task_id: string;
  /** Title */
  title?: string | null;
  /** Description */
  description?: string | null;
  status?: TaskStatus | null;
  priority?: TaskPriority | null;
  /** Order Index */
  order_index?: number | null;
}

/** ValidationError */
export interface ValidationError {
  /** Location */
  loc: (string | number)[];
  /** Message */
  msg: string;
  /** Error Type */
  type: string;
}

/**
 * VisualizeDataRequest
 * Request to visualize data
 */
export interface VisualizeDataRequest {
  /** Project Id */
  project_id: string;
  /** Chart Type */
  chart_type: string;
  /** Data */
  data: Record<string, any>[];
  /** Data Keys */
  data_keys: Record<string, string>;
  /** Title */
  title?: string | null;
  /** Options */
  options?: Record<string, any> | null;
}

export type CheckHealthData = HealthResponse;

export interface StartBackendParams {
  /** Project Id */
  projectId: string;
}

/** Response Start Backend */
export type StartBackendData = Record<string, any>;

export type StartBackendError = HTTPValidationError;

export interface StopBackendParams {
  /** Project Id */
  projectId: string;
}

/** Response Stop Backend */
export type StopBackendData = Record<string, any>;

export type StopBackendError = HTTPValidationError;

export interface RestartBackendParams {
  /** Project Id */
  projectId: string;
}

/** Response Restart Backend */
export type RestartBackendData = Record<string, any>;

export type RestartBackendError = HTTPValidationError;

export interface GetBackendStatusParams {
  /** Project Id */
  projectId: string;
}

export type GetBackendStatusData = BackendStatus;

export type GetBackendStatusError = HTTPValidationError;

/** Response List Backends */
export type ListBackendsData = Record<string, any>;

/** Response Stop All Backends */
export type StopAllBackendsData = Record<string, any>;

export interface GetInstalledPackagesParams {
  /** Project Id */
  projectId: string;
}

export type GetInstalledPackagesData = InstalledPackagesResponse;

export type GetInstalledPackagesError = HTTPValidationError;

export interface GetErrorsParams {
  /** Status */
  status?: string | null;
  /** Project Id */
  projectId: string;
}

export type GetErrorsData = ErrorsResponse;

export type GetErrorsError = HTTPValidationError;

/** Response Report Error */
export type ReportErrorData = Record<string, any>;

export type ReportErrorError = HTTPValidationError;

export interface ResolveErrorParams {
  /** Error Id */
  errorId: string;
}

/** Response Resolve Error */
export type ResolveErrorData = Record<string, any>;

export type ResolveErrorError = HTTPValidationError;

export interface DeleteErrorParams {
  /** Error Id */
  errorId: string;
}

/** Response Delete Error */
export type DeleteErrorData = Record<string, any>;

export type DeleteErrorError = HTTPValidationError;

export interface TestErrorDetectionParams {
  /** Project Id */
  projectId: string;
}

export type TestErrorDetectionData = any;

export type TestErrorDetectionError = HTTPValidationError;

export type ScrapeApiDocsData = ScrapeResponse;

export type ScrapeApiDocsError = HTTPValidationError;

export type InstallPackagesEndpointData = InstallPackagesResponse;

export type InstallPackagesEndpointError = HTTPValidationError;

export interface TestPackageInstallationParams {
  /** Project Id */
  projectId: string;
}

export type TestPackageInstallationData = any;

export type TestPackageInstallationError = HTTPValidationError;

export type TestPreviewData = any;

export interface CreateProjectBackendParams {
  /** Project Id */
  projectId: string;
}

export type CreateProjectBackendData = any;

export type CreateProjectBackendError = HTTPValidationError;

export interface SimplePreviewParams {
  /** Project Id */
  projectId: string;
}

export type SimplePreviewData = any;

export type SimplePreviewError = HTTPValidationError;

export interface BuildPreviewParams {
  /** Project Id */
  projectId: string;
}

export type BuildPreviewData = any;

export type BuildPreviewError = HTTPValidationError;

export interface ServePreviewParams {
  /** Project Id */
  projectId: string;
}

export type ServePreviewData = any;

export type ServePreviewError = HTTPValidationError;

export interface ServePreviewAssetsParams {
  /** Project Id */
  projectId: string;
  /** Filepath */
  filepath: string;
}

export type ServePreviewAssetsData = any;

export type ServePreviewAssetsError = HTTPValidationError;

export type CreateTaskData = ToolResponse;

export type CreateTaskError = HTTPValidationError;

export type UpdateTaskData = ToolResponse;

export type UpdateTaskError = HTTPValidationError;

export interface ListTasksParams {
  /** Project Id */
  projectId: string;
}

/** Response List Tasks */
export type ListTasksData = Record<string, any>;

export type ListTasksError = HTTPValidationError;

export interface DeleteTaskParams {
  /** Task Id */
  taskId: string;
}

export type DeleteTaskData = ToolResponse;

export type DeleteTaskError = HTTPValidationError;

export type AddTaskCommentData = ToolResponse;

export type AddTaskCommentError = HTTPValidationError;

export interface GetProjectErrorsParams {
  /** Project Id */
  projectId: string;
}

/** Response Get Project Errors */
export type GetProjectErrorsData = Record<string, any>;

export type GetProjectErrorsError = HTTPValidationError;

export interface GetOpenErrorsParams {
  /** Project Id */
  projectId: string;
}

/** Response Get Open Errors */
export type GetOpenErrorsData = Record<string, any>;

export type GetOpenErrorsError = HTTPValidationError;

export type CreateFileData = CreateFileResponse;

export type CreateFileError = HTTPValidationError;

export type UpdateFileData = ToolResponse;

export type UpdateFileError = HTTPValidationError;

export interface ReadFilesParams {
  /** File Path */
  file_path?: string | null;
  /** Project Id */
  projectId: string;
}

/** Response Read Files */
export type ReadFilesData = Record<string, any>;

export type ReadFilesError = HTTPValidationError;

/** Response Search Code */
export type SearchCodeData = Record<string, any>;

export type SearchCodeError = HTTPValidationError;

export interface DeleteFileParams {
  /** Project Id */
  projectId: string;
  /** File Path */
  filePath: string;
}

export type DeleteFileData = ToolResponse;

export type DeleteFileError = HTTPValidationError;

export interface TestErrorFeedbackLoopParams {
  /** Project Id */
  projectId: string;
}

/** Response Test Error Feedback Loop */
export type TestErrorFeedbackLoopData = Record<string, any>;

export type TestErrorFeedbackLoopError = HTTPValidationError;

export type ChatStreamData = any;

export type ChatStreamError = HTTPValidationError;

export type AddChatMessageData = ToolResponse;

export type AddChatMessageError = HTTPValidationError;

export interface GetChatHistoryParams {
  /**
   * Limit
   * @default 50
   */
  limit?: number;
  /** Project Id */
  projectId: string;
}

/** Response Get Chat History */
export type GetChatHistoryData = Record<string, any>;

export type GetChatHistoryError = HTTPValidationError;

/** Response Init Project */
export type InitProjectData = Record<string, any>;

export interface GetFileTreeParams {
  /** Project Id */
  projectId: string;
}

/** Response Get File Tree */
export type GetFileTreeData = Record<string, any>;

export type GetFileTreeError = HTTPValidationError;

export interface GetProjectStatsParams {
  /** Project Id */
  projectId: string;
}

/** Response Get Project Stats */
export type GetProjectStatsData = Record<string, any>;

export type GetProjectStatsError = HTTPValidationError;

export type RunMigrationEndpointData = ToolResponse;

export type RunMigrationEndpointError = HTTPValidationError;

/** Response Run Sql Query */
export type RunSqlQueryData = Record<string, any>;

export type RunSqlQueryError = HTTPValidationError;

export interface GetSqlSchemaParams {
  /** Project Id */
  projectId: string;
}

/** Response Get Sql Schema */
export type GetSqlSchemaData = Record<string, any>;

export type GetSqlSchemaError = HTTPValidationError;

/** Response Run Python Script */
export type RunPythonScriptData = Record<string, any>;

export type RunPythonScriptError = HTTPValidationError;

export interface ReadLogsParams {
  /**
   * Limit
   * @default 100
   */
  limit?: number;
  /** Level */
  level?: string | null;
  /** Project Id */
  projectId: string;
}

/** Response Read Logs */
export type ReadLogsData = Record<string, any>;

export type ReadLogsError = HTTPValidationError;

/** Response Test Endpoint */
export type TestEndpointData = Record<string, any>;

export type TestEndpointError = HTTPValidationError;

/** Response Troubleshoot */
export type TroubleshootData = Record<string, any>;

export type TroubleshootError = HTTPValidationError;

export type EnableIntegrationData = ToolResponse;

export type EnableIntegrationError = HTTPValidationError;

export interface ListIntegrationsParams {
  /** Project Id */
  projectId: string;
}

/** Response List Integrations */
export type ListIntegrationsData = Record<string, any>;

export type ListIntegrationsError = HTTPValidationError;

/** Response Visualize Data */
export type VisualizeDataData = Record<string, any>;

export type VisualizeDataError = HTTPValidationError;

export type RequestDataData = ToolResponse;

export type RequestDataError = HTTPValidationError;

export type GetRateLimitData = RateLimitResponse;

/** Response List Repositories */
export type ListRepositoriesData = GitHubRepo[];

export type ListRepositoriesError = HTTPValidationError;

export interface GetRepositoryParams {
  /** Owner */
  owner: string;
  /** Repo */
  repo: string;
}

export type GetRepositoryData = GitHubRepo;

export type GetRepositoryError = HTTPValidationError;

export interface DeleteRepositoryParams {
  /** Owner */
  owner: string;
  /** Repo */
  repo: string;
}

/** Response Delete Repository */
export type DeleteRepositoryData = Record<string, any>;

export type DeleteRepositoryError = HTTPValidationError;

export type CreateRepositoryData = GitHubRepo;

export type CreateRepositoryError = HTTPValidationError;

export type PushFileData = GitHubCommitResponse;

export type PushFileError = HTTPValidationError;

export interface CheckRepositoryExistsParams {
  /** Owner */
  owner: string;
  /** Repo */
  repo: string;
}

/** Response Check Repository Exists */
export type CheckRepositoryExistsData = Record<string, any>;

export type CheckRepositoryExistsError = HTTPValidationError;

/** Response Push Files */
export type PushFilesData = Record<string, any>;

export type PushFilesError = HTTPValidationError;

/** Response Get Project Files */
export type GetProjectFilesData = ProjectFile[];

/** Response List Projects */
export type ListProjectsData = ProjectListItem[];

export type CreateProjectData = ProjectResponse;

export type CreateProjectError = HTTPValidationError;

export interface GetProjectParams {
  /** Project Id */
  projectId: string;
}

export type GetProjectData = ProjectResponse;

export type GetProjectError = HTTPValidationError;

export interface UpdateProjectParams {
  /** Project Id */
  projectId: string;
}

export type UpdateProjectData = ProjectResponse;

export type UpdateProjectError = HTTPValidationError;

export interface DeleteProjectParams {
  /** Project Id */
  projectId: string;
}

export type DeleteProjectData = any;

export type DeleteProjectError = HTTPValidationError;

export interface GetContextParams {
  /** Project Id */
  projectId: string;
}

export type GetContextData = ContextResponse;

export type GetContextError = HTTPValidationError;

export type UpdateContextData = ContextResponse;

export type UpdateContextError = HTTPValidationError;

export interface ResetContextParams {
  /** Project Id */
  projectId: string;
}

/** Response Reset Context */
export type ResetContextData = Record<string, string>;

export type ResetContextError = HTTPValidationError;
