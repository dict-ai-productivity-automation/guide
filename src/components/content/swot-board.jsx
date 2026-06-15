import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const STORAGE_KEY = "swot-board";

const QUADS = [
  { k: "strengths", title: "Strengths", help: "Internal positives. What the AI does better than today." },
  { k: "weaknesses", title: "Weaknesses", help: "Internal negatives. What still needs a human." },
  { k: "opportunities", title: "Opportunities", help: "External positives. Adjacent problems the same AI could solve." },
  { k: "threats", title: "Threats", help: "External negatives. What could break this in production." },
];

const emptyState = () => ({ strengths: "", weaknesses: "", opportunities: "", threats: "" });

export function SwotBoard({ prompts }) {
  const [state, setState] = useState(() => {
    if (typeof window === "undefined") return emptyState();
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? { ...emptyState(), ...JSON.parse(raw) } : emptyState();
    } catch {
      return emptyState();
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {
      /* localStorage may be disabled */
    }
  }, [state]);

  const update = (k, v) => setState((s) => ({ ...s, [k]: v }));

  const seed = (k) => {
    const items = (prompts?.[k] || []).join("\n- ");
    update(k, state[k] ? state[k] : (items ? `- ${items}` : ""));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">SWOT board</CardTitle>
        <p className="text-sm text-muted-foreground">
          Four quadrants. Click "Seed prompts" in any cell to start it with
          suggested questions — then refine with the model.
        </p>
      </CardHeader>
      <CardContent>
        <div className="grid gap-3 md:grid-cols-2">
          {QUADS.map((q) => (
            <div key={q.k} className="rounded-lg border bg-card p-3">
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <div className="text-sm font-semibold">{q.title}</div>
                  <div className="text-[10px] text-muted-foreground">{q.help}</div>
                </div>
                <button
                  type="button"
                  onClick={() => seed(q.k)}
                  className="rounded-md border px-2 py-1 text-[10px] font-medium hover:bg-accent"
                >
                  Seed prompts
                </button>
              </div>
              <textarea
                value={state[q.k]}
                onChange={(e) => update(q.k, e.target.value)}
                rows={6}
                placeholder={`- ...\n- ...\n\nStart each line with "- " to keep it a clean bullet list.`}
                className="w-full resize-y rounded-md border bg-background p-2 text-sm font-mono"
              />
            </div>
          ))}
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          When you're done, paste this into a markdown file under
          <code className="mx-1 font-mono">/docs/swot.md</code>
          in your repo.
        </p>
      </CardContent>
    </Card>
  );
}
