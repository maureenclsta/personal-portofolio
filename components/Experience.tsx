import { ExperienceCard } from "@/components/ExperienceCard";
import { Reveal } from "@/components/Reveal";
import { experienceGroups } from "@/data/portfolio";

const groupId = (title: string) => `experience-${title.toLowerCase().replaceAll(" ", "-")}`;

export function Experience() {
  return (
    <section id="experience" className="panel scroll-mt-24 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
      <Reveal>
        <header className="max-w-3xl">
          <span className="eyebrow">Experience / 01</span>
          <h1 className="mt-4 text-3xl font-black leading-tight tracking-[-0.02em] text-[var(--text-strong)] sm:text-4xl lg:text-5xl">
            Experience
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            Roles, programs, and events where I&apos;ve grown my communication, teamwork, and real-world skills — inside and beyond campus.
            Tap any card to see the responsibilities and documentation.
          </p>
        </header>
      </Reveal>

      <div className="mt-12 space-y-14">
        {experienceGroups.map((group) => (
          <section key={group.title} aria-labelledby={groupId(group.title)}>
            <Reveal>
              <h2 id={groupId(group.title)} className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.16em] text-[var(--accent-deep)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" aria-hidden="true" />
                {group.title}
              </h2>
            </Reveal>

            {/* Timeline — restarts per category */}
            <div className="relative mt-6 border-t border-[var(--border)]">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-[5px] top-0 bottom-0 w-px bg-[var(--border)] sm:left-[6px]"
              />
              {group.items.map((item, index) => (
                <Reveal key={item.slug} delay={Math.min(index, 4) * 50}>
                  <ExperienceCard item={item} />
                </Reveal>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
