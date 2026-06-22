import { useState, useEffect, useMemo, useRef } from "react";
import {
  Trash2,
  Plus,
  ChevronUp,
  ChevronDown,
  ListChecks,
  RotateCcw,
  ArrowUpToLine,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { CodeBlock } from "@/components/ui/code-block";

const STORAGE_KEY = "tasks-builder";

const BUCKETS = [
  { key: "now", label: "Now", hint: "Today — pick the top 3 every morning." },
  { key: "next", label: "Next", hint: "This week. Promoted from Backlog when ready." },
  { key: "backlog", label: "Backlog", hint: "Someday. Groom weekly." },
];

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
    { ...SEED_TASK("TASK-001"), bucket: "now", title: "Set up Ollama endpoint", owner: "Alex", criteria: "Server returns 200 on POST /summarise" },
    { ...SEED_TASK("TASK-002"), bucket: "now", title: "Wire OpenCode to local model", owner: "Alex", criteria: "opencode run uses 127.0.0.1:11434" },
    { ...SEED_TASK("TASK-003"), bucket: "now", title: "Sample transcript fixture", owner: "Bea", criteria: "3 .txt files, 5–10 min each" },
    { ...SEED_TASK("TASK-010"), bucket: "next", title: "Build /summarise handler", owner: "Bea", criteria: "Validates input, returns 4 bullets + 1 action item" },
    { ...SEED_TASK("TASK-011"), bucket: "backlog", title: "Add dark mode toggle", owner: "—", criteria: "Persists to localStorage" },
  ];
}

function nextId(tasks) {
  const used = new Set(
    tasks.map((t) => {
      const m = /^TASK-(\d+)/.exec(t.id || "");
      return m ? Number(m[1]) : 0;
    })
  );
  let n = 1;
  while (used.has(n)) n += 1;
  return `TASK-${String(n).padStart(3, "0")}`;
}

export function TasksBuilder() {
  const [tasks, setTasks] = useState(() => {
    if (typeof window === "undefined") return makeSeed();
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      return Array.isArray(parsed) && parsed.length ? parsed : makeSeed();
    } catch {
      return makeSeed();
    }
  });
  const [filter, setFilter] = useState("all");
  const [quickAdd, setQuickAdd] = useState("");
  const [savedAt, setSavedAt] = useState(null);
  const quickRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => {
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
        setSavedAt(new Date());
      } catch {
        /* localStorage may be disabled */
      }
    }, 150);
    return () => clearTimeout(t);
  }, [tasks]);

  const update = (i, patch) =>
    setTasks((arr) => arr.map((t, k) => (k === i ? { ...t, ...patch } : t)));
  const remove = (i) => setTasks((arr) => arr.filter((_, k) => k !== i));
  const add = (partial = {}) => {
    setTasks((arr) => [
      ...arr,
      { ...SEED_TASK(nextId(arr)), bucket: "backlog", ...partial },
    ]);
  };
  const moveBucket = (i, dir) => {
    const order = ["now", "next", "backlog"];
    setTasks((arr) =>
      arr.map((t, k) => {
        if (k !== i) return t;
        const idx = order.indexOf(t.bucket);
        const next = Math.max(0, Math.min(order.length - 1, idx + dir));
        return { ...t, bucket: order[next] };
      })
    );
  };
  const promote = (i) => update(i, { done: true, bucket: "backlog" });
  const toggleDone = (i) => update(i, { done: !tasks[i].done });

  const submitQuickAdd = () => {
    const title = quickAdd.trim();
    if (!title) return;
    add({ title, bucket: "backlog" });
    setQuickAdd("");
    quickRef.current?.focus();
  };

  const reset = () => {
    if (typeof window !== "undefined") {
      window.localStorage.removeItem(STORAGE_KEY);
    }
    setTasks(makeSeed());
  };

  const counts = useMemo(() => {
    const c = { all: tasks.length, now: 0, next: 0, backlog: 0, done: 0 };
    for (const t of tasks) {
      if (t.done) c.done += 1;
      if (c[t.bucket] !== undefined) c[t.bucket] += 1;
    }
    return c;
  }, [tasks]);

  const filtered = useMemo(() => {
    if (filter === "all") return tasks.map((t, i) => ({ ...t, _i: i }));
    if (filter === "done") return tasks.filter((t) => t.done).map((t, i) => ({ ...t, _i: i }));
    return tasks.filter((t) => t.bucket === filter && !t.done).map((t, i) => ({ ...t, _i: i }));
  }, [tasks, filter]);

  const md = useMemo(() => {
    const grouped = { now: [], next: [], backlog: [], done: [] };
    for (const t of tasks) {
      const k = t.done ? "done" : (grouped[t.bucket] ? t.bucket : "backlog");
      grouped[k].push(t);
    }
    const lines = [
      "# TASKS.md",
      "",
      "> Backlog for the AI agent and the team. Pick the top 3 every morning.",
      "",
    ];
    const sections = [
      ["now", "Now (today)", false],
      ["next", "Next", false],
      ["backlog", "Backlog", false],
      ["done", "Done", true],
    ];
    for (const [key, heading, done] of sections) {
      const items = grouped[key];
      if (!items.length) continue;
      lines.push(`## ${heading}`, "");
      for (const t of items) {
        const box = done ? "x" : " ";
        const suffix = done
          ? ` — finished ${new Date().toISOString().slice(0, 10)}`
          : ` — ${t.owner || "unassigned"} — ${t.criteria || "acceptance criteria TBD"}`;
        lines.push(`- [${box}] ${t.id} — ${t.title || "(no title)"}${suffix}`);
      }
      lines.push("");
    }
    return lines.join("\n").trim();
  }, [tasks]);

  const completionPct = tasks.length
    ? Math.round((counts.done / tasks.length) * 100)
    : 0;

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div>
              <CardTitle className="flex items-center gap-2 text-base">
                <ListChecks className="h-4 w-4" />
                TASKS.md builder
              </CardTitle>
              <CardDescription>
                Build a backlog that an AI agent can execute. State auto-saves
                to this browser.
              </CardDescription>
            </div>
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="font-mono tabular-nums">
                {counts.done} / {tasks.length} done
              </span>
              {savedAt && (
                <span aria-live="polite" className="font-mono tabular-nums">
                  · saved {savedAt.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
                </span>
              )}
            </div>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-secondary">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${completionPct}%` }}
            />
          </div>
        </CardHeader>

        <CardContent className="space-y-5">
          <form
            className="flex flex-col gap-2 sm:flex-row sm:items-center"
            onSubmit={(e) => {
              e.preventDefault();
              submitQuickAdd();
            }}
          >
            <Input
              ref={quickRef}
              type="text"
              value={quickAdd}
              onChange={(e) => setQuickAdd(e.target.value)}
              placeholder="Quick add — type a task title and press Enter"
              className="flex-1"
              aria-label="Quick add task title"
            />
            <Button type="submit" size="sm" className="gap-1.5 sm:w-auto">
              <Plus className="h-3.5 w-3.5" /> Add to Backlog
            </Button>
          </form>

          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Filter tasks by bucket">
            {[
              { k: "all", label: "All" },
              { k: "now", label: "Now" },
              { k: "next", label: "Next" },
              { k: "backlog", label: "Backlog" },
              { k: "done", label: "Done" },
            ].map((f) => {
              const active = filter === f.k;
              const n = counts[f.k];
              return (
                <button
                  key={f.k}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setFilter(f.k)}
                  className={
                    "inline-flex items-center gap-2 rounded-md border px-3 py-1.5 text-xs font-medium transition-colors " +
                    (active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "bg-background hover:bg-accent")
                  }
                >
                  {f.label}
                  <span
                    className={
                      "rounded px-1.5 py-0.5 font-mono text-[10px] tabular-nums " +
                      (active ? "bg-primary-foreground/20" : "bg-muted")
                    }
                  >
                    {n}
                  </span>
                </button>
              );
            })}
          </div>

          {filtered.length === 0 ? (
            <EmptyState filter={filter} onAdd={submitQuickAdd} />
          ) : (
            <BucketList
              tasks={filtered}
              filter={filter}
              onUpdate={update}
              onRemove={remove}
              onMove={moveBucket}
              onToggleDone={toggleDone}
              onPromote={promote}
            />
          )}

          <div className="flex flex-wrap items-center justify-between gap-2 border-t pt-4">
            <Button variant="outline" size="sm" onClick={reset} className="gap-1.5">
              <RotateCcw className="h-3.5 w-3.5" /> Reset to seed
            </Button>
            <p className="text-xs text-muted-foreground">
              Tip: tap <kbd className="rounded border bg-muted px-1 font-mono text-[10px]">↑</kbd>{" "}
              on a task to promote it from Backlog → Next → Now.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-base">
            <ArrowUpToLine className="h-4 w-4" />
            Preview (TASKS.md)
          </CardTitle>
          <CardDescription>
            Copy this straight into <code className="font-mono">TASKS.md</code> at the root of your repo.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <CodeBlock
            code={md || "Add at least one task to see the preview."}
            language="markdown"
            filename="TASKS.md"
          />
        </CardContent>
      </Card>
    </div>
  );
}

function BucketList({ tasks, filter, onUpdate, onRemove, onMove, onToggleDone, onPromote }) {
  if (filter === "all") {
    return (
      <div className="space-y-6">
        {BUCKETS.map((b) => {
          const items = tasks.filter((t) => t.bucket === b.key && !t.done);
          if (!items.length) return null;
          return (
            <BucketSection
              key={b.key}
              heading={b.label}
              hint={b.hint}
              tasks={items}
              onUpdate={onUpdate}
              onRemove={onRemove}
              onMove={onMove}
              onToggleDone={onToggleDone}
              onPromote={onPromote}
            />
          );
        })}
        {tasks.some((t) => t.done) && (
          <BucketSection
            key="done"
            heading="Done"
            hint="Strike-through when shipped."
            tasks={tasks.filter((t) => t.done)}
            onUpdate={onUpdate}
            onRemove={onRemove}
            onMove={onMove}
            onToggleDone={onToggleDone}
            onPromote={onPromote}
            done
          />
        )}
      </div>
    );
  }
  if (filter === "done") {
    const done = tasks.filter((t) => t.done);
    if (!done.length) return <EmptyState filter={filter} />;
    return (
      <BucketSection
        heading="Done"
        hint="Strike-through when shipped."
        tasks={done}
        onUpdate={onUpdate}
        onRemove={onRemove}
        onMove={onMove}
        onToggleDone={onToggleDone}
        onPromote={onPromote}
        done
      />
    );
  }
  const items = tasks.filter((t) => t.bucket === filter);
  if (!items.length) return <EmptyState filter={filter} />;
  const meta = BUCKETS.find((b) => b.key === filter);
  return (
    <BucketSection
      heading={meta.label}
      hint={meta.hint}
      tasks={items}
      onUpdate={onUpdate}
      onRemove={onRemove}
      onMove={onMove}
      onToggleDone={onToggleDone}
      onPromote={onPromote}
    />
  );
}

function BucketSection({ heading, hint, tasks, onUpdate, onRemove, onMove, onToggleDone, onPromote, done = false }) {
  return (
    <section className="space-y-2">
      <div className="flex items-baseline justify-between">
        <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
          {heading}
        </h4>
        <span className="font-mono text-[10px] tabular-nums text-muted-foreground">
          {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
        </span>
      </div>
      <p className="text-xs text-muted-foreground">{hint}</p>
      <ul className="space-y-2">
        {tasks.map((t) => (
          <TaskRow
            key={t._i}
            task={t}
            onUpdate={onUpdate}
            onRemove={onRemove}
            onMove={onMove}
            onToggleDone={onToggleDone}
            onPromote={onPromote}
            done={done}
          />
        ))}
      </ul>
    </section>
  );
}

function TaskRow({ task, onUpdate, onRemove, onMove, onToggleDone, onPromote, done }) {
  const order = ["now", "next", "backlog"];
  const idx = order.indexOf(task.bucket);
  const canPromote = !done && idx > 0;
  const canDemote = !done && idx < order.length - 1;
  const empty = !task.title && !task.owner && !task.criteria;

  return (
    <li
      className={
        "rounded-lg border bg-card p-3 transition-colors " +
        (done ? "opacity-70" : "") +
        (empty ? " border-dashed" : "")
      }
    >
      <div className="flex flex-wrap items-center gap-2">
        <Checkbox
          checked={!!task.done}
          onCheckedChange={() => onToggleDone(task._i)}
          aria-label={task.done ? "Mark as not done" : "Mark as done"}
        />
        <Input
          type="text"
          value={task.id}
          onChange={(e) => onUpdate(task._i, { id: e.target.value })}
          aria-label="Task ID"
          className="h-8 w-28 font-mono text-xs"
        />
        <BucketBadge bucket={task.bucket} />
        <div className="ml-auto flex items-center gap-1">
          <IconButton
            label="Move up (promote bucket)"
            disabled={!canPromote}
            onClick={() => onMove(task._i, -1)}
          >
            <ChevronUp className="h-3.5 w-3.5" />
          </IconButton>
          <IconButton
            label="Move down (demote bucket)"
            disabled={!canDemote}
            onClick={() => onMove(task._i, +1)}
          >
            <ChevronDown className="h-3.5 w-3.5" />
          </IconButton>
          {!done && (
            <IconButton
              label="Mark as done"
              onClick={() => onPromote(task._i)}
              disabled={!task.title}
            >
              <ListChecks className="h-3.5 w-3.5" />
            </IconButton>
          )}
          <IconButton label="Remove task" onClick={() => onRemove(task._i)}>
            <Trash2 className="h-3.5 w-3.5" />
          </IconButton>
        </div>
      </div>

      <div className="mt-2 grid gap-2 sm:grid-cols-12">
        <Input
          type="text"
          value={task.title}
          onChange={(e) => onUpdate(task._i, { title: e.target.value })}
          placeholder="Task title — verb first, e.g. 'Set up Ollama endpoint'"
          aria-label="Task title"
          className={
            "h-9 text-sm font-medium sm:col-span-12 " +
            (done || task.done ? "text-muted-foreground line-through" : "")
          }
        />
        <Input
          type="text"
          value={task.owner}
          onChange={(e) => onUpdate(task._i, { owner: e.target.value })}
          placeholder="Owner"
          aria-label="Owner"
          className="h-9 text-sm sm:col-span-3"
        />
        <Input
          type="text"
          value={task.criteria}
          onChange={(e) => onUpdate(task._i, { criteria: e.target.value })}
          placeholder="Acceptance criteria — concrete, testable"
          aria-label="Acceptance criteria"
          className="h-9 text-sm sm:col-span-9"
        />
      </div>
    </li>
  );
}

function BucketBadge({ bucket }) {
  const map = {
    now: "Now",
    next: "Next",
    backlog: "Backlog",
  };
  return (
    <span className="inline-flex h-6 items-center rounded-md border bg-secondary px-2 text-[10px] font-semibold uppercase tracking-wider text-secondary-foreground">
      {map[bucket] || bucket}
    </span>
  );
}

function IconButton({ children, label, ...props }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      className="inline-flex h-7 w-7 items-center justify-center rounded-md border bg-background text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:cursor-not-allowed disabled:opacity-40"
      {...props}
    >
      {children}
    </button>
  );
}

function EmptyState({ filter, onAdd }) {
  const messages = {
    all: "No tasks yet. Add one above to start your backlog.",
    now: "Nothing in Now. Promote a task from Next or Backlog with the ↑ button.",
    next: "Nothing in Next. Use the ↑ button on a Backlog task to promote it.",
    backlog: "Nothing in Backlog. Use the quick-add above to capture an idea.",
    done: "No completed tasks yet. Tick the checkbox on a task when it ships.",
  };
  return (
    <div className="flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed bg-muted/30 px-4 py-10 text-center">
      <ListChecks className="h-6 w-6 text-muted-foreground" aria-hidden="true" />
      <p className="text-sm text-muted-foreground">{messages[filter] || messages.all}</p>
      {filter === "backlog" && onAdd && (
        <Button size="sm" variant="outline" onClick={onAdd} className="gap-1.5">
          <Plus className="h-3.5 w-3.5" /> Add a task
        </Button>
      )}
    </div>
  );
}