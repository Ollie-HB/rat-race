import { render, screen } from '@testing-library/react';
import App from './App';
import Board from './components/Board'

test('displays Grid', () => {
  render(<Board />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
