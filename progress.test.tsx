import { render, screen } from "@testing-library/react";
import { Progress } from "./progress";

describe("Progress", () => {
  test("renders without crashing", () => {
    render(<Progress />);
    const progressElement = screen.getByRole("progressbar");
    expect(progressElement).toBeInTheDocument();
  });

  test("renders with correct value prop", () => {
    const value = 50;
    render(<Progress value={value} />);
    const progressIndicator = screen.getByRole("progressbar").firstChild; // select the Indicator component
    expect(progressIndicator).toHaveStyle(`transform: translateX(-${100 - value}%)`);
  });

  test("applies correct styles based on value prop", () => {
    const value = 75;
    render(<Progress value={value} />);
    const progressIndicator = screen.getByRole("progressbar").firstChild; // select the Indicator component
    expect(progressIndicator).toHaveStyle(`transform: translateX(-${100 - value}%)`);
  });
});
