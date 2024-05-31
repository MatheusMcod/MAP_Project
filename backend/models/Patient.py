from infra.database.connection import DBConnectionHandler
from models.modelsBase.PatientBase import PatientBase
from models.modelsBase.SpecialConditionsBase import SpecialConditionsBase

class Patient:
	def insert_patient(self, data_patient, data_special_conditions):
		with DBConnectionHandler() as db:
			try:
				data_patient_insert = PatientBase(**data_patient)
				db.session.add(data_patient_insert)
				db.session.commit()

				data_special_conditions_insert = SpecialConditionsBase(**data_special_conditions, patient_id=data_patient_insert.id)
				db.session.add(data_special_conditions_insert)
				db.session.commit()
				return True
			except Exception as exception:
				db.session.rollback()
				raise exception

'''
	def __select(self):
		with DBConnectionHandler() as db:
			try:
				data = db.session.query(Test).all()
				return data
			except Exception as exception:
				raise exception
'''