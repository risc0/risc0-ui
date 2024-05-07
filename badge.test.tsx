import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";

describe("Badge", () => {
  test("renders without crashing", () => {
    render(<Badge />);
    const badgeElement = screen.getByTestId("badge");
    expect(badgeElement).toBeInTheDocument();
  });

  test("applies correct classes based on variant prop", () => {
    render(<Badge variant="secondary" />);
    const badgeElement = screen.getByTestId("badge");
    expect(badgeElement).toHaveClass("border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80");
  });

  test("forwards additional props to rendered div element", () => {
    render(<Badge data-testid="badge" />);
    const badgeElement = screen.getByTestId("badge");
    expect(badgeElement).toBeInTheDocument();
  });
});
