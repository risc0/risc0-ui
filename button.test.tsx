import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Button } from "./button";

describe("Button", () => {
  it("renders without crashing", () => {
    render(<Button />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLButtonElement>();
    render(<Button ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it("renders children correctly", () => {
    render(<Button>Test Button</Button>);
    const buttonElement = screen.getByText("Test Button");
    expect(buttonElement).toBeInTheDocument();
  });

  it("renders startIcon correctly", () => {
    const Icon = () => <span data-testid="start-icon" />;
    render(<Button startIcon={<Icon />} />);
    const iconElement = screen.getByTestId("start-icon");
    expect(iconElement).toBeInTheDocument();
  });

  it("renders endIcon correctly", () => {
    const Icon = () => <span data-testid="end-icon" />;
    render(<Button endIcon={<Icon />} />);
    const iconElement = screen.getByTestId("end-icon");
    expect(iconElement).toBeInTheDocument();
  });

  it("renders Loader2Icon when isLoading is true", () => {
    render(<Button isLoading />);
    const loaderElement = screen.getByTestId("loader-icon");
    expect(loaderElement).toBeInTheDocument();
  });

  it("renders Loader2Icon, but hidden when isLoading is false", () => {
    render(<Button isLoading={false} />);
    const loaderElement = screen.getByTestId("loader-icon");
    expect(loaderElement).toBeInTheDocument();
    expect(loaderElement).toHaveAttribute("aria-hidden", "true");
  });
});
