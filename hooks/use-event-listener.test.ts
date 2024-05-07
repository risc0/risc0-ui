import { renderHook } from '@testing-library/react-hooks';
import type { RefObject } from 'react';
import { useEventListener } from './use-event-listener';
import { vi } from 'vitest';

describe('useEventListener', () => {
  it('should call handler when the event is triggered', () => {
    const handler = vi.fn();
    const event = new Event('click');
    const ref: RefObject<HTMLDivElement> = { current: document.createElement('div') };

    renderHook(() => useEventListener('click', handler, ref));

    ref.current?.dispatchEvent(event);

    expect(handler).toHaveBeenCalledWith(event);
  });

  it('should not call handler after unmount', () => {
    const handler = vi.fn();
    const event = new Event('click');
    const ref: RefObject<HTMLDivElement> = { current: document.createElement('div') };

    const { unmount } = renderHook(() => useEventListener('click', handler, ref));

    unmount();

    ref.current?.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();
  });
});