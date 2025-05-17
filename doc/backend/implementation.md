# Backend Implementation Guidelines

## Project Structure

```
backend/
  main.py
  requirements.txt
  .env.example
  README.md
  tests/
    test_main.py
```

## Key Steps

1. **Create FastAPI app in `main.py`.**
2. **Define `/query` POST endpoint.**
3. **Read LLM API key from environment.**
4. **Send user question to LLM API and parse response.**
5. **Return formatted response to frontend.**
6. **Add error handling and validation.**
7. **Document endpoints with Swagger/OpenAPI.**
8. **Write tests for endpoints and logic.**
9. **Configure CORS for frontend integration.**
10. **Add logging for monitoring and debugging.**

## Example Endpoint

```python
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
import os, requests

app = FastAPI()

class Query(BaseModel):
    question: str

@app.post("/query")
def ask_llm(query: Query):
    api_key = os.getenv("LLM_API_KEY")
    if not api_key:
        raise HTTPException(status_code=500, detail="LLM API key not set")
    # Example LLM API call (replace with actual implementation)
    response = requests.post(
        "https://api.llmprovider.com/v1/answer",
        headers={"Authorization": f"Bearer {api_key}"},
        json={"prompt": query.question}
    )
    if response.status_code != 200:
        raise HTTPException(status_code=502, detail="LLM API error")
    return {"answer": response.json().get("answer", "No answer returned")}

# Add CORS middleware if needed
from fastapi.middleware.cors import CORSMiddleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
```

## Best Practices
- Use environment variables for sensitive data.
- Validate all user input.
- Handle and log errors gracefully.
- Write clear, maintainable code with comments.
- Use version control for all changes.
- Keep dependencies up to date.
- Write and maintain tests for all endpoints and logic. 