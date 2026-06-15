import { Link } from "react-router-dom";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { days } from "@/data/course";

export function DayNav({ currentDayId }) {
  const idx = days.findIndex((d) => d.id === currentDayId);
  const prev = idx > 0 ? days[idx - 1] : null;
  const next = idx < days.length - 1 ? days[idx + 1] : null;
  return (
    <div className="mt-10 grid gap-3 sm:grid-cols-2">
      {prev ? (
        <Link to={`/${prev.id}`}>
          <Button variant="outline" className="w-full justify-start gap-2">
            <ArrowLeft className="h-4 w-4" />
            <span className="text-left">
              <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">
                Previous
              </span>
              <span>Day {prev.number}: {prev.title}</span>
            </span>
          </Button>
        </Link>
      ) : (
        <Link to="/">
          <Button variant="outline" className="w-full justify-start gap-2">
            <ArrowLeft className="h-4 w-4" /> Back to Overview
          </Button>
        </Link>
      )}
      {next ? (
        <Link to={`/${next.id}`}>
          <Button variant="outline" className="w-full justify-end gap-2">
            <span className="text-right">
              <span className="block text-[10px] uppercase tracking-wider text-muted-foreground">
                Next
              </span>
              <span>Day {next.number}: {next.title}</span>
            </span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      ) : (
        <Link to="/assessment">
          <Button variant="outline" className="w-full justify-end gap-2">
            Assessment & Ranking
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      )}
    </div>
  );
}
