# Legal Document Search System

The **Legal Document Search System** is a full-stack application designed to help users **search, summarize, and explore legal documents efficiently**.  
It consists of a **FastAPI backend** and a **React (Next.js) frontend**, both containerized using **Docker** for easy deployment.

---

## Overview

This project provides:

-   Fast and modern API built with **FastAPI**
-   Intelligent search for legal documents
-   Automatic document summarization
-   Seamless **frontend-backend integration** via REST API
-   Simple and extensible architecture suitable for future scaling

---

## Project Structure

```bash
SQA-assignment/
├── backend/ # FastAPI backend
│ ├── main.py # Main application file
│ ├── requirements.txt
│ ├── Dockerfile
│ └── ...
└── frontend/ # React frontend
├── src/
├── package.json
├── Dockerfile
└── ...

```

---

## Backend Setup (FastAPI)

### 1. Clone the Repository

```bash
git clone https://github.com/AcmeAI-Git/SQA-assignment.git
cd backend
```

### 2. Build Docker Image

```bash
docker build -t fastapi-app .
```

### 3. Run the Container

```bash
docker run -p 8000:8000 fastapi-app
```

### 4. Test the API
   Run this sample request using curl or any API client like Postman:

```bash
curl --location 'http://localhost:8000/generate' \
--header 'Content-Type: application/json' \
--data '{
    "query": "Data Protection and Privacy Act"
}'
```

Example Response

```bash
{
    "data": {
        "summary": "Found 1 relevant legal document(s): Data Protection and Privacy Act.",
        "matched_docs": [
            {
                "id": 1,
                "title": "Data Protection and Privacy Act",
                "content": "This act establishes the rules for collecting, storing, and processing personal data. Organizations must ensure data security and comply with consent requirements."
            }
        ]
    },
    "message": "Search completed successfully",
    "success": true,
    "status": 200
}
```

## Frontend Setup (React / Next.js)

### 1. Clone the Repository

```bash
git clone https://github.com/AcmeAI-Git/SQA-assignment.git
cd frontend
```

### 2. Build Docker Image

```bash
docker build -t react-frontend .
```

### 3. Run the Container

```bash
docker run -p 3001:3001 react-frontend
```

### 4. Access the Application
   Open your browser and navigate to:
   http://localhost:3001
