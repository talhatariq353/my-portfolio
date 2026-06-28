"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { Fragment, useRef } from "react";
import { timeline, type TimelineEntry } from "@/lib/data";

/**
 * Wraps numeric stats inside a string with a colored span so they pop:
 *   "$20M in loan volume across 8 banks"
 *   → "<span>$20M</span> in loan volume across <span>8</span> banks"
 *
 * Catches: $20M, $3.2M, 26, 470+, 1M+, 95%, 25%, 0
 */
function highlightStats(text: string): React.ReactNode {
  const re = /\$?\d+(?:[.,]\d+)*[MKk]?\+?%?/g;
  const out: React.ReactNode[] = [];
  let lastIndex = 0;
  let match: RegExpExecArray | null;
  while ((match = re.exec(text)) !== null) {
    if (match.index > lastIndex) {
      out.push(
        <Fragment key={`t${lastIndex}`}>
          {text.slice(lastIndex, match.index)}
        </Fragment>
      );
    }
    out.push(
      <span
        key={`n${match.index}`}
        className="font-extrabold text-accent"
      >
        {match[0]}
      </span>
    );
    lastIndex = match.index + match[0].length;
  }
  if (lastIndex < text.length) {
    out.push(
      <Fragment key={`t${lastIndex}`}>{text.slice(lastIndex)}</Fragment>
    );
  }
  return out;
}

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 75%", "end 35%"],
  });

  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section className="relative">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <header className="flex flex-col gap-6 pb-12">
          <div className="flex items-center gap-4">
            <span className="eyebrow">Timeline</span>
            <span className="h-px flex-1 bg-rule" />
          </div>
          <div className="grid gap-6 sm:grid-cols-[1.4fr_1fr]">
            <h2 className="font-extrabold text-[clamp(2.25rem,5vw,4rem)] leading-[1] tracking-[-0.03em]">
              Eight years.{" "}
              <span className="text-accent-blue">One through-line.</span>
            </h2>
            <p className="self-end text-base font-medium leading-relaxed text-ink-muted">
              LUMS → Techlogix → AdalFi → UMD. Different rooms, same job: ship
              outcomes, not deliverables.
            </p>
          </div>
        </header>

        <div ref={containerRef} className="relative pt-6">
          {/* base rule */}
          <div
            aria-hidden
            className="absolute left-[120px] top-0 bottom-0 w-[2px] bg-rule sm:left-[240px]"
          />
          {/* progress accent rule */}
          <motion.div
            aria-hidden
            style={{ scaleY: lineScale, transformOrigin: "top" }}
            className="absolute left-[120px] top-0 bottom-0 w-[2px] bg-ink sm:left-[240px]"
          />

          <ul className="flex flex-col">
            {timeline.map((entry) => (
              <TimelineRow key={entry.year + entry.org} entry={entry} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function TimelineRow({ entry }: { entry: TimelineEntry }) {
  return (
    <li className="relative grid grid-cols-[120px_1fr] gap-x-6 pb-16 last:pb-0 sm:grid-cols-[240px_1fr] sm:gap-x-12">
      {/* left column: year */}
      <div className="flex flex-col items-end pt-1 pr-3">
        <span className="whitespace-nowrap font-extrabold text-[clamp(1.25rem,2.4vw,2rem)] leading-none tracking-[-0.03em] text-ink">
          {entry.year}
        </span>
        <span className="mt-2 text-right text-[10px] font-bold uppercase tracking-[0.18em] text-ink-faint sm:text-[11px]">
          {entry.span}
        </span>
      </div>

      {/* dot on the rule */}
      <span
        aria-hidden
        className="absolute left-[112px] top-3 flex size-[16px] items-center justify-center sm:left-[232px]"
      >
        <span
          className={`absolute size-[16px] rounded-full border-[2.5px] border-ink ${
            entry.kind === "venture" ? "bg-accent" : entry.kind === "edu" ? "bg-accent-blue" : "bg-bg"
          }`}
        />
      </span>

      {/* right column: content */}
      <div className="min-w-0 pt-1">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <h3 className="font-extrabold text-2xl leading-tight tracking-[-0.02em] text-ink sm:text-3xl">
            {entry.org}
          </h3>
          {entry.kind === "edu" && (
            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink/15 bg-accent-blue-wash px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-accent-blue">
              <span className="size-1 rounded-full bg-accent-blue" />
              Education
            </span>
          )}
          {entry.kind === "venture" && (
            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-ink bg-accent px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white">
              <span className="size-1 rounded-full bg-white" />
              Venture · Co-founder
            </span>
          )}
        </div>
        <p className="mt-1 text-base font-semibold text-ink-soft sm:text-lg">
          {entry.role}
        </p>
        <p className="mt-1 text-xs font-bold uppercase tracking-[0.18em] text-ink-faint">
          {entry.location}
        </p>
        {entry.headline && (
          <p className="mt-4 max-w-2xl border-l-[3px] border-accent pl-4 text-lg font-semibold leading-snug text-ink-soft sm:text-xl">
            {highlightStats(entry.headline)}
          </p>
        )}

        {entry.progression ? (
          <ol className="mt-6 flex max-w-2xl flex-col overflow-hidden rounded-xl border-2 border-ink bg-paper">
            {entry.progression.map((rung, ri) => (
              <li
                key={rung.title}
                className={`grid grid-cols-[28px_1fr] gap-x-4 px-5 py-4 ${
                  ri > 0 ? "border-t-2 border-ink/10" : ""
                }`}
              >
                <span className="pt-0.5 font-[var(--font-mono)] text-[11px] font-bold tracking-widest text-accent">
                  {String(entry.progression!.length - ri).padStart(2, "0")}
                </span>
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <p className="text-base font-extrabold text-ink">
                      {rung.title}
                    </p>
                    <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-faint">
                      {rung.period}
                    </p>
                  </div>
                  <p className="text-sm font-medium leading-snug text-ink-muted">
                    {highlightStats(rung.headline)}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        ) : null}
      </div>
    </li>
  );
}
