import Link from "next/link";
import { HeroSlider } from "./components/hero-slider";
import { Timeline } from "./components/timeline";
import { skills, projects } from "@/lib/data";
import { RESUME_HREF } from "@/lib/asset";

export default function Home() {
  return (
    <>
      <HeroSlider />

      <ApproachStrip />

      <div className="mt-20 sm:mt-28">
        <Timeline />
      </div>

      <ToolkitSection />

      <ProjectsPreview />

      <ClosingCTA />
    </>
  );
}

function ApproachStrip() {
  return (
    <section className="border-y-2 border-ink bg-bg-elevated">
      <div className="mx-auto max-w-[1280px] px-6 py-16 sm:px-10 sm:py-24">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:items-center sm:gap-16">
          <p className="eyebrow">How I work</p>
          <p className="max-w-3xl font-extrabold text-[clamp(1.5rem,3vw,2.5rem)] leading-[1.1] tracking-[-0.025em]">
            <span className="text-ink">Pre-sales. Post-sales. Success. </span>
            <span className="text-accent-blue">Same job</span>
            <span className="text-ink"> make the customer win. </span>
            <span className="text-accent">The numbers come with me.</span>
          </p>
        </div>
      </div>
    </section>
  );
}

function ToolkitSection() {
  return (
    <section className="relative mt-28 sm:mt-36">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <div className="flex items-center gap-4 pb-10">
          <span className="eyebrow">Toolkit</span>
          <span className="h-px flex-1 bg-rule" />
        </div>

        <div className="grid gap-10 sm:grid-cols-[1fr_1.6fr] sm:gap-16">
          <h2 className="font-extrabold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1] tracking-[-0.03em]">
            The stack I reach for{" "}
            <span className="text-accent-blue">first.</span>
          </h2>
          <div className="space-y-10">
            <div>
              <p className="eyebrow mb-4">Ops, data & automation</p>
              <ul className="flex flex-wrap gap-2">
                {skills.tools.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border-2 border-ink/15 bg-paper px-3.5 py-1.5 text-sm font-semibold text-ink-soft transition-colors hover:border-ink hover:text-ink"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-4">Languages & analytics</p>
              <ul className="flex flex-wrap gap-2">
                {skills.languages.map((s) => (
                  <li
                    key={s}
                    className="rounded-full border-2 border-ink/15 bg-paper px-3.5 py-1.5 text-sm font-semibold text-ink-soft transition-colors hover:border-ink hover:text-ink"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectsPreview() {
  return (
    <section className="relative mt-28 sm:mt-36">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <div className="flex items-end justify-between gap-6 pb-10">
          <div className="flex items-center gap-4">
            <span className="eyebrow">Lab notebook</span>
            <span className="hidden h-px w-32 bg-rule sm:block" />
          </div>
          <Link
            href="/projects"
            className="group link-underline text-sm font-bold text-ink-soft hover:text-accent"
          >
            See all projects →
          </Link>
        </div>

        <h2 className="max-w-3xl font-extrabold text-[clamp(2rem,4.5vw,3.5rem)] leading-[1] tracking-[-0.03em]">
          What I build when{" "}
          <span className="text-accent">no one&apos;s watching.</span>
        </h2>

        <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {projects.map((p) => {
            const isVenture =
              p.badge === "Founder" || p.badge === "Co-founder & COO";
            return (
              <Link
                key={p.name}
                href="/projects"
                className={`group relative flex flex-col gap-5 rounded-2xl border-[2.5px] border-ink bg-paper p-7 transition-all hover:shadow-[8px_8px_0_0_var(--ink)] hover:-translate-y-1`}
              >
                <div className="flex items-start justify-between gap-3">
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full border-2 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-[0.18em] ${
                      isVenture
                        ? "border-accent bg-accent text-white"
                        : "border-ink/20 bg-bg-elevated text-ink-soft"
                    }`}
                  >
                    {p.badge}
                  </span>
                  <span className="font-[var(--font-mono)] text-xs font-bold tracking-widest text-ink-faint">
                    {p.index}
                  </span>
                </div>
                <h3 className="font-extrabold text-2xl leading-tight tracking-[-0.02em] sm:text-3xl">
                  {p.name}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-ink-soft">
                  {p.blurb}
                </p>
                <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                  {p.stack.slice(0, 4).map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-bg-elevated px-2.5 py-0.5 text-[11px] font-semibold text-ink-muted"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="absolute right-6 bottom-6 inline-flex translate-x-0 text-ink-faint transition-transform group-hover:translate-x-1 group-hover:text-accent">
                  →
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ClosingCTA() {
  return (
    <section className="relative mt-28 sm:mt-36">
      <div className="mx-auto max-w-[1280px] px-6 sm:px-10">
        <div className="overflow-hidden rounded-3xl border-[2.5px] border-ink bg-ink px-8 py-16 text-white sm:px-16 sm:py-24">
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-accent-soft">
            Next chapter
          </p>
          <h2 className="mt-6 max-w-4xl font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1] tracking-[-0.035em]">
            <span className="text-white">Hiring someone who treats </span>
            <span className="text-accent">the customer&apos;s outcome</span>
            <span className="text-white"> like the </span>
            <span className="text-accent-blue-soft">only KPI?</span>
          </h2>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="https://calendly.com/talha-tariq/intro"
              target="_blank"
              rel="noreferrer noopener"
              className="btn-chunky btn-red"
              style={{
                boxShadow: "5px 5px 0 0 #ffffff",
                borderColor: "#ffffff",
              }}
            >
              Book a 20-min intro
              <span aria-hidden>→</span>
            </a>
            <a
              href={RESUME_HREF}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-chunky btn-blue"
              style={{
                boxShadow: "5px 5px 0 0 #ffffff",
                borderColor: "#ffffff",
              }}
            >
              View My Resume
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
