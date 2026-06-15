import * as React from "react";
import { cn } from "@/lib/utils";

const Accordion = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("", className)} {...props} />
));
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef(
  ({ className, open, onToggle, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("border-b last:border-b-0", className)}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (!child) return null;
        if (child.type.displayName === "AccordionTrigger") {
          return React.cloneElement(child, { open, onToggle });
        }
        if (child.type.displayName === "AccordionContent") {
          return React.cloneElement(child, { open });
        }
        return child;
      })}
    </div>
  )
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, open, onToggle, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      onClick={onToggle}
      className={cn(
        "flex flex-1 items-center justify-between py-4 text-left text-sm font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      {...props}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={cn(
          "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200",
          open ? "rotate-180" : ""
        )}
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef(
  ({ children, open, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden text-sm transition-all",
        open ? "max-h-[2000px] pb-4 animate-accordion-down" : "max-h-0"
      )}
      {...props}
    >
      {children}
    </div>
  )
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
