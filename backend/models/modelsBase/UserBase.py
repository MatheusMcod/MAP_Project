from infra.database.base import Base
from sqlalchemy import Column, String, Integer


class UserBase(Base):
	__tablename__ = "users"

	id = Column(Integer, primary_key=True)
	username = Column(String, nullable=False)
	email = Column(String, unique=True, nullable=False)
	password = Column(String, nullable=False)
