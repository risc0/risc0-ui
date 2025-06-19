import { type ComponentProps, cloneElement, type ReactElement } from "react";
import { cn } from "./cn";

function Input({
  startIcon,
  endIcon,
  className,
  type,
  wrapperClassName,
  ...rest
}: ComponentProps<"input"> & {
  startIcon?: ReactElement<any>;
  endIcon?: ReactElement<any>;
  wrapperClassName?: string;
}) {
  return (
    <div className={cn("relative", wrapperClassName)}>
      <input
        type={type}
        className={cn(
          "peer flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm transition-colors file:border-0 file:bg-transparent file:text-sm placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-60",
          startIcon && "pl-9",
          endIcon && "pr-9",
          className,
        )}
        {...rest}
      />
      {startIcon &&
        cloneElement(startIcon as ReactElement<any>, {
          className: cn(
            "absolute top-2.5 left-3 size-4 text-muted-foreground peer-focus-visible:text-primary peer-disabled:opacity-60",
            startIcon.props.className,
          ),
        })}
      {endIcon &&
        cloneElement(endIcon as ReactElement<any>, {
          className: cn(
            "absolute top-2.5 right-3 size-4 text-muted-foreground peer-focus-visible:text-primary peer-disabled:opacity-60",
            endIcon.props.className,
          ),
        })}
    </div>
  );
}

export { Input };
