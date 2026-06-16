import { Link } from "react-router-dom";
import { Printer, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { days, course } from "@/data/course";

export function AtAGlance() {
  return (
    <div className="space-y-8 animate-fade-in print:space-y-4">
      <div className="flex items-center justify-between print:hidden">
        <Link to="/">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-3 w-3" /> Back
          </Button>
        </Link>
        <Button
          variant="outline"
          size="sm"
          onClick={() => window.print()}
          className="gap-2"
        >
          <Printer className="h-4 w-4" /> Print this page
        </Button>
      </div>

      <div className="space-y-2">
        <Badge variant="default" className="print:hidden">Student handout</Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {course.title}
        </h1>
        <p className="text-sm text-muted-foreground">
          {course.tagline} • {course.duration} • {course.format}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Conducted by:</span>{" "}
          {course.organizer.name} ({course.organizer.country})
        </p>
        <p className="text-sm">
          <span className="font-semibold">Facilitator:</span> {course.facilitator.name}
          {" · "}
          <a className="underline" href={course.facilitator.github}>
            github.com/mjsolidarios
          </a>
        </p>
      </div>

      <div className="rounded-lg border bg-card p-5">
        <h2 className="text-lg font-semibold">Goal</h2>
        <p className="mt-1 text-sm">{course.goal}</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold">Daily plan</h2>
        {days.map((d) => (
          <div key={d.id} className="rounded-lg border bg-card p-4 break-inside-avoid">
            <div className="mb-2 flex items-baseline gap-3">
              <span className="font-mono text-xs font-bold">DAY {d.number}</span>
              <span className="text-sm font-semibold">{d.title}</span>
            </div>
            <ul className="space-y-1 text-xs">
              {d.modules.map((m) => (
                <li key={m.id} className="flex items-start gap-2">
                  <span className="font-mono text-muted-foreground w-8 shrink-0">
                    M{m.number}
                  </span>
                  <span className="flex-1">
                    <span className="font-semibold">{m.title}</span>
                    <span className="block text-muted-foreground">
                      {m.timebox} · {m.deliverable}
                      {m.challenge ? ` · Challenge: ${m.challenge}` : ""}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="rounded-lg border bg-card p-4 break-inside-avoid">
        <h2 className="text-lg font-semibold">Required repo structure</h2>
        <pre className="mt-2 overflow-x-auto rounded bg-zinc-950 p-3 font-mono text-[10px] text-zinc-100">
{`Capstone/
├── README.md
├── AGENTS.md
├── TASKS.md
├── PROMPTS.md
├── DESIGN.md
├── proposal/
├── prototype/
├── app/
├── docs/
└── presentation/`}
        </pre>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 break-inside-avoid">
        <div className="rounded-lg border bg-card p-4">
          <h2 className="text-lg font-semibold">Assessment (100%)</h2>
          <ul className="mt-2 space-y-1 text-xs">
            <li>Day 1 challenges — 15%</li>
            <li>Day 2 challenges — 15%</li>
            <li>Day 3 challenges — 20%</li>
            <li>Day 4 offline AI & automation — 20%</li>
            <li>Day 5 Shark Tank capstone — 30%</li>
          </ul>
        </div>
        <div className="rounded-lg border bg-card p-4">
          <h2 className="text-lg font-semibold">AI League</h2>
          <ul className="mt-2 space-y-1 text-xs">
            <li>Bronze — Prompt Apprentice</li>
            <li>Silver — AI Analyst</li>
            <li>Gold — Workflow Builder</li>
            <li>Platinum — AI Strategist</li>
            <li>Diamond — Responsible AI Champion</li>
          </ul>
        </div>
      </div>

      <div className="rounded-lg border bg-card p-4 break-inside-avoid">
        <h2 className="text-lg font-semibold">Responsible AI — 6 rules</h2>
        <ol className="mt-2 grid grid-cols-1 gap-1 text-xs sm:grid-cols-2">
          <li>1. Verify AI-generated outputs</li>
          <li>2. Identify hallucinations</li>
          <li>3. Protect sensitive information</li>
          <li>4. Disclose AI assistance</li>
          <li>5. Apply human review</li>
          <li>6. Document model limitations and risks</li>
        </ol>
      </div>
    </div>
  );
}
