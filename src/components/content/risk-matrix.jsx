import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const STORAGE_KEY = "risk-matrix";

const LEVELS = ["Negligible", "Minor", "Moderate", "Major", "Severe"];
const LIKELIHOODS = ["Rare", "Unlikely", "Possible", "Likely", "Almost certain"];

const empty = () =>
  Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => null));

const colorFor = (l, i) => {
  // Index 0..24 (likelihood x impact). Lower = greener.
  const v = l * 5 + i;
  if (v <= 4) return "bg-zinc-100 dark:bg-zinc-900";
  if (v <= 9) return "bg-zinc-200 dark:bg-zinc-800";
  if (v <= 14) return "bg-zinc-300 dark:bg-zinc-700";
  if (v <= 19) return "bg-zinc-400 dark:bg-zinc-600 text-zinc-50";
  return "bg-zinc-900 dark:bg-zinc-50 text-zinc-50 dark:text-zinc-900";
};

export function RiskMatrix() {
  const [risks, setRisks] = useState(() => {
    if (typeof window === "undefined") return empty();
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : empty();
    } catch {
      return empty();
    }
  });
  const [draft, setDraft] = useState({ label: "", l: 2, i: 2 });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(risks));
    } catch {
      /* localStorage may be disabled */
    }
  }, [risks]);

  const place = () => {
    if (!draft.label.trim()) return;
    setRisks((r) => {
      const next = r.map((row) => row.slice());
      const cell = next[draft.l][draft.i] || [];
      cell.push(draft.label.trim());
      next[draft.l][draft.i] = cell;
      return next;
    });
    setDraft({ label: "", l: 2, i: 2 });
  };

  const remove = (l, i, idx) => {
    setRisks((r) => {
      const next = r.map((row) => row.slice());
      next[l][i] = next[l][i].filter((_, k) => k !== idx);
      return next;
    });
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">5×5 risk matrix</CardTitle>
        <p className="text-sm text-muted-foreground">
          Add a risk, pick a likelihood (rows) and impact (columns). Click a
          chip to remove it.
        </p>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-wrap items-end gap-2 rounded-lg border bg-muted/30 p-3">
          <div className="flex-1 min-w-[180px]">
            <label className="mb-1 block text-xs font-medium">Risk</label>
            <input
              type="text"
              value={draft.label}
              onChange={(e) => setDraft((d) => ({ ...d, label: e.target.value }))}
              onKeyDown={(e) => e.key === "Enter" && place()}
              placeholder="e.g. Model leaks student PII to cloud"
              className="w-full rounded-md border bg-background px-3 py-1.5 text-sm"
            />
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium">Likelihood</label>
            <select
              value={draft.l}
              onChange={(e) => setDraft((d) => ({ ...d, l: Number(e.target.value) }))}
              className="rounded-md border bg-background px-2 py-1.5 text-sm"
            >
              {LIKELIHOODS.map((l, i) => (
                <option key={l} value={i}>{i + 1} – {l}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1 block text-xs font-medium">Impact</label>
            <select
              value={draft.i}
              onChange={(e) => setDraft((d) => ({ ...d, i: Number(e.target.value) }))}
              className="rounded-md border bg-background px-2 py-1.5 text-sm"
            >
              {LEVELS.map((l, i) => (
                <option key={l} value={i}>{i + 1} – {l}</option>
              ))}
            </select>
          </div>
          <button
            type="button"
            onClick={place}
            className="rounded-md border bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90"
          >
            Add risk
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs">
            <thead>
              <tr>
                <th className="border p-2"></th>
                {LEVELS.map((l, i) => (
                  <th key={l} className="border p-2 text-center">
                    I{i + 1}<br />
                    <span className="font-normal text-muted-foreground">{l}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {LIKELIHOODS.slice().reverse().map((l, ri) => {
                const lIdx = 4 - ri;
                return (
                  <tr key={l}>
                    <th className="border p-2 text-right">
                      L{lIdx + 1}<br />
                      <span className="font-normal text-muted-foreground">{l}</span>
                    </th>
                    {LEVELS.map((_, i) => (
                      <td
                        key={i}
                        className={`min-h-[60px] border p-1 align-top ${colorFor(lIdx, i)}`}
                      >
                        <div className="flex flex-wrap gap-1">
                          {(risks[lIdx][i] || []).map((r, idx) => (
                            <button
                              key={idx}
                              type="button"
                              onClick={() => remove(lIdx, i, idx)}
                              className="rounded bg-background/80 px-1.5 py-0.5 text-[10px] hover:bg-background"
                              title="Click to remove"
                            >
                              {r}
                            </button>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </CardContent>
    </Card>
  );
}
