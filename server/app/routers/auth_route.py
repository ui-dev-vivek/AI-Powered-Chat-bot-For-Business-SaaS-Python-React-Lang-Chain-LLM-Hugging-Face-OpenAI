from fastapi import APIRouter
from app.utils import Response
route=APIRouter(prefix='/auth')


@route.get('/')
def create_account():
    return Response.success([],200)