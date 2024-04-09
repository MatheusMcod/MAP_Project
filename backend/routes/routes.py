from fastapi import APIRouter
from controllers.HomeController import HomeController

router_instance = APIRouter()

@router_instance.get("/")
def welcome():
  result = HomeController().home_msg()
  return result
