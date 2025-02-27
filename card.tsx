import type { ComponentProps, HTMLAttributes } from "react";
import { cn } from "./cn";

export function Card({ className, ...rest }: ComponentProps<"div">) {
  return (
    <div
      role="region"
      data-slot="card"
      className={cn("rounded-xl border bg-card text-card-foreground", className)}
      {...rest}
    />
  );
}

export function CardHeader({ className, ...rest }: ComponentProps<"div">) {
  return (
    <div
      data-testid="card-header"
      data-slot="card-header"
      className={cn("flex flex-col space-y-1.5 p-6", className)}
      {...rest}
    />
  );
}

export function CardTitle({ className, ...rest }: ComponentProps<"h2">) {
  return <h2 data-slot="card-title" className={cn("font-bold leading-none", className)} {...rest} />;
}

export function CardDescription({ className, ...rest }: ComponentProps<"p">) {
  return (
    <p
      data-testid="card-description"
      data-slot="card-description"
      className={cn("text-muted-foreground text-sm", className)}
      {...rest}
    />
  );
}

export function CardContent({ className, ...rest }: ComponentProps<"div">) {
  return <div data-testid="card-content" data-slot="card-content" className={cn("p-6 pt-0", className)} {...rest} />;
}

export function CardFooter({ className, ...rest }: ComponentProps<"div">) {
  return (
    <div
      data-testid="card-footer"
      data-slot="card-footer"
      className={cn("flex items-center p-6 pt-0", className)}
      {...rest}
    />
  );
}
