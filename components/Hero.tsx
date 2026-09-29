import Link from "next/link";

import { PhotoSlideshow } from "@/components/PhotoSlideshow";
import { profilePhotos } from "@/data/portfolio";

export function Hero() {
  return (
    <section id="home" className="section-shell relative overflow-hidden rounded-[28px] border border-white/15 bg-[rgba(40,31,67,0.88)] px-5 py-8 sm:px-8 lg:px-8 lg:py-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.08),_transparent_38%)]" />

      <div className="relative grid items-center gap-6 lg:gap-8 lg:grid-cols-[1.35fr_0.75fr]">
        <div>
          <h1 className="max-w-xl text-4xl font-black leading-[1.08] tracking-[-0.04em] text-[var(--text)] sm:text-[2.65rem] lg:max-w-[40rem] lg:text-[3.5rem]">
            <span className="block">Hello, I&apos;m</span>
            <span className="mt-2 inline-block max-w-full rounded-md bg-[var(--accent)] px-3 py-1 text-[var(--bg-dark)] lg:mt-1.5 lg:text-[3.125rem]">Maureen Calista Surjo</span>
          </h1>

          <p className="mt-5 max-w-xl text-justify text-base leading-[1.55] text-[var(--muted)] sm:text-lg lg:max-w-[40rem] lg:text-base">
            I’m a <strong>Computer Science undergraduate at BINUS UNIVERSITY</strong>, currently in my <strong>5th semester</strong> with a specialization in <strong>Intelligent System (AI)</strong>. I’m interested in <strong>AI Engineering and Web Development</strong>, and I enjoy exploring new technologies while developing my skills for the tech industry.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-[var(--text)] lg:px-3 lg:py-1.5 lg:text-[0.8125rem]">Intelligence System</span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-[var(--text)] lg:px-3 lg:py-1.5 lg:text-[0.8125rem]">Web Developer</span>
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-semibold text-[var(--text)] lg:px-3 lg:py-1.5 lg:text-[0.8125rem]">UI/UX Designer</span>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 lg:gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-full bg-[var(--accent)] px-6 py-3 text-base font-bold text-[var(--bg-dark)] shadow-[0_10px_30px_rgba(244,224,148,0.28)] transition duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_rgba(244,224,148,0.34)] lg:px-5 lg:py-2.5 lg:text-[0.9375rem]"
            >
              Open to internship opportunities
            </Link>
            <a
              href="/Maureen_Calista_CV.pdf"
              download="Maureen_Calista_CV.pdf"
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-transparent px-6 py-3 text-base font-bold text-[var(--text)] transition duration-200 hover:border-[var(--accent)] hover:text-[var(--accent)] lg:px-5 lg:py-2.5 lg:text-[0.9375rem]"
            >
              View CV
            </a>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end">
          <div className="candidate-card w-full max-w-[420px]" style={{ minHeight: "auto" }}>
            <div className="card-header">
              <span className="font-semibold uppercase tracking-[0.12em] text-[var(--text)]">Candidate</span>
              <span className="font-semibold uppercase tracking-[0.12em] text-[var(--text)]">2026</span>
            </div>

            <div className="card-body">
              <div className="avatar-wrap">
                <PhotoSlideshow photos={profilePhotos} />
              </div>

              <div className="mt-6 text-center">
                <h2 className="text-2xl font-black text-[var(--text)] sm:text-3xl lg:text-[1.625rem]">Maureen Calista Surjo</h2>
                <p className="mt-2 text-sm text-[var(--muted)] sm:text-base lg:text-[0.9375rem]">Undergraduate — BINUS University</p>
                <p className="mt-1 text-sm text-[var(--muted)]">School of Computer Science</p>
              </div>

              <div className="mt-6 flex justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/maureencalistas/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                >
                  <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V8.99h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.29ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12Zm1.78 13.02H3.56V8.99h3.56v11.46ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/maureenclsta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram profile"
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[var(--text)] transition hover:-translate-y-0.5 hover:border-[var(--accent)] hover:text-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
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
        </div>
      </div>
    </section>
  );
}
