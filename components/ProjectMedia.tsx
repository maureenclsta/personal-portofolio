import Image from "next/image";

import type { Project } from "@/data/portfolio";

export function ProjectMedia({
  media,
  projectTitle,
  compact = false,
  autoPlay = false,
}: {
  media: Project["media"];
  projectTitle: string;
  compact?: boolean;
  /** When true, videos autoplay muted + looped inline (used on detail pages). */
  autoPlay?: boolean;
}) {
  const aspectRatio = compact ? "aspect-[16/10]" : "aspect-video";

  if (!media.src) {
    return (
      <div
        role="img"
        aria-label={`${projectTitle} media preview will be added later`}
        className={`${aspectRatio} relative flex w-full flex-col items-center justify-center overflow-hidden bg-[radial-gradient(120%_120%_at_50%_0%,rgba(124,77,255,0.22),transparent_60%)] px-4 text-center`}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.5]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-[rgba(var(--accent-rgb),0.35)] bg-[rgba(var(--accent-rgb),0.14)] text-[var(--accent-bright)]">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="4" width="18" height="14" rx="2.5" />
            <circle cx="8.5" cy="9" r="1.5" />
            <path d="m5 16 4-3 3 2 3-3 4 4" />
          </svg>
        </span>
        <span className="relative mt-3 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-[var(--muted-soft)]">Project preview</span>
        <span className="relative mt-1 text-sm text-[var(--muted)]">Media coming soon</span>
      </div>
    );
  }

  return (
    <div className={`${aspectRatio} relative w-full overflow-hidden bg-black/20`}>
      {media.type === "image" ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={compact ? "(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw" : "(min-width: 1024px) 80vw, 100vw"}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
        />
      ) : autoPlay ? (
        <video
          src={media.src}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
          aria-label={`${projectTitle} project video`}
        >
          Your browser does not support embedded video.
        </video>
      ) : (
        <video src={media.src} controls playsInline preload="metadata" className="h-full w-full object-contain" aria-label={`${projectTitle} project video`}>
          Your browser does not support embedded video.
        </video>
      )}
    </div>
  );
}
