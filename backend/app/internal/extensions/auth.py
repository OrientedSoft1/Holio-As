from pydantic import BaseModel


class AuthConfig(BaseModel):
    issuer: str
    jwks_url: str
    audience: str
    sub: str | None = None
    email: str | None = None
