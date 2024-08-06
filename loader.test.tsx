import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Loader } from "./loader";

describe("Loader", () => {
  it("renders image without crashing", () => {
    render(<Loader />);
    const loaderImage = screen.getByAltText("Loading");
    expect(loaderImage).toBeInTheDocument();
  });

  it("displays default loading text when no loadingText prop is provided", () => {
    render(<Loader />);
    const loadingText = screen.getByText("Loading…");
    expect(loadingText).toBeInTheDocument();
  });

  it("displays custom loading text when loadingText prop is provided", () => {
    const customText = "Custom loading text";
    render(<Loader loadingText={customText} />);
    const loadingText = screen.getByText(customText);
    expect(loadingText).toBeInTheDocument();
  });
});
