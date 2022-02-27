import { render, screen } from '@testing-library/react';
import TimerContainer from './TimerContainer';

it('renders title and footer link', () => {
  render(<TimerContainer />);

  const titleElement = screen.getByText(/Pomodoro Timer/i);
  expect(titleElement).toBeInTheDocument();

  const viteLinkElement = screen.getByText(/Vite/i);
  expect(viteLinkElement).toBeInTheDocument();
  const samLinkElement = screen.getByText(/Sam Huynh/i);
  expect(samLinkElement).toBeInTheDocument();
});
