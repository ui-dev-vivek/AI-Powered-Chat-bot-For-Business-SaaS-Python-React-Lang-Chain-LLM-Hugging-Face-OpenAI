from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    app_name: str = "My API"
    debug: bool = True
    host: str = "127.0.0.1"
    port: int = 1000
    
    # Database 
    db_host: str = "127.0.0.1"
    db_username: str ='root'
    db_password:str = ""
    db_name: str="bizbot" 
    db_port: int =3600

    model_config = SettingsConfigDict(
        env_file=".env",
        env_file_encoding="utf-8",
        extra="ignore",
    )


settings = Settings()