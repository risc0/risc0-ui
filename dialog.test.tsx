import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "./dialog";

describe("DialogHeader", () => {
  it("renders without crashing", () => {
    render(
      <Dialog open>
        <DialogHeader />
      </Dialog>,
    );
    const dialogHeaderElement = screen.getByTestId("dialog-header");
    expect(dialogHeaderElement).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <Dialog open>
        <DialogHeader>children</DialogHeader>
      </Dialog>,
    );
    const dialogContentElement = screen.getByText("children");
    expect(dialogContentElement).toBeInTheDocument();
  });
});

describe("DialogTitle", () => {
  it("renders without crashing", () => {
    render(
      <Dialog open>
        <DialogTitle />
      </Dialog>,
    );
    const dialogTitleElement = screen.getByTestId("dialog-title");
    expect(dialogTitleElement).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <Dialog open>
        <DialogTitle>children</DialogTitle>
      </Dialog>,
    );
    const dialogTitleElement = screen.getByText("children");
    expect(dialogTitleElement).toBeInTheDocument();
  });
});

describe("DialogDescription", () => {
  it("renders without crashing", () => {
    render(
      <Dialog open>
        <DialogDescription />
      </Dialog>,
    );
    const dialogDescriptionElement = screen.getByTestId("dialog-description");
    expect(dialogDescriptionElement).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <Dialog open>
        <DialogDescription>children</DialogDescription>
      </Dialog>,
    );
    const dialogDescriptionElement = screen.getByText("children");
    expect(dialogDescriptionElement).toBeInTheDocument();
  });
});

describe("DialogFooter", () => {
  it("renders without crashing", () => {
    render(
      <Dialog open>
        <DialogFooter />
      </Dialog>,
    );
    const dialogFooterElement = screen.getByTestId("dialog-footer");
    expect(dialogFooterElement).toBeInTheDocument();
  });

  it("renders children", () => {
    render(
      <Dialog open>
        <DialogFooter>children</DialogFooter>
      </Dialog>,
    );
    const dialogFooterElement = screen.getByText("children");
    expect(dialogFooterElement).toBeInTheDocument();
  });
});

describe("DialogContent", () => {
  it("renders without crashing", () => {
    render(
      <Dialog open>
        <DialogContent />
      </Dialog>,
    );
    const dialogContentElement = screen.getByTestId("dialog-content");
    expect(dialogContentElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLDivElement>();
    render(
      <Dialog open>
        <DialogContent ref={ref} />
      </Dialog>,
    );
    expect(ref.current).not.toBeNull();
  });

  it("renders DialogPrimitive.Close button", () => {
    render(
      <Dialog open>
        <DialogContent />
      </Dialog>,
    );
    const closeButtonElement = screen.getByRole("button");
    expect(closeButtonElement).toBeInTheDocument();
  });

  it("renders DialogOverlay", () => {
    render(
      <Dialog open>
        <DialogContent />
      </Dialog>,
    );
    const dialogOverlayElement = screen.getByTestId("dialog-overlay");
    expect(dialogOverlayElement).toBeInTheDocument();
  });
});
