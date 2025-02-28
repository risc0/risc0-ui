"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import type { ComponentProps } from "react";
import { cn } from "./cn";

function Avatar({ className, ...rest }: ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-testid="avatar"
      className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
      {...rest}
    />
  );
}

function AvatarImage({ className, ...rest }: ComponentProps<typeof AvatarPrimitive.Image>) {
  return <AvatarPrimitive.Image className={cn("aspect-square h-full w-full", className)} {...rest} />;
}

function AvatarFallback({ className, ...rest }: ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-testid="avatar-fallback"
      className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
      {...rest}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };
