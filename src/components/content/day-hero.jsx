import { Badge } from "@/components/ui/badge";

export function DayHero({ day }) {
  return (
    <div className="overflow-hidden rounded-2xl border bg-card p-6 sm:p-8">
      <div className="flex flex-col gap-3">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default" className="font-mono">
            Day {day.number}
          </Badge>
          <Badge variant="outline" className="font-mono">
            {day.modules.length} Module{day.modules.length > 1 ? "s" : ""}
          </Badge>
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {day.title}
        </h1>
        <p className="max-w-2xl text-base text-muted-foreground">{day.summary}</p>
      </div>
    </div>
  );
}
