import Link from "next/link";

import { PhotoSlideshow } from "@/components/PhotoSlideshow";
import { Reveal } from "@/components/Reveal";
import { profilePhotos } from "@/data/portfolio";

const focusTags = ["Intelligent Systems", "Web Development", "UI/UX Design"];

const heroStats = [
  { value: "5th", label: "Semester" },
  { value: "3.70", label: "GPA / 4.00" },
  { value: "5+", label: "Projects built" },
];

export function Hero() {
  return (
    <section
      id="home"
      className="panel relative overflow-hidden px-5 py-9 sm:px-8 sm:py-11 lg:px-12 lg:py-14"
    >
      {/* Ambient decorative glow */}
      <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(124,77,255,0.4),_transparent_70%)] blur-2xl" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-28 left-1/4 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(177,140,255,0.28),_transparent_70%)] blur-2xl" />

      <div className="relative grid items-center gap-10 lg:grid-cols-[1.25fr_0.85fr] lg:gap-12">
        {/* ---------- Left: copy ---------- */}
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-[var(--muted)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for internship — 2026
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-[2.5rem] font-black leading-[1.05] tracking-[-0.03em] text-[var(--text-strong)] sm:text-6xl lg:text-[4rem]">
              <span className="block text-[var(--muted)]">Hi, I&apos;m</span>
              <span className="text-gradient mt-1 block">Maureen Calista</span>
              <span className="text-gradient block">Surjo</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-justify text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              A <strong className="font-semibold text-[var(--text)]">Computer Science undergraduate at BINUS University</strong> specializing in{" "}
              <strong className="font-semibold text-[var(--text)]">Intelligent Systems (AI)</strong>. I build intelligent, human centered applications
              across AI engineering and web development and I love turning ideas into things people can actually use.
            </p>
          </Reveal>

          <Reveal delay={220}>
            <div className="mt-6 flex flex-wrap gap-2.5">
              {focusTags.map((tag) => (
                <span key={tag} className="chip px-3.5 py-1.5 text-sm font-semibold">
                  {tag}
                </span>
              ))}
            </div>
          </Reveal>

          <Reveal delay={280}>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href="/projects" className="btn btn-primary px-6 py-3.5 text-[0.95rem]">
                View my work
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14" />
                  <path d="m13 6 6 6-6 6" />
                </svg>
              </Link>
              <Link href="/contact" className="btn btn-ghost px-6 py-3.5 text-[0.95rem]">
                Get in touch
              </Link>
              <a href="/Maureen_Calista_CV.pdf" download="Maureen_Calista_CV.pdf" className="btn btn-ghost px-6 py-3.5 text-[0.95rem]">
                View CV
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 3v12" />
                  <path d="m7 11 5 5 5-5" />
                  <path d="M5 21h14" />
                </svg>
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4 border-t border-[var(--border)] pt-6">
              {heroStats.map((stat) => (
                <div key={stat.label}>
                  <dt className="sr-only">{stat.label}</dt>
                  <dd className="text-2xl font-black text-[var(--text-strong)] sm:text-3xl">{stat.value}</dd>
                  <p className="mt-1 text-xs font-medium text-[var(--muted)]">{stat.label}</p>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* ---------- Right: candidate card ---------- */}
        <Reveal delay={200} className="flex justify-center lg:justify-end">
          <div className="candidate-card animate-float w-full max-w-[380px]">
            <div className="card-header text-[var(--muted)]">
              <span className="font-bold uppercase tracking-[0.16em]">Candidate</span>
              <span className="font-bold uppercase tracking-[0.16em] text-[var(--accent-bright)]">&apos;26</span>
            </div>

            <div className="card-body">
              <div className="avatar-wrap">
                <PhotoSlideshow photos={profilePhotos} />
              </div>

              <div className="mt-6 text-center">
                <h2 className="text-2xl font-black text-[var(--text-strong)]">Maureen Calista Surjo</h2>
                <p className="mt-1.5 text-sm text-[var(--muted)]">Computer Science — Intelligent Systems (AI)</p>
                <p className="mt-0.5 text-sm text-[var(--muted-soft)]">BINUS University</p>
              </div>

              <div className="mt-6 flex justify-center gap-3">
                <a
                  href="https://www.linkedin.com/in/maureencalistas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/5 text-[var(--text)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[rgba(var(--accent-rgb),0.14)] hover:text-[var(--accent-bright)]"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V8.99h3.56v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
                  </svg>
                </a>
                <a
                  href="https://github.com/maureenclsta"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/5 text-[var(--text)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[rgba(var(--accent-rgb),0.14)] hover:text-[var(--accent-bright)]"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.73 1.17 1.73 1.17 1.01 1.72 2.65 1.22 3.3.93.1-.73.4-1.22.72-1.5-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.16-3.04-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.04 0 4.35-2.64 5.3-5.16 5.59.41.36.77 1.04.77 2.1v3.08c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/maureenclsta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] bg-white/5 text-[var(--text)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-[rgba(var(--accent-rgb),0.14)] hover:text-[var(--accent-bright)]"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="0.75" fill="currentColor" stroke="none" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
