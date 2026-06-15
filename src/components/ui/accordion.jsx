import * as React from "react";
import { cn } from "@/lib/utils";

const AccordionContext = React.createContext(null);

const Accordion = React.forwardRef(
  ({ className, defaultValue, value, onValueChange, type = "single", collapsible = true, children, ...props }, ref) => {
    const [internal, setInternal] = React.useState(defaultValue ?? (type === "single" ? "" : []));
    const current = value !== undefined ? value : internal;

    const setValue = React.useCallback(
      (next) => {
        if (value === undefined) {
          setInternal(next);
        }
        onValueChange?.(next);
      },
      [value, onValueChange]
    );

    const ctx = React.useMemo(
      () => ({ value: current, setValue, type, collapsible }),
      [current, setValue, type, collapsible]
    );

    return (
      <AccordionContext.Provider value={ctx}>
        <div ref={ref} className={cn("", className)} {...props}>
          {children}
        </div>
      </AccordionContext.Provider>
    );
  }
);
Accordion.displayName = "Accordion";

const AccordionItem = React.forwardRef(
  ({ className, value, children, ...props }, ref) => {
    const ctx = React.useContext(AccordionContext);
    if (!ctx) throw new Error("AccordionItem must be used inside <Accordion>");

    const open = ctx.type === "single" ? ctx.value === value : (ctx.value || []).includes(value);

    const onToggle = () => {
      if (ctx.type === "single") {
        if (open && !ctx.collapsible) return;
        ctx.setValue(open && ctx.collapsible ? "" : value);
      } else {
        const list = Array.isArray(ctx.value) ? ctx.value : [];
        const next = list.includes(value) ? list.filter((v) => v !== value) : [...list, value];
        ctx.setValue(next);
      }
    };

    return (
      <div
        ref={ref}
        data-state={open ? "open" : "closed"}
        className={cn("border-b last:border-b-0", className)}
        {...props}
      >
        {React.Children.map(children, (child) => {
          if (!child) return null;
          if (child.type.displayName === "AccordionTrigger") {
            return React.cloneElement(child, { open, onToggle, value });
          }
          if (child.type.displayName === "AccordionContent") {
            return React.cloneElement(child, { open, value });
          }
          return child;
        })}
      </div>
    );
  }
);
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, open, onToggle, ...props }, ref) => (
    <button
      ref={ref}
      type="button"
      onClick={onToggle}
      data-state={open ? "open" : "closed"}
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
  ({ className, children, open, ...props }, ref) => (
    <div
      ref={ref}
      role="region"
      data-state={open ? "open" : "closed"}
      className={cn(
        "overflow-hidden text-sm transition-all",
        open ? "max-h-[2000px] pb-4 animate-accordion-down" : "max-h-0",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };