from fastapi import HTTPException, status
from fastapi.responses import JSONResponse
from passlib.context import CryptContext
from models.User import User
from fastapi.encoders import jsonable_encoder

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
