import os
import sys

from fastapi import FastAPI
from models.schemas import TrainerRecommendationRequest
from services.competency import recommend_trainers


# Make sure Python can find the project folders
sys.path.append(os.path.dirname(os.path.abspath(__file__)))


# Create FastAPI application
app = FastAPI(
    title="Capacity Connect AI Service",
    description="Competency mapping and trainer recommendation service",
    version="1.0.0"
)


# Home route
@app.get("/")
def home():
    return {
        "message": "Capacity Connect AI Service is running!"
    }


# Trainer recommendation route
@app.post("/recommend-trainers")
def get_trainer_recommendations(
    request: TrainerRecommendationRequest
):
    recommendations = recommend_trainers(
        request.subject,
        request.trainers
    )

    return {
        "subject": request.subject,
        "recommendations": recommendations
    }