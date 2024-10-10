import { type HTMLAttributes, type TdHTMLAttributes, type ThHTMLAttributes, forwardRef } from "react";
import { cn } from "./cn";

const Table = forwardRef<HTMLTableElement, HTMLAttributes<HTMLTableElement> & { wrapperClassName?: string }>(
  ({ wrapperClassName, className, ...rest }, ref) => (
    <div className={cn("relative w-full overflow-auto", wrapperClassName)}>
      <table ref={ref} className={cn("w-full caption-bottom text-sm", className)} {...rest} />
    </div>
  ),
);

const TableHeader = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...rest }, ref) => <thead ref={ref} className={cn("[&_tr]:border-b", className)} {...rest} />,
);

const TableBody = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...rest }, ref) => (
    <tbody ref={ref} className={cn("[&_tr:last-child]:border-0", className)} {...rest} />
  ),
);

const TableFooter = forwardRef<HTMLTableSectionElement, HTMLAttributes<HTMLTableSectionElement>>(
  ({ className, ...rest }, ref) => (
    <tfoot ref={ref} className={cn("border-t bg-muted/50 [&>tr]:last:border-b-0", className)} {...rest} />
  ),
);

const TableRow = forwardRef<HTMLTableRowElement, HTMLAttributes<HTMLTableRowElement>>(({ className, ...rest }, ref) => (
  <tr
    ref={ref}
    className={cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)}
    {...rest}
  />
));

const TableHead = forwardRef<HTMLTableCellElement, ThHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...rest }, ref) => (
    <th
      ref={ref}
      className={cn(
        "h-10 px-2 text-left align-middle font-bold text-muted-foreground last:overflow-x-hidden [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...rest}
    />
  ),
);

const TableCell = forwardRef<HTMLTableCellElement, TdHTMLAttributes<HTMLTableCellElement>>(
  ({ className, ...rest }, ref) => (
    <td
      ref={ref}
      className={cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className)}
      {...rest}
    />
  ),
);

const TableCaption = forwardRef<HTMLTableCaptionElement, HTMLAttributes<HTMLTableCaptionElement>>(
  ({ className, ...rest }, ref) => (
    <caption ref={ref} className={cn("mt-4 text-muted-foreground text-sm", className)} {...rest} />
  ),
);

Table.displayName = "Table";
TableBody.displayName = "TableBody";
TableCaption.displayName = "TableCaption";
TableCell.displayName = "TableCell";
TableFooter.displayName = "TableFooter";
TableHead.displayName = "TableHead";
TableHeader.displayName = "TableHeader";
TableRow.displayName = "TableRow";

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
