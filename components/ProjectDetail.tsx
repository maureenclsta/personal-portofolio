import Link from "next/link";

import { ProjectMedia } from "@/components/ProjectMedia";
import type { Project } from "@/data/portfolio";

export function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="section-shell overflow-hidden rounded-[28px] border border-white/15 bg-[rgba(40,31,67,0.88)]">
      <header className="px-5 py-7 sm:px-8 lg:px-10 lg:py-9">
        <Link href="/projects" className="text-sm font-semibold text-[var(--accent)] transition hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
          <span aria-hidden="true">←</span> Back to Projects
        </Link>
        <p className="mt-7 text-sm uppercase tracking-[0.16em] text-[var(--muted)]">Project</p>
        <h1 className="mt-2 text-4xl font-black text-[var(--text)] sm:text-5xl">{project.title}</h1>
        <p className="mt-3 max-w-3xl text-lg font-semibold leading-relaxed text-[var(--accent)]">{project.subtitle}</p>

        <ul className="mt-5 flex flex-wrap gap-2" aria-label="Project categories">
          {project.categories.map((category) => (
            <li key={category} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm font-medium text-[var(--text)]">
              {category}
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
          <p className="font-semibold text-[var(--text)]">{project.semester}</p>
          <p className="text-[var(--muted)]">{project.period}</p>
        </div>

        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-5 py-3 text-sm font-bold text-[var(--bg-dark)] transition hover:-translate-y-0.5 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]"
        >
          View GitHub repository <span aria-hidden="true">↗</span>
        </a>
      </header>

      <section className="border-y border-white/10 px-5 py-6 sm:px-8 lg:px-10" aria-label={`${project.title} project media`}>
        <p className="mb-3 text-sm font-semibold text-[var(--muted)]">Project Media</p>
        <ProjectMedia media={project.media} projectTitle={project.title} />
      </section>

      <div className="grid gap-10 px-5 py-7 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(240px,0.65fr)] lg:px-10 lg:py-9">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[var(--text)]">Overview</h2>
            <p className="mt-3 max-w-3xl leading-relaxed text-[var(--muted)]">{project.overview}</p>
          </section>

          {project.process ? (
            <section>
              <h2 className="text-xl font-bold text-[var(--text)]">How it works</h2>
              <ol className="mt-4 flex flex-wrap items-center gap-2" aria-label={`${project.title} process`}>
                {project.process.map((step, index) => (
                  <li key={step} className="flex items-center gap-2">
                    <span className="rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-[var(--text)]">{step}</span>
                    {index < project.process!.length - 1 ? <span aria-hidden="true" className="text-[var(--accent)]">→</span> : null}
                  </li>
                ))}
              </ol>
            </section>
          ) : null}

          <section>
            <h2 className="text-xl font-bold text-[var(--text)]">Why I Made This</h2>
            <p className="mt-2 leading-relaxed text-[var(--muted)]">{project.whyMadeThis ?? "Project background will be added later."}</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)]">Sustainable Development Goals</h2>
            {project.sdgs.length > 0 ? (
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.sdgs.map((sdg) => (
                  <li key={sdg} className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-[var(--text)]">{sdg}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 leading-relaxed text-[var(--muted)]">SDG information will be added once confirmed.</p>
            )}
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)]">Key Strengths</h2>
            <ul className="mt-2 list-inside list-disc space-y-2 leading-relaxed text-[var(--muted)]">
              {project.strengths.map((strength) => <li key={strength}>{strength}</li>)}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text)]">Limitations</h2>
            <p className="mt-2 leading-relaxed text-[var(--muted)]">{project.limitations ?? "Limitations will be added when confirmed."}</p>
          </section>
        </div>

        <aside className="space-y-8">
          {project.metrics.length > 0 ? (
            <section>
              <h2 className="text-xl font-bold text-[var(--text)]">Results</h2>
              {project.bestModel ? <p className="mt-2 text-sm text-[var(--muted)]">Best-performing model: <span className="font-semibold text-[var(--text)]">{project.bestModel}</span></p> : null}
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-[var(--accent)]/20 bg-[var(--accent)]/[0.06] p-4">
                    <p className="text-xs leading-relaxed text-[var(--muted)]">{metric.label}</p>
                    <p className="mt-1 text-2xl font-black text-[var(--text)]">{metric.value}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section>
            <h2 className="text-xl font-bold text-[var(--text)]">Tools &amp; Technologies</h2>
            {project.technologies.length > 0 ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((technology) => (
                  <span key={technology} className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm font-medium text-[var(--text)]">{technology}</span>
                ))}
              </div>
            ) : (
              <p className="mt-2 leading-relaxed text-[var(--muted)]">Technology details will be added once confirmed.</p>
            )}
          </section>
        </aside>
      </div>

      <footer className="border-t border-white/10 px-5 py-5 sm:px-8 lg:px-10">
        <Link href="/projects" className="text-sm font-semibold text-[var(--accent)] transition hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]">
          <span aria-hidden="true">←</span> Back to Projects
        </Link>
      </footer>
    </article>
  );
}