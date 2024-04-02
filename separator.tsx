"use client";

import * as SeparatorPrimitive from "@radix-ui/react-separator";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";
import cn from "./cn";

const Separator = forwardRef<
  ElementRef<typeof SeparatorPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(({ className, orientation = "horizontal", decorative = true, ...rest }, ref) => (
  <SeparatorPrimitive.Root
    ref={ref}
    decorative={decorative}
    orientation={orientation}
    className={cn("shrink-0 bg-border", orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]", className)}
    {...rest}
  />
));

Separator.displayName = SeparatorPrimitive.Root.displayName;

export default Separator;
