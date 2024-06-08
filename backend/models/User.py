from infra.database.connection import DBConnectionHandler
from models.modelsBase.UserBase import UserBase

class User:
	def insert_user(self, data_user):
		with DBConnectionHandler() as db:
			try:
				data_user_insert = UserBase(**data_user)
				db.session.add(data_user_insert)
				db.session.commit()

				return {"status": True, "Response_Creation": data_user}
			except Exception as exception:
				db.session.rollback()
				raise exception