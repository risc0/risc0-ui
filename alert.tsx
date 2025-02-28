import { type VariantProps, cva } from "class-variance-authority";
import type { ComponentProps } from "react";
import { cn } from "./cn";

const alertVariants = cva(
  "relative w-full rounded-lg border bg-background px-4 py-3 text-foreground text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "",
        destructive: "border-destructive/50 dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Alert({ className, variant, ...rest }: ComponentProps<"div"> & VariantProps<typeof alertVariants>) {
  return <div role="alert" className={cn(alertVariants({ variant }), className)} {...rest} />;
}

function AlertTitle({ className, ...rest }: ComponentProps<"div">) {
  return <div className={cn("mb-1 font-bold leading-none", className)} {...rest} />;
}

function AlertDescription({ className, ...rest }: ComponentProps<"div">) {
  return <div className={cn("text-sm [&_p]:leading-relaxed", className)} {...rest} />;
}

export { alertVariants, Alert, AlertTitle, AlertDescription };
