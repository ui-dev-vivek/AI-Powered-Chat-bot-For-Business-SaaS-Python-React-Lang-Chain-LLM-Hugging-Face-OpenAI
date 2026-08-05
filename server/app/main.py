from fastapi import FastAPI
from app.config.settings  import settings
from app.routers import routers
def create_app():
    app=FastAPI(
        title=settings.app_name
    )
    app.include_router(routers)
    # include api  router
     
    return app