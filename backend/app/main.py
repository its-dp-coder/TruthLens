from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from app.models.user import User
from app.database import Base, engine, get_db
from app.schemas.user import UserCreate

app = FastAPI(
    title="TruthLens API",
    description="AI-powered scam and suspicious content analyzer",
    version="1.0.0"
)
from app.database import Base, engine

Base.metadata.create_all(bind=engine)


@app.get("/")
def root():
    return {
        "message": "Welcome to TruthLens API",
        "status": "running"
    }


@app.get("/health")
def health_check():
    return {
        "status": "healthy"
    }

@app.post("/users")
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    new_user = User(
        name=user.name,
        email=user.email
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user