from fastapi import APIRouter
from controllers.PatientController import PatientController
from infra.BodyRequestStructure.BodyPatient import BodyPatient

router_instance = APIRouter()

@router_instance.post("/patient")
async def create_patient_route(body_patient: BodyPatient):
  return await PatientController().create_patient(body_patient)
