import Link from "next/link";
import { profile } from "@/lib/data";

export function Footer() {
  return (
    <footer className="relative z-10 mt-32 border-t border-rule/80 bg-bg-elevated/60">
      <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="eyebrow mb-4">Let&apos;s talk</p>
          <h3 className="font-extrabold text-4xl leading-[1] tracking-[-0.03em] sm:text-5xl">
            <span>Hiring for a role where </span>
            <span className="text-accent">delivery is the product</span>
            <span>?</span>
          </h3>
          <p className="mt-5 max-w-md text-base font-medium text-ink-muted">
            Twenty minutes. No decks, no fluff. I show up with the numbers; you
            tell me what you&apos;re solving.
          </p>
          <a
            href={profile.calendly}
            target="_blank"
            rel="noreferrer noopener"
            className="mt-7 inline-flex btn-chunky btn-red"
          >
            Book a 20-min intro
            <span aria-hidden>→</span>
          </a>
        </div>

        <div>
          <p className="eyebrow mb-4">Direct</p>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                className="link-underline text-ink-soft hover:text-accent"
                href={`mailto:${profile.email}`}
              >
                {profile.email}
              </a>
            </li>
            <li>
              <a
                className="link-underline text-ink-soft hover:text-accent"
                href={`tel:${profile.phone.replace(/[^0-9+]/g, "")}`}
              >
                {profile.phone}
              </a>
            </li>
            <li>
              <a
                className="link-underline text-ink-soft hover:text-accent"
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer noopener"
              >
                LinkedIn
              </a>
            </li>
            <li className="pt-1 text-ink-faint">{profile.location}</li>
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Map</p>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                className="link-underline text-ink-soft hover:text-accent"
                href="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className="link-underline text-ink-soft hover:text-accent"
                href="/experience"
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                className="link-underline text-ink-soft hover:text-accent"
                href="/projects"
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                className="link-underline text-ink-soft hover:text-accent"
                href="/education"
              >
                Education
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-rule/70">
        <div className="mx-auto flex max-w-[1280px] flex-col items-start justify-between gap-3 px-6 py-6 text-xs text-ink-faint sm:flex-row sm:items-center sm:px-10">
          <p>© {new Date().getFullYear()} Talha Tariq. Built with care.</p>
          <p className="font-[var(--font-mono)] tracking-wide">
            Sunnyvale · College Park · Lahore · Boston
          </p>
        </div>
      </div>
    </footer>
  );
}
