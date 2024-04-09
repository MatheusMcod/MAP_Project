from database.connection import DBConnectionHandler
from database.entitis.Hello import Test

class Home:
	def __select(self):
		with DBConnectionHandler() as db:
			try:
				data = db.session.query(Test).all()
				return data
			except Exception as exception:
				raise exception

	def __insert(self):
		with DBConnectionHandler() as db:
			try:
				data_insert = Test(msg="Hello")
				db.session.add(data_insert)
				db.session.commit()
			except Exception as exception:
				db.session.rollback()
				raise exception

	def search_msg(self):
		try:
			self.__insert()
			data = self.__select()
			return data
		except Exception as exception:
			raise exception