import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SharkTankRubric } from "@/components/content/shark-tank-rubric";

export function SharkTankRubricPage() {
  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-wrap items-center justify-between gap-3 print:hidden">
        <Link to="/day-5">
          <Button variant="ghost" size="sm" className="gap-1">
            <ArrowLeft className="h-3 w-3" /> Back to Day 5
          </Button>
        </Link>
        <Badge variant="default" className="gap-1.5">
          <FileText className="h-3 w-3" /> Judge's rubric
        </Badge>
      </div>

      <div className="space-y-2 print:hidden">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Shark Tank – AI Edition
        </h1>
        <p className="max-w-3xl text-sm text-muted-foreground">
          Printable scoring rubric for Day 5 judges. Click{" "}
          <strong>Download PDF</strong> to save a one-section-per-page PDF you can
          print and fill in with a pen. Judges tick one of the five circles
          (1&nbsp;=&nbsp;Poor → 5&nbsp;=&nbsp;Excellent) for each sub-point. The rubric
          matches the official Capstone Shark Tank weighting, with a dedicated
          Repository Setup section for the{" "}
          <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-xs">Capstone/</code>{" "}
          repository structure.
        </p>
      </div>

      <SharkTankRubric />
    </div>
  );
}
