"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger delay in milliseconds. */
  delay?: number;
  /** Element to render as. Defaults to a div. */
  as?: ElementType;
  className?: string;
};

/**
 * Reveals its children with a fade-up animation the first time it scrolls
 * into view. Respects prefers-reduced-motion via the global .reveal styles.
 *
 * Hydration note: the initial render must be identical on the server and on
 * the client's first paint, so `visible` ALWAYS starts as `false`. Any
 * browser-only logic (IntersectionObserver) runs after mount inside the
 * effect, which never executes during SSR.
 */
export function Reveal({ children, delay = 0, as, className = "" }: RevealProps) {
  const Tag = (as ?? "div") as ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If IntersectionObserver is unavailable (older browsers), reveal after
    // mount so content is never permanently hidden. Deferring to the next
    // frame keeps this out of the synchronous effect body and still runs
    // only on the client, so the server/client initial markup stays in sync.
    if (typeof IntersectionObserver === "undefined") {
      const frame = requestAnimationFrame(() => setVisible(true));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`.trim()}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </Tag>
  );
}
