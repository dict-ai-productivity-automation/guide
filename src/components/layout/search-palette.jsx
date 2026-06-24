import { useEffect, useMemo, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import { days, glossary } from "@/data/course";

function buildIndex() {
  const items = [];
  for (const d of days) {
    items.push({
      kind: "page",
      title: `Day ${d.number} — ${d.title}`,
      subtitle: d.summary,
      to: `/${d.id}`,
      keywords: [d.title, d.summary, ...d.modules.map((m) => m.title)],
    });
    for (const m of d.modules) {
      items.push({
        kind: "module",
        title: `M${m.number} — ${m.title}`,
        subtitle: `Day ${d.number} · ${m.timebox}${m.challenge ? ` · Challenge: ${m.challenge}` : ""}`,
        to: `/${d.id}#${m.id}`,
        keywords: [m.title, m.deliverable, m.activity, ...(m.topics || [])],
      });
    }
  }
  const pages = [
    { title: "Overview", to: "/" },
    { title: "My progress (Dashboard)", to: "/dashboard" },
    { title: "Schedule", to: "/schedule" },
    { title: "At-a-glance (printable)", to: "/glance" },
    { title: "Prerequisites & Setup", to: "/setup" },
    { title: "Assessment & Ranking", to: "/assessment" },
    { title: "Responsible AI", to: "/responsible-ai" },
    { title: "Glossary", to: "/glossary" },
    { title: "FAQ & Troubleshooting", to: "/faq" },
    { title: "Resources", to: "/resources" },
    { title: "Shark Tank rubric (PDF, Day 5)", to: "/shark-tank-rubric" },
  ];
  for (const p of pages) {
    items.push({ kind: "page", title: p.title, subtitle: "", to: p.to, keywords: [p.title] });
  }
  for (const g of glossary) {
    items.push({ kind: "term", title: g.term, subtitle: g.def, to: "/glossary", keywords: [g.term, g.def] });
  }
  return items;
}

export function SearchPalette({ open, onClose }) {
  const [q, setQ] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  const index = useMemo(() => buildIndex(), []);

  useEffect(() => {
    if (open) {
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const results = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return index.slice(0, 12);
    return index
      .map((it) => {
        const hay = (it.title + " " + it.subtitle + " " + (it.keywords || []).join(" ")).toLowerCase();
        const idx = hay.indexOf(term);
        if (idx === -1) return null;
        return { it, score: idx };
      })
      .filter(Boolean)
      .sort((a, b) => a.score - b.score)
      .slice(0, 12)
      .map((x) => x.it);
  }, [q, index]);

  const safeActive = Math.min(active, Math.max(0, results.length - 1));

  const choose = (item) => {
    if (!item) return;
    onClose();
    navigate(item.to);
  };

  const onKey = (e) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive((a) => Math.min(results.length - 1, a + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive((a) => Math.max(0, a - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      choose(results[safeActive]);
    } else if (e.key === "Escape") {
      onClose();
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/40 p-4 pt-20"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="w-full max-w-xl overflow-hidden rounded-xl border bg-card shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-2 border-b px-3 py-2">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input
            ref={inputRef}
            value={q}
            onChange={(e) => setQ(e.target.value)}
            onKeyDown={onKey}
            placeholder="Search modules, days, terms…"
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
          />
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-muted-foreground hover:bg-accent"
            aria-label="Close search"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <ul className="max-h-[60vh] overflow-y-auto p-1">
          {results.length === 0 ? (
            <li className="p-6 text-center text-sm text-muted-foreground">
              No results for "{q}".
            </li>
          ) : (
            results.map((r, i) => (
              <li key={`${r.kind}-${r.to}-${i}`}>
                <button
                  type="button"
                  onClick={() => choose(r)}
                  onMouseEnter={() => setActive(i)}
                  className={
                    "flex w-full flex-col gap-0.5 rounded-md px-3 py-2 text-left text-sm " +
                    (i === safeActive ? "bg-accent" : "hover:bg-accent/50")
                  }
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{r.title}</span>
                    <span className="rounded border px-1.5 py-0.5 text-[9px] font-semibold uppercase text-muted-foreground">
                      {r.kind}
                    </span>
                  </div>
                  {r.subtitle && (
                    <div className="line-clamp-1 text-xs text-muted-foreground">
                      {r.subtitle}
                    </div>
                  )}
                </button>
              </li>
            ))
          )}
        </ul>
        <div className="flex items-center justify-between border-t px-3 py-1.5 text-[10px] text-muted-foreground">
          <div className="flex gap-2">
            <kbd className="rounded border px-1.5 font-mono">↑↓</kbd>
            <span>navigate</span>
            <kbd className="rounded border px-1.5 font-mono">↵</kbd>
            <span>open</span>
            <kbd className="rounded border px-1.5 font-mono">esc</kbd>
            <span>close</span>
          </div>
          <div>{results.length} results</div>
        </div>
      </div>
    </div>
  );
}
