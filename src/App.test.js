import { render, screen } from '@testing-library/react';
import App from './App';
import Board from './components/Board'

test('displays Grid', () => {
  render(<Board />);
  const board = screen.getByRole('Board');
  expect(board).toHaveAttribute('type','board');
});
