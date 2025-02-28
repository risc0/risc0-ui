import type { ComponentProps } from "react";
import { cn } from "./cn";

function Card({ className, ...rest }: ComponentProps<"div">) {
  return <div role="region" className={cn("rounded-xl border bg-card text-card-foreground", className)} {...rest} />;
}

function CardHeader({ className, ...rest }: ComponentProps<"div">) {
  return <div data-testid="card-header" className={cn("flex flex-col space-y-1.5 p-6", className)} {...rest} />;
}

function CardTitle({ className, ...rest }: ComponentProps<"h2">) {
  return <h2 className={cn("font-bold leading-none", className)} {...rest} />;
}

function CardDescription({ className, ...rest }: ComponentProps<"p">) {
  return <p data-testid="card-description" className={cn("text-muted-foreground text-sm", className)} {...rest} />;
}

function CardContent({ className, ...rest }: ComponentProps<"div">) {
  return <div data-testid="card-content" className={cn("p-6 pt-0", className)} {...rest} />;
}

function CardFooter({ className, ...rest }: ComponentProps<"div">) {
  return <div data-testid="card-footer" className={cn("flex items-center p-6 pt-0", className)} {...rest} />;
}

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
