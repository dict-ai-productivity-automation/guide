import { Trophy, BarChart3, Sparkles, Crown } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { assessment, league } from "@/data/course";

export function Assessment() {
  const totalWeight = assessment.reduce((acc, a) => acc + a.weight, 0);
  return (
    <div className="space-y-10 animate-fade-in">
      <div>
        <Badge variant="default" className="mb-3 gap-1.5">
          <Trophy className="h-3 w-3" /> Grading
        </Badge>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Assessment Structure
        </h1>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Your final grade is a weighted average of challenge scores from each
          day. The capstone is the biggest single piece.
        </p>
      </div>

      <section>
        <h2 className="mb-4 text-2xl font-semibold tracking-tight flex items-center gap-2">
          <BarChart3 className="h-5 w-5" /> Weighting
        </h2>
        <div className="space-y-3">
          {assessment.map((a) => (
            <div key={a.day} className="rounded-lg border bg-card p-4">
              <div className="mb-2 flex items-center justify-between">
                <div>
                  <div className="font-semibold">{a.label}</div>
                  <div className="text-xs text-muted-foreground">Day {a.day}</div>
                </div>
                <div className="text-lg font-bold">{a.weight}%</div>
              </div>
              <Progress
                value={(a.weight / totalWeight) * 100}
                indicatorClassName="bg-primary"
              />
            </div>
          ))}
          <div className="rounded-lg border-2 border-dashed p-4 text-sm font-semibold flex items-center justify-between">
            <span>Total</span>
            <span>{totalWeight}%</span>
          </div>
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-2xl font-semibold tracking-tight flex items-center gap-2">
          <Sparkles className="h-5 w-5" /> AI League Ranking
        </h2>
        <p className="mb-5 text-sm text-muted-foreground">
          Earn ranks as you accumulate points. Diamond is awarded for
          exceptional responsible-AI practice.
        </p>
        <div className="grid gap-4 md:grid-cols-5">
          {league.map((l, idx) => (
            <Card
              key={l.rank}
              className="overflow-hidden"
            >
              <div className="h-1.5 w-full bg-foreground" />
              <CardContent className="p-5 text-center">
                <Crown className="mx-auto h-6 w-6 text-foreground" />
                <div className="mt-2 text-sm font-bold uppercase tracking-wider">
                  {l.rank}
                </div>
                <div className="mt-1 text-sm font-medium">{l.title}</div>
                <div className="mt-3 text-[10px] text-muted-foreground">
                  Tier {idx + 1} of 5
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
