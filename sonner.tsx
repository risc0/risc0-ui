"use client";

import { useTheme } from "next-themes";
// @ts-ignore -- not sure why this is not working
import { Toaster as Sonner } from "sonner";
import { cn } from "./cn";

export function Toaster({ ...props }) {
  const { theme = "system" } = useTheme();

  return (
    <Sonner
      theme={theme}
      className="toaster group border-"
      toastOptions={{
        classNames: {
          toast:
            "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:border-1 group-[.toaster]:shadow-sm",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
        },
      }}
      cn={cn}
      {...props}
    />
  );
}
