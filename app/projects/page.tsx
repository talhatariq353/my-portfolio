import type { Metadata } from "next";
import { projects } from "@/lib/data";
import { SectionHeader } from "../components/section";

export const metadata: Metadata = {
  title: "Projects · Talha Tariq",
  description:
    "AI agents, exam prep, and ML supply chain forecasting. What Talha builds when no one's watching.",
};

export default function ProjectsPage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 pt-20 pb-24 sm:px-10 sm:pt-28 sm:pb-32">
      <SectionHeader
        eyebrow="Lab notebook"
        title={
          <>
            What I build when{" "}
            <span className="text-accent">no one&apos;s watching.</span>
          </>
        }
        caption="Side bets that turned into shipping things. Each one is a wager that an LLM, a workflow engine, or a forecasting model can collapse work that used to take a team."
      />

      <div className="mt-12 flex flex-col gap-6">
        {projects.map((p) => {
          const isVenture =
            p.badge === "Founder" || p.badge === "Co-founder & COO";
          return (
            <article
              key={p.name}
              className="group relative grid gap-10 rounded-3xl border-[2.5px] border-ink bg-paper p-8 transition-all hover:shadow-[10px_10px_0_0_var(--ink)] hover:-translate-y-1 sm:p-12 lg:grid-cols-[1fr_1.6fr] lg:gap-16"
            >
              {/* index ribbon */}
              <div
                aria-hidden
                className="absolute right-8 top-8 font-[var(--font-mono)] text-xs font-bold tracking-widest text-ink-faint sm:right-12 sm:top-12"
              >
                {p.index} / {String(projects.length).padStart(2, "0")}
              </div>

              <div className="flex flex-col gap-6">
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border-2 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${
                      isVenture
                        ? "border-ink bg-accent text-white"
                        : "border-ink/15 bg-bg-elevated text-ink-soft"
                    }`}
                  >
                    <span
                      className={`size-1 rounded-full ${
                        isVenture ? "bg-white" : "bg-ink-soft"
                      }`}
                    />
                    {p.badge}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.22em] text-ink-muted">
                    {p.tag}
                  </span>
                </div>
                <h2 className="font-extrabold text-[clamp(2.25rem,4.5vw,4rem)] leading-[0.98] tracking-[-0.035em]">
                  {p.name}
                </h2>
                <p className="font-extrabold text-lg leading-tight text-accent sm:text-xl">
                  {p.blurb}
                </p>
                <div className="mt-2">
                  <p className="eyebrow mb-3">Role</p>
                  <p className="text-sm font-medium leading-relaxed text-ink-soft">
                    {p.role}
                  </p>
                </div>
                <div>
                  <p className="eyebrow mb-3">Stack</p>
                  <ul className="flex flex-wrap gap-1.5">
                    {p.stack.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border-2 border-ink/10 bg-bg-elevated px-2.5 py-1 text-[12px] font-semibold text-ink-soft"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-col gap-8">
                <p className="font-extrabold text-[clamp(1.25rem,2.1vw,1.65rem)] leading-[1.2] tracking-[-0.02em] text-ink-soft">
                  {p.detail}
                </p>
                <div>
                  <p className="eyebrow mb-4">What landed</p>
                  <ul className="flex flex-col gap-4">
                    {p.outcomes.map((o, oi) => (
                      <li
                        key={oi}
                        className="grid grid-cols-[auto_1fr] gap-4 border-b-2 border-ink/5 pb-4 last:border-0"
                      >
                        <span className="mt-1 font-[var(--font-mono)] text-xs font-bold tracking-widest text-accent">
                          0{oi + 1}
                        </span>
                        <span className="text-base font-medium leading-relaxed text-ink-soft">
                          {o}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <p className="mt-16 max-w-2xl border-l-[3px] border-accent pl-5 text-lg font-bold text-ink-muted">
        More in flight. Happy to walk through architectures and tradeoffs on a
        call.
      </p>
    </div>
  );
}
