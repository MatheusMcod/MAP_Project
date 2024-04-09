from fastapi import FastAPI

class App:
	def __init__(self):
		self.__app = FastAPI()

	def get_App_Instance(self):
		return self.__app