import { render, screen } from '@testing-library/react';
import { createRef } from 'react';
import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
} from './breadcrumb';

describe('Breadcrumb', () => {
  test('renders without crashing', () => {
    render(<Breadcrumb />);
    const breadcrumbElement = screen.getByRole('navigation');
    expect(breadcrumbElement).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLElement>();
    render(<Breadcrumb ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe('BreadcrumbList', () => {
  test('renders without crashing', () => {
    render(<BreadcrumbList />);
    const breadcrumbListElement = screen.getByRole('list');
    expect(breadcrumbListElement).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLOListElement>();
    render(<BreadcrumbList ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe('BreadcrumbItem', () => {
  test('renders without crashing', () => {
    render(<BreadcrumbItem />);
    const breadcrumbItemElement = screen.getByRole('listitem');
    expect(breadcrumbItemElement).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLLIElement>();
    render(<BreadcrumbItem ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe('BreadcrumbLink', () => {
  test('renders without crashing', () => {
    render(<BreadcrumbLink />);
    const breadcrumbLinkElement = screen.getByTestId('breadcrumb-link');
    expect(breadcrumbLinkElement).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLAnchorElement>();
    render(<BreadcrumbLink ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe('BreadcrumbPage', () => {
  test('renders without crashing', () => {
    render(<BreadcrumbPage />);
    const breadcrumbPageElement = screen.getByRole('link');
    expect(breadcrumbPageElement).toBeInTheDocument();
  });

  test('forwards ref correctly', () => {
    const ref = createRef<HTMLLIElement>();
    render(<BreadcrumbPage ref={ref} />);
    expect(ref.current).not.toBeNull();
  });
});

describe('BreadcrumbSeparator', () => {
  test('renders without crashing', () => {
    render(<BreadcrumbSeparator />);
    const breadcrumbSeparatorElement = screen.getByRole('presentation', {
      hidden: true
    });
    expect(breadcrumbSeparatorElement).toBeInTheDocument();
  });
});

describe('BreadcrumbEllipsis', () => {
  test('renders without crashing', () => {
    render(<BreadcrumbEllipsis />);
    const breadcrumbEllipsisElement = screen.getByRole('presentation', {hidden: true});
    expect(breadcrumbEllipsisElement).toBeInTheDocument();
  });
});