import type { ComponentProps } from "react";
import { cn } from "./cn";

function Table({
  wrapperClassName,
  className,
  ...rest
}: ComponentProps<"table"> & {
  wrapperClassName?: string;
}) {
  return (
    <div className={cn("relative w-full overflow-auto", wrapperClassName)}>
      <table className={cn("w-full caption-bottom text-sm", className)} {...rest} />
    </div>
  );
}

function TableHeader({ className, ...rest }: ComponentProps<"thead">) {
  return <thead className={cn("[&_tr]:border-b", className)} {...rest} />;
}

function TableBody({ className, ...rest }: ComponentProps<"tbody">) {
  return <tbody className={cn("[&_tr:last-child]:border-0", className)} {...rest} />;
}

function TableFooter({ className, ...rest }: ComponentProps<"tfoot">) {
  return <tfoot className={cn("border-t bg-muted/50 last:[&>tr]:border-b-0", className)} {...rest} />;
}

function TableRow({ className, ...rest }: ComponentProps<"tr">) {
  return (
    <tr
      className={cn("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted", className)}
      {...rest}
    />
  );
}

function TableHead({ className, ...rest }: ComponentProps<"th">) {
  return (
    <th
      className={cn(
        "h-10 px-2 text-left align-middle font-bold text-muted-foreground last:overflow-x-hidden [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]",
        className,
      )}
      {...rest}
    />
  );
}

function TableCell({ className, ...rest }: ComponentProps<"td">) {
  return (
    <td
      className={cn("p-2 align-middle [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-[2px]", className)}
      {...rest}
    />
  );
}

function TableCaption({ className, ...rest }: ComponentProps<"caption">) {
  return <caption className={cn("mt-4 text-muted-foreground text-sm", className)} {...rest} />;
}

export { Table, TableHeader, TableBody, TableFooter, TableHead, TableRow, TableCell, TableCaption };
