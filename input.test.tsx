import { render, screen } from '@testing-library/react';
import { Input } from './input';
import { createRef } from 'react';

describe('Input', () => {
  test('renders without crashing', () => {
    render(<Input />);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLInputElement>(); 
    render(<Input ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  test('renders startIcon correctly', () => {
    const StartIcon = () => <div data-testid="start-icon"></div>;
    render(<Input startIcon={<StartIcon />} />);
    const startIconElement = screen.getByTestId('start-icon');
    expect(startIconElement).toBeInTheDocument();
  });

  test('renders endIcon correctly', () => {
    const EndIcon = () => <div data-testid="end-icon"></div>;
    render(<Input endIcon={<EndIcon />} />);
    const endIconElement = screen.getByTestId('end-icon');
    expect(endIconElement).toBeInTheDocument();
  });
});