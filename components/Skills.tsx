import { Reveal } from "@/components/Reveal";
import { skillGroups } from "@/data/portfolio";

const groupId = (title: string) => `skill-${title.toLowerCase().replaceAll(" ", "-")}`;

export function Skills() {
  return (
    <section id="skills" className="panel scroll-mt-24 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
      <Reveal>
        <div className="max-w-3xl">
          <span className="eyebrow">My toolkit</span>
          <h1 className="mt-4 text-3xl font-black leading-tight tracking-[-0.02em] text-[var(--text-strong)] sm:text-4xl lg:text-5xl">
            Skills &amp; <span className="text-gradient">technologies</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            The languages, libraries, frameworks, and tools I use to learn, build, and bring ideas to life.
          </p>
        </div>
      </Reveal>

      <div className="mt-8 grid items-start gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, index) => (
          <Reveal key={group.title} delay={(index % 3) * 80} className="h-full">
            <section
              aria-labelledby={groupId(group.title)}
              className="glass-card card-hover-lift group flex h-full flex-col p-5 sm:p-6"
            >
              <div className="flex items-start gap-3">
                <span aria-hidden="true" className="mt-1 h-6 w-1.5 shrink-0 rounded-full bg-[var(--gradient-accent,linear-gradient(180deg,#a06bff,#7c4dff))]" />
                <div>
                  <h2 id={groupId(group.title)} className="text-lg font-bold text-[var(--text-strong)]">
                    {group.title}
                  </h2>
                  <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">{group.description}</p>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap content-start gap-2">
                {group.items.map((item) => (
                  <span
                    key={item.name}
                    title={item.description}
                    className="chip inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold transition-colors duration-200 hover:border-[rgba(var(--accent-rgb),0.5)] hover:bg-[rgba(var(--accent-rgb),0.14)] hover:text-[var(--accent-bright)]"
                  >
                    {item.name}
                    {item.status ? (
                      <span className="rounded-full bg-[rgba(var(--accent-rgb),0.2)] px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-[var(--accent-bright)]">
                        {item.status}
                      </span>
                    ) : null}
                  </span>
                ))}
              </div>
            </section>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
