import { useState, useEffect } from "react";
import { Trash2, Plus } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { tasksTemplate } from "@/data/course";

const STORAGE_KEY = "tasks-builder";

const SEED_TASK = (id) => ({
  id,
  bucket: "backlog",
  title: "",
  owner: "",
  criteria: "",
  done: false,
});

function makeSeed() {
  return [
    SEED_TASK("TASK-001"),
    SEED_TASK("TASK-002"),
    SEED_TASK("TASK-003"),
  ];
}

export function TasksBuilder() {
  const [tasks, setTasks] = useState(() => {
    if (typeof window === "undefined") return makeSeed();
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : makeSeed();
    } catch {
      return makeSeed();
    }
  });

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch {
      /* localStorage may be disabled */
    }
  }, [tasks]);

  const update = (i, patch) =>
    setTasks((arr) => arr.map((t, k) => (k === i ? { ...t, ...patch } : t)));
  const remove = (i) => setTasks((arr) => arr.filter((_, k) => k !== i));
  const add = () => {
    const n = tasks.length + 1;
    setTasks((arr) => [
      ...arr,
      { ...SEED_TASK(`TASK-${String(n + 100).padStart(3, "0")}`) },
    ]);
  };

  const renderBucket = (bucket) => {
    const items = tasks
      .map((t, i) => ({ ...t, _i: i }))
      .filter((t) => t.bucket === bucket);
    if (items.length === 0) return null;
    return (
      <div className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          {bucket}
        </div>
        {items.map((t) => (
          <div
            key={t._i}
            className="grid gap-2 rounded-md border bg-card p-3 sm:grid-cols-12"
          >
            <input
              type="text"
              value={t.id}
              onChange={(e) => update(t._i, { id: e.target.value })}
              placeholder="TASK-001"
              className="rounded-md border bg-background px-2 py-1 font-mono text-xs sm:col-span-2"
            />
            <input
              type="text"
              value={t.title}
              onChange={(e) => update(t._i, { title: e.target.value })}
              placeholder="Title"
              className="rounded-md border bg-background px-2 py-1 text-sm sm:col-span-3"
            />
            <input
              type="text"
              value={t.owner}
              onChange={(e) => update(t._i, { owner: e.target.value })}
              placeholder="Owner"
              className="rounded-md border bg-background px-2 py-1 text-sm sm:col-span-2"
            />
            <input
              type="text"
              value={t.criteria}
              onChange={(e) => update(t._i, { criteria: e.target.value })}
              placeholder="Acceptance criteria"
              className="rounded-md border bg-background px-2 py-1 text-sm sm:col-span-4"
            />
            <select
              value={t.bucket}
              onChange={(e) => update(t._i, { bucket: e.target.value })}
              className="rounded-md border bg-background px-2 py-1 text-xs sm:col-span-1"
            >
              <option value="now">Now</option>
              <option value="next">Next</option>
              <option value="backlog">Backlog</option>
            </select>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => remove(t._i)}
              aria-label="Remove task"
              className="sm:col-span-12 sm:justify-self-end"
            >
              <Trash2 className="h-3.5 w-3.5" />
            </Button>
          </div>
        ))}
      </div>
    );
  };

  const md = (() => {
    const grouped = { now: [], next: [], backlog: [] };
    for (const t of tasks) {
      const bucket = grouped[t.bucket] || grouped.backlog;
      bucket.push(t);
    }
    const lines = [
      "# TASKS.md",
      "",
      "> Backlog for the AI agent and the team. Pick the top 3 every morning.",
      "",
    ];
    if (grouped.now.length) {
      lines.push("## Now (today)", "");
      for (const t of grouped.now) {
        lines.push(
          `- [ ] ${t.id} — ${t.title || "(no title)"} — ${t.owner || "unassigned"} — ${t.criteria || "acceptance criteria TBD"}`
        );
      }
      lines.push("");
    }
    if (grouped.next.length) {
      lines.push("## Next", "");
      for (const t of grouped.next) {
        lines.push(
          `- [ ] ${t.id} — ${t.title || "(no title)"} — ${t.owner || "unassigned"} — ${t.criteria || "acceptance criteria TBD"}`
        );
      }
      lines.push("");
    }
    if (grouped.backlog.length) {
      lines.push("## Backlog", "");
      for (const t of grouped.backlog) {
        lines.push(
          `- [ ] ${t.id} — ${t.title || "(no title)"} — ${t.owner || "unassigned"} — ${t.criteria || "acceptance criteria TBD"}`
        );
      }
      lines.push("");
    }
    return lines.join("\n");
  })();

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">TASKS.md builder</CardTitle>
          <CardDescription>
            Type your tasks above, pick a bucket, and copy the markdown below into
            your repo. {tasks.length} task{tasks.length === 1 ? "" : "s"} so far.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {["now", "next", "backlog"].map((b) => {
            const block = renderBucket(b);
            return block ? <div key={b}>{block}</div> : null;
          })}
          <Button
            variant="outline"
            size="sm"
            onClick={add}
            className="gap-1.5"
          >
            <Plus className="h-3.5 w-3.5" /> Add task
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Preview (TASKS.md)</CardTitle>
          <CardDescription>
            Use the copy button on the code block to drop this into your repo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code={md.trim() || tasksTemplate}
            language="markdown"
            filename="TASKS.md"
          />
        </CardContent>
      </Card>
    </div>
  );
}
