import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Checkbox } from "./checkbox";

describe("Checkbox", () => {
  it("renders without crashing", () => {
    render(<Checkbox />);
    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Checkbox ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it("applies correct class names", () => {
    render(<Checkbox className="test-class" />);
    const checkboxElement = screen.getByRole("checkbox");
    expect(checkboxElement).toHaveClass("test-class");
  });

  it("renders CheckIcon when checked", () => {
    render(<Checkbox checked />);
    const checkIconElement = screen.getByTestId("check-icon");
    expect(checkIconElement).toBeInTheDocument();
  });
});
