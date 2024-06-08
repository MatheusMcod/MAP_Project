from fastapi import Depends
from fastapi.security import OAuth2PasswordBearer
from controllers.AuthController import AuthController

oauth_scheme = OAuth2PasswordBearer(tokenUrl='/auth/login')

class AuthDepends:
	async def token_verify(token = Depends(oauth_scheme)):
		verify_token = await AuthController().verify_token(access_token=token)