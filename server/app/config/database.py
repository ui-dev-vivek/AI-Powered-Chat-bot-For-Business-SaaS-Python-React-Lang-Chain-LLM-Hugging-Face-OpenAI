# app/database/database.py

from sqlalchemy import create_engine
from sqlalchemy.orm import DeclarativeBase, sessionmaker,Session
from sqlalchemy import URL
from app.config.settings import settings

DATABASE_URL = URL.create(
    drivername="mysql+pymysql",
    username=settings.db_username,
    password=settings.db_password,
    host=settings.db_host,
    port=settings.db_port,
    database=settings.db_name,
)

engine = create_engine(
    DATABASE_URL,
    echo=True,
    pool_pre_ping=True,
)


SessionLocal = sessionmaker(
    bind=engine,
    autoflush=False,
    autocommit=False,
)


class Base(DeclarativeBase):
    pass

def DB():
    get_db = SessionLocal()
    try:
        yield get_db
    finally:
        get_db.close()