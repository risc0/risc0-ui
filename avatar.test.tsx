import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Avatar, AvatarFallback } from './avatar';

describe('Avatar', () => {
  test('renders without crashing', () => {
    render(<Avatar />);
    const avatarElement = screen.getByTestId('avatar');
    expect(avatarElement).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLSpanElement>(); 
    render(<Avatar ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe('AvatarFallback', () => {
  test('renders without crashing', () => {
    render(<Avatar><AvatarFallback /></Avatar>);
    const avatarFallbackElement = screen.getByTestId('avatar-fallback');
    expect(avatarFallbackElement).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLSpanElement>(); 
    render(<Avatar><AvatarFallback ref={ref} /></Avatar>);
    expect(ref.current).not.toBeNull();
  });

  test('displays the initials inside', () => {
    render(<Avatar><AvatarFallback>CC</AvatarFallback></Avatar>);
    const avatarFallbackText = screen.getByText('CC');
    expect(avatarFallbackText).toBeInTheDocument();
  });
});