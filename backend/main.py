from turtle import pos
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


users = {"1": False, "2": False, "3": False, "4": False}
users_new = {"1": {'name': '','state': False}, "2": {'name': '','state': False}, "3": {'name': '','state': False}, "4": {'name': '','state': False}}
admin = '1233456'



app = FastAPI()

origins = [
    '*'
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],)

@app.get("/")
async def getReservations():
    return  users_new

@app.get("/closeSeat/{position}/{name}")
async def set_seats(position, name):
    if(not users[position]):
        users_new[position]['state'] = True
        users_new[position]['name'] = name
    elif( users_new[position]['state']):
        return {"message": "The position is reserved"}
    else:
        return {"message": "Try Again"}
    print(users_new)
    return users_new


@app.get("/resetSeat/{position}/{adminID}")
async def resetSeat(position, adminID):
    if(adminID == admin):
        users_new[position]['state'] = False
        users_new[position]['name'] = ''
    return users_new


@app.get("/resetAll/{adminID}")
async def resetAll(adminID):
    if(adminID == admin):
        users_new.update({"1": {'name': '','state': False}, "2": {'name': '','state': False}, "3": {'name': '','state': False}, "4": {'name': '','state': False}})
    return users_new

