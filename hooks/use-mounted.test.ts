import { renderHook } from "@testing-library/react-hooks";
import { describe, expect, it } from "vitest";
import { useMounted } from "./use-mounted";

describe("useMounted", () => {
  it("should return true after the component has been mounted", () => {
    const { result, waitForNextUpdate } = renderHook(() => useMounted());

    waitForNextUpdate().then(() => {
      expect(result.current).toBe(true);
    });
  });
});
