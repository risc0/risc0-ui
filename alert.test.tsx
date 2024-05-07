import { render, screen } from '@testing-library/react';
import { Alert, AlertDescription, AlertTitle } from './alert';

describe('Alert', () => {
  test('returns default class names when no variant is provided', () => {
    render(<Alert />);
    const alertElement = screen.getByRole('alert');
    expect(alertElement.className).toContain('relative w-full rounded-lg border px-4 py-3 text-sm');
    expect(alertElement.className).toContain('bg-background text-foreground');
  });

  test('returns correct class names when destructive variant is provided', () => {
    render(<Alert variant="destructive" />);
    const alertElement = screen.getByRole('alert');
    expect(alertElement.className).toContain('relative w-full rounded-lg border px-4 py-3 text-sm');
    expect(alertElement.className).toContain('border-destructive/50 text-destructive dark:border-destructive');
  });
});

describe('AlertTitle', () => {
  test('renders the correct text when children prop is provided', () => {
    render(<AlertTitle>Test Title</AlertTitle>);
    const titleElement = screen.getByText('Test Title');
    expect(titleElement).toBeInTheDocument();
  });

  test('has correct default class names', () => {
    render(<AlertTitle>Test Title</AlertTitle>);
    const titleElement = screen.getByText('Test Title');
    expect(titleElement.className).toContain('mb-1 font-medium leading-none');
  });

  test('properly forwards classnames', () => {
    render(<AlertTitle className='text-xl'>Test Title</AlertTitle>);
    const titleElement = screen.getByText('Test Title');
    expect(titleElement.className).toContain('text-xl');
  });
});

describe('AlertDescription', () => {
  test('renders the correct text when children prop is provided', () => {
    render(<AlertDescription>Test Description</AlertDescription>);
    const descriptionElement = screen.getByText('Test Description');
    expect(descriptionElement).toBeInTheDocument();
  });

  test('has correct default class names', () => {
    render(<AlertDescription>Test Description</AlertDescription>);
    const descriptionElement = screen.getByText('Test Description');
    expect(descriptionElement.className).toContain('text-sm [&_p]:leading-relaxed');
  });

  test('properly forwards classnames', () => {
    render(<AlertDescription className='text-xl'>Test Description</AlertDescription>);
    const descriptionElement = screen.getByText('Test Description');
    expect(descriptionElement.className).toContain('text-xl');
  });
});