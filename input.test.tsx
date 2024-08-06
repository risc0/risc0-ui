import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Input } from "./input";

describe("Input", () => {
  it("renders without crashing", () => {
    render(<Input />);
    const inputElement = screen.getByRole("textbox");
    expect(inputElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLInputElement>();
    render(<Input ref={ref} />);
    expect(ref.current).not.toBeNull();
  });

  it("renders startIcon correctly", () => {
    const StartIcon = () => <div data-testid="start-icon" />;
    render(<Input startIcon={<StartIcon />} />);
    const startIconElement = screen.getByTestId("start-icon");
    expect(startIconElement).toBeInTheDocument();
  });

  it("renders endIcon correctly", () => {
    const EndIcon = () => <div data-testid="end-icon" />;
    render(<Input endIcon={<EndIcon />} />);
    const endIconElement = screen.getByTestId("end-icon");
    expect(endIconElement).toBeInTheDocument();
  });
});
