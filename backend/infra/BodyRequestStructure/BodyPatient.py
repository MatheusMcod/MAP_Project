from pydantic import BaseModel

class SpecialConditions(BaseModel):
	conditions: str
	medicines: str
	allergies: str

class BodyPatient(BaseModel):
  name: str
  work: str
  age: str
  gender: str
  civil_status: str
  address: str
  cep: str
  phone: str
  start_service: str
  end_service: str
  waiting_service: str
  return_patient: bool
  urgency: str
  problem: str
  description_problem: str
  attending_doctor: str
  special_conditions: SpecialConditions

