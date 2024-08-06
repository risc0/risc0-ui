import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Progress } from "./progress";

describe("Progress", () => {
  it("renders without crashing", () => {
    render(<Progress />);
    const progressElement = screen.getByRole("progressbar");
    expect(progressElement).toBeInTheDocument();
  });

  it("renders with correct value prop", () => {
    const value = 50;
    render(<Progress value={value} />);
    const progressIndicator = screen.getByRole("progressbar").firstChild; // select the Indicator component
    expect(progressIndicator).toHaveStyle(`transform: translateX(-${100 - value}%)`);
  });

  it("applies correct styles based on value prop", () => {
    const value = 75;
    render(<Progress value={value} />);
    const progressIndicator = screen.getByRole("progressbar").firstChild; // select the Indicator component
    expect(progressIndicator).toHaveStyle(`transform: translateX(-${100 - value}%)`);
  });
});
