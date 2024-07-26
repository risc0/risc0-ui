import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "./cn";

const Card = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...rest }, ref) => (
  <div ref={ref} role="region" className={cn("rounded-xl border bg-card text-card-foreground", className)} {...rest} />
));

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...rest }, ref) => (
  <div ref={ref} data-testid="card-header" className={cn("flex flex-col space-y-1.5 p-6", className)} {...rest} />
));

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...rest }, ref) => <h2 ref={ref} className={cn("font-bold leading-none", className)} {...rest} />,
);

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...rest }, ref) => (
    <p ref={ref} data-testid="card-description" className={cn("text-muted-foreground text-sm", className)} {...rest} />
  ),
);

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...rest }, ref) => (
  <div ref={ref} data-testid="card-content" className={cn("p-6 pt-0", className)} {...rest} />
));

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(({ className, ...rest }, ref) => (
  <div ref={ref} data-testid="card-footer" className={cn("flex items-center p-6 pt-0", className)} {...rest} />
));

Card.displayName = "Card";
CardContent.displayName = "CardContent";
CardDescription.displayName = "CardDescription";
CardFooter.displayName = "CardFooter";
CardHeader.displayName = "CardHeader";
CardTitle.displayName = "CardTitle";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
