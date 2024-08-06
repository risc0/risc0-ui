import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Badge } from "./badge";

describe("Badge", () => {
  it("renders without crashing", () => {
    render(<Badge />);
    const badgeElement = screen.getByTestId("badge");
    expect(badgeElement).toBeInTheDocument();
  });

  it("applies correct classes based on variant prop", () => {
    render(<Badge variant="secondary" />);
    const badgeElement = screen.getByTestId("badge");
    expect(badgeElement).toHaveClass("border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80");
  });

  it("forwards additional props to rendered div element", () => {
    render(<Badge data-testid="badge" />);
    const badgeElement = screen.getByTestId("badge");
    expect(badgeElement).toBeInTheDocument();
  });
});
