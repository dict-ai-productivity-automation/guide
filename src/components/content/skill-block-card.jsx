import { useState } from "react";
import {
  Clock,
  Sparkles,
  BookOpen,
  Target,
  FileCheck2,
  Hammer,
  ChevronRight,
  CheckCircle2,
  ExternalLink,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Checklist } from "@/components/content/checklist";
import { CodeBlock } from "@/components/ui/code-block";
import { cn } from "@/lib/utils";

export function SkillBlockCard({ skill, dayId }) {
  const [open, setOpen] = useState(false);
  const checklistKey = `checklist-${dayId}-${skill.id}`;

  return (
    <Card id={skill.id} className="scroll-mt-24 overflow-hidden">
      <CardHeader>
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="default" className="font-mono">
            Skill Workshop
          </Badge>
          <Badge variant="outline" className="font-mono">
            <Clock className="mr-1 h-3 w-3" /> {skill.timebox}
          </Badge>
          <Badge variant="secondary">
            <Sparkles className="mr-1 h-3 w-3" /> Guest tool
          </Badge>
        </div>
        <CardTitle className="mt-2 text-2xl">{skill.title}</CardTitle>
        <CardDescription className="mt-1">
          {skill.activity}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border bg-card p-4">
            <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <BookOpen className="h-4 w-4" /> Topics covered
            </div>
            <ul className="space-y-1.5 text-sm">
              {skill.topics.map((t, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-muted-foreground" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-4">
            <div className="rounded-lg border bg-muted/40 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <FileCheck2 className="h-4 w-4" /> Deliverable
              </div>
              <p className="text-sm">{skill.deliverable}</p>
            </div>
            <div className="rounded-lg border bg-muted/40 p-4">
              <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                <Target className="h-4 w-4" /> Activity
              </div>
              <p className="text-sm">{skill.activity}</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <Sparkles className="h-4 w-4" /> Install
          </div>
          <CodeBlock
            code={`# Pick the agent you already use. Run from your portfolio repo:\nnpx skills add Leonxlnx/taste-skill --skill "design-taste-frontend"\n\n# Optional: pin to v1 if you need the older rule set\nnpx skills add Leonxlnx/taste-skill --skill "design-taste-frontend-v1"`}
            language="bash"
            filename="portfolio/"
          />
          <p className="mt-2 text-xs text-muted-foreground">
            Works with OpenCode, Cursor, Claude Code, Codex, Gemini CLI, AI Studio,
            v0, and Lovable. Source:{" "}
            <a
              className="font-medium underline underline-offset-4"
              href="https://www.tasteskill.dev/"
              target="_blank"
              rel="noreferrer"
            >
              tasteskill.dev
              <ExternalLink className="ml-1 inline h-3 w-3" />
            </a>
          </p>
        </div>

        {skill.example && (
          <div className="mt-6">
            <h4 className="mb-2 text-sm font-semibold">Worked example</h4>
            <CodeBlock
              code={skill.example}
              language="markdown"
              filename="before-vs-after.md"
            />
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
              {skill.steps.map((s, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold">
                    {i + 1}
                  </span>
                  <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: s.replace(/`([^`]+)`/g, '<code class="rounded bg-muted px-1 py-0.5 font-mono text-[11px]">$1</code>') }} />
                </li>
              ))}
            </ol>
          )}
        </div>

        <div className="mt-6">
          <Checklist
            storageKey={checklistKey}
            title="Your progress"
            items={skill.steps}
          />
        </div>
      </CardContent>
    </Card>
  );
}