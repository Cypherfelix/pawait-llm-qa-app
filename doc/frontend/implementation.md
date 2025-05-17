# Frontend Implementation Guidelines

## Project Structure

```
frontend/
  src/
    app/
    components/
      QuestionInput.tsx
      AnswerDisplay.tsx
      HistoryList.tsx
  public/
  styles/
  pages/
    index.tsx
  ...
```

## Key Steps

1. **Set up Next.js with TypeScript and TailwindCSS.**
2. **Create Q&A page with input and response display.**
3. **Use Fetch or Axios to call backend `/query` endpoint.**
4. **Handle loading and error states.**
5. **Style with TailwindCSS for responsiveness.**
6. **(Bonus) Implement query history using local state or localStorage.**
7. **Write tests for components and API logic.**
8. **Add markdown rendering for AI responses.**
9. **Ensure accessibility and keyboard navigation.**

## Example API Call

```tsx
const fetchAnswer = async (question: string) => {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/query', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question }),
  });
  if (!res.ok) throw new Error('API error');
  return res.json();
};
```

## Best Practices
- Use functional React components and hooks.
- Keep components small and focused.
- Use Tailwind utility classes for styling.
- Validate user input before sending to backend.
- Handle errors gracefully and inform the user.
- Organize code for readability and maintainability.
- Use environment variables for configuration.
- Write and maintain tests for all components and logic. 