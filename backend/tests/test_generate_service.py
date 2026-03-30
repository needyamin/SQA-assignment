from app.services.generate_service import generate_summary, search_documents


def test_search_documents_returns_matches():
    results = search_documents("privacy")
    assert isinstance(results, list)
    assert len(results) >= 1


def test_search_documents_returns_empty_for_unknown_query():
    results = search_documents("no_such_legal_keyword_123")
    assert results == []


def test_generate_summary_for_empty_matches():
    summary = generate_summary([])
    assert summary == "No relevant legal documents found."


def test_generate_summary_lists_titles():
    docs = [{"title": "Doc A"}, {"title": "Doc B"}]
    summary = generate_summary(docs)
    assert "Found 2 relevant legal document(s)" in summary
    assert "Doc A" in summary
    assert "Doc B" in summary
