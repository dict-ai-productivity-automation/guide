import { Wrench, Sparkles, CheckCircle2, Lightbulb, User, Cpu, HardDrive, MemoryStick, MonitorSmartphone, Apple, Terminal, Box } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";
import { CodeBlock } from "@/components/ui/code-block";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Checklist } from "@/components/content/checklist";
import { BrandIcon } from "@/components/brand-icon";
import { setupSteps, prereqSkills, systemRequirements, course } from "@/data/course";

export function Setup() {
  return (
    <div className="space-y-10 animate-fade-in">
      <div>
        <Badge variant="secondary" className="mb-3 gap-1.5">
          <Wrench className="h-3 w-3" /> Prerequisites
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Prerequisites & Setup
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Get your machine, your GitHub account, and your local AI runtime ready
          before the bootcamp starts. Most steps take under 10 minutes each.
        </p>
      </div>

      <Card>
        <CardContent className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
              <User className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {course.facilitator.role}
              </div>
              <div className="text-lg font-semibold">{course.facilitator.name}</div>
              <a
                href={course.facilitator.github}
                target="_blank"
                rel="noreferrer"
                className="mt-0.5 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-3.5 w-3.5"
                >
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                github.com/mjsolidarios
              </a>
            </div>
          </div>
          <a
            href={course.facilitator.org}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 self-start rounded-md border px-3 py-1.5 text-xs font-medium hover:bg-accent sm:self-auto"
          >
            View organization →
          </a>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="flex flex-col items-start gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md border bg-background text-foreground">
              <BrandIcon slug={course.organizer.sealSlug} size={32} className="text-foreground" />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
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

      <Alert>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
        </svg>
        <AlertTitle>You need a GitHub account.</AlertTitle>
        <AlertDescription>
          Every deliverable in this bootcamp lives in a GitHub repository. If you
          don't have one yet, sign up at{" "}
          <a
            className="font-medium underline"
            href="https://github.com/signup"
            target="_blank"
            rel="noreferrer"
          >
            github.com/signup
          </a>{" "}
          before you do anything else.
        </AlertDescription>
      </Alert>

      <Alert>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="h-4 w-4"
        >
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15l-1-1 4-4-4-4 1-1 5 5-5 5z"/>
        </svg>
        <AlertTitle>First step — fill out the bootcamp intake form.</AlertTitle>
        <AlertDescription>
          You must submit the bootcamp intake form before the facilitator can
          add you to the{" "}
          <a
            className="font-medium underline"
            href={course.facilitator.org}
            target="_blank"
            rel="noreferrer"
          >
            dict-ai-productivity-automation
          </a>{" "}
          GitHub organisation (where every deliverable will live).{" "}
          <a
            className="font-semibold underline"
            href={course.facilitator.orgIntakeForm}
            target="_blank"
            rel="noreferrer"
          >
            Open the intake form →
          </a>
        </AlertDescription>
      </Alert>

      <section>
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">Skills you should have</h2>
        <div className="grid gap-3 md:grid-cols-3">
          {prereqSkills.map((g) => (
            <Card key={g.level}>
              <CardHeader>
                <CardTitle className="text-base">{g.level}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  {g.skills.map((s) => (
                    <li key={s} className="flex items-start gap-2">
                      <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-muted-foreground" />
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">System requirements</h2>
        <p className="mb-4 max-w-2xl text-sm text-muted-foreground">
          The Day 4 offline module runs a Gemma 4 model directly on your laptop
          through Ollama (CLI) or LM Studio (GUI). Pick the tier that matches your
          machine — when in doubt, start with <span className="font-semibold text-foreground">Minimum</span>;
          you can always upgrade to a bigger model later.
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {[systemRequirements.minimum, systemRequirements.recommended].map((tier) => (
            <Card key={tier.label}>
              <CardHeader>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={tier.label === "Recommended" ? "default" : "outline"}>
                    {tier.label}
                  </Badge>
                  <Badge variant="secondary" className="font-mono">
                    {tier.model}
                  </Badge>
                </div>
                <CardDescription className="mt-1">{tier.badge}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-sm">
                  <SpecRow icon={<MemoryStick className="h-4 w-4" />} label="RAM" value={tier.ram} />
                  <SpecRow icon={<Cpu className="h-4 w-4" />} label="CPU" value={tier.cpu} />
                  {tier.gpu && (
                    <SpecRow icon={<MonitorSmartphone className="h-4 w-4" />} label="GPU" value={tier.gpu} />
                  )}
                  <SpecRow icon={<HardDrive className="h-4 w-4" />} label="Storage" value={tier.storage} />
                </ul>
                <div>
                  <div className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    Supported operating systems
                  </div>
                  <ul className="space-y-1 text-sm">
                    {tier.os.map((o) => (
                      <li key={o.name} className="flex items-start gap-2">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 text-muted-foreground" />
                        <span>
                          <span className="font-medium">{o.name}</span>
                          <span className="text-muted-foreground"> — {o.version}</span>
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <ul className="space-y-1.5 rounded-md border border-dashed bg-muted/40 p-3 text-xs">
                  {tier.notes.map((n, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Lightbulb className="mt-0.5 h-3.5 w-3.5 shrink-0 text-foreground" />
                      <span>{n}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-6">
          <h3 className="mb-3 text-lg font-semibold tracking-tight">
            Per-OS setup notes
          </h3>
          <div className="grid gap-3 md:grid-cols-3">
            {systemRequirements.osSpecific.map((s) => {
              const Icon = s.icon === "apple" ? Apple : s.icon === "linux" ? Terminal : Box;
              return (
                <Card key={s.os}>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-base">
                      <Icon className="h-4 w-4" /> {s.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm">
                      {s.requirements.map((r, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                          <span dangerouslySetInnerHTML={{ __html: r.replace(/`([^`]+)`/g, '<code class="rounded bg-muted px-1 py-0.5 font-mono text-[11px]">$1</code>') }} />
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">Install checklist</h2>
        <Checklist
          storageKey="setup-checklist"
          title="Mark each step as you complete it"
          items={[
            "Create a GitHub account and enable 2FA",
            "Install Git and Node.js 20+",
            "Install Ollama (CLI) or LM Studio (GUI) and load Gemma 4 (2B)",
            "Install OpenCode CLI and sign in to Google AI Studio",
            "Install OpenCode Desktop and pair it with the CLI",
            "Sign in to Google Stitch and try one prompt",
            "Bookmark Sheets and Slides",
          ]}
        />
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold tracking-tight">Step-by-step setup</h2>
        <Accordion>
          {setupSteps.map((step) => (
            <AccordionItem key={step.id} value={step.id}>
              <AccordionTrigger>
                <div className="flex flex-1 items-center gap-3 text-left">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground text-xs font-bold">
                    {setupSteps.indexOf(step) + 1}
                  </span>
                  <span>
                    <span className="block font-semibold">{step.title}</span>
                    <span className="block text-xs font-normal text-muted-foreground">
                      ~{step.time}
                    </span>
                  </span>
                </div>
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4 pt-2">
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                  {step.commands.map((c) => (
                    <div key={c.label}>
                      <div className="mb-1.5 text-xs font-semibold text-muted-foreground">
                        {c.label}
                      </div>
                      <CodeBlock code={c.code} language="bash" />
                    </div>
                  ))}
                  {step.tip && (
                    <div className="flex items-start gap-2 rounded-md border border-dashed bg-muted/40 p-3 text-xs">
                      <Lightbulb className="mt-0.5 h-3.5 w-3.5 text-foreground" />
                      <span>{step.tip}</span>
                    </div>
                  )}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-primary" /> Recommended: protect your secrets
            </CardTitle>
            <CardDescription>
              Never commit API keys. Use a <code>.env</code> file and add it to
              <code> .gitignore</code>.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <CodeBlock
              code={`# .env  (NEVER commit this file)\nGOOGLE_API_KEY=your-key-here\n\n# Pick ONE of the local providers below (or both if you want to\n# compare). Ollama is CLI-first; LM Studio is a beginner-friendly GUI.\nOLLAMA_HOST=http://127.0.0.1:11434\nLMSTUDIO_HOST=http://127.0.0.1:1234\n\n# .gitignore\n.env\nnode_modules/\ndist/`}
              language="dotenv"
              filename=".env"
            />
          </CardContent>
        </Card>
      </section>
    </div>
  );
}

function SpecRow({ icon, label, value }) {
  return (
    <li className="flex items-start gap-2">
      <span className="mt-0.5 text-muted-foreground">{icon}</span>
      <span>
        <span className="font-medium">{label}:</span>{" "}
        <span className="text-muted-foreground">{value}</span>
      </span>
    </li>
  );
}
