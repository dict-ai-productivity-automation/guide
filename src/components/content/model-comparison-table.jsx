import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const STORAGE_KEY = "model-comparison-table";

const empty = (rows, cols) =>
  Array.from({ length: rows }, () => Array.from({ length: cols }, () => ""));

export function ModelComparisonTable({ models, criteria }) {
  const cols = models.length;
  const rows = criteria.length;
  const initial = empty(rows, cols);

  const [data, setData] = useState(() => {
    if (typeof window === "undefined") return initial;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return initial;
      const parsed = JSON.parse(raw);
      if (parsed.length !== rows || parsed[0]?.length !== cols) return initial;
      return parsed;
    } catch {
      return initial;
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch {
      /* localStorage may be disabled */
    }
  }, [data]);

  const update = (r, c, v) => {
    setData((prev) => {
      const next = prev.map((row) => row.slice());
      next[r][c] = v;
      return next;
    });
  };

  const exportMarkdown = () => {
    const lines = [
      "# Model comparison",
      "",
      `> Generated ${new Date().toISOString().slice(0, 10)}`,
      "",
      "| Criterion | " + models.map((m) => m.name).join(" | ") + " |",
      "| --- |" + models.map(() => " --- ").join("|") + "|",
      ...data.map((row, i) => `| ${criteria[i].name} | ${row.map((c) => c || "—").join(" | ")} |`),
    ];
    return lines.join("\n");
  };

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(exportMarkdown());
    } catch {
      /* clipboard may be blocked */
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-base">Model comparison table</CardTitle>
        <p className="text-sm text-muted-foreground">
          Fill in each cell with your observation. Then copy the table as markdown
          into your <code className="font-mono">model-comparison.md</code> deliverable.
        </p>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr>
                <th className="p-2 text-left font-semibold">Criterion</th>
                {models.map((m) => (
                  <th key={m.name} className="p-2 text-left font-semibold align-top">
                    <div>{m.name}</div>
                    <div className="text-[10px] font-normal text-muted-foreground">
                      {m.where} · {m.size}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {criteria.map((c, r) => (
                <tr key={c.name} className="border-t">
                  <td className="p-2 align-top">
                    <div className="font-medium">{c.name}</div>
                    <div className="text-[10px] text-muted-foreground">{c.help}</div>
                  </td>
                  {models.map((m, cIdx) => (
                    <td key={m.name} className="p-2 align-top">
                      <textarea
                        value={data[r][cIdx]}
                        onChange={(e) => update(r, cIdx, e.target.value)}
                        rows={3}
                        placeholder="Score 1-5 + 1 line note…"
                        className="w-full resize-y rounded-md border bg-background p-2 text-xs"
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={copy}
            className="rounded-md border bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground hover:opacity-90"
          >
            Copy as markdown
          </button>
          <button
            type="button"
            onClick={() => setData(empty(rows, cols))}
            className="rounded-md border px-3 py-1.5 text-xs font-medium hover:bg-accent"
          >
            Clear
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
