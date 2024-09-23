/* c8 ignore start */
import React from "react";
import { Button } from "../button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../tooltip";

export function Default() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This is a tooltip</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function WithDelay() {
  return (
    <TooltipProvider delayDuration={500}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me (delayed)</Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>This tooltip appears after a delay</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export function CustomPosition() {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">Hover me (top)</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>This tooltip appears on top</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
