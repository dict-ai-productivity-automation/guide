import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CodeBlock } from "@/components/ui/code-block";
import { CheckCircle2 } from "lucide-react";
import { appIdeas } from "@/data/course";
import { cn } from "@/lib/utils";

const STORAGE_KEY = "app-picker-choice";

export function AppPicker() {
  const [picked, setPicked] = useState(() => {
    if (typeof window === "undefined") return null;
    try {
      return window.localStorage.getItem(STORAGE_KEY) || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      if (picked) window.localStorage.setItem(STORAGE_KEY, picked);
    } catch {
      /* localStorage may be disabled */
    }
  }, [picked]);

  const chosen = appIdeas.find((a) => a.id === picked);

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle className="text-base">Pick your app</CardTitle>
          <CardDescription>
            You have ~3 hours. Pick ONE. The choice you make here will be the
            project you carry into the Day 5 Shark Tank.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-3 md:grid-cols-2">
            {appIdeas.map((a) => {
              const isPicked = picked === a.id;
              return (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => setPicked(a.id)}
                  className={cn(
                    "rounded-lg border p-4 text-left transition-colors",
                    isPicked ? "border-foreground bg-accent" : "hover:bg-accent/40"
                  )}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <div className="text-sm font-semibold">{a.name}</div>
                      <div className="mt-1 text-xs text-muted-foreground">
                        {a.blurb}
                      </div>
                    </div>
                    {isPicked ? (
                      <CheckCircle2 className="h-4 w-4 shrink-0" />
                    ) : (
                      <Badge variant="outline" className="shrink-0 text-[10px]">
                        {a.difficulty}
                      </Badge>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {chosen && (
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Scaffolding for {chosen.name}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="rounded-md border bg-muted/40 p-3 text-sm">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Hint from the facilitator
              </div>
              <p className="mt-1">{chosen.hint}</p>
            </div>
            <div>
              <div className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Where to get sample data
              </div>
              <CodeBlock code={chosen.dataExample} language="text" filename="data.txt" />
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
