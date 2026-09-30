import Link from "next/link";

import { navItems, socialItems } from "@/data/portfolio";

const socialIcon: Record<string, React.ReactNode> = {
  LinkedIn: <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />,
};

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-8 border-t border-[var(--border)] pt-8">
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">
        {/* Brand */}
        <div>
          <Link href="/" className="group inline-flex items-center gap-3" aria-label="Maureen Calista Surjo — Home">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--gradient-accent,linear-gradient(135deg,#a06bff,#7c4dff))] font-black text-white shadow-[var(--shadow-accent)] transition-transform duration-300 group-hover:scale-105">
              M
            </span>
            <span className="leading-tight">
              <span className="block text-sm font-black tracking-tight text-[var(--text-strong)]">Maureen Calista Surjo</span>
              <span className="block text-xs text-[var(--muted)]">Computer Science · AI</span>
            </span>
          </Link>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
            Building intelligent, human-centered applications — and always up for a good conversation about tech.
          </p>
        </div>

        {/* Explore */}
        <nav aria-label="Footer navigation">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted-soft)]">Explore</p>
          <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5 sm:grid-cols-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="link-underline text-sm text-[var(--muted)] transition-colors hover:text-[var(--text)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        {/* Connect */}
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted-soft)]">Connect</p>
          <div className="mt-4 flex flex-wrap gap-2.5">
            <a
              href="https://www.linkedin.com/in/maureencalistas/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-white/5 text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[rgba(var(--accent-rgb),0.14)] hover:text-[var(--accent-bright)]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">{socialIcon.LinkedIn}</svg>
            </a>
            <a
              href="https://github.com/maureenclsta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--border)] bg-white/5 text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[rgba(var(--accent-rgb),0.14)] hover:text-[var(--accent-bright)]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.73 1.17 1.73 1.17 1.01 1.72 2.65 1.22 3.3.93.1-.73.4-1.22.72-1.5-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.16-3.04-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.04 0 4.35-2.64 5.3-5.16 5.59.41.36.77 1.04.77 2.1v3.08c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
              </svg>
            </a>
            {socialItems.map((item) =>
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${item.label} profile`}
                  className="flex h-10 items-center rounded-xl border border-[var(--border)] bg-white/5 px-3 text-xs font-semibold text-[var(--muted)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent-bright)]"
                >
                  {item.label}
                </a>
              ) : null
            )}
          </div>
          <a href="mailto:maureencalista437@gmail.com" className="mt-4 block break-all text-sm text-[var(--muted)] transition hover:text-[var(--accent-bright)]">
            maureencalista437@gmail.com
          </a>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--muted-soft)] sm:flex-row sm:text-left">
        <p>© {year} Maureen Calista Surjo. All rights reserved.</p>
        <p>Built with Next.js, Tailwind CSS &amp; a lot of curiosity.</p>
      </div>
    </footer>
  );
}
