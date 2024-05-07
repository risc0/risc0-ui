import { act, renderHook } from "@testing-library/react-hooks";
import { type RefObject, useRef } from "react";
import { vi } from "vitest";
import { useEventListener } from "./use-event-listener";

describe("useEventListener", () => {
  it("should call handler when the event is triggered", () => {
    const handler = vi.fn();
    const event = new Event("click");
    const ref: RefObject<HTMLDivElement> = { current: document.createElement("div") };

    renderHook(() => useEventListener("click", handler, ref));

    ref.current?.dispatchEvent(event);

    expect(handler).toHaveBeenCalledWith(event);
  });

  it("should not call handler after unmount", () => {
    const handler = vi.fn();
    const event = new Event("click");
    const ref: RefObject<HTMLDivElement> = { current: document.createElement("div") };

    const { unmount } = renderHook(() => useEventListener("click", handler, ref));

    unmount();

    ref.current?.dispatchEvent(event);

    expect(handler).not.toHaveBeenCalled();
  });

  it("adds event listener to window when no element is provided", () => {
    const handler = vi.fn();
    const { unmount } = renderHook(() => useEventListener("click", handler));

    act(() => {
      window.dispatchEvent(new Event("click"));
    });

    expect(handler).toHaveBeenCalled();

    unmount();
  });

  it("adds event listener to provided element", () => {
    const handler = vi.fn();
    const { result, unmount } = renderHook(() => {
      const ref = useRef<HTMLDivElement>(document.createElement("div"));
      useEventListener("click", handler, ref);
      return ref;
    });

    act(() => {
      result.current?.current?.dispatchEvent(new Event("click"));
    });

    expect(handler).toHaveBeenCalled();

    unmount();
  });

  it("removes event listener when component unmounts", () => {
    const handler = vi.fn();
    const { unmount } = renderHook(() => useEventListener("click", handler));

    unmount();

    act(() => {
      window.dispatchEvent(new Event("click"));
    });

    expect(handler).not.toHaveBeenCalled();
  });

  it("updates event listener when handler changes", () => {
    const handler1 = vi.fn();
    const handler2 = vi.fn();
    const { rerender, unmount } = renderHook(({ handler }) => useEventListener("click", handler), {
      initialProps: { handler: handler1 },
    });

    act(() => {
      window.dispatchEvent(new Event("click"));
    });

    expect(handler1).toHaveBeenCalled();

    rerender({ handler: handler2 });

    act(() => {
      window.dispatchEvent(new Event("click"));
    });

    expect(handler2).toHaveBeenCalled();

    unmount();
  });
});
