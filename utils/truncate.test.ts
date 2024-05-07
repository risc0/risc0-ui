import { truncate } from "./truncate";

describe("truncate", () => {
  it("should truncate longer textes with a fixed length of characters in the last chunk", () => {
    const text = "1234567890abcdefghijklmnopqrstuvwxyz";
    const chars = 14;
    const result = truncate(text, chars);
    expect(result).toBe("1234567890…wxyz");
  });

  it("should truncate the text when the chars parameter is less than the length of the text", () => {
    const text = "1234567890";
    const chars = 5;
    const result = truncate(text, chars);
    expect(result).toBe("123…90");
  });

  it("should return the full text when the chars parameter is equal to the length of the text", () => {
    const text = "1234567890";
    const chars = 10;
    const result = truncate(text, chars);
    expect(result).toBe(text);
  });

  it("should return the full text when the chars parameter is greater than the length of the text", () => {
    const text = "1234567890";
    const chars = 11;
    const result = truncate(text, chars);
    expect(result).toBe(text);
  });

  it("should handle an text with an odd number of characters", () => {
    const text = "123456789";
    const chars = 5;
    const result = truncate(text, chars);
    expect(result).toBe("123…89");
  });

  it("should handle an text with only one character", () => {
    const text = "1";
    const chars = 1;
    const result = truncate(text, chars);
    expect(result).toBe(text);
  });

  it("should handle an empty text", () => {
    const text = "";
    const chars = 1;
    const result = truncate(text, chars);
    expect(result).toBe(text);
  });
});
