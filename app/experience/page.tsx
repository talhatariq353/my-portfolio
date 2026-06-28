import type { Metadata } from "next";
import { experience } from "@/lib/data";
import { SectionHeader } from "../components/section";

export const metadata: Metadata = {
  title: "Experience · Talha Tariq",
  description:
    "Seven years of post-sales, implementation, and customer success leadership across fintech and enterprise ERP.",
};

export default function ExperiencePage() {
  return (
    <div className="mx-auto max-w-[1280px] px-6 pt-20 pb-24 sm:px-10 sm:pt-28 sm:pb-32">
      <SectionHeader
        eyebrow="Experience"
        title={
          <>
            Seven years.{" "}
            <span className="text-accent-blue">One operating system.</span>
          </>
        }
        caption="Different industries, different stacks, same job: align technical delivery with what the customer is actually paying for."
      />

      <div className="mt-12 flex flex-col">
        {experience.map((role, i) => (
          <RoleSpread
            key={role.title + role.start}
            role={role}
            index={i}
            total={experience.length}
          />
        ))}
      </div>
    </div>
  );
}

function RoleSpread({
  role,
  index,
  total,
}: {
  role: (typeof experience)[number];
  index: number;
  total: number;
}) {
  const idx = String(index + 1).padStart(2, "0");
  const tot = String(total).padStart(2, "0");
  const isVenture = role.badge?.toLowerCase().includes("venture") || role.badge?.toLowerCase().includes("founding");

  return (
    <article className="group relative border-t-2 border-ink/10 py-14 first:border-t-0 sm:py-20">
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-20">
        {/* Left rail */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.22em] text-ink-faint">
            <span>
              {idx} <span className="text-ink-faint/60">/ {tot}</span>
            </span>
            <span>
              {role.start} → {role.end}
            </span>
          </div>
          {role.badge && (
            <span
              className={`inline-flex w-fit items-center gap-2 rounded-full border-2 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] ${
                isVenture
                  ? "border-ink bg-accent text-white"
                  : "border-ink/15 bg-accent-blue-wash text-accent-blue"
              }`}
            >
              <span
                className={`size-1 rounded-full ${
                  isVenture ? "bg-white" : "bg-accent-blue"
                }`}
              />
              {role.badge}
            </span>
          )}
          <div>
            <h2 className="font-extrabold text-[clamp(2.25rem,4.5vw,4rem)] leading-[0.98] tracking-[-0.035em]">
              {role.company}
            </h2>
            <p className="mt-2 text-sm font-semibold text-ink-muted">{role.product}</p>
          </div>
          <div className="flex flex-col gap-1.5">
            <p className="font-extrabold text-xl leading-tight text-accent sm:text-2xl">
              {role.title}
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-ink-faint">
              {role.location}
            </p>
          </div>

          {role.stack && (
            <div className="mt-2">
              <p className="eyebrow mb-3">Stack</p>
              <ul className="flex flex-wrap gap-1.5">
                {role.stack.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border-2 border-ink/10 bg-bg-elevated px-2.5 py-1 text-[12px] font-semibold text-ink-soft"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Right body */}
        <div className="flex flex-col gap-10">
          <p className="font-extrabold text-[clamp(1.4rem,2.4vw,1.85rem)] leading-[1.15] tracking-[-0.02em] text-ink-soft">
            {role.summary}
          </p>

          {role.bullets.length > 0 && (
            <ul className="flex flex-col gap-5">
              {role.bullets.map((b, bi) => (
                <li
                  key={bi}
                  className="grid grid-cols-[auto_1fr] gap-4 border-b-2 border-ink/5 pb-5 last:border-0"
                >
                  <span className="mt-1 font-[var(--font-mono)] text-xs font-bold tracking-widest text-accent">
                    0{bi + 1}
                  </span>
                  <span className="text-base font-medium leading-relaxed text-ink-soft">
                    {b}
                  </span>
                </li>
              ))}
            </ul>
          )}

          <div>
            <p className="eyebrow mb-4">Receipts</p>
            <div className="grid gap-x-8 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
              {role.metrics.map((m, mi) => (
                <div key={m.label}>
                  <p
                    className={`font-extrabold text-3xl leading-none tracking-[-0.03em] sm:text-4xl ${
                      mi % 2 === 0 ? "text-ink" : "text-accent-blue"
                    }`}
                  >
                    {m.value}
                  </p>
                  <div className="mt-2 h-[3px] w-8 bg-accent" />
                  <p className="mt-2 text-xs font-semibold text-ink-muted">{m.label}</p>
                </div>
              ))}
            </div>
          </div>

          {role.progression && (
            <div>
              <p className="eyebrow mb-4">Climb · most recent first</p>
              <ol className="flex flex-col overflow-hidden rounded-2xl border-2 border-ink bg-paper">
                {role.progression.map((rung, ri) => (
                  <li
                    key={rung.title}
                    className={`grid gap-6 px-6 py-7 sm:grid-cols-[200px_1fr] ${
                      ri > 0 ? "border-t-2 border-ink/10" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-3">
                      <span className="font-[var(--font-mono)] text-[11px] font-bold tracking-widest text-accent">
                        {String(role.progression!.length - ri).padStart(2, "0")}
                      </span>
                      <p className="font-extrabold text-lg leading-tight text-accent sm:text-xl">
                        {rung.title}
                      </p>
                      <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-faint">
                        {rung.start} → {rung.end}
                      </p>
                      <div className="mt-1 flex flex-col gap-1.5">
                        {rung.metrics.map((m) => (
                          <p
                            key={m.label}
                            className="flex items-baseline gap-2 text-sm"
                          >
                            <span className="font-extrabold text-lg leading-none text-ink">
                              {m.value}
                            </span>
                            <span className="text-xs font-semibold text-ink-muted">
                              {m.label}
                            </span>
                          </p>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                      <p className="text-sm font-medium leading-relaxed text-ink-soft">
                        {rung.summary}
                      </p>
                      <ul className="flex flex-col gap-2 pt-1">
                        {rung.bullets.map((b, bi) => (
                          <li
                            key={bi}
                            className="grid grid-cols-[auto_1fr] gap-3 text-sm font-medium leading-snug text-ink-soft"
                          >
                            <span className="mt-1.5 size-1.5 rounded-full bg-accent" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
