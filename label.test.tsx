import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Label } from "./label";

describe("Label", () => {
  it("renders without crashing", () => {
    render(<Label />);
    const labelElement = screen.getByTestId("label");
    expect(labelElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLLabelElement>();
    render(<Label ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
