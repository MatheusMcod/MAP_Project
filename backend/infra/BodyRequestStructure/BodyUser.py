import re
from pydantic import BaseModel, validator
from typing import Optional

class BodyUser(BaseModel):
	username: str
	email: Optional[str] = None
	password: str

	@validator('username')
	def validate_username(cls, value):
		if not re.match('^([a-z]|[0-9]|@)+$', value):
			raise ValueError('Username format invalid')
		return value

	@validator('email')
	def validate_email(cls, value):
		if not re.match('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$', value):
			raise ValueError('Username format invalid')
		return value