from infra.database.connection import DBConnectionHandler
from models.modelsBase.PatientBase import PatientBase
from models.modelsBase.SpecialConditionsBase import SpecialConditionsBase
from fastapi.encoders import jsonable_encoder
from sqlalchemy.orm import joinedload
from sqlalchemy import update

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
				return {"status": True, "Response_Creation": [data_patient, data_special_conditions]}
			except Exception as exception:
				db.session.rollback()
				raise exception

	def search_all_patients(self):
		with DBConnectionHandler() as db:
			try:
				data_patients = db.session.query(PatientBase).join(PatientBase.special_conditions).options(joinedload(PatientBase.special_conditions)).all()
				return jsonable_encoder(data_patients)
			except Exception as exception:
				raise exception

	def update_patient(self, id, data_patient, data_special_conditions):
		with DBConnectionHandler() as db:
			try:
				db.session.query(PatientBase).filter(PatientBase.id == id).update(data_patient)
				db.session.query(SpecialConditionsBase).filter(SpecialConditionsBase.patient_id == id).update(data_special_conditions)

				db.session.commit()
				return {"status": True, "Response_Update": [data_patient, data_special_conditions]}
			except Exception as exception:
				db.session.rollback()
				raise exception


	def delete_patient(self, id):
		with DBConnectionHandler() as db:
			try:
				patient_to_delete = db.session.query(PatientBase).filter(PatientBase.id == id).first()
				if patient_to_delete:
					db.session.delete(patient_to_delete)
					db.session.commit()
					return {"status": True, "Response": "Successful"}
				else:
					return {"status": False,"Response": "Patient Not Found"}
			except Exception as exception:
				db.session.rollback()
				raise exception
