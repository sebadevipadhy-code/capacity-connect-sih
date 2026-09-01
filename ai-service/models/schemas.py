from pydantic import BaseModel
from typing import List


class Trainer(BaseModel):
    name: str
    subjects: List[str]
    skills: List[str]
    experience_years: int


class TrainerRecommendationRequest(BaseModel):
    subject: str
    trainers: List[Trainer]