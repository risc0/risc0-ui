import { type InputHTMLAttributes, type ReactElement, cloneElement, forwardRef } from "react";
import type { Simplify } from "type-fest";
import { cn } from "./cn";

export type InputProps = Simplify<
  InputHTMLAttributes<HTMLInputElement> & {
    startIcon?: ReactElement;
    endIcon?: ReactElement;
    wrapperClassName?: string;
  }
>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ startIcon, endIcon, className, type, wrapperClassName, ...rest }, ref) => (
    <div className={cn("relative", wrapperClassName)}>
      <input
        type={type}
        className={cn(
          "peer flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-60",
          startIcon && "pl-9",
          endIcon && "pr-9",
          className,
        )}
        ref={ref}
        {...rest}
      />
      {startIcon &&
        cloneElement(startIcon as ReactElement, {
          className: cn(
            "absolute top-2.5 left-3 size-4 text-muted-foreground peer-focus-visible:text-primary peer-disabled:opacity-60",
            startIcon.props.className,
          ),
        })}
      {endIcon &&
        cloneElement(endIcon as ReactElement, {
          className: cn(
            "absolute top-2.5 right-3 size-4 text-muted-foreground peer-focus-visible:text-primary peer-disabled:opacity-60",
            endIcon.props.className,
          ),
        })}
    </div>
  ),
);

Input.displayName = "Input";

export { Input };
