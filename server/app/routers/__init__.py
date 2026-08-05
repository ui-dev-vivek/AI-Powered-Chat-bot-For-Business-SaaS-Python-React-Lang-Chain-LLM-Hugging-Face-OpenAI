from fastapi import APIRouter
from app.routers.auth_route import route as auth_route
routers=APIRouter(prefix='/v1')

routers.include_router(auth_route)