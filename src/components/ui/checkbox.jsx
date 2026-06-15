import * as React from "react";
import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef(
  ({ className, checked, onCheckedChange, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      role="checkbox"
      aria-checked={checked}
      onClick={() => onCheckedChange?.(!checked)}
      className={cn(
        "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-colors",
        checked
          ? "bg-primary text-primary-foreground"
          : "bg-background hover:bg-accent",
        className
      )}
      {...props}
    >
      {checked && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-3.5 w-3.5 mx-auto"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      )}
    </button>
  )
);
Checkbox.displayName = "Checkbox";

export { Checkbox };
