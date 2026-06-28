"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/education", label: "Education" },
];

export function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-bg/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-4 sm:px-10 sm:py-5">
        <Link
          href="/"
          className="group flex items-baseline gap-2 text-ink hover:opacity-90"
        >
          <span className="font-extrabold text-xl leading-none tracking-[-0.025em]">
            Talha Tariq
          </span>
          <span className="hidden text-[11px] font-bold uppercase tracking-[0.22em] text-ink-muted sm:inline">
            · post-sales / impl.
          </span>
        </Link>

        <nav className="flex items-center gap-1 sm:gap-2">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`relative px-3 py-2 text-sm font-bold transition-colors ${
                  active ? "text-accent" : "text-ink-soft hover:text-ink"
                }`}
              >
                {l.label}
                {active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-[2px] bg-accent" />
                )}
              </Link>
            );
          })}
          <a
            href="https://calendly.com/talha-tariq/intro"
            target="_blank"
            rel="noreferrer noopener"
            className="ml-3 hidden sm:inline-flex btn-chunky btn-red"
            style={{ padding: "0.5rem 1rem", fontSize: "0.85rem", boxShadow: "3px 3px 0 0 var(--ink)" }}
          >
            Book a 20-min intro
            <span aria-hidden>→</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
