# Frontend Requirements

## Libraries & Tools

- Node.js 18+
- Next.js (latest)
- TypeScript
- TailwindCSS
- Axios or Fetch API (for HTTP requests)
- Jest & React Testing Library (for testing)
- ESLint & Prettier (for code quality)
- Husky (for git hooks)
- [Optional] Markdown renderer (e.g., react-markdown)

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Cypherfelix/pawait-llm-qa-app.git
   cd pawait-llm-qa-app/frontend
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Environment Variables:**
   - Copy `.env.example` to `.env.local` and set your backend API URL.
4. **Run the development server:**
   ```bash
   npm run dev
   ```
5. **Open the app:**
   - Visit [http://localhost:3000](http://localhost:3000) in your browser.

## Configuration

- All sensitive keys and configuration should be stored in `.env.local` and never committed to version control.
- See `.env.example` for required variables. 