# Backend Requirements

## Libraries & Tools

- Python 3.9+
- FastAPI
- Uvicorn
- python-dotenv
- requests (for LLM API calls)
- httpx (optional, for async HTTP requests)
- pytest (for testing)
- logging (standard library)
- [Optional] Docker (for containerization)

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Cypherfelix/pawait-llm-qa-app.git
   cd pawait-llm-qa-app/backend
   ```
2. **Create and activate a virtual environment:**
   ```bash
   python -m venv venv
   source venv/bin/activate  # Windows: venv\Scripts\activate
   ```
3. **Install dependencies:**
   ```bash
   pip install -r requirements.txt
   ```
4. **Environment Variables:**
   - Copy `.env.example` to `.env` and add your LLM API key and any other required variables.
5. **Run the FastAPI server:**
   ```bash
   uvicorn main:app --reload
   ```
6. **Access the API docs:**
   - Open [http://localhost:8000/docs](http://localhost:8000/docs) in your browser.

## Configuration

- All sensitive keys and configuration should be stored in `.env` and never committed to version control.
- See `.env.example` for required variables. 