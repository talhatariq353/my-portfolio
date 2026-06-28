export function SectionHeader({
  eyebrow,
  title,
  caption,
  align = "split",
}: {
  eyebrow: string;
  title: React.ReactNode;
  caption?: React.ReactNode;
  align?: "split" | "center";
}) {
  if (align === "center") {
    return (
      <header className="flex flex-col items-center gap-6 pb-12 text-center">
        <div className="flex items-center gap-4">
          <span className="h-px w-12 bg-rule" />
          <span className="eyebrow">{eyebrow}</span>
          <span className="h-px w-12 bg-rule" />
        </div>
        <h2 className="font-extrabold text-[clamp(2.25rem,5vw,4rem)] leading-[1] tracking-[-0.035em]">
          {title}
        </h2>
        {caption && (
          <p className="max-w-2xl text-base text-ink-muted">{caption}</p>
        )}
      </header>
    );
  }
  return (
    <header className="flex flex-col gap-6 pb-12">
      <div className="flex items-center gap-4">
        <span className="eyebrow">{eyebrow}</span>
        <span className="h-px flex-1 bg-rule" />
      </div>
      <div className="grid gap-6 sm:grid-cols-[1.4fr_1fr]">
        <h2 className="font-extrabold text-[clamp(2.25rem,5vw,4rem)] leading-[1] tracking-[-0.035em]">
          {title}
        </h2>
        {caption && (
          <p className="self-end text-base leading-relaxed text-ink-muted">
            {caption}
          </p>
        )}
      </div>
    </header>
  );
}
