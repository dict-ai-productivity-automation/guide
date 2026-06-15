import { ShieldCheck, CheckCircle2, AlertTriangle, Eye, Lock, FileText, Users, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { responsibleAI } from "@/data/course";

const principles = [
  {
    icon: Eye,
    title: "Verify every output",
    body: "Treat AI output as a draft, not a fact. Cross-check numbers, citations, and code against the source.",
  },
  {
    icon: AlertTriangle,
    title: "Identify hallucinations",
    body: "Hallucinations look confident. Look for invented URLs, fake citations, and oddly specific facts with no source.",
  },
  {
    icon: Lock,
    title: "Protect sensitive information",
    body: "Never paste personal data, credentials, or proprietary code into a public model. Use a local model for anything sensitive.",
  },
  {
    icon: FileText,
    title: "Disclose AI assistance",
    body: "If AI helped write a document, test, or slide, say so. Use a short 'AI assistance' footer.",
  },
  {
    icon: Users,
    title: "Apply human review",
    body: "A human is always in the loop for any high-stakes decision. The model proposes, a human disposes.",
  },
  {
    icon: BookOpen,
    title: "Document limitations and risks",
    body: "Every repo with AI-generated content should have an AGENTS.md that lists the model used, its limits, and known risks.",
  },
];

export function ResponsibleAI() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div>
        <Badge variant="default" className="mb-3 gap-1.5">
          <ShieldCheck className="h-3 w-3" /> Required
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Responsible AI
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Six non-negotiable rules. Every deliverable in the bootcamp must pass
          all of them. Diamond-tier participants write these rules into their
          AGENTS.md.
        </p>
      </div>

      <Alert variant="destructive">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>AI is a co-pilot, not the pilot.</AlertTitle>
        <AlertDescription>
          You are accountable for everything in your repository, including
          anything the model produced. The fastest way to lose your Diamond rank
          is to ship AI output you never read.
        </AlertDescription>
      </Alert>

      <section>
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">The six rules</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {principles.map((p) => (
            <Card key={p.title}>
              <CardContent className="p-5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted">
                  <p.icon className="h-4 w-4" />
                </div>
                <h3 className="mt-3 text-sm font-semibold">{p.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.body}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">Quick checklist</h2>
        <Card>
          <CardContent className="p-5">
            <ul className="space-y-3">
              {responsibleAI.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-foreground" />
                  <span className="text-sm">{r}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="mb-3 text-2xl font-semibold tracking-tight">Sample AGENTS.md</h2>
        <Card>
          <CardContent className="p-0">
            <pre className="overflow-x-auto rounded-lg bg-zinc-950 p-5 text-sm leading-relaxed text-zinc-100">
{`# AGENTS.md

## What lives here
This repository is built and maintained with the help of AI coding agents.

## Models in use
- Gemini 2.0 Flash (cloud) — used for content generation, brainstorming.
- Gemma 4 2B via Ollama (local) — used for offline work and code review.

## Responsible AI rules
- Every model output is reviewed by a human before it is merged.
- No personal data, credentials, or proprietary code is sent to a public model.
- AI assistance is disclosed in PR descriptions and in the README footer.
- Known limitations: small local models may hallucinate citations; we verify every
  citation against the source PDF.
- High-risk changes (anything touching auth, payments, or student records) require
  a second human reviewer.

## Escalation
If a model produces something that looks wrong, stop and ask a human.
`}
            </pre>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
