"use client";

import * as LabelPrimitive from "@radix-ui/react-label";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";
import { cn } from "./cn";

const Label = forwardRef<ElementRef<typeof LabelPrimitive.Root>, ComponentPropsWithoutRef<typeof LabelPrimitive.Root>>(
  ({ className, ...rest }, ref) => (
    <LabelPrimitive.Root
      ref={ref}
      data-testid="label"
      className={cn(
        "font-bold text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
        className,
      )}
      {...rest}
    />
  ),
);

Label.displayName = LabelPrimitive.Root.displayName;

export { Label };
