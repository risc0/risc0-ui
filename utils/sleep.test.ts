import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { sleep } from "./sleep";

describe("sleep", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("should resolve after the specified time", async () => {
    const ms = 1000;
    const promise = sleep(ms);

    vi.advanceTimersByTime(ms);

    await expect(promise).resolves.toBeUndefined();
  });

  it("should not resolve before the specified time", async () => {
    const ms = 2000;
    const promise = sleep(ms);

    vi.advanceTimersByTime(ms - 1);

    const immediateResult = await Promise.race([promise, Promise.resolve("not resolved")]);

    expect(immediateResult).toBe("not resolved");
  });

  it("should work with different time values", async () => {
    const testCases = [0, 100, 500, 1000];

    for (const ms of testCases) {
      const promise = sleep(ms);
      vi.advanceTimersByTime(ms);
      await expect(promise).resolves.toBeUndefined();
    }
  });
});
