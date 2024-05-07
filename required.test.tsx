import { Required } from './required';
import { render, screen } from '@testing-library/react';

describe('Required', () => {
  test('renders without crashing', () => {
    render(<Required />);
    const requiredElement = screen.getByText('*');
    expect(requiredElement).toBeInTheDocument();
  });

  test('displays an asterisk (*)', () => {
    render(<Required />);
    const requiredElement = screen.getByText('*');
    expect(requiredElement.textContent).toBe('*');
  });

  test('has a class name of "text-destructive"', () => {
    render(<Required />);
    const requiredElement = screen.getByText('*');
    expect(requiredElement).toHaveClass('text-destructive');
  });
});