FROM python:3.11-slim

# Set working directory
WORKDIR /code

# Install FastAPI and Uvicorn
RUN pip install --no-cache-dir fastapi uvicorn

# Copy only the app folder (ignore venv)
COPY ./app /code/app

EXPOSE 8000

# Run FastAPI from app/main.py
CMD ["uvicorn", "app.main:app", "--host", "0.0.0.0", "--port", "8000"]
