import { act, renderHook } from "@testing-library/react";
import { type Mock, afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { useMediaQuery } from "./use-media-query";

describe("useMediaQuery", () => {
  let matchMediaMock: Mock;

  beforeEach(() => {
    matchMediaMock = vi.fn();
    window.matchMedia = matchMediaMock;
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  function createMatchMedia(matches: boolean) {
    return () => ({
      matches,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    });
  }

  it("should return initial value based on media query", () => {
    matchMediaMock.mockImplementation(createMatchMedia(true));

    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"));

    expect(result.current).toBe(true);
  });

  it("should update value when media query changes", () => {
    const listeners: ((event: MediaQueryListEvent) => void)[] = [];
    matchMediaMock.mockImplementation(() => ({
      matches: false,
      addEventListener: (_, listener) => listeners.push(listener),
      removeEventListener: (_, listener) => {
        const index = listeners.indexOf(listener);
        if (index > -1) {
          listeners.splice(index, 1);
        }
      },
    }));

    const { result } = renderHook(() => useMediaQuery("(min-width: 768px)"));

    expect(result.current).toBe(false);
    act(() => {
      for (const listener of listeners) {
        listener({ matches: true } as MediaQueryListEvent);
      }
    });

    expect(result.current).toBe(true);
  });

  it("should remove event listener on unmount", () => {
    const removeEventListenerMock = vi.fn();
    matchMediaMock.mockImplementation(() => ({
      matches: true,
      addEventListener: vi.fn(),
      removeEventListener: removeEventListenerMock,
    }));

    const { unmount } = renderHook(() => useMediaQuery("(min-width: 768px)"));

    unmount();

    expect(removeEventListenerMock).toHaveBeenCalledWith("change", expect.any(Function));
  });

  it("should update when query changes", () => {
    let currentQuery = "(min-width: 768px)";
    matchMediaMock.mockImplementation(() => ({
      matches: currentQuery === "(min-width: 768px)",
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    }));

    const { result, rerender } = renderHook(({ query }) => useMediaQuery(query), {
      initialProps: { query: currentQuery },
    });

    expect(result.current).toBe(true);

    currentQuery = "(max-width: 480px)";
    rerender({ query: currentQuery });

    expect(result.current).toBe(false);
  });
});
