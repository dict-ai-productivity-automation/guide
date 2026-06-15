import { useState } from "react";
import { Clock, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { schedule } from "@/data/course";

const DAY_LABELS = {
  1: "AI Productivity Foundations",
  2: "Digital Productivity Sprint",
  3: "AI Decision Support",
  4: "Edge AI, Automation & Offline Intelligence",
  5: "AI Transformation Capstone",
};

export function Schedule() {
  const [filter, setFilter] = useState(0);
  const filtered = filter ? schedule.filter((s) => s.day === filter) : schedule;
  const totalMinutes = filtered.reduce((acc, s) => acc + s.minutes, 0);

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <Badge variant="default" className="mb-3 gap-1.5">
          <Calendar className="h-3 w-3" /> Schedule
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Timeboxed schedule
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          A facilitator's view of the 5-day plan. Filter by day to see the
          block-by-block breakdown.
        </p>
      </div>

      <div className="flex flex-wrap gap-2">
        <Button
          size="sm"
          variant={filter === 0 ? "default" : "outline"}
          onClick={() => setFilter(0)}
        >
          All days
        </Button>
        {Object.keys(DAY_LABELS).map((d) => (
          <Button
            key={d}
            size="sm"
            variant={filter === Number(d) ? "default" : "outline"}
            onClick={() => setFilter(Number(d))}
          >
            Day {d}
          </Button>
        ))}
      </div>

      <Card>
        <CardContent className="p-5">
          <div className="mb-3 flex items-center justify-between">
            <div className="text-sm font-semibold">
              {filter === 0
                ? "All 5 days"
                : `Day ${filter} — ${DAY_LABELS[filter]}`}
            </div>
            <div className="text-sm font-mono tabular-nums text-muted-foreground">
              Total: {Math.floor(totalMinutes / 60)}h {totalMinutes % 60}m
            </div>
          </div>
          <div className="space-y-2">
            {filtered.map((s, i) => (
              <div
                key={`${s.day}-${i}`}
                className="flex flex-wrap items-center gap-3 rounded-md border bg-card/50 p-3 text-sm"
              >
                <Badge variant="outline" className="font-mono">
                  Day {s.day}
                </Badge>
                <div className="flex-1 min-w-0">
                  <div className="font-medium">{s.block}</div>
                </div>
                <div className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Clock className="h-3 w-3" />
                  <span className="font-mono tabular-nums">{s.minutes} min</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
