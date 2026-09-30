import Image from "next/image";

import type { ExperiencePhoto } from "@/data/portfolio";

/**
 * Renders an experience's documentation photos in a responsive grid.
 * Each slot shows a styled purple placeholder until a real image `src` is set
 * in the data, so the layout always looks intentional.
 */
export function ExperiencePhotos({ photos }: { photos: ExperiencePhoto[] }) {
  if (photos.length === 0) return null;

  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3" aria-label="Documentation photos">
      {photos.map((photo, index) => {
        const number = String(index + 1).padStart(2, "0");

        return (
          <figure
            key={`${photo.alt}-${index}`}
            className="group/photo relative aspect-[4/3] overflow-hidden rounded-2xl border border-[var(--border)] bg-white/[0.03] transition duration-300 hover:-translate-y-0.5 hover:border-[rgba(var(--accent-rgb),0.45)] hover:shadow-[var(--shadow-md)]"
          >
            {photo.src ? (
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                className="object-cover transition-transform duration-500 group-hover/photo:scale-[1.05]"
              />
            ) : (
              <div
                role="img"
                aria-label={`${photo.alt} (placeholder)`}
                className="flex h-full w-full flex-col items-center justify-center bg-[radial-gradient(120%_120%_at_50%_0%,rgba(124,77,255,0.2),transparent_60%)] px-3 text-center"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 opacity-50"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
                    backgroundSize: "20px 20px",
                  }}
                />
                <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(var(--accent-rgb),0.35)] bg-[rgba(var(--accent-rgb),0.14)] text-[var(--accent-bright)]">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <rect x="3" y="4" width="18" height="14" rx="2.5" />
                    <circle cx="8.5" cy="9" r="1.5" />
                    <path d="m5 16 4-3 3 2 3-3 4 4" />
                  </svg>
                </span>
                <span className="relative mt-2.5 text-[0.6rem] font-bold uppercase tracking-[0.16em] text-[var(--muted-soft)]">
                  Documentation
                </span>
                <span className="relative mt-1 text-2xl font-black text-[var(--text-strong)]">{number}</span>
              </div>
            )}
          </figure>
        );
      })}
    </div>
  );
}
