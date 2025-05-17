# Frontend Testing Strategy

## Tools
- Jest
- React Testing Library
- msw (Mock Service Worker) for API mocking
- coverage (for test coverage reports)

## Approach

- **Unit Tests:** Test UI components (input, response display, buttons).
- **Integration Tests:** Test API calls and user flows (e.g., submitting a question and receiving an answer).
- **Mocking:** Use msw to mock backend responses for consistent and isolated tests.
- **Error Handling:** Test for proper error messages and loading states.
- **Accessibility:** Use jest-axe or similar tools to check for accessibility issues.
- **Coverage:** Use `jest --coverage` to ensure all code paths are tested.

## Example

```tsx
import { render, screen, fireEvent } from '@testing-library/react';
import Home from '../pages/index';

test('renders question input and submits', async () => {
  render(<Home />);
  const input = screen.getByPlaceholderText(/ask your question/i);
  fireEvent.change(input, { target: { value: 'What is AI?' } });
  fireEvent.click(screen.getByText(/ask/i));
  expect(await screen.findByText(/answer/i)).toBeInTheDocument();
});
```

## Running Tests

```bash
npm run test
``` 