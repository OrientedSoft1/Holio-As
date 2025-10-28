from .auth import AuthConfig

# TODO: We should probably use a generic oidc client instead and get better caching etc
# https://developers.google.com/identity/openid-connect/openid-connect#discovery
# openid_config_url = "https://accounts.google.com/.well-known/openid-configuration"


def get_google_scheduler_auth_config(
    *,
    project_id: str,
    service_type: str,
    host: str,
) -> AuthConfig:
    if not host.startswith("https://"):
        host = f"https://{host}"
    return AuthConfig(
        issuer="https://accounts.google.com",
        jwks_url="https://www.googleapis.com/oauth2/v3/certs",
        audience=f"{host}/_projects/{project_id}/dbtn/{service_type}/app{{path}}",
        # TODO: Make this configurable
        sub="103554423707375679125",
        email="riff-user-apps-scheduler@databutton.iam.gserviceaccount.com",
    )
