import { type InputHTMLAttributes, type ReactElement, cloneElement, forwardRef } from "react";
import { cn } from "./cn";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  // any other prop goes here
  startIcon?: ReactElement;
  endIcon?: ReactElement;
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ startIcon, endIcon, className, type, ...rest }, ref) => (
  <div className="relative w-full">
    <input
      type={type}
      className={cn(
        "peer flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors disabled:cursor-not-allowed file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground disabled:opacity-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        startIcon && "pl-9",
        className,
      )}
      ref={ref}
      {...rest}
    />
    {startIcon &&
      cloneElement(startIcon as ReactElement, {
        className: cn(
          "absolute top-2.5 left-3 mr-2 size-4 text-muted-foreground peer-disabled:text-muted peer-focus-visible:text-primary",
          startIcon.props.className,
        ),
      })}
    {endIcon &&
      cloneElement(endIcon as ReactElement, {
        className: cn(
          "absolute top-2.5 right-3 mr-2 size-4 text-muted-foreground peer-disabled:text-muted peer-focus-visible:text-primary",
          endIcon.props.className,
        ),
      })}
  </div>
));

Input.displayName = "Input";

export { Input };
