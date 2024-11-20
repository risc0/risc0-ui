import { type TextareaHTMLAttributes, forwardRef } from "react";
import type { Simplify } from "type-fest";
import { cn } from "./cn";

export type TextareaProps = Simplify<
  TextareaHTMLAttributes<HTMLTextAreaElement> & {
    // any other prop goes here
  }
>;

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(({ className, ...rest }, ref) => (
  <textarea
    className={cn(
      "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
      className,
    )}
    ref={ref}
    {...rest}
  />
));

Textarea.displayName = "Textarea";

export { Textarea };
