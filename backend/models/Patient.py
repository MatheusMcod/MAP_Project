from infra.database.connection import DBConnectionHandler
from models.modelsBase.PatientBase import PatientBase
from models.modelsBase.SpecialConditionsBase import SpecialConditionsBase
from sqlalchemy.orm import joinedload

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


	def search_all_patients(self):
		with DBConnectionHandler() as db:
			try:
				data_patients = db.session.query(PatientBase).join(PatientBase.special_conditions).options(joinedload(PatientBase.special_conditions)).all()
				return data_patients
			except Exception as exception:
				raise exception
