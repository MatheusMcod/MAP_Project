from database.base import Base
from sqlalchemy import Column, String, Integer

class Test(Base):
	__tablename__ = "test"

	id = Column(Integer, primary_key=True)
	msg = Column(String)

	def __repr__(self):
		return f"Mensagem: {self.msg}"