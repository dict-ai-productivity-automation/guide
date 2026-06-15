import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { CheckCircle2, Circle, Calendar, Trophy, ListChecks } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { days } from "@/data/course";

const STORAGE_PREFIX = "checklist-";

function readProgress(allModules) {
  if (typeof window === "undefined") return {};
  const out = {};
  for (const m of allModules) {
    const key = `${STORAGE_PREFIX}${m.dayId}-${m.id}`;
    try {
      const raw = window.localStorage.getItem(key);
      const obj = raw ? JSON.parse(raw) : {};
      out[m.id] = Object.values(obj).filter(Boolean).length;
    } catch {
      out[m.id] = 0;
    }
  }
  return out;
}

export function Dashboard() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const bump = () => setTick((t) => t + 1);
    window.addEventListener("storage", bump);
    window.addEventListener("focus", bump);
    return () => {
      window.removeEventListener("storage", bump);
      window.removeEventListener("focus", bump);
    };
  }, []);

  const allModules = useMemo(
    () =>
      days.flatMap((d) =>
        d.modules.map((m) => ({ ...m, dayId: d.id, dayNumber: d.number, dayTitle: d.title }))
      ),
    []
  );
  const totalSteps = useMemo(
    () => allModules.reduce((acc, m) => acc + m.steps.length, 0),
    [allModules]
  );
  const completed = useMemo(
    () => readProgress(allModules),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [allModules, tick]
  );

  const completedSteps = Object.values(completed).reduce((a, b) => a + b, 0);
  const completedModules = allModules.filter((m) => {
    const v = completed[m.id] || 0;
    return m.steps.length > 0 && v >= m.steps.length;
  }).length;
  const overallPct = totalSteps ? Math.round((completedSteps / totalSteps) * 100) : 0;

  return (
    <div className="space-y-10 animate-fade-in">
      <div>
        <Badge variant="default" className="mb-3 gap-1.5">
          <Trophy className="h-3 w-3" /> My progress
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Bootcamp dashboard
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          One place to see where you are across all 5 days and 14 modules.
          Checkboxes you tick on each day page show up here.
        </p>
      </div>

      <Card>
        <CardContent className="space-y-3 p-5">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm font-semibold">Overall progress</div>
              <div className="text-xs text-muted-foreground">
                {completedSteps} of {totalSteps} step checks • {completedModules} of {allModules.length} modules complete
              </div>
            </div>
            <div className="text-3xl font-bold tabular-nums">{overallPct}%</div>
          </div>
          <Progress value={overallPct} indicatorClassName="bg-primary" />
        </CardContent>
      </Card>

      <section>
        <h2 className="mb-4 text-2xl font-semibold tracking-tight flex items-center gap-2">
          <ListChecks className="h-5 w-5" /> Modules
        </h2>
        <div className="space-y-3">
          {allModules.map((m) => {
            const done = completed[m.id] || 0;
            const total = m.steps.length;
            const pct = total ? Math.round((done / total) * 100) : 0;
            const isDone = total > 0 && done >= total;
            return (
              <Link
                to={`/${m.dayId}#${m.id}`}
                key={m.id}
                className="block transition-colors hover:bg-accent/40"
              >
                <div className="rounded-lg border bg-card p-4">
                  <div className="flex flex-wrap items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center">
                      {isDone ? (
                        <CheckCircle2 className="h-5 w-5 text-foreground" />
                      ) : (
                        <Circle className="h-5 w-5 text-muted-foreground" />
                      )}
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs text-muted-foreground">
                          Day {m.dayNumber} · M{m.number}
                        </span>
                        {m.challenge && (
                          <Badge variant="secondary" className="text-[10px]">
                            {m.challenge}
                          </Badge>
                        )}
                      </div>
                      <div className="text-sm font-semibold">{m.title}</div>
                      <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full bg-secondary">
                        <div
                          className="h-full bg-foreground transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                    </div>
                    <div className="text-sm font-mono tabular-nums text-muted-foreground">
                      {done}/{total}
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      <Card>
        <CardContent className="flex flex-col items-start gap-3 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <Calendar className="h-4 w-4" />
            </div>
            <div>
              <div className="text-sm font-semibold">Need the full schedule?</div>
              <div className="text-xs text-muted-foreground">
                See the per-day timeboxes for the 5-day plan.
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Link to="/schedule">
              <Button variant="outline" size="sm">Schedule</Button>
            </Link>
            <Link to="/glance">
              <Button variant="outline" size="sm">At-a-glance</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
