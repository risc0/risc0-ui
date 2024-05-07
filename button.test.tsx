import { render, screen } from '@testing-library/react';
import { Button } from './button';
import { createRef } from 'react';

describe('Button', () => {
  test('renders without crashing', () => {
    render(<Button />);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLButtonElement>(); 
    render(<Button ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  test('renders children correctly', () => {
    render(<Button>Test Button</Button>);
    const buttonElement = screen.getByText('Test Button');
    expect(buttonElement).toBeInTheDocument();
  });

  test('renders startIcon correctly', () => {
    const Icon = () => <span data-testid="start-icon"></span>;
    render(<Button startIcon={<Icon />} />);
    const iconElement = screen.getByTestId('start-icon');
    expect(iconElement).toBeInTheDocument();
  });

  test('renders endIcon correctly', () => {
    const Icon = () => <span data-testid="end-icon"></span>;
    render(<Button endIcon={<Icon />} />);
    const iconElement = screen.getByTestId('end-icon');
    expect(iconElement).toBeInTheDocument();
  });

  test('renders Loader2Icon when isLoading is true', () => {
    render(<Button isLoading />);
    const loaderElement = screen.getByTestId('loader-icon');
    expect(loaderElement).toBeInTheDocument();
  });

  test('reanders Loader2Icon, but hidden when isLoading is false', () => {
    render(<Button isLoading={false} />);
    const loaderElement = screen.getByTestId('loader-icon');
    expect(loaderElement).toBeInTheDocument();
    expect(loaderElement).toHaveClass("opacity-0")
  });
});