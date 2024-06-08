from app import App
from routes.routes import router_instance, auth_router
from fastapi.middleware.cors import CORSMiddleware
import uvicorn

origins = [
    "http://localhost",
    "http://localhost:8080",
    "http://127.0.0.1",
    "http://127.0.0.1:8080",
]

app_instance = App().get_App_Instance()
app_instance.include_router(router_instance)
app_instance.include_router(auth_router)
app_instance.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "PUT", "DELETE"],
    allow_headers=["*"],
)

if __name__ == "__main__":
  uvicorn.run("main:app_instance", host="0.0.0.0", port=4444, reload=True)