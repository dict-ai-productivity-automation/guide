import { ModuleCard } from "@/components/content/module-card";
import { OpeningCard } from "@/components/content/opening-card";
import { DayHero } from "@/components/content/day-hero";
import { DayNav } from "@/components/content/day-nav";
import { PromptBuilder } from "@/components/content/prompt-builder";

export function DayPage({ day, showPromptBuilder = false }) {
  return (
    <div className="space-y-8 animate-fade-in">
      <DayHero day={day} />
      <div className="space-y-6">
        {day.opening && <OpeningCard opening={day.opening} dayId={day.id} />}
        {day.modules.map((m) => (
          <ModuleCard key={m.id} module={m} dayId={day.id} />
        ))}
      </div>
      {showPromptBuilder && (
        <div>
          <h2 className="mb-3 text-2xl font-semibold tracking-tight">
            Practice tool
          </h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Build a prompt with the RTCF framework and copy it straight into
            Gemini, Gemma 4, or your local Ollama / LM Studio runtime.
          </p>
          <PromptBuilder />
        </div>
      )}
      <DayNav currentDayId={day.id} />
    </div>
  );
}
