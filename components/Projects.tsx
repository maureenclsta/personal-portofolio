import Link from "next/link";

import { ProjectMedia } from "@/components/ProjectMedia";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="panel scroll-mt-24 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
      <Reveal>
        <header className="max-w-3xl">
          <span className="eyebrow">Selected work</span>
          <h1 className="mt-4 text-3xl font-black leading-tight tracking-[-0.02em] text-[var(--text-strong)] sm:text-4xl lg:text-5xl">
            Things I&apos;ve <span className="text-gradient">built</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            A selection of projects from my journey through AI, machine learning, computer vision, and software engineering.
          </p>
        </header>
      </Reveal>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {projects.map((project, index) => (
          <Reveal key={project.slug} delay={(index % 3) * 90} className="h-full">
            <Link
              href={`/projects/${project.slug}`}
              aria-label={`View ${project.title} project`}
              className="group glass-card card-hover-lift flex h-full flex-col overflow-hidden focus-visible:outline-none"
            >
              <div className="relative overflow-hidden">
                <ProjectMedia media={project.thumbnail ?? project.media} projectTitle={project.title} compact />
                <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_55%,rgba(16,9,36,0.55))]" aria-hidden="true" />
              </div>

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <h2 className="text-xl font-black text-[var(--text-strong)] sm:text-2xl">{project.title}</h2>
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[var(--border)] bg-white/5 text-[var(--accent-bright)] transition-all duration-300 group-hover:border-[var(--accent)] group-hover:bg-[rgba(var(--accent-rgb),0.16)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17 17 7" />
                      <path d="M8 7h9v9" />
                    </svg>
                  </span>
                </div>
                <p className="mt-1.5 text-sm font-medium leading-snug text-[var(--muted)]">{project.subtitle}</p>

                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} categories`}>
                  {project.categories.slice(0, 3).map((category) => (
                    <li key={category} className="chip px-2.5 py-1 text-[11px] font-semibold">
                      {category}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex items-center justify-between gap-3 border-t border-[var(--border)] pt-4 text-xs">
                  <p className="text-[var(--muted-soft)]">{project.period}</p>
                  <span className="inline-flex items-center gap-1 font-semibold text-[var(--accent-bright)]">
                    View project
                    <svg className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <path d="M5 12h14" />
                      <path d="m13 6 6 6-6 6" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
