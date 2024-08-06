import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Alert, AlertDescription, AlertTitle } from "./alert";

describe("Alert", () => {
  it("returns default class names when no variant is provided", () => {
    render(<Alert />);
    const alertElement = screen.getByRole("alert");
    expect(alertElement.className).toContain(
      "relative w-full rounded-lg border bg-background px-4 py-3 text-foreground text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
    );
  });

  it("returns correct class names when destructive variant is provided", () => {
    render(<Alert variant="destructive" />);
    const alertElement = screen.getByRole("alert");
    expect(alertElement.className).toContain(
      "relative w-full rounded-lg border bg-background px-4 py-3 text-foreground text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg~*]:pl-7 border-destructive/50 dark:border-destructive [&>svg]:text-destructive",
    );
  });
});

describe("AlertTitle", () => {
  it("renders the correct text when children prop is provided", () => {
    render(<AlertTitle>Test Title</AlertTitle>);
    const titleElement = screen.getByText("Test Title");
    expect(titleElement).toBeInTheDocument();
  });

  it("has correct default class names", () => {
    render(<AlertTitle>Test Title</AlertTitle>);
    const titleElement = screen.getByText("Test Title");
    expect(titleElement.className).toContain("mb-1 font-bold leading-none");
  });

  it("properly forwards classnames", () => {
    render(<AlertTitle className="text-xl">Test Title</AlertTitle>);
    const titleElement = screen.getByText("Test Title");
    expect(titleElement.className).toContain("text-xl");
  });
});

describe("AlertDescription", () => {
  it("renders the correct text when children prop is provided", () => {
    render(<AlertDescription>Test Description</AlertDescription>);
    const descriptionElement = screen.getByText("Test Description");
    expect(descriptionElement).toBeInTheDocument();
  });

  it("has correct default class names", () => {
    render(<AlertDescription>Test Description</AlertDescription>);
    const descriptionElement = screen.getByText("Test Description");
    expect(descriptionElement.className).toContain("text-sm [&_p]:leading-relaxed");
  });

  it("properly forwards classnames", () => {
    render(<AlertDescription className="text-xl">Test Description</AlertDescription>);
    const descriptionElement = screen.getByText("Test Description");
    expect(descriptionElement.className).toContain("text-xl");
  });
});
