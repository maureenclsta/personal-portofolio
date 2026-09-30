import { Fragment, type ReactNode } from "react";
import Link from "next/link";

import { ProjectMedia } from "@/components/ProjectMedia";
import { Reveal } from "@/components/Reveal";
import type { Project } from "@/data/portfolio";

/** Renders inline **bold** markers within a string as <strong> elements. */
function renderInline(text: string): ReactNode {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={index} className="font-semibold text-[var(--text)]">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
}

/** Splits a string on blank lines and renders each block as its own paragraph. */
function Paragraphs({ text, className }: { text: string; className?: string }) {
  const blocks = text.split("\n\n");
  return (
    <>
      {blocks.map((block, index) => (
        <p key={index} className={`${index === 0 ? "" : "mt-4 "}${className ?? ""}`}>
          {renderInline(block)}
        </p>
      ))}
    </>
  );
}

function BackLink() {
  return (
    <Link
      href="/projects"
      className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--muted)] transition hover:text-[var(--accent-bright)]"
    >
      <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M19 12H5" />
        <path d="m11 18-6-6 6-6" />
      </svg>
      Back to projects
    </Link>
  );
}

export function ProjectDetail({ project }: { project: Project }) {
  // Reuse the exact image shown on the Projects card. The card renders
  // `thumbnail ?? media`, so we resolve the same way and only show images.
  const preferred = project.thumbnail ?? project.media;
  const previewImage = preferred.type === "image" && preferred.src ? preferred : null;

  return (
    <article className="panel overflow-hidden">
      {/* Header */}
      <header className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(124,77,255,0.35),transparent_70%)] blur-2xl" />
        <Reveal>
          <BackLink />
          <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-[var(--muted-soft)]">Project</p>
          <h1 className="mt-2 text-4xl font-black tracking-[-0.02em] text-[var(--text-strong)] sm:text-5xl">{project.title}</h1>
          <p className="mt-3 max-w-3xl text-lg font-semibold leading-relaxed text-[var(--accent-bright)]">{project.subtitle}</p>

          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Project categories">
            {project.categories.map((category) => (
              <li key={category} className="chip px-3 py-1.5 text-sm font-medium">
                {category}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
            <span className="inline-flex items-center gap-2 font-semibold text-[var(--text)]">
              <svg className="h-4 w-4 text-[var(--accent-bright)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 3 4 7v6c0 4.5 3.4 7.3 8 8 4.6-.7 8-3.5 8-8V7Z" />
              </svg>
              {project.semester}
            </span>
            <span className="inline-flex items-center gap-2 text-[var(--muted)]">
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="4" width="18" height="18" rx="2.5" />
                <path d="M3 9h18M8 2v4M16 2v4" />
              </svg>
              {project.period}
            </span>
          </div>

          <div className="mt-7 flex flex-wrap gap-3">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary px-5 py-3 text-sm"
            >
              View GitHub repository
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M7 17 17 7" />
                <path d="M8 7h9v9" />
              </svg>
            </a>
            {project.demoUrl ? (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost px-5 py-3 text-sm"
              >
                View Demo App
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17 17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </a>
            ) : null}
          </div>
        </Reveal>
      </header>

      {/* Media — same project image used on the Projects card (no video). */}
      {previewImage?.src ? (
        <section className="border-y border-[var(--border)] px-5 py-6 sm:px-8 lg:px-12" aria-label={`${project.title} project image`}>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-[var(--muted-soft)]">Project preview</p>
          <div className="group max-w-md overflow-hidden rounded-2xl border border-[var(--border)]">
            <ProjectMedia media={previewImage} projectTitle={project.title} compact />
          </div>
        </section>
      ) : null}

      {/* Body */}
      <div className="grid gap-10 px-5 py-8 sm:px-8 lg:grid-cols-[minmax(0,1fr)_minmax(260px,0.62fr)] lg:px-12 lg:py-10">
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-[var(--text-strong)]">Overview</h2>
            <div className="mt-3 max-w-3xl">
              <Paragraphs text={project.overview} className="text-justify leading-relaxed text-[var(--muted)]" />
            </div>
          </section>

          {project.process ? (
            <section>
              <h2 className="text-xl font-bold text-[var(--text-strong)]">How it works</h2>
              {typeof project.process[0] === "string" ? (
                <ol className="mt-4 flex flex-wrap items-center gap-2" aria-label={`${project.title} process`}>
                  {(project.process as string[]).map((step, index) => (
                    <li key={step} className="flex items-center gap-2">
                      <span className="chip px-3 py-2 text-sm font-medium">{step}</span>
                      {index < project.process!.length - 1 ? (
                        <svg className="h-4 w-4 text-[var(--accent-bright)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                          <path d="M5 12h14" />
                          <path d="m13 6 6 6-6 6" />
                        </svg>
                      ) : null}
                    </li>
                  ))}
                </ol>
              ) : (
                <ol className="mt-4 space-y-4" aria-label={`${project.title} process`}>
                  {(project.process as { title: string; description: string }[]).map((step, index) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[rgba(var(--accent-rgb),0.35)] bg-[rgba(var(--accent-rgb),0.12)] text-sm font-bold text-[var(--accent-bright)]">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="font-bold text-[var(--text-strong)]">{step.title}</h3>
                        <p className="mt-1 text-justify leading-relaxed text-[var(--muted)]">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              )}
            </section>
          ) : null}

          <section>
            <h2 className="text-xl font-bold text-[var(--text-strong)]">Why I made this</h2>
            {project.whyMadeThis ? (
              <div className="mt-2">
                <Paragraphs text={project.whyMadeThis} className="text-justify leading-relaxed text-[var(--muted)]" />
              </div>
            ) : (
              <p className="mt-2 text-justify leading-relaxed text-[var(--muted)]">Project background will be added soon.</p>
            )}
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-strong)]">Sustainable Development Goals</h2>
            {project.sdgInfo ? (
              <div className="mt-3">
                <p className="font-semibold text-[var(--text)]">{project.sdgInfo.title}</p>
                <p className="mt-2 text-justify leading-relaxed text-[var(--muted)]">{project.sdgInfo.description}</p>
              </div>
            ) : project.sdgs.length > 0 ? (
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.sdgs.map((sdg) => (
                  <li key={sdg} className="chip px-3 py-1.5 text-sm">{sdg}</li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-justify leading-relaxed text-[var(--muted)]">SDG information will be added once confirmed.</p>
            )}
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-strong)]">Key strengths</h2>
            <ul className="mt-3 space-y-2.5">
              {project.strengths.map((strength) => (
                <li key={strength} className="flex gap-3 text-justify leading-relaxed text-[var(--muted)]">
                  <svg className="mt-1 h-4 w-4 shrink-0 text-[var(--accent-bright)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="m5 13 4 4L19 7" />
                  </svg>
                  <span>{renderInline(strength)}</span>
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-[var(--text-strong)]">Limitations</h2>
            {Array.isArray(project.limitations) ? (
              <ul className="mt-3 space-y-2.5">
                {project.limitations.map((limitation) => (
                  <li key={limitation} className="flex gap-3 text-justify leading-relaxed text-[var(--muted)]">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent-bright)]" aria-hidden="true" />
                    <span>{limitation}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="mt-2 text-justify leading-relaxed text-[var(--muted)]">{project.limitations ?? "Limitations will be added when confirmed."}</p>
            )}
          </section>
        </div>

        <aside className="space-y-6">
          {project.metrics.length > 0 ? (
            <section className="glass-card p-5">
              <h2 className="text-lg font-bold text-[var(--text-strong)]">Results</h2>
              {project.bestModel ? (
                <p className="mt-2 text-sm text-[var(--muted)]">
                  Best model: <span className="font-semibold text-[var(--accent-bright)]">{project.bestModel}</span>
                </p>
              ) : null}
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-xl border border-[rgba(var(--accent-rgb),0.25)] bg-[rgba(var(--accent-rgb),0.08)] p-4">
                    <p className="text-xs leading-relaxed text-[var(--muted)]">{metric.label}</p>
                    <p className="mt-1 text-2xl font-black text-[var(--text-strong)]">{metric.value}</p>
                  </div>
                ))}
              </div>
            </section>
          ) : null}

          <section className="glass-card p-5">
            <h2 className="text-lg font-bold text-[var(--text-strong)]">Tools &amp; technologies</h2>
            {project.technologies.length === 0 ? (
              <p className="mt-2 leading-relaxed text-[var(--muted)]">Technology details will be added once confirmed.</p>
            ) : typeof project.technologies[0] === "string" ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {(project.technologies as string[]).map((technology) => (
                  <span key={technology} className="chip px-3 py-1.5 text-sm font-medium">{technology}</span>
                ))}
              </div>
            ) : "group" in project.technologies[0] ? (
              <div className="mt-3 space-y-4">
                {(project.technologies as { group: string; items: { name: string; description?: string }[] }[]).map((section) => (
                  <div key={section.group}>
                    <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--accent-bright)]">{section.group}</h3>
                    <ul className="mt-2 space-y-2">
                      {section.items.map((item) => (
                        <li key={item.name} className="text-sm leading-relaxed">
                          <span className="font-semibold text-[var(--text)]">{item.name}</span>
                          {item.description ? <span className="text-[var(--muted)]"> — {item.description}</span> : null}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ) : (
              <ul className="mt-3 space-y-3">
                {(project.technologies as { name: string; description?: string }[]).map((technology) => (
                  <li key={technology.name} className="text-sm leading-relaxed">
                    <span className="font-semibold text-[var(--text)]">{technology.name}</span>
                    {technology.description ? <span className="text-[var(--muted)]"> — {technology.description}</span> : null}
                  </li>
                ))}
              </ul>
            )}
          </section>
        </aside>
      </div>

      <footer className="border-t border-[var(--border)] px-5 py-5 sm:px-8 lg:px-12">
        <BackLink />
      </footer>
    </article>
  );
}
