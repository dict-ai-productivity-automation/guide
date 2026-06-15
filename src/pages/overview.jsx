import { Link } from "react-router-dom";
import {
  Sparkles,
  ArrowRight,
  Calendar,
  Target,
  Wrench,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BrandIcon } from "@/components/brand-icon";
import { course, days } from "@/data/course";

export function Overview() {
  return (
    <div className="space-y-10 animate-fade-in">
      <section className="relative overflow-hidden rounded-2xl border bg-card p-6 sm:p-10">
        <div className="relative space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="secondary" className="gap-1.5">
              <Calendar className="h-3 w-3" /> {course.duration} • {course.format}
            </Badge>
            <Badge variant="outline">{course.structure}</Badge>
            <Badge variant="outline" className="gap-1.5">
              <BrandIcon slug={course.organizer.sealSlug} size={12} className="text-foreground" />
              {course.organizer.shortName} ({course.organizer.country})
            </Badge>
          </div>
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            {course.title}
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {course.goal}
          </p>
          <p className="text-sm text-muted-foreground">
            Facilitated by <span className="font-semibold text-foreground">{course.facilitator.name}</span>
            {" · "}
            <a
              href={course.facilitator.github}
              target="_blank"
              rel="noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              github.com/mjsolidarios
            </a>
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <Link to="/setup">
              <Button size="lg" className="gap-2">
                <Wrench className="h-4 w-4" /> Start with setup
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/day-1">
              <Button size="lg" variant="outline" className="gap-2">
                Jump to Day 1 <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <Target className="h-5 w-5 text-foreground" />
          <h2 className="text-2xl font-semibold tracking-tight">Tech stack</h2>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
          {course.stack.map((t) => (
            <Card key={t.name} className="hover:shadow-md transition-shadow">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md border bg-background text-foreground">
                    <BrandIcon slug={t.slug} size={20} className="text-foreground" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="mt-0.5 text-xs text-muted-foreground">
                      {t.desc}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <div className="mb-4 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-foreground" />
          <h2 className="text-2xl font-semibold tracking-tight">5-day journey</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {days.map((d) => (
            <Link to={`/${d.id}`} key={d.id} className="group">
              <Card className="h-full transition-all hover:-translate-y-0.5 hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Badge variant="default" className="font-mono">Day {d.number}</Badge>
                  </div>
                  <CardTitle className="mt-2">{d.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{d.summary}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1.5 text-sm">
                    {d.modules.map((m) => (
                      <li key={m.id} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground" />
                        <span>
                          <span className="font-mono text-[10px] text-muted-foreground">M{m.number}</span>{" "}
                          {m.title}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    Open day <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      <section>
        <Card>
          <CardContent className="flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-md border bg-background text-foreground">
                <BrandIcon slug={course.organizer.sealSlug} size={40} className="text-foreground" />
              </div>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Conducted by
                </div>
                <div className="text-sm font-semibold">{course.organizer.name}</div>
                <div className="text-xs text-muted-foreground">
                  {course.organizer.country}
                </div>
              </div>
            </div>
            <a
              href={course.organizer.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 self-start rounded-md border px-3 py-1.5 text-xs font-medium hover:bg-accent sm:self-auto"
            >
              {course.organizer.url.replace(/^https?:\/\//, "")} →
            </a>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
