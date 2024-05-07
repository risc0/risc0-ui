import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption } from './table';

describe('Table', () => {
  test('renders without crashing', () => {
    render(<Table />);
    const tableElement = screen.getByRole('table');
    expect(tableElement).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLTableElement>(); 
    render(<Table ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe('TableHeader', () => {
  test('renders without crashing', () => {
    render(<TableHeader />);
    const tableHeaderElement = screen.getByRole('rowgroup');
    expect(tableHeaderElement).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLTableSectionElement>(); 
    render(<TableHeader ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe('TableBody', () => {
  test('renders without crashing', () => {
    render(<TableBody />);
    const tableBodyElement = screen.getByRole('rowgroup');
    expect(tableBodyElement).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLTableSectionElement>(); 
    render(<TableBody ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});


describe('TableFooter', () => {
  test('renders without crashing', () => {
    render(<TableFooter />);
    const tableFooterElement = screen.getByRole('rowgroup');
    expect(tableFooterElement).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLTableSectionElement>(); 
    render(<TableFooter ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});


describe('TableHead', () => {
  test('renders without crashing', () => {
    render(<TableHead />);
    const tableHeadElement = screen.getByRole('columnheader');
    expect(tableHeadElement).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLTableCellElement>(); 
    render(<TableHead ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe('TableRow', () => {
  test('renders without crashing', () => {
    render(<TableRow />);
    const tableRowElement = screen.getByRole('row');
    expect(tableRowElement).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLTableRowElement>(); 
    render(<TableRow ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe('TableCell', () => {
  test('renders without crashing', () => {
    render(<TableCell />);
    const tableCellElement = screen.getByRole('cell');
    expect(tableCellElement).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLTableCellElement>(); 
    render(<TableCell ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe('TableCaption', () => {
  test('renders without crashing', () => {
    render(<TableCaption />);
    const tableCaptionElement = screen.getByRole('caption');
    expect(tableCaptionElement).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLTableCellElement>(); 
    render(<TableCaption ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});