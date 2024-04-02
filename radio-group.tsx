"use client";

import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";
import cn from "./shared/cn";

const RadioGroup = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Root>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...rest }, ref) => (
  <RadioGroupPrimitive.Root className={cn("grid gap-2", className)} {...rest} ref={ref} />
));

const RadioGroupItem = forwardRef<
  ElementRef<typeof RadioGroupPrimitive.Item>,
  ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...rest }, ref) => (
  <RadioGroupPrimitive.Item
    ref={ref}
    className={cn(
      "aspect-square size-4 rounded-full border border-gray-300 text-primary disabled:cursor-not-allowed aria-checked:border-primary aria-checked:bg-primary disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      className,
    )}
    {...rest}
  >
    <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
      <svg height="6" width="6">
        <circle r="3" cx="3" cy="3" className="fill-background" />
      </svg>
    </RadioGroupPrimitive.Indicator>
  </RadioGroupPrimitive.Item>
));

RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

export { RadioGroup, RadioGroupItem };
