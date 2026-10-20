"use client";

import { useId, useState } from "react";

import { ExperiencePhotos } from "@/components/ExperiencePhotos";
import type { ExperienceItem } from "@/data/portfolio";

export function ExperienceCard({ item }: { item: ExperienceItem }) {
  const [open, setOpen] = useState(false);
  const regionId = useId();

  // A card is expandable only when it actually has details to reveal.
  const hasPhotos = item.documentation.some((photo) => photo.src);
  const hasDocs = item.documentation.length > 0;
  const hasDetails = item.responsibilities.length > 0 || hasPhotos || hasDocs;

  return (
    <article className="relative border-b border-[var(--border)] py-6 pl-6 sm:pl-10">
      {/* Timeline marker — sits on the vertical line drawn by the parent */}
      <span
        aria-hidden="true"
        className="absolute left-0 top-[1.9rem] h-3 w-3 -translate-x-[3px] rounded-full border-2 border-[var(--bg)] bg-[var(--accent)] sm:-translate-x-[1.5px]"
      />

      <div className="grid gap-x-8 gap-y-3 sm:grid-cols-[9.5rem_minmax(0,1fr)]">
        {/* Left column — date range */}
        <p className="text-sm font-semibold text-[var(--muted-soft)] sm:pt-0.5">{item.period}</p>

        {/* Main content column */}
        <div className="min-w-0">
          <h3 className="text-lg font-bold leading-snug text-[var(--text-strong)] sm:text-xl">{item.role}</h3>
          {item.company ? (
            <p className="mt-1 text-sm font-semibold text-[var(--accent-deep)]">{item.company}</p>
          ) : null}

          {item.description ? (
            <p className="mt-3 leading-relaxed text-[var(--muted)]">{item.description}</p>
          ) : null}

          {item.tags.length > 0 ? (
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {item.tags.map((tag) => (
                <span key={tag} className="chip px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.06em]">
                  {tag}
                </span>
              ))}
            </div>
          ) : null}

          {hasDetails ? (
            <>
              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
                aria-controls={regionId}
                className="mt-4 inline-flex items-center gap-1.5 rounded-md text-xs font-semibold text-[var(--accent-deep)] transition-colors hover:text-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
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
              </button>

              {/* Expandable region — animated via grid-template-rows for a jump-free reveal */}
              <div
                id={regionId}
                role="region"
                aria-label={`${item.role} details`}
                className={[
                  "grid transition-all duration-300 ease-out",
                  open ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                ].join(" ")}
              >
                <div className="overflow-hidden">
                  {item.responsibilities.length > 0 ? (
                    <>
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted-soft)]">
                        <span className="h-1 w-4 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                        Responsibilities
                      </h4>
                      <ul className="mt-3 space-y-2.5">
                        {item.responsibilities.map((point) => (
                          <li key={point} className="flex gap-3 text-sm leading-relaxed text-[var(--muted)]">
                            <svg className="mt-0.5 h-4 w-4 shrink-0 text-[var(--accent)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                              <path d="m5 13 4 4L19 7" />
                            </svg>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </>
                  ) : null}

                  {hasDocs ? (
                    <div className={item.responsibilities.length > 0 ? "mt-6" : ""}>
                      <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--muted-soft)]">
                        <span className="h-1 w-4 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                        Dokumentasi
                      </h4>
                      <div className="mt-3">
                        <ExperiencePhotos photos={item.documentation} />
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>
    </article>
  );
}
