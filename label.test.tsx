import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { Label } from "./label";

describe("Label", () => {
  test("renders without crashing", () => {
    render(<Label />);
    const labelElement = screen.getByTestId("label");
    expect(labelElement).toBeInTheDocument();
  });

  test("forwards ref correctly", () => {
    const ref = createRef<HTMLLabelElement>();
    render(<Label ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
