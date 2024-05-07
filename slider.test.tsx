import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { Slider } from "./slider";

describe("Slider", () => {
  test("renders without crashing", () => {
    render(<Slider />);
    const sliderElement = screen.getByRole("slider");
    expect(sliderElement).toBeInTheDocument();
  });

  test("forwards ref correctly", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Slider ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  test("applies correct class names to root element", () => {
    render(<Slider />);
    const sliderElement = screen.getByTestId("slider-root");
    expect(sliderElement).toHaveClass("relative flex w-full touch-none select-none items-center");
  });

  test("applies correct class names to Track element", () => {
    render(<Slider />);
    const trackElement = screen.getByTestId("slider-track");
    expect(trackElement).toHaveClass("relative h-1.5 w-full grow overflow-hidden rounded-full bg-primary/20");
  });

  test("applies correct class names to Range element", () => {
    render(<Slider />);
    const rangeElement = screen.getByTestId("slider-range");
    expect(rangeElement).toHaveClass("absolute h-full bg-primary");
  });

  test("applies correct class names to Thumb element", () => {
    render(<Slider />);
    const thumbElement = screen.getByTestId("slider-thumb");
    expect(thumbElement).toHaveClass(
      "block size-4 rounded-full border border-primary/50 bg-background shadow transition-colors disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
    );
  });
});
