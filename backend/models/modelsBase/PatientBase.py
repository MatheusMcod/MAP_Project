from infra.database.base import Base
from sqlalchemy import Column, String, Boolean, Integer
from sqlalchemy.orm import relationship

class PatientBase(Base):
	__tablename__ = "patients"

	id = Column(Integer,primary_key=True)
	name = Column(String, nullable=False)
	work = Column(String)
	age = Column(String, nullable=False)
	gender = Column(String, nullable=False)
	civil_status = Column(String)
	address = Column(String)
	cep = Column(String)
	phone = Column(String, nullable=False)
	start_service = Column(String, nullable=False)
	end_service = Column(String, nullable=False)
	waiting_service = Column(String)
	return_patient = Column(Boolean, nullable=False)
	urgency = Column(String, nullable=False)
	problem = Column(String, nullable=False)
	description_problem = Column(String, nullable=False)
	attending_doctor = Column(String)

	special_conditions = relationship("SpecialConditionsBase", back_populates="patient")