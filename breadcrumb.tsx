import { Slot } from "@radix-ui/react-slot";
import { ChevronRightIcon, EllipsisIcon } from "lucide-react";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function Breadcrumb({ ...rest }: ComponentProps<"nav">) {
  return <nav aria-label="breadcrumb" {...rest} />;
}

function BreadcrumbList({ className, ...rest }: ComponentProps<"ol">) {
  return (
    <ol
      className={cn(
        "flex flex-wrap items-center gap-1.5 break-words text-muted-foreground text-sm sm:gap-2.5",
        className,
      )}
      {...rest}
    />
  );
}

function BreadcrumbItem({ className, ...rest }: ComponentProps<"li">) {
  return <li className={cn("inline-flex items-center gap-1.5", className)} {...rest} />;
}

function BreadcrumbLink({ asChild, className, ...rest }: ComponentProps<"a"> & { asChild?: boolean }) {
  const Comp = asChild ? Slot : "a";

  return (
    <Comp
      data-testid="breadcrumb-link"
      className={cn("transition-colors hover:text-foreground", className)}
      {...rest}
    />
  );
}

function BreadcrumbPage({ className, ...rest }: ComponentProps<"span">) {
  return (
    <span
      aria-disabled="true"
      role="link"
      aria-current="page"
      tabIndex={0}
      className={cn("text-foreground", className)}
      {...rest}
    />
  );
}

function BreadcrumbSeparator({ children, className, ...rest }: ComponentProps<"li">) {
  return (
    <li role="presentation" aria-hidden="true" className={cn("[&>svg]:size-3.5", className)} {...rest}>
      {children ?? <ChevronRightIcon />}
    </li>
  );
}

function BreadcrumbEllipsis({ className, ...rest }: ComponentProps<"span">) {
  return (
    <span
      role="presentation"
      aria-hidden="true"
      className={cn("flex h-9 w-9 items-center justify-center", className)}
      {...rest}
    >
      <EllipsisIcon className="h-4 w-4" />
      <span className="sr-only">More</span>
    </span>
  );
}

export {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis,
};
