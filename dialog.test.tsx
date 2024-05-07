import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./dialog";

describe("DialogHeader", () => {
  test("renders without crashing", () => {
    render(<Dialog open><DialogHeader /></Dialog>);
    const dialogHeaderElement = screen.getByTestId("dialog-header");
    expect(dialogHeaderElement).toBeInTheDocument();
  });

  test("renders children", () => {
    render(<Dialog open><DialogHeader>children</DialogHeader></Dialog>);
    const dialogContentElement = screen.getByText("children");
    expect(dialogContentElement).toBeInTheDocument();
  });
});

describe("DialogTitle", () => {
  test("renders without crashing", () => {
    render(<Dialog open><DialogTitle /></Dialog>);
    const dialogTitleElement = screen.getByTestId("dialog-title");
    expect(dialogTitleElement).toBeInTheDocument();
  });

  test("renders children", () => {
    render(<Dialog open><DialogTitle>children</DialogTitle></Dialog>);
    const dialogTitleElement = screen.getByText("children");
    expect(dialogTitleElement).toBeInTheDocument();
  });
});

describe("DialogDescription", () => {
  test("renders without crashing", () => {
    render(<Dialog open><DialogDescription /></Dialog>);
    const dialogDescriptionElement = screen.getByTestId("dialog-description");
    expect(dialogDescriptionElement).toBeInTheDocument();
  });

  test("renders children", () => {
    render(<Dialog open><DialogDescription>children</DialogDescription></Dialog>);
    const dialogDescriptionElement = screen.getByText("children");
    expect(dialogDescriptionElement).toBeInTheDocument();
  });
});

describe("DialogFooter", () => {
  test("renders without crashing", () => {
    render(<Dialog open><DialogFooter /></Dialog>);
    const dialogFooterElement = screen.getByTestId("dialog-footer");
    expect(dialogFooterElement).toBeInTheDocument();
  });

  test("renders children", () => {
    render(<Dialog open><DialogFooter>children</DialogFooter></Dialog>);
    const dialogFooterElement = screen.getByText("children");
    expect(dialogFooterElement).toBeInTheDocument();
  });
});

describe("DialogContent", () => {
  test("renders without crashing", () => {
    render(<Dialog open><DialogContent /></Dialog>);
    const dialogContentElement = screen.getByTestId("dialog-content");
    expect(dialogContentElement).toBeInTheDocument();
  });

  test("forwards ref correctly", () => {
    const ref = createRef<HTMLDivElement>();
    render(<Dialog open><DialogContent ref={ref} /></Dialog>);
    expect(ref.current).not.toBeNull();
  });

  test("renders DialogPrimitive.Close button", () => {
    render(<Dialog open><DialogContent /></Dialog>);
    const closeButtonElement = screen.getByRole("button");
    expect(closeButtonElement).toBeInTheDocument();
  });

  test("renders DialogOverlay", () => {
    render(<Dialog open><DialogContent /></Dialog>);
    const dialogOverlayElement = screen.getByTestId("dialog-overlay");
    expect(dialogOverlayElement).toBeInTheDocument();
  });
});