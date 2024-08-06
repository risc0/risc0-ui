import { describe, expect, it } from "vitest";
import { joinWords } from "./join-words";

describe("joinWords", () => {
  it("should return an empty string if the input is empty", () => {
    expect(joinWords("")).toBe("");
  });

  it("should return an empty string if the input is null", () => {
    // @ts-expect-error -- tests
    expect(joinWords(null)).toBe("");
  });

  it("should return an empty string if the input is undefined", () => {
    // @ts-expect-error -- tests
    expect(joinWords(undefined)).toBe("");
  });

  it("should return a string with words joined by a space if the input is a string with multiple words", () => {
    expect(joinWords("HelloWorldIt'sMe")).toBe("Hello World It's Me");
    expect(joinWords("Hello_World_It's_Me")).toBe("Hello World It's Me");
    expect(joinWords("Hello-World-It's-Me")).toBe("Hello World It's Me");
    expect(joinWords("Hello/World/It's/Me")).toBe("Hello World It's Me");
    expect(joinWords("Hello\\World\\It's\\Me")).toBe("Hello World It's Me");
    expect(joinWords("Hello.World.It's.Me")).toBe("Hello World It's Me");
    expect(joinWords("Hello,World,It's,Me")).toBe("Hello World It's Me");
  });

  it("should return the same string if the input is a string with one word", () => {
    expect(joinWords("Hello")).toBe("Hello");
  });

  it("should return the same string if the passed word is all uppercase", () => {
    expect(joinWords("HELLO")).toBe("HELLO");
  });

  it("should return the same string if the input is part of the DONT_FORMAT_THESE_WORDS array", () => {
    expect(joinWords("insn_cycles")).toBe("INSN cycles");
    expect(joinWords("Linux-nvidia_rtx_a5000")).toBe("Linux NVIDIA RTX a5000");
  });
});
