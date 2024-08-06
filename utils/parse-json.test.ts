import { describe, expect, it } from "vitest";
import { parseJson } from "./parse-json";

describe("parseJson", () => {
  it("should return an object when a valid JSON string is passed", () => {
    const jsonString = '{"key":"value"}';
    expect(parseJson(jsonString)).toEqual({ key: "value" });
  });

  it("should return undefined when an invalid JSON string is passed", () => {
    const invalidJsonString = "{key:value}";
    expect(parseJson(invalidJsonString)).toBeUndefined();
  });

  it('should return undefined when "undefined" is passed', () => {
    expect(parseJson("undefined")).toBeUndefined();
  });

  it("should return undefined when null is passed", () => {
    expect(parseJson(null)).toBeUndefined();
  });

  it("should return undefined when an empty string is passed", () => {
    expect(parseJson("")).toBeUndefined();
  });
});
