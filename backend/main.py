# main.py
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Configure CORS to allow requests from your React app
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
@app.get("/")
def read_root():
    return {"Hello": "World"}
    
@app.get("/api/data-endpoint")
async def get_data():
    # Sample data; replace with your actual data retrieval logic
    data = [
        {"timestamp": "2023-10-10T10:00:00Z", "value": 10},
        {"timestamp": "2023-10-10T10:05:00Z", "value": 20},
        {"timestamp": "2023-10-10T10:10:00Z", "value": 30},
        {"timestamp": "2023-10-10T10:15:00Z", "value": 40},
        {"timestamp": "2023-10-10T10:20:00Z", "value": 50}
    ]
    return data
