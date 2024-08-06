import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Required } from "./required";

describe("Required", () => {
  it("renders without crashing", () => {
    render(<Required />);
    const requiredElement = screen.getByText("*");
    expect(requiredElement).toBeInTheDocument();
  });

  it("displays an asterisk (*)", () => {
    render(<Required />);
    const requiredElement = screen.getByText("*");
    expect(requiredElement.textContent).toBe("*");
  });

  it('has a class name of "text-destructive"', () => {
    render(<Required />);
    const requiredElement = screen.getByText("*");
    expect(requiredElement).toHaveClass("text-destructive");
  });
});
