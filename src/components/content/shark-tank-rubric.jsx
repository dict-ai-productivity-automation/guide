import { useRef, useState } from "react";
import { Download, Loader2, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sharkTankRubric, course } from "@/data/course";
import { cn } from "@/lib/utils";

function BlankLine({ className, label }) {
  return (
    <div className={cn("flex flex-col", className)}>
      {label && (
        <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-black/70">
          {label}
        </div>
      )}
      <div className="min-h-[1.75rem] border-b-2 border-black/80 px-1" />
    </div>
  );
}

function NotesLine() {
  return (
    <span
      className="inline-block flex-1 align-middle"
      style={{ height: "1.4rem", borderBottom: "1px dashed #000" }}
    />
  );
}

function ScoreCircles() {
  return (
    <span className="inline-flex items-center gap-2.5 align-middle" style={{ lineHeight: 0 }}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          className="inline-flex items-center gap-1.5"
          style={{ lineHeight: 0 }}
        >
          <span
            className="font-mono font-bold text-black inline-flex items-center justify-center"
            style={{
              fontSize: "0.85rem",
              lineHeight: "1.1rem",
              height: "1.1rem",
              minWidth: "0.75rem",
            }}
          >
            {n}
          </span>
          <span
            className="inline-block rounded-full border-[2.5px] border-black bg-white print:border-black"
            style={{ width: "1.1rem", height: "1.1rem", flexShrink: 0 }}
            aria-label={`Score ${n}`}
          />
        </span>
      ))}
    </span>
  );
}

async function generateRubricPDF() {
  const { jsPDF } = await import("jspdf");
  const pdf = new jsPDF({ unit: "pt", format: "a4", orientation: "portrait" });

  const P = {
    w: pdf.internal.pageSize.getWidth(),
    h: pdf.internal.pageSize.getHeight(),
    m: 36,
  };
  P.uw = P.w - 2 * P.m;
  const footerH = 20;

  let y = P.m;

  const font = (size, weight = "normal") => {
    pdf.setFont("helvetica", weight);
    pdf.setFontSize(size);
  };
  const text = (str, x, yPos, opts = {}) => pdf.text(String(str), x, yPos, opts);
  const line = (x1, y1, x2, y2, width = 0.5) => {
    pdf.setDrawColor(0);
    pdf.setLineWidth(width);
    pdf.line(x1, y1, x2, y2);
  };
  const dashed = (x1, y1, x2, y2, width = 0.4) => {
    pdf.setDrawColor(0);
    pdf.setLineWidth(width);
    pdf.setLineDashPattern([2, 2], 0);
    pdf.line(x1, y1, x2, y2);
    pdf.setLineDashPattern([], 0);
  };
  const rect = (x, yPos, w, h, fill = null, stroke = 0.5) => {
    if (fill) pdf.setFillColor(...fill);
    pdf.setDrawColor(0);
    pdf.setLineWidth(stroke);
    pdf.rect(x, yPos, w, h, fill ? "FD" : "S");
  };
  const circle = (cx, cy, r, stroke = 0.75) => {
    pdf.setDrawColor(0);
    pdf.setLineWidth(stroke);
    pdf.circle(cx, cy, r, "S");
  };

  const ensureSpace = (needed) => {
    if (y + needed > P.h - P.m - footerH) {
      pdf.addPage();
      y = P.m;
    }
  };

  // ===== HEADER =====
  font(7, "bold");
  text(`${course.organizer.name} (${course.organizer.country})`, P.w / 2, y + 5, { align: "center" });
  y += 12;

  font(17, "bold");
  text(sharkTankRubric.title, P.w / 2, y + 10, { align: "center" });
  y += 18;

  font(9, "normal");
  text(sharkTankRubric.subtitle, P.w / 2, y + 6, { align: "center" });
  y += 12;

  font(7, "normal");
  text(course.title, P.w / 2, y + 6, { align: "center" });
  y += 10;

  // header bottom border
  line(P.m, y + 4, P.m + P.uw, y + 4, 1);
  y += 10;

  // ===== TEAM INFO =====
  font(7, "bold");
  const fieldW = (P.uw - 12) / 2;
  const colGap = 12;
  const fieldLineY = y + 18;

  text("TEAM NAME", P.m, y + 6);
  line(P.m, fieldLineY, P.m + fieldW, fieldLineY, 0.75);
  text("SCHOOL", P.m + fieldW + colGap, y + 6);
  line(P.m + fieldW + colGap, fieldLineY, P.m + P.uw, fieldLineY, 0.75);
  y += 24;

  text("DATE OF PITCH", P.m, y + 6);
  line(P.m, y + 18, P.m + P.uw, y + 18, 0.75);
  y += 26;

  // ===== SCORING SCALE BAND =====
  ensureSpace(20);
  const scaleH = 16;
  rect(P.m, y, P.uw, scaleH, [240, 240, 240], 0.5);
  font(7, "bold");
  text("SCORING SCALE:", P.m + 6, y + 10.5);
  font(7, "normal");
  let sx = P.m + 80;
  sharkTankRubric.scoringScale.forEach((s) => {
    const str = `${s.score} = ${s.label}`;
    text(str, sx, y + 10.5);
    sx += pdf.getTextWidth(str) + 10;
  });
  text("Tick one circle per sub-point.", P.m + P.uw - 6, y + 10.5, { align: "right" });
  y += scaleH + 8;

  // ===== SECTIONS =====
  const bandRange = (min) => {
    if (min === 0) return "0–44";
    if (min === 45) return "45–59";
    if (min === 60) return "60–74";
    if (min === 75) return "75–89";
    return "90–100";
  };

  sharkTankRubric.sections.forEach((section, sIdx) => {
    if (sIdx === 6) {
      pdf.addPage();
      y = P.m;
    }
    ensureSpace(30);
    const headerH = 26;
    rect(P.m, y, P.uw, headerH, [225, 225, 225], 1);
    font(6.5, "bold");
    text(`SECTION ${sIdx + 1} OF ${sharkTankRubric.sections.length}`, P.m + 8, y + 9);
    font(10, "bold");
    text(section.name.toUpperCase(), P.m + 8, y + 20);
    font(6.5, "bold");
    text("WEIGHT", P.m + P.uw - 55, y + 9);
    font(13, "bold");
    text(`${section.weight}%`, P.m + P.uw - 8, y + 21, { align: "right" });
    y += headerH + 2;

    // Sub-points
    section.points.forEach((point, pIdx) => {
      const pointText = typeof point === "string" ? point : point.text;
      const isOptional = typeof point === "object" && point.optional;
      font(8, "normal");
      const textWidth = isOptional ? P.uw - 80 : P.uw - 32;
      const textLines = pdf.splitTextToSize(pointText, textWidth);
      const textH = textLines.length * 10;
      const blockH = textH + 22;
      ensureSpace(blockH);

      // Numbered circle
      const numCx = P.m + 10;
      const numCy = y + 9;
      circle(numCx, numCy, 5.5, 0.5);
      font(6.5, "bold");
      text(`${pIdx + 1}`, numCx, numCy + 2.2, { align: "center" });

      // Sub-point text
      textLines.forEach((tl, i) => {
        text(tl, P.m + 22, y + 12 + i * 10);
      });

      if (isOptional) {
        const badgeX = P.m + P.uw - 60;
        const badgeY = y + 6;
        font(6.5, "bold");
        const optW = pdf.getTextWidth("OPTIONAL") + 6;
        rect(badgeX, badgeY, optW, 12, null, 0.5);
        text("OPTIONAL", badgeX + optW / 2, badgeY + 8.5, { align: "center" });
      }

      const scoreRowY = y + textH + 12;

      // SCORE label
      font(6.5, "bold");
      text("SCORE", P.m + 22, scoreRowY);

      // 5 score circles (1–5)
      const scoreBaseX = P.m + 55;
      const scoreSpacing = 22;
      for (let i = 0; i < 5; i++) {
        const cx = scoreBaseX + i * scoreSpacing;
        // number label
        font(7.5, "bold");
        text(`${i + 1}`, cx - 6.5, scoreRowY);
        // circle
        circle(cx + 5, scoreRowY - 3.2, 4.5, 0.5);
      }

      // NOTES label + dashed line
      const notesX = scoreBaseX + 5 * scoreSpacing + 4;
      font(6.5, "bold");
      text("NOTES", notesX, scoreRowY);
      dashed(notesX + 28, scoreRowY, P.m + P.uw, scoreRowY, 0.4);

      y += blockH + 2;
    });

    // Section notes box
    ensureSpace(40);
    const notesBoxH = 32;
    rect(P.m, y, P.uw, notesBoxH, [245, 245, 245], 0.5);
    font(6.5, "bold");
    text("SECTION NOTES", P.m + 6, y + 9);
    dashed(P.m + 6, y + 18, P.m + P.uw - 6, y + 18, 0.3);
    dashed(P.m + 6, y + 26, P.m + P.uw - 6, y + 26, 0.3);
    y += notesBoxH + 2;

    // Section score
    ensureSpace(14);
    font(6.5, "bold");
    const scoreLabelX = P.m + P.uw - 110;
    text("SECTION SCORE", scoreLabelX, y + 9);
    line(scoreLabelX + 70, y + 9, P.m + P.uw - 22, y + 9, 0.75);
    font(7, "normal");
    text(`/ ${section.weight}`, P.m + P.uw - 6, y + 9, { align: "right" });
    y += 14;

    y += 6; // gap between sections
  });

  // ===== TOTAL BOX =====
  ensureSpace(80);
  const totalH = 72;
  rect(P.m, y, P.uw, totalH, null, 1);
  font(7, "bold");
  text("TOTAL SCORE", P.m + 8, y + 12);
  line(P.m + 8, y + 32, P.m + 64, y + 32, 1);
  font(11, "normal");
  text("/ 100", P.m + 68, y + 32);

  font(6.5, "bold");
  text("AI LEAGUE BANDS", P.m + P.uw - 150, y + 12);
  font(6.5, "normal");
  let bandY = y + 24;
  sharkTankRubric.bands.forEach((b) => {
    text(`${bandRange(b.min)}    ${b.label}`, P.m + P.uw - 150, bandY);
    bandY += 8.5;
  });
  y += totalH + 8;

  // ===== OVERALL COMMENTS =====
  ensureSpace(70);
  font(7, "bold");
  text("JUDGE'S OVERALL COMMENTS", P.m, y + 8);
  y += 14;
  for (let i = 0; i < 5; i++) {
    dashed(P.m, y + 6, P.m + P.uw, y + 6, 0.3);
    y += 10;
  }
  y += 4;

  // ===== JUDGE SIGN-OFF =====
  ensureSpace(70);
  line(P.m, y, P.m + P.uw, y, 1);
  y += 8;
  font(7, "bold");
  text("JUDGE", P.m, y + 8);
  y += 14;

  // Name | Date signed
  font(6.5, "bold");
  text("NAME", P.m, y + 6);
  line(P.m + 32, y + 9, P.m + fieldW, y + 9, 0.75);
  text("DATE SIGNED", P.m + fieldW + colGap, y + 6);
  line(P.m + fieldW + colGap + 55, y + 9, P.m + P.uw, y + 9, 0.75);
  y += 18;

  // Signature
  text("SIGNATURE", P.m, y + 6);
  line(P.m + 48, y + 28, P.m + P.uw, y + 28, 0.75);
  y += 32;

  // ===== FOOTER (every page) =====
  const totalPages = pdf.internal.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    pdf.setPage(i);
    font(6, "normal");
    pdf.setTextColor(120);
    text(
      `${course.organizer.name} • ${course.title} • Shark Tank – AI Edition Rubric v1`,
      P.w / 2,
      P.h - 14,
      { align: "center" }
    );
    text(
      `Page ${i} of ${totalPages} • Confidential — for judge use only`,
      P.w / 2,
      P.h - 6,
      { align: "center" }
    );
    pdf.setTextColor(0);
  }

  pdf.save("shark-tank-rubric.pdf");
}

export function SharkTankRubric() {
  const rubricRef = useRef(null);
  const [downloading, setDownloading] = useState(false);
  const [printing, setPrinting] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    try {
      await generateRubricPDF();
    } catch (err) {
      console.error("PDF generation failed", err);
    } finally {
      setDownloading(false);
    }
  };

  const handlePrint = () => {
    setPrinting(true);
    setTimeout(() => {
      window.print();
      setPrinting(false);
    }, 50);
  };

  return (
    <div className="space-y-6">
      <div className="no-print flex flex-wrap items-center justify-between gap-3 rounded-lg border bg-card p-4 print:hidden">
        <div>
          <p className="text-sm font-semibold">Judge's rubric (blank, printable)</p>
          <p className="text-xs text-muted-foreground">
            All fields are left blank so judges can fill them in with a pen after printing.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handlePrint}
            disabled={printing}
            className="gap-2"
          >
            {printing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Printer className="h-4 w-4" />}
            Print
          </Button>
          <Button
            size="sm"
            onClick={handleDownload}
            disabled={downloading}
            className="gap-2"
          >
            {downloading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Download className="h-4 w-4" />}
            {downloading ? "Generating PDF…" : "Download PDF"}
          </Button>
        </div>
      </div>

      <div
        ref={rubricRef}
        className="rubric-print bg-white text-black rounded-lg border shadow-sm print:shadow-none print:border-0 print:rounded-none"
        style={{ colorScheme: "light" }}
      >
        <div className="border-b-2 border-black px-6 py-5 text-center print:px-4">
          <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-black/70">
            {course.organizer.name} ({course.organizer.country})
          </div>
          <h1 className="mt-1 text-2xl font-bold tracking-tight text-black">
            {sharkTankRubric.title}
          </h1>
          <div className="mt-0.5 text-sm font-medium text-black/80">
            {sharkTankRubric.subtitle}
          </div>
          <div className="mt-1 text-xs text-black/70">
            {course.title}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-6 gap-y-3 px-6 py-5 sm:grid-cols-2 print:px-4">
          <BlankLine label="Team name" />
          <BlankLine label="School" />
          <BlankLine label="Date of pitch" className="sm:col-span-2" />
        </div>

        <div className="border-t border-black/30 bg-black/[0.03] px-6 py-2.5 text-xs text-black/80 print:px-4">
          <span className="font-bold uppercase tracking-wider">Scoring scale:</span>{" "}
          {sharkTankRubric.scoringScale.map((s) => (
            <span key={s.score} className="ml-3 inline-block">
              <span className="font-bold">{s.score}</span> = {s.label}
            </span>
          ))}
          <span className="ml-3 inline-block text-black/60">
            Tick one circle per sub-point.
          </span>
        </div>

        <div className="px-6 pb-1 pt-4 print:px-4">
          {sharkTankRubric.sections.map((section, sIdx) => (
            <section
              key={section.id}
              className="border-2 border-black mb-4 last:mb-0 break-inside-avoid print:break-inside-avoid"
            >
              <header className="flex items-center justify-between gap-3 border-b-2 border-black bg-black/[0.06] px-4 py-2.5">
                <div className="min-w-0 flex-1">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-black/60">
                    Section {sIdx + 1} of {sharkTankRubric.sections.length}
                  </div>
                  <h2 className="mt-0.5 truncate text-base font-bold uppercase tracking-wide text-black">
                    {section.name}
                  </h2>
                </div>
                <div className="shrink-0 text-right">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-black/60">
                    Weight
                  </div>
                  <div className="text-lg font-bold leading-none text-black">
                    {section.weight}%
                  </div>
                </div>
              </header>

              <ol className="divide-y divide-black/20">
                {section.points.map((point, pIdx) => {
                  const pointText = typeof point === "string" ? point : point.text;
                  const isOptional = typeof point === "object" && point.optional;
                  return (
                    <li key={pIdx} className="px-4 py-2.5">
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full border border-black/70 text-[10px] font-bold leading-none text-black">
                          {pIdx + 1}
                        </span>
                        <div className="min-w-0 flex-1 space-y-1.5">
                          <p className="text-sm leading-snug text-black">
                            {pointText}
                            {isOptional && (
                              <span className="ml-2 inline-block align-middle rounded border border-black/50 bg-white px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-black/70">
                                Optional
                              </span>
                            )}
                          </p>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm">
                            <div className="flex items-center gap-2">
                              <span className="font-semibold uppercase tracking-wider text-black/70 text-[10px]">
                                Score
                              </span>
                              <ScoreCircles />
                            </div>
                            <div className="flex flex-1 items-center gap-2">
                              <span className="font-semibold uppercase tracking-wider text-black/70 text-[10px]">
                                Notes
                              </span>
                              <NotesLine />
                            </div>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ol>

              <div className="space-y-1.5 border-t-2 border-black bg-black/[0.03] px-4 py-2.5 text-sm">
                <div className="flex items-center gap-2">
                  <span className="font-semibold uppercase tracking-wider text-black/70 text-[10px]">
                    Section notes
                  </span>
                </div>
                <div className="space-y-1.5">
                  <div className="h-[1.4rem] border-b border-dashed border-black/60" />
                  <div className="h-[1.4rem] border-b border-dashed border-black/60" />
                </div>
                <div className="flex items-center justify-end gap-2 pt-1">
                  <span className="font-semibold uppercase tracking-wider text-black/70 text-[10px]">
                    Section score
                  </span>
                  <span
                    className="inline-block align-middle"
                    style={{ width: "3rem", height: "1.4rem", borderBottom: "2px solid #000" }}
                  />
                  <span className="text-[10px] text-black/60">/ {section.weight}</span>
                </div>
              </div>
            </section>
          ))}
        </div>

        <div className="border-t-2 border-black px-6 py-4 print:px-4">
          <div className="rounded border-2 border-black p-3">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-black/70">
                  Total score
                </div>
                <div className="mt-1 flex items-baseline gap-2">
                  <span
                    className="inline-block"
                    style={{ width: "4rem", height: "1.75rem", borderBottom: "2px solid #000" }}
                  />
                  <span className="text-sm font-semibold text-black">/ 100</span>
                </div>
              </div>
              <div className="text-right text-[10px] text-black/70">
                <div className="font-bold uppercase tracking-wider">AI League bands</div>
                <div className="mt-1 grid grid-cols-1 gap-0.5 text-left sm:grid-cols-2">
                  {sharkTankRubric.bands.map((b) => (
                    <span key={b.label}>
                      <span className="font-mono font-semibold">
                        {b.min === 0 ? "0–44" : b.min === 45 ? "45–59" : b.min === 60 ? "60–74" : b.min === 75 ? "75–89" : "90–100"}
                      </span>{" "}
                      {b.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-black px-6 py-4 print:px-4">
          <div className="text-[10px] font-bold uppercase tracking-wider text-black/70">
            Judge's overall comments
          </div>
          <div className="mt-1 space-y-1.5">
            {Array.from({ length: 5 }).map((_, idx) => (
              <div key={idx} className="h-[1.4rem] border-b border-dashed border-black/60" />
            ))}
          </div>
        </div>

        <div className="border-t-2 border-black px-6 py-5 print:px-4">
          <div className="mb-3 text-[10px] font-bold uppercase tracking-wider text-black/70">
            Judge
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <BlankLine label="Name" />
            <BlankLine label="Date signed" />
          </div>
          <div className="mt-3">
            <BlankLine label="Signature" className="[&>div]:min-h-[3.5rem]" />
          </div>
        </div>

        <div className="border-t border-black/30 bg-black/[0.03] px-6 py-2 text-center text-[10px] text-black/60 print:px-4">
          {course.organizer.name} • {course.title} • Shark Tank – AI Edition Rubric v1 •
          Confidential — for judge use only
        </div>
      </div>
    </div>
  );
}
