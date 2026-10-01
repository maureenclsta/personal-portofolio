"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navItems } from "@/data/portfolio";

function NavIcon({ href }: { href: string }) {
  const common = {
    className: "h-[18px] w-[18px]",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (href) {
    case "/":
      return (
        <svg {...common}>
          <path d="M3 10.5 12 3l9 7.5" />
          <path d="M5 9.5V21h14V9.5" />
          <path d="M9.5 21v-6h5v6" />
        </svg>
      );
    case "/about":
      return (
        <svg {...common}>
          <circle cx="12" cy="8" r="4" />
          <path d="M4 20c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
        </svg>
      );
    case "/projects":
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="16" rx="2.5" />
          <path d="M3 9h18" />
          <path d="M7 6.5h.01M9.5 6.5h.01" />
        </svg>
      );
    case "/experience":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2.5" />
          <path d="M8.5 7V5.5A1.5 1.5 0 0 1 10 4h4a1.5 1.5 0 0 1 1.5 1.5V7" />
        </svg>
      );
    case "/skills":
      return (
        <svg {...common}>
          <path d="M12 3l2.4 4.9 5.4.8-3.9 3.8.9 5.4-4.8-2.5-4.8 2.5.9-5.4-3.9-3.8 5.4-.8z" />
        </svg>
      );
    case "/contact":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    default:
      return null;
  }
}

const isActivePath = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

function BrandMark() {
  return (
    <Link href="/" className="group flex items-center gap-3" aria-label="Maureen Calista Surjo — Home">
      <span className="relative flex h-10 w-10 items-center justify-center rounded-2xl bg-[var(--gradient-accent,linear-gradient(135deg,#a06bff,#7c4dff))] font-black text-white shadow-[var(--shadow-accent)] transition-transform duration-300 group-hover:scale-105">
        M
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-black tracking-tight text-[var(--text-strong)]">Maureen</span>
        <span className="block text-[11px] font-medium text-[var(--muted)]">Calista Surjo</span>
      </span>
    </Link>
  );
}

function AvailabilityPill() {
  return (
    <div className="flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-3 py-2 text-xs font-semibold text-[var(--text)]">
      <span className="relative flex h-2.5 w-2.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
        <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-400" />
      </span>
      Open to internships
    </div>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      {/* ---------- Desktop sidebar ---------- */}
      <aside className="sticky top-0 hidden h-screen w-[248px] shrink-0 flex-col justify-between border-r border-[var(--border)] bg-[rgba(18,10,36,0.72)] px-5 py-7 backdrop-blur-xl md:flex">
        <div className="space-y-9">
          <BrandMark />

          <nav aria-label="Primary" className="space-y-1.5">
            <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[var(--muted-soft)]">Menu</p>
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "group relative flex items-center gap-3 rounded-2xl px-3 py-2.5 text-[0.95rem] font-semibold transition-all duration-200",
                    active
                      ? "bg-[rgba(var(--accent-rgb),0.16)] text-[var(--text-strong)]"
                      : "text-[var(--muted)] hover:bg-white/5 hover:text-[var(--text)]",
                  ].join(" ")}
                >
                  <span
                    aria-hidden="true"
                    className={[
                      "absolute left-0 top-1/2 h-6 w-1 -translate-y-1/2 rounded-full bg-[var(--accent)] transition-all duration-200",
                      active ? "opacity-100" : "opacity-0 group-hover:opacity-40",
                    ].join(" ")}
                  />
                  <span
                    className={[
                      "flex h-9 w-9 items-center justify-center rounded-xl border transition-all duration-200",
                      active
                        ? "border-[rgba(var(--accent-rgb),0.5)] bg-[rgba(var(--accent-rgb),0.2)] text-[var(--accent-bright)]"
                        : "border-[var(--border)] bg-white/[0.03] text-[var(--muted)] group-hover:border-[rgba(var(--accent-rgb),0.4)] group-hover:text-[var(--accent-bright)]",
                    ].join(" ")}
                  >
                    <NavIcon href={item.href} />
                  </span>
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="space-y-4">
          <AvailabilityPill />
          <a
            href="/Maureen-CV.pdf"
            download="Maureen-CV.pdf"
            className="btn btn-primary w-full px-4 py-3 text-sm"
          >
            Download CV
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 3v12" />
              <path d="m7 11 5 5 5-5" />
              <path d="M5 21h14" />
            </svg>
          </a>
        </div>
      </aside>

      {/* ---------- Mobile top bar ---------- */}
      <header className="sticky top-0 z-40 flex items-center justify-between border-b border-[var(--border)] bg-[rgba(18,10,36,0.85)] px-4 py-3 backdrop-blur-xl md:hidden">
        <BrandMark />
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-white/5 text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent-bright)]"
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "top-1.5 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 top-3 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "top-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </header>

      {/* ---------- Mobile menu overlay ---------- */}
      <div
        id="mobile-menu"
        className={[
          "fixed inset-0 z-30 md:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        <div
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
          className={`absolute inset-0 bg-[rgba(8,4,20,0.6)] backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
        />
        <nav
          aria-label="Mobile"
          className={[
            "absolute inset-x-3 top-[68px] rounded-3xl border border-[var(--border)] bg-[rgba(24,14,48,0.98)] p-3 shadow-[var(--shadow-lg)] transition-all duration-300",
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
          ].join(" ")}
        >
          <div className="grid gap-1.5">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "flex items-center gap-3 rounded-2xl px-3 py-3 text-base font-semibold transition",
                    active
                      ? "bg-[rgba(var(--accent-rgb),0.18)] text-[var(--text-strong)]"
                      : "text-[var(--muted)] hover:bg-white/5 hover:text-[var(--text)]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "flex h-9 w-9 items-center justify-center rounded-xl border",
                      active
                        ? "border-[rgba(var(--accent-rgb),0.5)] bg-[rgba(var(--accent-rgb),0.2)] text-[var(--accent-bright)]"
                        : "border-[var(--border)] bg-white/[0.03] text-[var(--muted)]",
                    ].join(" ")}
                  >
                    <NavIcon href={item.href} />
                  </span>
                  {item.label}
                </Link>
              );
            })}
          </div>
          <a
            href="/Maureen-CV.pdf"
            download="Maureen-CV.pdf"
            onClick={closeMenu}
            className="btn btn-primary mt-2 w-full px-4 py-3 text-sm"
          >
            Download CV
          </a>
        </nav>
      </div>
    </>
  );
}
