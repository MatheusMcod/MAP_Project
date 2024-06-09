from fastapi import APIRouter, Depends
from controllers.PatientController import PatientController
from controllers.AuthController import AuthController
from infra.BodyRequestStructure.BodyPatient import BodyPatient
from infra.BodyRequestStructure.BodyUser import BodyUser
from fastapi.security import OAuth2PasswordRequestForm
from routes.depends import AuthDepends

router_instance = APIRouter()#dependencies=[Depends(AuthDepends.token_verify)])
auth_router = APIRouter(prefix='/auth')

@auth_router.post("/login")
async def login_patient_rout(login_request_form: OAuth2PasswordRequestForm = Depends()):
	user = BodyUser (
		username = login_request_form.username,
		password = login_request_form.password
	)

	return await AuthController().login_user(user)

@auth_router.post("/register")
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