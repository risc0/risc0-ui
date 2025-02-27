"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import type { ComponentProps } from "react";
import { cn } from "./cn";

export function Progress({ className, value, ...rest }: ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress-root"
      className={cn("relative h-1 w-full overflow-hidden rounded-full bg-primary/20", className)}
      {...rest}
    >
      {value != null ? (
        <ProgressPrimitive.Indicator
          data-slot="progress-indicator"
          className="h-full w-full flex-1 rounded-full bg-primary transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
        />
      ) : (
        <>
          <ProgressPrimitive.Indicator
            data-slot="progress-indicator-1"
            className="absolute h-full w-auto animate-indeterminate1 rounded-full bg-primary"
          />
          <ProgressPrimitive.Indicator
            data-slot="progress-indicator-2"
            className="absolute h-full w-auto animate-indeterminate2 rounded-full bg-primary"
          />
        </>
      )}
    </ProgressPrimitive.Root>
  );
}
