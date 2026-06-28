"use client";

import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  type MotionValue,
} from "motion/react";
import { useRef, useState } from "react";
import { heroSlides, type HeroSlide, type HeadlinePart } from "@/lib/data";

const TOTAL = heroSlides.length;

function toneClass(t?: "ink" | "blue" | "red") {
  if (t === "blue") return "text-accent-blue";
  if (t === "red") return "text-accent";
  return "text-ink";
}

export function HeroSlider() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const [activeIndex, setActiveIndex] = useState(0);
  useMotionValueEvent(scrollYProgress, "change", (v) => {
    const idx = Math.min(TOTAL - 1, Math.max(0, Math.floor(v * TOTAL)));
    setActiveIndex(idx);
  });

  const goToSlide = (i: number) => {
    if (!containerRef.current) return;
    const top = containerRef.current.offsetTop;
    const h = containerRef.current.offsetHeight;
    // Each slide's transform reaches y=0% (fully in view) at scroll
    // progress = i/TOTAL, NOT at the middle of its segment. Aiming for
    // the middle would land halfway through the transition to the next
    // slide. Add a small epsilon past the threshold so floor() lands on
    // i and the transition has settled.
    const scrollable = h - window.innerHeight;
    const progressTarget = i === 0 ? 0 : i / TOTAL + 0.02;
    const target = top + progressTarget * scrollable;
    window.scrollTo({ top: target, behavior: "smooth" });
  };

  return (
    <section
      ref={containerRef}
      className="relative bg-bg"
      style={{ height: `${TOTAL * 100}vh` }}
      aria-roledescription="carousel"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Slides - stacked, each transformed by scroll progress */}
        {heroSlides.map((s, i) => (
          <Slide
            key={s.label}
            slide={s}
            index={i}
            scrollYProgress={scrollYProgress}
          />
        ))}

        {/* Side pagination - left rail */}
        <div className="pointer-events-none absolute left-5 top-1/2 z-20 hidden -translate-y-1/2 flex-col items-start gap-3 sm:flex">
          {heroSlides.map((s, i) => {
            const active = i === activeIndex;
            return (
              <button
                key={s.label}
                type="button"
                onClick={() => goToSlide(i)}
                aria-label={`Go to ${s.label} slide`}
                aria-current={active}
                className="group pointer-events-auto flex items-center gap-3 focus:outline-none focus-visible:outline-none"
              >
                <span
                  className={`block h-10 w-[3px] rounded-full transition-colors ${
                    active ? "bg-ink" : "bg-rule group-hover:bg-ink-faint"
                  }`}
                />
                <span
                  className={`text-[11px] font-bold uppercase tracking-[0.2em] transition-colors ${
                    active ? "text-ink" : "text-ink-faint group-hover:text-ink-soft"
                  }`}
                >
                  {s.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Scroll hint at bottom - only visible on slide 0 */}
        <div
          className={`pointer-events-none absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 text-[11px] font-bold uppercase tracking-[0.2em] text-ink-muted transition-opacity ${
            activeIndex === 0 ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="hidden sm:inline">Scroll</span>
          <span aria-hidden className="flex h-8 w-5 items-end justify-center rounded-full border-2 border-ink p-1">
            <span className="block h-2 w-[2px] animate-bounce rounded-full bg-ink" />
          </span>
          <span>to see {TOTAL - 1} more</span>
        </div>

        {/* Top progress rule */}
        <div className="absolute inset-x-0 top-0 z-30 h-[3px] bg-rule">
          <motion.div
            style={{ scaleX: scrollYProgress, transformOrigin: "0% 50%" }}
            className="h-full bg-accent"
          />
        </div>
      </div>
    </section>
  );
}

type SlideProps = {
  slide: HeroSlide;
  index: number;
  scrollYProgress: MotionValue<number>;
};

function Slide({ slide, index, scrollYProgress }: SlideProps) {
  // Compute keyframes per slide so the transition reads as "previous slide pushes up while next slide rises from below."
  let inputRange: number[];
  let outputRange: string[];

  if (index === 0) {
    inputRange = [0, 1 / TOTAL];
    outputRange = ["0%", "-100%"];
  } else if (index === TOTAL - 1) {
    inputRange = [(index - 1) / TOTAL, index / TOTAL, 1];
    outputRange = ["100%", "0%", "0%"];
  } else {
    inputRange = [
      (index - 1) / TOTAL,
      index / TOTAL,
      (index + 1) / TOTAL,
    ];
    outputRange = ["100%", "0%", "-100%"];
  }

  const y = useTransform(scrollYProgress, inputRange, outputRange);

  return (
    <motion.div
      style={{ y }}
      className="absolute inset-0 h-screen w-full will-change-transform"
    >
      <SlideContent slide={slide} index={index} />
    </motion.div>
  );
}

function SlideContent({ slide, index }: { slide: HeroSlide; index: number }) {
  return (
    <div className="mx-auto h-full max-w-[1280px] px-6 sm:px-10">
      <div className="grid h-full items-center gap-12 py-16 sm:py-20 lg:grid-cols-[1.35fr_1fr] lg:gap-16">
        {/* LEFT - copy */}
        <div className="flex flex-col gap-6 sm:gap-7">
          <p className="flex items-center gap-3 text-base font-bold text-ink-soft sm:text-lg">
            <span className="text-2xl sm:text-3xl" aria-hidden>
              {slide.emoji}
            </span>
            {slide.eyebrow}
          </p>

          <h1 className="font-extrabold text-[clamp(2.5rem,7.5vw,5.75rem)] leading-[0.95] tracking-[-0.035em]">
            {slide.headline.map((p, i) => (
              <Part key={i} part={p} />
            ))}
          </h1>

          <p className="max-w-2xl text-base leading-snug text-ink-soft sm:text-xl">
            {slide.subtitle.map((p, i) => (
              <Part key={i} part={p} bold />
            ))}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-4">
            <a
              href={slide.primaryCta.href}
              target={slide.primaryCta.href.startsWith("http") ? "_blank" : undefined}
              rel={
                slide.primaryCta.href.startsWith("http") ? "noreferrer noopener" : undefined
              }
              className={`btn-chunky ${
                slide.primaryCta.tone === "red" ? "btn-red" : "btn-blue"
              }`}
            >
              {slide.primaryCta.label}
              <span aria-hidden>→</span>
            </a>
            <a
              href={slide.secondaryCta.href}
              target={slide.secondaryCta.href.startsWith("http") ? "_blank" : undefined}
              rel={
                slide.secondaryCta.href.startsWith("http") ? "noreferrer noopener" : undefined
              }
              className={`btn-chunky ${
                slide.secondaryCta.tone === "red" ? "btn-red" : "btn-blue"
              }`}
            >
              {slide.secondaryCta.label}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>

        {/* RIGHT - tilted stat card */}
        <div className="relative hidden h-full items-center justify-end lg:flex">
          <StatCard slide={slide} index={index} />
        </div>
      </div>
    </div>
  );
}

function StatCard({ slide, index }: { slide: HeroSlide; index: number }) {
  const tilt = index % 2 === 0 ? "-rotate-[3deg]" : "rotate-[2.5deg]";
  const topStripe =
    slide.stats[0]?.tone === "red"
      ? "bg-accent"
      : slide.stats[0]?.tone === "blue"
        ? "bg-accent-blue"
        : "bg-ink";

  return (
    <div className={`card-chunky relative w-[440px] overflow-hidden ${tilt}`}>
      <div className={`absolute inset-x-0 top-0 h-3 ${topStripe}`} />
      <div className="px-10 pt-12 pb-10">
        <div className="flex items-baseline justify-between">
          <p className="eyebrow text-ink-faint">
            {String(index + 1).padStart(2, "0")} · Receipts
          </p>
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-ink-faint">
            {slide.label}
          </p>
        </div>

        <div className="mt-7 flex flex-col gap-5">
          {slide.stats.map((s, i) => (
            <div
              key={s.label}
              className={i > 0 ? "border-t-2 border-ink/10 pt-5" : ""}
            >
              <p
                className={`font-extrabold leading-none tracking-[-0.035em] ${toneClass(s.tone)}`}
                style={{
                  fontSize:
                    i === 0
                      ? "clamp(3.25rem, 4.5vw, 4.5rem)"
                      : "clamp(1.75rem, 2.5vw, 2.25rem)",
                }}
              >
                {s.value}
              </p>
              <p className="mt-2 text-sm font-medium text-ink-muted">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Part({ part, bold }: { part: HeadlinePart; bold?: boolean }) {
  const isAccent = part.tone === "red" || part.tone === "blue";
  return (
    <span className={`${toneClass(part.tone)} ${bold && isAccent ? "font-bold" : ""}`}>
      {part.text}
    </span>
  );
}
