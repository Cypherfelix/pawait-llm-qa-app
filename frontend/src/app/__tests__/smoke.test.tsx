import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Home from '../page';

test('renders main heading', () => {
  render(<Home />);
  expect(screen.getByRole('heading')).toBeInTheDocument();
}); 