import { render, screen } from '@testing-library/react';
import App from './App';

it('renders title and footer link', () => {
  render(<App />);

  const titleElement = screen.getByText(/Pomodoro Timer/i);
  expect(titleElement).toBeInTheDocument();

  const viteLinkElement = screen.getByText(/Vite/i);
  expect(viteLinkElement).toBeInTheDocument();
  const samLinkElement = screen.getByText(/Sam Huynh/i);
  expect(samLinkElement).toBeInTheDocument();
});
