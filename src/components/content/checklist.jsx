import { useState, useEffect } from "react";
import { Checkbox } from "@/components/ui/checkbox";

export function Checklist({ items, storageKey, title = "Checklist" }) {
  const [checked, setChecked] = useState(() => {
    if (typeof window === "undefined") return {};
    try {
      return JSON.parse(window.localStorage.getItem(storageKey) || "{}");
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(storageKey, JSON.stringify(checked));
    } catch {
      /* localStorage may be disabled */
    }
  }, [checked, storageKey]);

  const toggle = (idx) => {
    setChecked((c) => ({ ...c, [idx]: !c[idx] }));
  };

  const completed = Object.values(checked).filter(Boolean).length;
  const total = items.length;
  const pct = total ? Math.round((completed / total) * 100) : 0;

  return (
    <div className="rounded-lg border bg-card p-5">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold">{title}</h4>
        <span className="text-xs text-muted-foreground">
          {completed} / {total} ({pct}%)
        </span>
      </div>
      <div className="mb-4 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
        <div
          className="h-full bg-primary transition-all"
          style={{ width: `${pct}%` }}
        />
      </div>
      <ul className="space-y-2.5">
        {items.map((item, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <Checkbox
              checked={!!checked[idx]}
              onCheckedChange={() => toggle(idx)}
              className="mt-0.5"
            />
            <label
              onClick={() => toggle(idx)}
              className={`text-sm leading-relaxed cursor-pointer select-none ${
                checked[idx] ? "line-through text-muted-foreground" : ""
              }`}
            >
              {item}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
