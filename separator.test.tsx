import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Separator } from "./separator";

describe("Separator", () => {
  it("renders without crashing", () => {
    render(<Separator />);
    const separatorElement = screen.getByRole("separator");
    expect(separatorElement).toBeInTheDocument();
  });

  it("renders with default props", () => {
    render(<Separator />);
    const separatorElement = screen.getByRole("separator");
    expect(separatorElement).toHaveClass("shrink-0 bg-border h-[1px] w-full");
  });

  it("renders correctly with custom props", () => {
    render(<Separator orientation="vertical" />);
    const separatorElement = screen.getByRole("separator");
    expect(separatorElement).toHaveClass("shrink-0 bg-border h-full w-[1px]");
  });
});
