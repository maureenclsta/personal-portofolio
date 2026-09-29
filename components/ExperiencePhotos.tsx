import Image from "next/image";

import type { ExperiencePhoto } from "@/data/portfolio";

export function ExperiencePhotos({ photos }: { photos: ExperiencePhoto[] }) {
  if (photos.length === 0) return null;

  return (
    <div className="mt-4 flex flex-wrap gap-3" aria-label="Experience photos">
      {photos.slice(0, 2).map((photo) => (
        <div key={photo.src} className="relative h-24 w-36 overflow-hidden rounded-xl border border-white/10 bg-white/5 transition duration-300 hover:shadow-md sm:h-28 sm:w-40">
          <Image src={photo.src} alt={photo.alt} fill sizes="160px" className="object-cover transition-transform duration-300 hover:scale-[1.03]" />
        </div>
      ))}
    </div>
  );
}