import type { Metadata } from "next";
import { education } from "@/lib/data";
import { SectionHeader } from "../components/section";

export const metadata: Metadata = {
  title: "Education · Talha Tariq",
  description:
    "M.S. Business Analytics at the University of Maryland and B.S. Electrical Engineering at LUMS.",
};

export default function EducationPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 pt-20 pb-24 sm:px-10 sm:pt-28 sm:pb-32">
      <SectionHeader
        eyebrow="Education"
        title={
          <>
            From signal processing to{" "}
            <span className="text-accent-blue">decision analytics.</span>
          </>
        }
        caption="An engineering foundation, then the language of business on top. Both schools picked deliberately."
      />

      <div className="mt-12 flex flex-col gap-6">
        {education.map((e, i) => (
          <article
            key={e.school}
            className="relative grid gap-12 rounded-3xl border-[2.5px] border-ink bg-paper p-8 transition-all hover:shadow-[10px_10px_0_0_var(--ink)] hover:-translate-y-1 sm:p-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20"
          >
            <div className="flex flex-col gap-6">
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-ink-faint">
                {String(i + 1).padStart(2, "0")} / {String(education.length).padStart(2, "0")} ·{" "}
                {e.period}
              </span>
              <div>
                <h2 className="font-extrabold text-[clamp(2rem,4vw,3.25rem)] leading-[1] tracking-[-0.035em]">
                  {e.school}
                </h2>
                <p className="mt-2 text-sm font-semibold text-ink-muted">{e.college}</p>
              </div>
              <p className="font-extrabold text-xl leading-tight text-accent-blue sm:text-2xl">
                {e.degree}
              </p>

              {e.honors.length > 0 && (
                <div className="mt-2">
                  <p className="eyebrow mb-3">Honors</p>
                  <ul className="flex flex-wrap gap-2">
                    {e.honors.map((h) => (
                      <li
                        key={h}
                        className="rounded-full border-2 border-ink bg-accent px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-white"
                      >
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-10">
              <p className="font-extrabold text-[clamp(1.3rem,2.3vw,1.75rem)] leading-[1.2] tracking-[-0.02em] text-ink-soft">
                {e.note}
              </p>

              <div>
                <p className="eyebrow mb-4">Selected coursework</p>
                <ul className="grid gap-x-6 gap-y-2 sm:grid-cols-2">
                  {e.coursework.map((c, ci) => (
                    <li
                      key={c}
                      className="flex items-baseline gap-3 text-sm font-medium text-ink-soft"
                    >
                      <span className="font-[var(--font-mono)] text-[10px] font-bold tracking-widest text-ink-faint">
                        {String(ci + 1).padStart(2, "0")}
                      </span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-20 grid gap-12 border-t-2 border-ink/10 pt-16 sm:grid-cols-[1fr_1.6fr]">
        <h3 className="font-extrabold text-3xl leading-tight tracking-[-0.03em]">
          Always learning,{" "}
          <span className="text-accent">on purpose.</span>
        </h3>
        <p className="text-base font-medium leading-relaxed text-ink-muted">
          The shift from EE to business analytics was deliberate. Once I&apos;d
          spent a few years sitting across the table from CFOs and CIOs, the
          missing piece was the formal language of decision-making under
          uncertainty. UMD&apos;s program closed that gap. The Walmart capstone
          turned it into something a real logistics team could run.
        </p>
      </div>
    </div>
  );
}
