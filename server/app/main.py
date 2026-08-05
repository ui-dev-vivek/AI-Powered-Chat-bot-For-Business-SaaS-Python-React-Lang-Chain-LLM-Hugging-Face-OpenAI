from fastapi import FastAPI
from app.config.settings  import settings
from app.routers import routers
from app.config.database import DATABASE_URL
def create_app():
    app=FastAPI(
        title=settings.app_name
    )
    print("DB USERNAME:", settings.db_username)
    print("DB URL:", DATABASE_URL)
    app.include_router(routers)
    # include api  router
     
    return app