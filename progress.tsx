"use client";

import * as ProgressPrimitive from "@radix-ui/react-progress";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function Progress({ className, value, ...rest }: ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
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
  );
}

export { Progress };
