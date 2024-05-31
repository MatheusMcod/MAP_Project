from infra.database.base import Base
from sqlalchemy import Column, String, Integer, ForeignKey
from sqlalchemy.orm import relationship

class SpecialConditionsBase(Base):
	__tablename__ = "patient_special_conditions"

	id = Column(Integer, primary_key=True)
	conditions = Column(String)
	medicines = Column(String)
	allergies = Column(String)
	patient_id = Column(Integer, ForeignKey("patients.id"))

	patient = relationship("PatientBase", back_populates="special_conditions")