from infra.database.connection import DBConnectionHandler
from models.modelsBase.UserBase import UserBase
from passlib.context import CryptContext

crypt_context = CryptContext(schemes=['sha256_crypt'])

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

	def search_user_login(self, data_user):
		with DBConnectionHandler() as db:
			try:
				data_search_user = db.session.query(UserBase).filter_by(username = data_user["username"]).first()

				if data_search_user is None:
					return {"status": False,"Response": "Invalid username or password"}
				else:
					return {"status": True, "Response_Creation": data_search_user}

			except Exception as exception:
				db.session.rollback()
				raise exception