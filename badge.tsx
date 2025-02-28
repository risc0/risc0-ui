import { type VariantProps, cva } from "class-variance-authority";
import type { HTMLAttributes } from "react";
import type { Simplify } from "type-fest";
import { cn } from "./cn";

const badgeVariants = cva(
  "inline-flex items-center rounded-md border px-2.5 py-0.5 font-bold text-xs transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export type BadgeProps = Simplify<
  HTMLAttributes<HTMLDivElement> &
    VariantProps<typeof badgeVariants> & {
      // any other prop goes here
    }
>;

function Badge({ className, variant, ...rest }: BadgeProps) {
  return <div data-testid="badge" {...rest} className={cn(badgeVariants({ variant }), className)} />;
}

export { Badge, badgeVariants };
