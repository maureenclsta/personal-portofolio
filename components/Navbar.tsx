"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/data/portfolio";

export function Navbar() {
  const pathname = usePathname();

  return (
    <>
      <aside className="hidden min-h-screen w-[170px] shrink-0 border-r border-white/15 bg-[rgba(28,18,52,0.94)] px-4 py-6 md:flex md:flex-col md:justify-between">
        <div className="space-y-6">
          <div className="mb-6 px-2">
            {pathname === "/projects" || pathname.startsWith("/projects/") ? (
              <p className="text-2xl font-black leading-tight text-[var(--text)]">Projects</p>
            ) : pathname === "/" || pathname === "/about" ? (
              <p className="text-2xl font-black leading-tight text-[var(--text)]">About Me</p>
            ) : pathname === "/experience" ? (
              <p className="text-2xl font-black leading-tight text-[var(--text)]">Experience</p>
            ) : (
              <>
                <p className="text-2xl font-black leading-tight text-[var(--text)]">Tentang</p>
                <p className="text-2xl font-black leading-tight text-[var(--text)]">Saya</p>
              </>
            )}
          </div>

          <nav aria-label="Sidebar navigation" className="space-y-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={[
                    "group flex items-center gap-3 rounded-full border px-3 py-3 text-left text-base font-medium transition duration-200",
                    isActive
                      ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--bg-dark)]"
                      : "border-white/15 text-[var(--text)] hover:border-[var(--accent)] hover:bg-white/5 hover:text-[var(--accent)]",
                  ].join(" ")}
                >
                  <span
                    className={[
                      "inline-flex h-8 w-8 items-center justify-center rounded-full border text-base transition group-hover:scale-105",
                      isActive
                        ? "border-[var(--bg-dark)] bg-[var(--bg-dark)] text-[var(--accent)]"
                        : "border-white/20 bg-white/3 text-[var(--accent)]",
                    ].join(" ")}
                  >
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center justify-between rounded-full border border-white/15 bg-white/4 px-3 py-2 text-sm font-semibold text-[var(--text)]">
          <span>Quick View</span>
          <span className="text-[var(--accent)]">18.05</span>
        </div>
      </aside>

      <nav className="sticky top-0 z-30 border-b border-white/15 bg-[rgba(28,18,52,0.96)] px-3 py-3 backdrop-blur md:hidden">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                className={[
                  "shrink-0 rounded-full border px-3 py-2 text-sm font-medium transition",
                  isActive
                    ? "border-[var(--accent)] bg-[var(--accent)] text-[var(--bg-dark)]"
                    : "border-white/15 bg-white/5 text-[var(--text)] hover:border-[var(--accent)] hover:text-[var(--accent)]",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </>
  );
}
