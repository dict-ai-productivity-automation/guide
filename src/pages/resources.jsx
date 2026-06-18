import { useState } from "react";
import { FileText, BookOpen, Table, ListChecks, Trophy, Palette, WandSparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CodeBlock } from "@/components/ui/code-block";
import { Checklist } from "@/components/content/checklist";
import { tasksTemplate, agentsTemplate, promptsTemplate, designTemplate, skillTemplate, evaluationRubric } from "@/data/course";
import { cn } from "@/lib/utils";

const TABS = [
  { k: "agents", label: "AGENTS.md" },
  { k: "tasks", label: "TASKS.md" },
  { k: "prompts", label: "PROMPTS.md" },
  { k: "design", label: "DESIGN.md" },
  { k: "skill", label: "SKILL.md" },
  { k: "rubric", label: "Rubric" },
];

export function Resources() {
  const [tab, setTab] = useState("agents");
  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <Badge variant="default" className="mb-3 gap-1.5">
          <BookOpen className="h-3 w-3" /> Resources
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Resources
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Starter templates, evaluation rubrics, and printable checklists.
          Copy anything you see into your own repo.
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5 rounded-lg bg-muted p-1">
        {TABS.map((t) => (
          <button
            key={t.k}
            type="button"
            onClick={() => setTab(t.k)}
            className={cn(
              "rounded-md px-3 py-1.5 text-xs font-medium transition-colors",
              tab === t.k
                ? "bg-background text-foreground shadow-sm"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {t.label}
          </button>
        ))}
      </div>

      {tab === "agents" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <FileText className="h-4 w-4" /> AGENTS.md starter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Drop this into the root of your repo, edit the "Models in use" section
              to match your reality, and add it to your first commit.
            </p>
            <CodeBlock code={agentsTemplate} language="markdown" filename="AGENTS.md" />
          </CardContent>
        </Card>
      )}

      {tab === "tasks" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <ListChecks className="h-4 w-4" /> TASKS.md starter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              A simple "Now / Next / Backlog / Done" backlog. Use it for every
              project from Module 9 onwards.
            </p>
            <CodeBlock code={tasksTemplate} language="markdown" filename="TASKS.md" />
          </CardContent>
        </Card>
      )}

      {tab === "prompts" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <FileText className="h-4 w-4" /> PROMPTS.md starter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Your personal prompt library. Log every prompt you tried, the
              model, and a 1–5 quality score. The best ones become
              templates.
            </p>
            <CodeBlock code={promptsTemplate} language="markdown" filename="PROMPTS.md" />
          </CardContent>
        </Card>
      )}

      {tab === "design" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Palette className="h-4 w-4" /> DESIGN.md starter
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              The single source of truth for the look and structure of your
              app. Fill this in from the Google Stitch exports you make during
              Module 6, then keep it in sync as the build evolves.
            </p>
            <CodeBlock code={designTemplate} language="markdown" filename="DESIGN.md" />
          </CardContent>
        </Card>
      )}

      {tab === "skill" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <WandSparkles className="h-4 w-4" /> SKILL.md example
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              Use this as a starter for a document, spreadsheet, report, CSV, or
              workflow automation skill. Replace the examples with your team's
              actual inputs, checks, and output formats.
            </p>
            <CodeBlock code={skillTemplate} language="markdown" filename="SKILL.md" />
          </CardContent>
        </Card>
      )}

      {tab === "rubric" && (
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Trophy className="h-4 w-4" /> Evaluation rubric
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <RubricGroup data={evaluationRubric.dayChallenges} />
            <RubricGroup data={evaluationRubric.capstone} />
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle className="text-base">Pre-capstone checklist</CardTitle>
        </CardHeader>
        <CardContent>
          <Checklist
            storageKey="pre-capstone-checklist"
            title="Make sure these are done before Day 5"
            items={[
              "GitHub repo is public OR facilitator has been added as a collaborator",
              "AGENTS.md exists at the repo root and lists every model you'll use",
              "TASKS.md has at least 15 tasks across setup, model, UI, testing, docs",
              "PROMPTS.md has at least 5 prompts that actually worked",
              "DESIGN.md documents prototype screens, user flows, and design decisions",
              "At least one module deliverable from Days 1–4 is committed",
              "Ollama (CLI) or LM Studio (GUI) + Gemma 4 is installed and runs offline",
            ]}
          />
        </CardContent>
      </Card>
    </div>
  );
}

function RubricGroup({ data }) {
  return (
    <div>
      <h3 className="text-sm font-semibold">{data.title}</h3>
      <ul className="mt-2 space-y-1.5 text-sm">
        {data.criteria.map((c) => (
          <li key={c.name} className="flex items-start gap-2">
            <Table className="mt-0.5 h-3.5 w-3.5 text-muted-foreground" />
            <div>
              <span className="font-medium">{c.name}</span>
              <span className="ml-2 text-muted-foreground">{c.weight}%</span>
              <p className="text-xs text-muted-foreground">{c.desc}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
