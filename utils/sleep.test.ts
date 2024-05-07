import { sleep } from "./sleep";

describe("sleep function", () => {
  it("should return a Promise", () => {
    expect(sleep(10)).toBeInstanceOf(Promise);
  });

  it("should resolve after specified time", async () => {
    const time = 10;
    const promise = sleep(time);

    // Advance timers
    global.performance.now = () => time;

    await expect(promise).resolves.toBeUndefined();
  });
});
