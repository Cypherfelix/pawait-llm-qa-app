# Backend Testing Strategy

## Tools
- pytest
- FastAPI's TestClient
- unittest.mock (for mocking LLM API calls)
- coverage (for test coverage reports)

## Approach

- **Unit Tests:** Test input validation, response formatting, and utility functions.
- **Integration Tests:** Test `/query` endpoint with valid and invalid inputs.
- **Mocking:** Mock LLM API responses to ensure tests are deterministic and do not consume API quota.
- **Error Handling:** Test for proper error responses (e.g., missing API key, invalid input).
- **Coverage:** Use `pytest-cov` or `coverage` to ensure all code paths are tested.

## Example

```python
from fastapi.testclient import TestClient
from main import app

client = TestClient(app)

def test_query_endpoint_success(monkeypatch):
    def mock_llm_api(*args, **kwargs):
        return {"answer": "Mocked LLM response"}
    # monkeypatch the function that calls the LLM
    response = client.post("/query", json={"question": "What is AI?"})
    assert response.status_code == 200
    assert "answer" in response.json()

def test_query_endpoint_invalid(monkeypatch):
    response = client.post("/query", json={})
    assert response.status_code == 422  # Unprocessable Entity
```

## Running Tests

```bash
pytest --cov=.
``` 