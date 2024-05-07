import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { Switch } from "./switch";

describe("Switch", () => {
  test("renders without crashing", () => {
    render(<Switch />);
    const switchElement = screen.getByRole("switch");
    expect(switchElement).toBeInTheDocument();
  });

  test("forwards ref correctly", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Switch ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  test("applies correct class names based on state", () => {
    render(<Switch />);
    const switchElement = screen.getByRole("switch");
    expect(switchElement).toHaveClass(
      "peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors disabled:cursor-not-allowed data-[state=checked]:bg-primary data-[state=unchecked]:bg-input disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    );
  });
});
