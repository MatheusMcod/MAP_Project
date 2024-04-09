from fastapi import HTTPException
from fastapi.encoders import jsonable_encoder
from models.Home import Home
import re

class HomeController:
	def home_msg(self):
		try:
			msg = Home().search_msg()
			return jsonable_encoder(msg)
		except Exception as exception:
			raise HTTPException(status_code=500, detail="Error processing request: " + str(exception))
