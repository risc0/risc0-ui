import type { HTMLAttributes } from "react";
import { cn } from "./cn";

function Skeleton({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div role="presentation" className={cn("animate-pulse rounded-md bg-primary/10", className)} {...rest} />;
}

export { Skeleton };
