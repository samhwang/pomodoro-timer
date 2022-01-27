import { render, screen } from '@testing-library/react';
import App from './App';

it('renders footer link', () => {
  render(<App />);
  const viteLinkElement = screen.getByText(/Vite/i);
  expect(viteLinkElement).toBeInTheDocument();
  const samLinkElement = screen.getByText(/Sam Huynh/i);
  expect(samLinkElement).toBeInTheDocument();
});
