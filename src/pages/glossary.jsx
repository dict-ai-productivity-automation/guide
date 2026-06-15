import { useMemo, useState } from "react";
import { Search, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { glossary } from "@/data/course";

export function Glossary() {
  const [q, setQ] = useState("");
  const filtered = useMemo(() => {
    const term = q.trim().toLowerCase();
    if (!term) return glossary;
    return glossary.filter(
      (g) =>
        g.term.toLowerCase().includes(term) ||
        g.def.toLowerCase().includes(term)
    );
  }, [q]);

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <Badge variant="default" className="mb-3 gap-1.5">
          <BookOpen className="h-3 w-3" /> Glossary
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Glossary
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Every term that appears in the bootcamp, with a one-line definition.
          Tap a card to copy the term.
        </p>
      </div>

      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search terms… e.g. RAG, Ollama, hallucination"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="pl-9"
        />
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-muted-foreground">No terms match "{q}".</p>
      ) : (
        <div className="grid gap-3 md:grid-cols-2">
          {filtered.map((g) => (
            <button
              key={g.term}
              type="button"
              onClick={() => navigator.clipboard?.writeText(g.term)}
              className="rounded-lg border bg-card p-4 text-left transition-colors hover:bg-accent/40"
            >
              <div className="text-sm font-semibold">{g.term}</div>
              <p className="mt-1 text-sm text-muted-foreground">{g.def}</p>
            </button>
          ))}
        </div>
      )}

      <p className="text-xs text-muted-foreground">
        Tip: click a card to copy the term. There are {glossary.length} terms.
      </p>
    </div>
  );
}
