"use client";

import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function TooltipContent({
  className,
  sideOffset = 4,
  disableAnimation = false,
  ...rest
}: ComponentProps<typeof TooltipPrimitive.Content> & {
  disableAnimation?: boolean;
}) {
  return (
    <TooltipPrimitive.Content
      sideOffset={sideOffset}
      className={cn(
        "z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-primary-foreground text-xs dark:bg-white",
        !disableAnimation &&
          "fade-in-0 zoom-in-95 data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 animate-in data-[state=closed]:animate-out",
        className,
      )}
      {...rest}
    />
  );
}

function TooltipArrow({ className, ...rest }: ComponentProps<typeof TooltipPrimitive.Arrow>) {
  return <TooltipPrimitive.Arrow className={cn("dark:fill-white", className)} {...rest} />;
}

const TooltipProvider = TooltipPrimitive.Provider;
const Tooltip = TooltipPrimitive.Root;
const TooltipPortal = TooltipPrimitive.Portal;
const TooltipTrigger = TooltipPrimitive.Trigger;

export { Tooltip, TooltipArrow, TooltipTrigger, TooltipContent, TooltipProvider, TooltipPortal };
