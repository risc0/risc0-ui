"use client";

import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { type ComponentPropsWithoutRef, type ElementRef, forwardRef } from "react";
import cn from "./cn";

const Avatar = forwardRef<
  ElementRef<typeof AvatarPrimitive.Root>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>
>(({ className, ...rest }, ref) => (
  <AvatarPrimitive.Root
    ref={ref}
    className={cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className)}
    {...rest}
  />
));

const AvatarImage = forwardRef<
  ElementRef<typeof AvatarPrimitive.Image>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...rest }, ref) => (
  <AvatarPrimitive.Image ref={ref} className={cn("aspect-square h-full w-full", className)} {...rest} />
));

const AvatarFallback = forwardRef<
  ElementRef<typeof AvatarPrimitive.Fallback>,
  ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...rest }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className)}
    {...rest}
  />
));

Avatar.displayName = AvatarPrimitive.Root.displayName;
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName;
AvatarImage.displayName = AvatarPrimitive.Image.displayName;

export { Avatar, AvatarImage, AvatarFallback };
