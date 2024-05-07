import { renderHook, act } from '@testing-library/react-hooks';
import { useRef } from 'react';
import { useEventListener } from './use-event-listener';
import { vi } from 'vitest';

describe('useEventListener', () => {
  it('adds event listener to window when no element is provided', () => {
    const handler = vi.fn();
    const { unmount } = renderHook(() => useEventListener('click', handler));

    act(() => {
      window.dispatchEvent(new Event('click'));
    });

    expect(handler).toHaveBeenCalled();

    unmount();
  });

  it('adds event listener to provided element', () => {
    const handler = vi.fn();
    const { result, unmount } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(document.createElement('div'));
      useEventListener('click', handler, ref);
      return ref;
    });
  
    act(() => {
      result.current?.current?.dispatchEvent(new Event('click'));
    });
  
    expect(handler).toHaveBeenCalled();
  
    unmount();
  });

  it('removes event listener when component unmounts', () => {
    const handler = vi.fn();
    const { unmount } = renderHook(() => useEventListener('click', handler));

    unmount();

    act(() => {
      window.dispatchEvent(new Event('click'));
    });

    expect(handler).not.toHaveBeenCalled();
  });

  it('updates event listener when handler changes', () => {
    const handler1 = vi.fn();
    const handler2 = vi.fn();
    const { rerender, unmount } = renderHook(
      ({ handler }) => useEventListener('click', handler),
      { initialProps: { handler: handler1 } }
    );

    act(() => {
      window.dispatchEvent(new Event('click'));
    });

    expect(handler1).toHaveBeenCalled();

    rerender({ handler: handler2 });

    act(() => {
      window.dispatchEvent(new Event('click'));
    });

    expect(handler2).toHaveBeenCalled();

    unmount();
  });
});