"use client";

import { useId, useState } from "react";

import { ExperiencePhotos } from "@/components/ExperiencePhotos";
import type { ExperienceItem } from "@/data/portfolio";

export function ExperienceCard({ item }: { item: ExperienceItem }) {
  const [open, setOpen] = useState(false);
  const regionId = useId();

  return (
    <article className="group glass-card card-hover-lift relative p-0">
      {/* Timeline node */}
      <span
        aria-hidden="true"
        className="absolute left-[-1.5rem] top-8 flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 border-[var(--bg-panel)] bg-[var(--accent)] shadow-[0_0_0_4px_rgba(var(--accent-rgb),0.18)] transition-transform duration-300 group-hover:scale-125 sm:left-[-2rem]"
      />

      {/* Trigger — the whole summary is a real button for accessibility */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls={regionId}
        className="flex w-full flex-col gap-3 rounded-[inherit] p-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent-bright)] sm:p-6"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted-soft)]">{item.company}</p>
            <h3 className="mt-1 text-lg font-bold text-[var(--text-strong)] sm:text-xl">{item.role}</h3>
          </div>
          <span className="flex shrink-0 items-center gap-3">
            <span className="chip chip-accent hidden self-start px-3 py-1 text-xs font-semibold sm:inline-flex">{item.period}</span>
            <span
              aria-hidden="true"
              className={[
                "flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-white/5 text-[var(--accent-bright)] transition-all duration-300",
                open ? "rotate-180 border-[rgba(var(--accent-rgb),0.5)] bg-[rgba(var(--accent-rgb),0.16)]" : "group-hover:border-[rgba(var(--accent-rgb),0.4)]",
              ].join(" ")}
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </span>
          </span>
        </div>

        {/* Period on mobile (chip is hidden there to save space) */}
        <span className="chip chip-accent w-fit self-start px-3 py-1 text-xs font-semibold sm:hidden">{item.period}</span>

        <p className="leading-relaxed text-[var(--muted)]">{item.description}</p>

        <div className="flex flex-wrap items-center gap-2">
          {item.tags.map((tag) => (
            <span key={tag} className="chip px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em]">
              {tag}
            </span>
          ))}
        </div>

        <span className="mt-1 inline-flex items-center gap-1.5 text-xs font-semibold text-[var(--accent-bright)]">
          {open ? "Click to collapse" : "Click to expand"}
          <svg
            className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </span>
      </button>

      {/* Expandable region — animated via grid-template-rows for a smooth, jump-free reveal */}
      <div
        id={regionId}
        role="region"
        aria-label={`${item.role} details`}
        className={[
          "grid transition-all duration-300 ease-out",
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <div className="border-t border-[var(--border)] px-5 pb-6 pt-5 sm:px-6">
            <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent-bright)]">
              <span className="h-1 w-4 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              Responsibilities
            </h4>
            <ul className="mt-3 space-y-2.5">
              {item.responsibilities.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-[var(--muted)]">
                  <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent-bright)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                  {point}
                </li>
              ))}
            </ul>

            <h4 className="mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent-bright)]">
              <span className="h-1 w-4 rounded-full bg-[var(--accent)]" aria-hidden="true" />
              Documentation
            </h4>
            <div className="mt-3">
              <ExperiencePhotos photos={item.documentation} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
