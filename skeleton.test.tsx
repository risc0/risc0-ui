import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Skeleton } from "./skeleton";

describe("Skeleton", () => {
  it("renders without crashing", () => {
    render(<Skeleton />);
    const skeletonElement = screen.getByRole("presentation");
    expect(skeletonElement).toBeInTheDocument();
  });

  it("has correct default classes", () => {
    render(<Skeleton />);
    const skeletonElement = screen.getByRole("presentation");
    expect(skeletonElement).toHaveClass("animate-pulse rounded-md bg-primary/10");
  });

  it("correctly applies additional classes", () => {
    const additionalClass = "additional-class";
    render(<Skeleton className={additionalClass} />);
    const skeletonElement = screen.getByRole("presentation");
    expect(skeletonElement).toHaveClass("animate-pulse rounded-md bg-primary/10", additionalClass);
  });

  it("correctly applies additional props", () => {
    const testId = "skeleton";
    render(<Skeleton data-testid={testId} />);
    const skeletonElement = screen.getByTestId(testId);
    expect(skeletonElement).toBeInTheDocument();
  });
});
