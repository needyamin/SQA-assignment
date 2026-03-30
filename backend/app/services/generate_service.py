import json
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent.parent
DATA_FILE = BASE_DIR / "data" / "mock_docs.json"

LEGAL_DOCS = []
try:
    with open(DATA_FILE, "r", encoding="utf-8") as file:
        LEGAL_DOCS = json.load(file)
except FileNotFoundError:
    print(f"Warning: Could not find file {DATA_FILE}. LEGAL_DOCS is empty.")


def search_documents(query: str):

    query_lower = query.lower()
    results = []

    for doc in LEGAL_DOCS:
        title = doc.get("title", "").lower()
        content = doc.get("content", "").lower()

        if query_lower in title or query_lower in content:
            results.append(doc)

    return results



def generate_summary(matched_docs):

    if not matched_docs:
        return "No relevant legal documents found."

    num_docs = len(matched_docs)
    titles = [doc.get("title", "Untitled") for doc in matched_docs]

    summary = f"Found {num_docs} relevant legal document(s): "
    summary += ", ".join(titles)
    summary += "."

    return summary
