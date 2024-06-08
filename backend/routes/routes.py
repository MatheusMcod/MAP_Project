from fastapi import APIRouter
from controllers.PatientController import PatientController
from controllers.AuthController import AuthController
from infra.BodyRequestStructure.BodyPatient import BodyPatient
from infra.BodyRequestStructure.BodyUser import BodyUser

router_instance = APIRouter()

@router_instance.post("/auth/register")
async def register_patient_route(body_user: BodyUser):
	return await AuthController().register_user(body_user)

@router_instance.post("/patient")
async def create_patient_route(body_patient: BodyPatient):
  return await PatientController().create_patient(body_patient)

@router_instance.get("/patient")
async def search_patient_route():
  return await PatientController().get_all_patients()

@router_instance.put("/patient/{patient_id}")
async def update_patient_route(patient_id: int, body_patient: BodyPatient):
  return await PatientController().update_to_patient(patient_id, body_patient)

@router_instance.delete("/patient/{patient_id}")
async def delete_patient_route(patient_id: int):
  return await PatientController().delete_patient_by_id(patient_id)