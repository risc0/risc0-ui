import { render, screen } from "@testing-library/react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./card";

describe("Card", () => {
  test("renders without crashing", () => {
    render(<Card />);
    const cardElement = screen.getByRole("region");
    expect(cardElement).toBeInTheDocument();
  });

  test("applies correct classes", () => {
    render(<Card />);
    const cardElement = screen.getByRole("region");
    expect(cardElement).toHaveClass("rounded-xl border bg-card text-card-foreground");
  });

  test("correctly applies additional classes", () => {
    const additionalClass = "additional-class";
    render(<Card className={additionalClass} />);
    const cardElement = screen.getByRole("region");
    expect(cardElement).toHaveClass("rounded-xl border bg-card text-card-foreground", additionalClass);
  });

  test("correctly applies additional props", () => {
    const testId = "card";
    render(<Card data-testid={testId} />);
    const cardElement = screen.getByTestId(testId);
    expect(cardElement).toBeInTheDocument();
  });
});

describe("CardTitle", () => {
  test("renders without crashing", () => {
    render(<CardTitle />);
    const cardTitleElement = screen.getByRole("heading");
    expect(cardTitleElement).toBeInTheDocument();
  });

  test("applies correct classes", () => {
    render(<CardTitle />);
    const cardTitleElement = screen.getByRole("heading");
    expect(cardTitleElement).toHaveClass("font-semibold leading-none");
  });

  test("correctly applies additional classes", () => {
    const additionalClass = "additional-class";
    render(<CardTitle className={additionalClass} />);
    const cardTitleElement = screen.getByRole("heading");
    expect(cardTitleElement).toHaveClass("font-semibold leading-none", additionalClass);
  });

  test("correctly applies additional props", () => {
    const testId = "card-title";
    render(<CardTitle data-testid={testId} />);
    const cardTitleElement = screen.getByTestId(testId);
    expect(cardTitleElement).toBeInTheDocument();
  });
});

describe("CardHeader", () => {
  test("renders without crashing", () => {
    render(<CardHeader />);
    const cardHeaderElement = screen.getByTestId("card-header");
    expect(cardHeaderElement).toBeInTheDocument();
  });

  test("applies correct classes", () => {
    render(<CardHeader />);
    const cardHeaderElement = screen.getByTestId("card-header");
    expect(cardHeaderElement).toHaveClass("flex flex-col space-y-1.5 p-6");
  });

  test("correctly applies additional classes", () => {
    const additionalClass = "additional-class";
    render(<CardHeader className={additionalClass} />);
    const cardHeaderElement = screen.getByTestId("card-header");
    expect(cardHeaderElement).toHaveClass("flex flex-col space-y-1.5 p-6", additionalClass);
  });

  test("correctly applies additional props", () => {
    const testId = "card-header";
    render(<CardHeader data-testid={testId} />);
    const cardHeaderElement = screen.getByTestId(testId);
    expect(cardHeaderElement).toBeInTheDocument();
  });
});

describe("CardDescription", () => {
  test("renders without crashing", () => {
    render(<CardDescription />);
    const cardDescriptionElement = screen.getByTestId("card-description");
    expect(cardDescriptionElement).toBeInTheDocument();
  });

  test("applies correct classes", () => {
    render(<CardDescription />);
    const cardDescriptionElement = screen.getByTestId("card-description");
    expect(cardDescriptionElement).toHaveClass("text-muted-foreground text-sm");
  });

  test("correctly applies additional classes", () => {
    const additionalClass = "additional-class";
    render(<CardDescription className={additionalClass} />);
    const cardDescriptionElement = screen.getByTestId("card-description");
    expect(cardDescriptionElement).toHaveClass("text-muted-foreground text-sm", additionalClass);
  });

  test("correctly applies additional props", () => {
    const testId = "card-description";
    render(<CardDescription data-testid={testId} />);
    const cardDescriptionElement = screen.getByTestId(testId);
    expect(cardDescriptionElement).toBeInTheDocument();
  });
});

describe("CardContent", () => {
  test("renders without crashing", () => {
    render(<CardContent />);
    const cardContentElement = screen.getByTestId("card-content");
    expect(cardContentElement).toBeInTheDocument();
  });

  test("applies correct classes", () => {
    render(<CardContent />);
    const cardContentElement = screen.getByTestId("card-content");
    expect(cardContentElement).toHaveClass("p-6 pt-0");
  });

  test("correctly applies additional classes", () => {
    const additionalClass = "additional-class";
    render(<CardContent className={additionalClass} />);
    const cardContentElement = screen.getByTestId("card-content");
    expect(cardContentElement).toHaveClass("p-6 pt-0", additionalClass);
  });

  test("correctly applies additional props", () => {
    const testId = "card-content";
    render(<CardContent data-testid={testId} />);
    const cardContentElement = screen.getByTestId(testId);
    expect(cardContentElement).toBeInTheDocument();
  });
});

describe("CardFooter", () => {
  test("renders without crashing", () => {
    render(<CardFooter />);
    const cardFooterElement = screen.getByTestId("card-footer");
    expect(cardFooterElement).toBeInTheDocument();
  });

  test("applies correct classes", () => {
    render(<CardFooter />);
    const cardFooterElement = screen.getByTestId("card-footer");
    expect(cardFooterElement).toHaveClass("flex items-center p-6 pt-0");
  });

  test("correctly applies additional classes", () => {
    const additionalClass = "additional-class";
    render(<CardFooter className={additionalClass} />);
    const cardFooterElement = screen.getByTestId("card-footer");
    expect(cardFooterElement).toHaveClass("flex items-center p-6 pt-0", additionalClass);
  });

  test("correctly applies additional props", () => {
    const testId = "card-footer";
    render(<CardFooter data-testid={testId} />);
    const cardFooterElement = screen.getByTestId(testId);
    expect(cardFooterElement).toBeInTheDocument();
  });
});
