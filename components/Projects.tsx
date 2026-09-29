import Link from "next/link";

import { ProjectMedia } from "@/components/ProjectMedia";
import { projects } from "@/data/portfolio";

export function Projects() {
  return (
    <section id="projects" className="section-shell scroll-mt-24 rounded-[28px] border border-white/15 bg-[rgba(40,31,67,0.88)] px-5 py-8 sm:px-8 lg:px-10 lg:py-10">
      <header className="mb-8 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.16em] text-[var(--accent)]">Selected work</p>
        <h1 className="mt-2 text-3xl font-black text-[var(--text)] sm:text-4xl">Projects</h1>
        <p className="mt-3 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          A selection of projects I&apos;ve built while exploring AI, machine learning, web development, and software engineering.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.slug}
            href={`/projects/${project.slug}`}
            aria-label={`View ${project.title} project`}
            className="group flex h-full flex-col overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] transition duration-300 ease-out hover:-translate-y-1 hover:border-[var(--accent)]/55 hover:shadow-[0_14px_30px_rgba(12,7,24,0.24)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
          >
            <ProjectMedia media={project.media} projectTitle={project.title} compact />
            <div className="flex flex-1 flex-col p-5 sm:p-6">
              <div className="flex items-start justify-between gap-3">
                <h2 className="text-2xl font-black text-[var(--text)]">{project.title}</h2>
                <span aria-hidden="true" className="pt-1 text-lg text-[var(--accent)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5">↗</span>
              </div>
              <p className="mt-1 text-sm font-semibold leading-snug text-[var(--muted)] sm:text-base">{project.subtitle}</p>

              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} categories`}>
                {project.categories.map((category) => (
                  <li key={category} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-xs font-medium text-[var(--text)]">
                    {category}
                  </li>
                ))}
              </ul>

              <div className="mt-auto flex items-end justify-between gap-3 pt-5">
                <p className="text-xs leading-relaxed text-[var(--muted)]">{project.period}</p>
                <span className="shrink-0 text-xs font-semibold text-[var(--accent)]">View Project</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}