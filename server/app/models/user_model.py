from app.config.database import Base
from sqlalchemy.orm import Mapped, mapped_column, relationship
from typing import Optional,List
from sqlalchemy import ForeignKey, String

class User:
    __tablename__="users"
    id: Mapped[int]=mapped_column(primary_key=True,autoincrement=True,unique=True)
    name: Mapped[Optional[str]]=mapped_column(String(100))
    username: Mapped[str]= mapped_column(String(16),unique=True)
    email: Mapped[str]=mapped_column(String(100),unique=True)
    

class Address:
    pass