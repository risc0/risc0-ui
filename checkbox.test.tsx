import { render, screen } from '@testing-library/react';
import { Checkbox } from './checkbox';
import { createRef } from 'react';

describe('Checkbox', () => {
  test('renders without crashing', () => {
    render(<Checkbox />);
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLButtonElement>(); 
    render(<Checkbox ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  test('applies correct class names', () => {
    render(<Checkbox className="test-class" />);
    const checkboxElement = screen.getByRole('checkbox');
    expect(checkboxElement).toHaveClass('test-class');
  });

  test('renders CheckIcon when checked', () => {
    render(<Checkbox checked />);
    const checkIconElement = screen.getByTestId('check-icon');
    expect(checkIconElement).toBeInTheDocument();
  });
});