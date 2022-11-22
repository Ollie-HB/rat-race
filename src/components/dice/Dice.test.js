import { render, screen } from '@testing-library/react';
import Dice from './Dice';

describe('Dice', () => {
  test('Roll dice button displayed on screen', () => {
    render(<Dice/>);
    const button = screen.getByRole('button');
    expect(button).toHaveAttribute('type', 'button');
  });

  // test('Dice image displayed on screen', () => {
  //   render(<Dice/>);
  //   const image = screen.getByRole('img');
  //   expect(image).toHaveAttribute('src', '/dice6.png');
  // });
});