# Backend (FastAPI)

## Setup Instructions

1. **Create and activate a virtual environment:**

   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. **Install dependencies:**

   ```bash
   pip install -r requirements.txt
   ```

3. **Environment Variables:**

   - Copy `.env.example` to `.env` and add your LLM API key.

4. **Run the FastAPI server:**

   ```bash
   uvicorn main:app --reload
   ```

5. **Access the API docs:**
   - Open [http://localhost:8000/docs](http://localhost:8000/docs) in your browser.
