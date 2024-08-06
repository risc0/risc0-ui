import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "./breadcrumb";

describe("Breadcrumb", () => {
  it("renders without crashing", () => {
    render(<Breadcrumb />);
    const breadcrumbElement = screen.getByRole("navigation");
    expect(breadcrumbElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLElement>();
    render(<Breadcrumb ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe("BreadcrumbList", () => {
  it("renders without crashing", () => {
    render(<BreadcrumbList />);
    const breadcrumbListElement = screen.getByRole("list");
    expect(breadcrumbListElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLOListElement>();
    render(<BreadcrumbList ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe("BreadcrumbItem", () => {
  it("renders without crashing", () => {
    render(<BreadcrumbItem />);
    const breadcrumbItemElement = screen.getByRole("listitem");
    expect(breadcrumbItemElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLLIElement>();
    render(<BreadcrumbItem ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe("BreadcrumbLink", () => {
  it("renders without crashing", () => {
    render(<BreadcrumbLink />);
    const breadcrumbLinkElement = screen.getByTestId("breadcrumb-link");
    expect(breadcrumbLinkElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLAnchorElement>();
    render(<BreadcrumbLink ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe("BreadcrumbPage", () => {
  it("renders without crashing", () => {
    render(<BreadcrumbPage />);
    const breadcrumbPageElement = screen.getByRole("link");
    expect(breadcrumbPageElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLLIElement>();
    render(<BreadcrumbPage ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe("BreadcrumbSeparator", () => {
  it("renders without crashing", () => {
    render(<BreadcrumbSeparator />);
    const breadcrumbSeparatorElement = screen.getByRole("presentation", {
      hidden: true,
    });
    expect(breadcrumbSeparatorElement).toBeInTheDocument();
  });
});

describe("BreadcrumbEllipsis", () => {
  it("renders without crashing", () => {
    render(<BreadcrumbEllipsis />);
    const breadcrumbEllipsisElement = screen.getByRole("presentation", { hidden: true });
    expect(breadcrumbEllipsisElement).toBeInTheDocument();
  });
});
