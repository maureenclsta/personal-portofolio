import Image from "next/image";

import type { Project } from "@/data/portfolio";

export function ProjectMedia({
  media,
  projectTitle,
  compact = false,
}: {
  media: Project["media"];
  projectTitle: string;
  compact?: boolean;
}) {
  const aspectRatio = compact ? "aspect-[16/10]" : "aspect-video";

  if (!media.src) {
    return (
      <div
        role="img"
        aria-label={`${projectTitle} media preview will be added later`}
        className={`${aspectRatio} flex w-full flex-col items-center justify-center border-b border-white/10 bg-white/[0.025] px-4 text-center`}
      >
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-[var(--muted)]">Project preview</span>
        <span className="mt-2 text-sm text-[var(--text)]">Media will be added later</span>
      </div>
    );
  }

  return (
    <div className={`${aspectRatio} relative w-full overflow-hidden border-b border-white/10 bg-black/20`}>
      {media.type === "image" ? (
        <Image
          src={media.src}
          alt={media.alt}
          fill
          sizes={compact ? "(min-width: 1280px) 30vw, (min-width: 768px) 45vw, 100vw" : "(min-width: 1024px) 80vw, 100vw"}
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />
      ) : (
        <video src={media.src} controls playsInline preload="metadata" className="h-full w-full object-contain" aria-label={`${projectTitle} project video`}>
          Your browser does not support embedded video.
        </video>
      )}
    </div>
  );
}