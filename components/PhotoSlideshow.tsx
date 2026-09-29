"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type Photo = { src: string; alt: string };

export function PhotoSlideshow({ photos }: { photos: Photo[] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (photos.length < 2) return;

    const interval = window.setInterval(() => {
      setActiveIndex((index) => (index + 1) % photos.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [photos.length]);

  if (photos.length === 0) {
    return (
      <div className="avatar-icon" aria-hidden="true">
        <svg viewBox="0 0 64 64" className="h-20 w-20 text-white/70" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M32 26c5.5 0 10-4.5 10-10S37.5 6 32 6s-10 4.5-10 10 4.5 10 10 10Z" />
          <path d="M14 54c0-8.8 8.1-16 18-16s18 7.2 18 16" />
        </svg>
      </div>
    );
  }

  return (
    <div className="relative h-40 w-40 overflow-hidden rounded-[1.2rem] border border-white/10 bg-white/5">
      {photos.map((photo, index) => (
        <Image
          key={photo.src}
          src={photo.src}
          alt={photo.alt}
          fill
          priority={index === 0}
          sizes="160px"
          className={`absolute inset-0 object-cover transition-opacity duration-700 ${index === activeIndex ? "opacity-100" : "opacity-0"}`}
        />
      ))}
      {photos.length > 1 ? (
        <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1.5" aria-label="Choose profile photo">
          {photos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              aria-label={`Show photo ${index + 1}`}
              aria-current={index === activeIndex}
              onClick={() => setActiveIndex(index)}
              className={`h-2 w-2 rounded-full border border-white/80 ${index === activeIndex ? "bg-white" : "bg-black/30"}`}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}