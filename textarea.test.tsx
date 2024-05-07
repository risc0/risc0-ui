import { render, screen } from '@testing-library/react';
import { Textarea } from './textarea';
import { createRef } from 'react';

describe('Textarea', () => {
  test('renders without crashing', () => {
    render(<Textarea />);
    const textareaElement = screen.getByRole('textbox');
    expect(textareaElement).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLTextAreaElement>(); 
    render(<Textarea ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});