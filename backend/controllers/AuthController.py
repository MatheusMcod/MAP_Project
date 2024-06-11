from datetime import datetime, timedelta
from fastapi import HTTPException, status
from fastapi.responses import JSONResponse
from passlib.context import CryptContext
from models.User import User
from fastapi.encoders import jsonable_encoder
from jose import jwt, JWTError
import os
from dotenv import load_dotenv

load_dotenv()

SECRET_KEY = os.getenv("SECRET_KEY")
ALGORITHM = os.getenv("ALGORITHM")
crypt_context = CryptContext(schemes=['sha256_crypt'])

class AuthController:
	async def register_user(self, body_user):
		try:
			decode_body_user = body_user.dict()
			decode_body_user["password"] = crypt_context.hash(decode_body_user["password"])
			response_user = User().insert_user(decode_body_user)

			if response_user["status"]:
				return JSONResponse(
					status_code = status.HTTP_201_CREATED,
					content = {"Status": response_user["status"], "data": response_user["Response_Creation"]}
				)
			else:
				return JSONResponse(
					status_code = status.HTTP_500_INTERNAL_SERVER_ERROR,
					content = {"response": response_user}
				)
		except Exception as exception:
			raise HTTPException(status_code=500, detail="Error processing request: " + str(exception))

	async def login_user(self, body_user):
		try:
			decode_body_user = body_user.dict()
			response_user = User().search_user_login(decode_body_user)
			response_user_data = response_user["Response_Creation"]

			if response_user["status"] == False:
				raise HTTPException (
					status_code = status.HTTP_401_UNAUTHORIZED,
					detail = 'Invalid username or password'
				)

			if not crypt_context.verify(decode_body_user["password"], response_user_data.password):
				raise HTTPException (
					status_code = status.HTTP_401_UNAUTHORIZED,
					detail = 'Invalid username or password'
				)


		  exp = datetime.now() + timedelta(minutes=int(os.getenv("JWT_TIME")))

			payload = {
				'sub': decode_body_user["username"],
				'exp': exp,
			}

			access_token = jwt.encode(payload, SECRET_KEY, algorithm=ALGORITHM)

			return JSONResponse (
				status_code = status.HTTP_200_OK,
				content = {"Status": response_user["status"], "data": jsonable_encoder(response_user_data), "token": access_token}
			)
		except Exception as exception:
			raise HTTPException(status_code=500, detail="Error processing request: " + str(exception))

	async def verify_token(self, access_token):
		try:
			data = jwt.decode(access_token, SECRET_KEY, algorithms=[ALGORITHM])
		except JWTError:
			raise HTTPException(status_code=401, detail="Invalid Access Token")
