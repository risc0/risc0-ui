import { Loader } from './loader';
import { render, screen } from '@testing-library/react';

describe('Loader', () => {
  test('renders image without crashing', () => {
    render(<Loader />);
    const loaderImage = screen.getByAltText('Loading');
    expect(loaderImage).toBeInTheDocument();
  });

  test('displays default loading text when no loadingText prop is provided', () => {
    render(<Loader />);
    const loadingText = screen.getByText('Loading…');
    expect(loadingText).toBeInTheDocument();
  });

  test('displays custom loading text when loadingText prop is provided', () => {
    const customText = 'Custom loading text';
    render(<Loader loadingText={customText} />);
    const loadingText = screen.getByText(customText);
    expect(loadingText).toBeInTheDocument();
  });
});