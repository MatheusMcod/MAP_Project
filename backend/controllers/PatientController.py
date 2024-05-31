from fastapi import HTTPException
from fastapi.encoders import jsonable_encoder
from models.Patient import Patient
import re

class PatientController:
	async def create_patient(self, body_patient):
		try:
			decode_body_patient = body_patient.dict()
			data_special_conditions = decode_body_patient.pop("special_conditions")
			response_patient = Patient().insert_patient(decode_body_patient, data_special_conditions)
			return jsonable_encoder({"response": "Success registration", "status": response_patient})
		except Exception as exception:
			raise HTTPException(status_code=500, detail="Error processing request: " + str(exception))