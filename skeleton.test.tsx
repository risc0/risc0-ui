import { render, screen } from "@testing-library/react";
import { Skeleton } from "./skeleton";

describe("Skeleton", () => {
  test("renders without crashing", () => {
    render(<Skeleton />);
    const skeletonElement = screen.getByRole("presentation");
    expect(skeletonElement).toBeInTheDocument();
  });

  test("has correct default classes", () => {
    render(<Skeleton />);
    const skeletonElement = screen.getByRole("presentation");
    expect(skeletonElement).toHaveClass("animate-pulse rounded-md bg-primary/10");
  });

  test("correctly applies additional classes", () => {
    const additionalClass = "additional-class";
    render(<Skeleton className={additionalClass} />);
    const skeletonElement = screen.getByRole("presentation");
    expect(skeletonElement).toHaveClass("animate-pulse rounded-md bg-primary/10", additionalClass);
  });

  test("correctly applies additional props", () => {
    const testId = "skeleton";
    render(<Skeleton data-testid={testId} />);
    const skeletonElement = screen.getByTestId(testId);
    expect(skeletonElement).toBeInTheDocument();
  });
});
