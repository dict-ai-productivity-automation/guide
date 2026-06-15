import { useState } from "react";
import { HelpCircle, ChevronDown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { faqs } from "@/data/course";
import { cn } from "@/lib/utils";

export function Faq() {
  const [open, setOpen] = useState(null);
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <Badge variant="default" className="mb-3 gap-1.5">
          <HelpCircle className="h-3 w-3" /> FAQ
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Troubleshooting & FAQs
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          The questions we get most during the install days and the first
          model-comparison challenge. Click a question to expand.
        </p>
      </div>

      <div className="rounded-lg border bg-card divide-y">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={i}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-4 p-4 text-left hover:bg-accent/30"
              >
                <span className="text-sm font-medium">{f.q}</span>
                <ChevronDown
                  className={cn(
                    "h-4 w-4 shrink-0 text-muted-foreground transition-transform",
                    isOpen ? "rotate-180" : ""
                  )}
                />
              </button>
              {isOpen && (
                <div className="border-t bg-muted/30 p-4 text-sm text-muted-foreground">
                  {f.a}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="rounded-lg border bg-card p-4 text-sm">
        <div className="font-semibold">Still stuck?</div>
        <p className="mt-1 text-muted-foreground">
          Ask the facilitator or open an issue in the
          {" "}
          <a
            className="underline"
            href="https://github.com/dict-ai-productivity-automation"
          >
            bootcamp organization
          </a>
          .
        </p>
      </div>
    </div>
  );
}
