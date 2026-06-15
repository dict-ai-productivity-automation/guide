import { useState } from "react";
import {
  Clock,
  Target,
  BookOpen,
  Hammer,
  FileCheck2,
  ChevronRight,
  Sparkles,
  CheckCircle2,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { Checklist } from "@/components/content/checklist";
import { ModelComparisonTable } from "@/components/content/model-comparison-table";
import { SwotBoard } from "@/components/content/swot-board";
import { RiskMatrix } from "@/components/content/risk-matrix";
import { AppPicker } from "@/components/content/app-picker";
import { TasksBuilder } from "@/components/content/tasks-builder";
import { swotTemplate } from "@/data/course";
import { cn } from "@/lib/utils";

export function ModuleCard({ module, dayId }) {
  const [open, setOpen] = useState(false);
  const checklistKey = `checklist-${dayId}-${module.id}`;

  const renderTool = () => {
    switch (module.tool) {
      case "modelComparison":
        return (
          <ModelComparisonTable
            models={module.comparisonModels}
            criteria={module.comparisonCriteria}
          />
        );
      case "swotRisk":
        return (
          <div className="grid gap-4">
            <SwotBoard prompts={swotTemplate} />
            <RiskMatrix />
          </div>
        );
      case "appPicker":
        return <AppPicker />;
      case "tasksBuilder":
        return <TasksBuilder />;
      default:
        return null;
    }
  };

  return (
    <Card id={module.id} className="scroll-mt-24 overflow-hidden">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default" className="font-mono">
            Module {module.number}
          </Badge>
          <Badge variant="outline" className="font-mono">
            <Clock className="mr-1 h-3 w-3" /> {module.timebox}
          </Badge>
          {module.challenge && (
            <Badge variant="secondary">
              <Sparkles className="mr-1 h-3 w-3" /> Challenge: {module.challenge}
            </Badge>
          )}
        </div>
        <CardTitle className="mt-2 text-2xl">{module.title}</CardTitle>
        <CardDescription className="mt-1">
          {module.activity}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <SectionBlock
            icon={<BookOpen className="h-4 w-4" />}
            title="Topics covered"
            items={module.topics}
          />
          <div className="space-y-4">
            <div className="rounded-lg border bg-muted/40 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <FileCheck2 className="h-4 w-4" /> Deliverable
              </div>
              <p className="text-sm">{module.deliverable}</p>
            </div>
            <div className="rounded-lg border bg-muted/40 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <Target className="h-4 w-4" /> Activity
              </div>
              <p className="text-sm">{module.activity}</p>
            </div>
          </div>
        </div>

        {module.example && (
          <div className="mt-6">
            <h4 className="mb-2 text-sm font-semibold">Worked example</h4>
            <CodeBlock
              code={module.example}
              language="markdown"
              filename="example.md"
            />
          </div>
        )}

        {module.tool && (
          <div className="mt-6">
            <h4 className="mb-3 text-sm font-semibold">
              Interactive tool
            </h4>
            {renderTool()}
          </div>
        )}

        <div className="mt-6">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
          >
            <Hammer className="h-4 w-4" /> Step-by-step walkthrough
            <ChevronRight
              className={cn(
                "h-4 w-4 transition-transform",
                open ? "rotate-90" : ""
              )}
            />
          </button>
          {open && (
            <ol className="mt-3 space-y-2 rounded-lg border bg-muted/30 p-4 text-sm">
              {module.steps.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed">{s}</span>
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className="mt-6">
          <Checklist
            storageKey={checklistKey}
            title="Your progress"
            items={module.steps}
          />
        </div>
      </CardContent>
    </Card>
  );
}

function SectionBlock({ icon, title, items }) {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {icon} {title}
      </div>
      <ul className="space-y-1.5 text-sm">
        {items.map((t, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-muted-foreground" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
