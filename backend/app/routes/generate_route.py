from fastapi import APIRouter
from app.models.schema import QueryRequest
from app.services.generate_service import search_documents, generate_summary
from app.utils.response import success_response, error_response

router = APIRouter()

@router.post("/generate")
def generate_response(request: QueryRequest):
    query = request.query.strip()
    if not query:
         return error_response("Please provide a search query.", 400)
    
    matched = search_documents(query)
    summary = generate_summary(matched)
    data = {
        "summary": summary,
        "matched_docs": matched
    }
    return success_response(data, "Search completed successfully")

@router.get("/generate")
def generate_response():
    return "hello"