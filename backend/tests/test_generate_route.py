from fastapi.testclient import TestClient

from app.main import app

client = TestClient(app)


def test_generate_success():
    response = client.post("/generate", json={"query": "privacy"})
    body = response.json()

    assert response.status_code == 200
    assert body["success"] is True
    assert "data" in body
    assert "summary" in body["data"]
    assert "matched_docs" in body["data"]


def test_generate_rejects_empty_query():
    response = client.post("/generate", json={"query": "   "})
    body = response.json()

    assert response.status_code == 200
    assert body["success"] is False
    assert body["status"] == 400
    assert body["error"] == "Please provide a search query."


def test_generate_sql_injection_payload_does_not_crash():
    payload = "' OR 1=1 --"
    response = client.post("/generate", json={"query": payload})
    body = response.json()

    assert response.status_code == 200
    assert "success" in body


def test_generate_xss_payload_does_not_crash():
    payload = "<script>alert('xss')</script>"
    response = client.post("/generate", json={"query": payload})
    body = response.json()

    assert response.status_code == 200
    assert "success" in body


def test_cors_header_exists():
    response = client.options(
        "/generate",
        headers={
            "Origin": "http://example.com",
            "Access-Control-Request-Method": "POST",
        },
    )
    assert response.headers.get("access-control-allow-origin") == "*"
