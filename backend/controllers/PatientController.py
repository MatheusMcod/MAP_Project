from fastapi import HTTPException
from fastapi.encoders import jsonable_encoder
from models.Patient import Patient
import json
import re

class PatientController:
	async def create_patient(self, body_patient):
		try:
			decode_body_patient = body_patient.dict()
			data_special_conditions = decode_body_patient.pop("special_conditions")
			response_patient = Patient().insert_patient(decode_body_patient, data_special_conditions)
			return jsonable_encoder({"response": "Success registration", "date": response_patient})
		except Exception as exception:
			raise HTTPException(status_code=500, detail="Error processing request: " + str(exception))

	async def get_all_patients(self):
		try:
			data_patients = Patient().search_all_patients()
			return jsonable_encoder({"response": "Success search", "date": data_patients})
		except Exception as exception:
			raise HTTPException(status_code=500, detail="Error processing request: " + str(exception))

	async def delete_patient_by_id(self, id):
		try:
			data_delete = Patient().delete_patient(id)
			if data_delete["status"]:
				return jsonable_encoder({"response": "Success delete", "date": data_delete})
			else:
				return jsonable_encoder({"response": "Error delete", "date": data_delete})
		except Exception as exception:
			raise HTTPException(status_code=500, detail="Error processing request: " + str(exception))