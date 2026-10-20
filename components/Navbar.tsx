"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { navItems } from "@/data/portfolio";

const isActivePath = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

function BrandMark({ onClick }: { onClick?: () => void }) {
  return (
    <Link
      href="/"
      onClick={onClick}
      className="group flex items-center gap-3"
      aria-label="Maureen Calista Surjo — Home"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--accent)] text-sm font-black text-[var(--accent-contrast)] shadow-[var(--shadow-sm)] transition-transform duration-300 group-hover:scale-105">
        M
      </span>
      <span className="leading-tight">
        <span className="block text-sm font-black tracking-tight text-[var(--text-strong)]">Maureen</span>
        <span className="block text-[11px] font-medium text-[var(--muted)]">Calista Surjo</span>
      </span>
    </Link>
  );
}

const CvButton = ({ className = "", onClick }: { className?: string; onClick?: () => void }) => (
  <a
    href="/Maureen%20Calista%20Surjo_CV.pdf"
    download="Maureen Calista Surjo_CV.pdf"
    onClick={onClick}
    className={`btn btn-primary ${className}`}
  >
    Download CV
    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v12" />
      <path d="m7 11 5 5 5-5" />
      <path d="M5 21h14" />
    </svg>
  </a>
);

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
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[rgba(255,255,255,0.85)] backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1180px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <BrandMark />

        {/* ---------- Desktop nav ---------- */}
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = isActivePath(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={[
                  "relative rounded-lg px-3 py-2 text-sm font-semibold transition-colors duration-200",
                  active
                    ? "text-[var(--accent-deep)]"
                    : "text-[var(--muted)] hover:text-[var(--text-strong)]",
                ].join(" ")}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={[
                    "absolute inset-x-3 -bottom-px h-0.5 rounded-full bg-[var(--accent)] transition-all duration-200",
                    active ? "opacity-100" : "opacity-0",
                  ].join(" ")}
                />
              </Link>
            );
          })}
        </nav>

        {/* ---------- Desktop CTA ---------- */}
        <div className="hidden md:block">
          <CvButton className="px-4 py-2.5 text-sm" />
        </div>

        {/* ---------- Mobile toggle ---------- */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface-subtle)] text-[var(--text)] transition hover:border-[var(--accent)] hover:text-[var(--accent)] md:hidden"
        >
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "top-1.5 rotate-45" : ""}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded-full bg-current transition-all duration-200 ${menuOpen ? "opacity-0" : "opacity-100"}`} />
            <span className={`absolute left-0 top-3 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${menuOpen ? "top-1.5 -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {/* ---------- Mobile menu overlay ---------- */}
      <div
        id="mobile-menu"
        className={[
          "fixed inset-0 top-16 z-30 md:hidden",
          menuOpen ? "pointer-events-auto" : "pointer-events-none",
        ].join(" ")}
      >
        <div
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
          className={`absolute inset-0 bg-[rgba(16,24,40,0.3)] backdrop-blur-sm transition-opacity duration-300 ${menuOpen ? "opacity-100" : "opacity-0"}`}
        />
        <nav
          aria-label="Mobile"
          className={[
            "absolute inset-x-3 top-3 rounded-2xl border border-[var(--border)] bg-[var(--bg)] p-3 shadow-[var(--shadow-lg)] transition-all duration-300",
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-3 opacity-0",
          ].join(" ")}
        >
          <div className="grid gap-1">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "rounded-xl px-3 py-3 text-base font-semibold transition",
                    active
                      ? "bg-[var(--accent-soft)] text-[var(--accent-deep)]"
                      : "text-[var(--muted)] hover:bg-[var(--surface-subtle)] hover:text-[var(--text)]",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <CvButton className="mt-2 w-full px-4 py-3 text-sm" onClick={closeMenu} />
        </nav>
      </div>
    </header>
  );
}
