from fastapi import FastAPI

app = FastAPI(
    title="TruthLens API",
    description="AI-powered scam and suspicious content analyzer",
    version="1.0.0"
)


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