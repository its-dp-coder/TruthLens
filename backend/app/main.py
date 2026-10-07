from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from app.models.user import User
from app.database import Base, engine, get_db
from app.schemas.user import UserCreate, UserResponse, UserLogin
from app.auth.security import hash_password, verify_password, create_access_token
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

@app.post("/users", response_model=UserResponse)
def create_user(user: UserCreate, db: Session = Depends(get_db)):
    hashed_password = hash_password(user.password)

    new_user = User(
        name=user.name,
        email=user.email,
        hashed_password=hashed_password
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)

    return new_user

@app.post("/login")
def login(user: UserLogin, db: Session = Depends(get_db)):
    db_user = db.query(User).filter(User.email == user.email).first()

    if not db_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    if not verify_password(user.password, db_user.hashed_password):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    access_token = create_access_token(
        {"sub": str(db_user.id)}
    )

    return {
        "access_token": access_token,
        "token_type": "bearer"
    }