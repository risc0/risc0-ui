"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";
import { cn } from "./cn";

const Slider = forwardRef<
  ElementRef<typeof SliderPrimitive.Root>,
  ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...rest }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    data-testid="slider-root"
    className={cn("relative flex w-full touch-none select-none items-center", className)}
    {...rest}
  >
    <SliderPrimitive.Track
      data-testid="slider-track"
      className="relative h-1.5 w-full grow cursor-pointer overflow-hidden rounded-full bg-primary/20"
    >
      <SliderPrimitive.Range data-testid="slider-range" className="absolute h-full bg-primary" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb
      data-testid="slider-thumb"
      className="block size-4 cursor-grab rounded-full border border-primary/50 bg-background transition-colors focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring active:cursor-grabbing disabled:pointer-events-none disabled:opacity-50"
    />
  </SliderPrimitive.Root>
));

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
