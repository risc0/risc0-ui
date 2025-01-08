"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";
import { cn } from "./cn";

const Progress = forwardRef<
  ElementRef<typeof ProgressPrimitive.Root>,
  ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...rest }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn("relative h-1 w-full overflow-hidden rounded-full bg-primary/20", className)}
    {...rest}
  >
    {value != null ? (
      <ProgressPrimitive.Indicator
        className="h-full w-full flex-1 rounded-full bg-primary transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
      />
    ) : (
      <>
        <ProgressPrimitive.Indicator className="absolute h-full w-auto animate-indeterminate1 rounded-full bg-primary" />
        <ProgressPrimitive.Indicator className="absolute h-full w-auto animate-indeterminate2 rounded-full bg-primary" />
      </>
    )}
  </ProgressPrimitive.Root>
));

Progress.displayName = ProgressPrimitive.Root.displayName;

export { Progress };
