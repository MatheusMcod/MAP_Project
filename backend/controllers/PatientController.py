from fastapi import HTTPException, status
from fastapi.responses import JSONResponse
from models.Patient import Patient
import json
import re

class PatientController:
	async def create_patient(self, body_patient):
		try:
			decode_body_patient = body_patient.dict()
			data_special_conditions = decode_body_patient.pop("special_conditions")
			response_patient = Patient().insert_patient(decode_body_patient, data_special_conditions)

			if response_patient["status"]:
				return JSONResponse(
					status_code = status.HTTP_201_CREATED,
					content = {"Status": response_patient["status"], "date": response_patient["Response_Creation"]}
				)
			else:
				return JSONResponse(
					status_code = status.HTTP_500_INTERNAL_SERVER_ERROR,
					content = {"response"}
				)
		except Exception as exception:
			raise HTTPException(status_code=500, detail="Error processing request: " + str(exception))

	async def get_all_patients(self):
		try:
			data_patients = Patient().search_all_patients()
			return JSONResponse(
				status_code = status.HTTP_200_OK,
     		content = {"Status": "True", "date": data_patients}
       )
		except Exception as exception:
			raise HTTPException(status_code=500, detail="Error processing request: " + str(exception))

	async def update_to_patient(self, id, body_patient):
		try:
			decode_body_patient = body_patient.dict()
			data_special_conditions = decode_body_patient.pop("special_conditions")
			response_patient = Patient().update_patient(id, decode_body_patient, data_special_conditions)

			if response_patient["status"]:
				return JSONResponse(
					status_code = status.HTTP_200_OK,
					content = {"Status": response_patient["status"], "date": response_patient["Response_Update"]}
				)
			else:
				return JSONResponse(
					status_code = status.HTTP_500_INTERNAL_SERVER_ERROR,
					content = {"Status": response_patient["status"], "date": response_patient["Response_Update"]}
				)

		except Exception as exception:
			raise HTTPException(status_code=500, detail="Error processing request: " + str(exception))

	async def delete_patient_by_id(self, id):
		try:
			data_delete = Patient().delete_patient(id)
			if data_delete["status"]:
				return JSONResponse(
					status_code = status.HTTP_200_OK,
      		content = {"Status": data_delete["status"], "date": data_delete["Response"]}
        )
			else:
				return JSONResponse(
					status_code = status.HTTP_404_NOT_FOUND,
      		content = {"Status": data_delete["status"], "date": data_delete["Response"]}
        )
		except Exception as exception:
			raise HTTPException(status_code=500, detail="Error processing request: " + str(exception))