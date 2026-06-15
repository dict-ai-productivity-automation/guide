import { useMemo, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { CodeBlock } from "@/components/ui/code-block";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

const ROLES = [
  "Senior policy analyst",
  "Product manager",
  "Senior software engineer",
  "UX designer",
  "Executive coach",
  "Data scientist",
];

const FORMATS = [
  "3 bullets, max 25 words each",
  "A markdown table with columns A, B, C",
  "JSON object with keys: summary, risks, next_steps",
  "5-step action plan with owner and due date",
  "One-page brief: TL;DR, Findings, Recommendations",
];

const SECTIONS = [
  { k: "role", label: "Role", help: "Who should the model act as?" },
  { k: "task", label: "Task", help: "What do you want it to do? (start with a verb)" },
  { k: "context", label: "Context", help: "Background the model needs to know" },
  { k: "constraints", label: "Constraints", help: "What it must NOT do" },
  { k: "format", label: "Format", help: "Shape of the output" },
];

const DEFAULTS = {
  role: ROLES[0],
  task: "Summarise the attached product roadmap for the engineering leadership team.",
  context: "The team is non-technical. The roadmap covers Q1-Q3. Highlight delays and risks.",
  constraints: "No marketing fluff. Cite slide numbers when possible. Max 300 words.",
  format: FORMATS[0],
};

export function PromptBuilder() {
  const [active, setActive] = useState("role");
  const [state, setState] = useState(DEFAULTS);

  const set = (k, v) => setState((s) => ({ ...s, [k]: v }));

  const prompt = useMemo(
    () =>
      `Role: ${state.role}\nTask: ${state.task}\nContext: ${state.context}\nConstraints: ${state.constraints}\nOutput Format: ${state.format}`,
    [state]
  );

  const current = SECTIONS.find((s) => s.k === active);

  return (
    <div className="rounded-xl border bg-card p-5">
      <div className="mb-4 flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
          <Sparkles className="h-4 w-4" />
        </div>
        <div>
          <h4 className="text-sm font-semibold">Interactive Prompt Builder</h4>
          <p className="text-xs text-muted-foreground">
            Build a prompt with the RTCF framework used in Module 3.
          </p>
        </div>
      </div>

      <div className="mb-4 flex flex-wrap gap-1.5 rounded-lg bg-muted p-1">
        {SECTIONS.map((s) => (
          <button
            key={s.k}
            type="button"
            onClick={() => setActive(s.k)}
            className={cn(
              "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
              active === s.k
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {s.label}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        <label className="text-xs font-medium text-muted-foreground">
          {current.help}
        </label>
        {active === "role" && (
          <div className="flex flex-wrap gap-2">
            {ROLES.map((r) => (
              <button
                key={r}
                type="button"
                onClick={() => set("role", r)}
                className={cn(
                  "rounded-md border px-3 py-1.5 text-xs font-medium transition-colors",
                  state.role === r
                    ? "border-primary bg-primary text-primary-foreground"
                    : "hover:bg-accent"
                )}
              >
                {r}
              </button>
            ))}
          </div>
        )}
        {active === "format" && (
          <div className="flex flex-wrap gap-2">
            {FORMATS.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => set("format", f)}
                className={cn(
                  "rounded-md border px-3 py-1.5 text-xs font-medium transition-colors",
                  state.format === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "hover:bg-accent"
                )}
              >
                {f}
              </button>
            ))}
          </div>
        )}
        {(active === "task" || active === "context" || active === "constraints") && (
          <Textarea
            value={state[active]}
            onChange={(e) => set(active, e.target.value)}
            rows={4}
          />
        )}
      </div>

      <div className="mt-5">
        <div className="mb-2 flex items-center justify-between">
          <h5 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Generated prompt
          </h5>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setState(DEFAULTS)}
          >
            <RefreshCw className="h-3 w-3" /> Reset
          </Button>
        </div>
        <CodeBlock code={prompt} language="text" filename="prompt.txt" />
      </div>
    </div>
  );
}
