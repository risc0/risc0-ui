import type { HTMLAttributes } from "react";
import cn from "./shared/cn";

export default function Skeleton({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("animate-pulse rounded-md bg-primary/10", className)} {...rest} />;
}
