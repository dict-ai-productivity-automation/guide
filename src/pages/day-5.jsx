import { ModuleCard } from "@/components/content/module-card";
import { DayHero } from "@/components/content/day-hero";
import { DayNav } from "@/components/content/day-nav";
import { Card, CardContent } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { CheckCircle2 } from "lucide-react";
import { days, capstoneStructure, repoStructure } from "@/data/course";

const day = days.find((d) => d.id === "day-5");

const components = [
  "Real PH problem + named stakeholders + local data source",
  "Current Process Map",
  "AI Solution Design",
  "Google Stitch Prototype (Tagalog/Filipino + English)",
  "Offline AI Option",
  "ROI Analysis",
  "Risk Assessment",
  "Governance Controls",
  "Model Selection Justification",
];

export function Day5() {
  return (
    <div className="space-y-8 animate-fade-in">
      <DayHero day={day} />

      <section>
        <h2 className="mb-3 text-2xl font-semibold tracking-tight">Capstone requirements</h2>
        <p className="text-sm text-muted-foreground">
          Your team will pitch a real-world AI solution for a Philippine
          problem in health, agriculture, or general welfare. Your final
          submission must include every component below. Treat the list as a
          rubric — Shark Tank judges will be looking for each one.
        </p>
        <Card className="mt-4">
          <CardContent className="p-5">
            <ul className="grid gap-2 sm:grid-cols-2">
              {components.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-foreground" />
                  {c}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">
          Shark Tank – AI Edition
        </h2>
        <ModuleCard module={day.modules[0]} dayColor={day.color} dayId={day.id} moduleIndex={0} />
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold tracking-tight">
          Required repository structure
        </h2>
        <p className="mb-3 text-sm text-muted-foreground">
          Use this exact structure for your capstone repo.
        </p>
        <CodeBlock code={capstoneStructure} language="text" filename="Capstone/" />
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold tracking-tight">
          Base repo structure (every project)
        </h2>
        <CodeBlock code={repoStructure} language="text" filename="repo/" />
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold tracking-tight">
          Pitch deck outline
        </h2>
        <Card>
          <CardContent className="p-5">
            <ol className="space-y-2 text-sm">
              {[
                "Problem and who feels it — PH context, named stakeholders, local data source (1 slide)",
                "Current process map (1 slide)",
                "Proposed AI solution (1 slide)",
                "Google Stitch prototype (2-3 slides)",
                "Offline AI option for low-connectivity areas (1 slide)",
                "ROI model: time saved × cost × volume, with local wage or unit-cost data (1 slide)",
                "Risk register + governance controls, incl. PH Data Privacy Act of 2012 (1 slide)",
                "Model selection justification (1 slide)",
                "Live demo (5 min)",
                "Q&A",
              ].map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </section>

      <DayNav currentDayId={day.id} />
    </div>
  );
}
