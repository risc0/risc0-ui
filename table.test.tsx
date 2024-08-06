import { render, screen } from "@testing-library/react";
import { createRef } from "react";
import { describe, expect, it } from "vitest";
import { Table, TableBody, TableCaption, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "./table";

describe("Table", () => {
  it("renders without crashing", () => {
    render(<Table />);
    const tableElement = screen.getByRole("table");
    expect(tableElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLTableElement>();
    render(<Table ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe("TableHeader", () => {
  it("renders without crashing", () => {
    render(<TableHeader />);
    const tableHeaderElement = screen.getByRole("rowgroup");
    expect(tableHeaderElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLTableSectionElement>();
    render(<TableHeader ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe("TableBody", () => {
  it("renders without crashing", () => {
    render(<TableBody />);
    const tableBodyElement = screen.getByRole("rowgroup");
    expect(tableBodyElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLTableSectionElement>();
    render(<TableBody ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe("TableFooter", () => {
  it("renders without crashing", () => {
    render(<TableFooter />);
    const tableFooterElement = screen.getByRole("rowgroup");
    expect(tableFooterElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLTableSectionElement>();
    render(<TableFooter ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe("TableHead", () => {
  it("renders without crashing", () => {
    render(<TableHead />);
    const tableHeadElement = screen.getByRole("columnheader");
    expect(tableHeadElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLTableCellElement>();
    render(<TableHead ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe("TableRow", () => {
  it("renders without crashing", () => {
    render(<TableRow />);
    const tableRowElement = screen.getByRole("row");
    expect(tableRowElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLTableRowElement>();
    render(<TableRow ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe("TableCell", () => {
  it("renders without crashing", () => {
    render(<TableCell />);
    const tableCellElement = screen.getByRole("cell");
    expect(tableCellElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLTableCellElement>();
    render(<TableCell ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe("TableCaption", () => {
  it("renders without crashing", () => {
    render(<TableCaption />);
    const tableCaptionElement = screen.getByRole("caption");
    expect(tableCaptionElement).toBeInTheDocument();
  });

  it("forwards ref correctly", () => {
    const ref = createRef<HTMLTableCellElement>();
    render(<TableCaption ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});
