import { ExperiencePhotos } from "@/components/ExperiencePhotos";
import { experienceGroups } from "@/data/portfolio";

export function Experience() {
  return (
    <section id="experience" className="section-shell scroll-mt-24 rounded-[28px] border border-white/15 bg-[rgba(40,31,67,0.88)] px-5 py-8 sm:px-8 lg:px-10">
      <div className="mb-7">
        <h2 className="text-3xl font-black text-[var(--text)] sm:text-4xl">Maureen&apos;s Experience</h2>
      </div>

      <div className="space-y-8">
        {experienceGroups.map((group) => (
          <section key={group.title} aria-labelledby={`experience-${group.title.toLowerCase().replaceAll(" ", "-")}`}>
            <h3 id={`experience-${group.title.toLowerCase().replaceAll(" ", "-")}`} className="mb-5 text-sm font-bold uppercase tracking-[0.16em] text-[var(--accent)]">
              {group.title}
            </h3>
            <div className="space-y-5">
              {group.items.map((item) => (
                <article key={`${item.company}-${item.role}-${item.period}`} className="group relative rounded-[24px] border border-white/15 bg-[rgba(230,222,244,0.96)] p-5 transition duration-200 ease-out hover:-translate-y-0.5 hover:border-[rgba(185,168,215,0.9)] hover:bg-[rgba(240,234,251,0.98)] hover:shadow-[0_8px_18px_rgba(16,8,26,0.12)] motion-reduce:transition-none sm:p-6">
                  <div className="absolute left-0 top-6 h-3 w-3 -translate-x-1/2 rounded-full bg-[var(--accent)] shadow-[0_0_0_6px_rgba(244,224,148,0.14)]" />
                  <div className="pl-4 sm:pl-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.12em] text-[rgba(32,22,63,0.68)]">{item.company}</p>
                        <h4 className="mt-1 text-2xl font-bold text-[#20163f]"><span className="box-decoration-clone rounded-[2px] bg-[linear-gradient(transparent_58%,rgba(245,229,166,0.88)_58%)] px-1 transition-[background-image] duration-200 group-hover:bg-[linear-gradient(transparent_58%,rgba(245,229,166,0.98)_58%)]">{item.role}</span></h4>
                      </div>
                      <span className="rounded-full border border-[rgba(196,162,63,0.62)] bg-[rgba(191,174,218,0.42)] px-3 py-1 text-sm font-medium text-[#20163f] transition-colors duration-200 group-hover:border-[rgba(196,162,63,0.82)]">{item.period}</span>
                    </div>

                    <p className="mt-4 text-base leading-relaxed text-[rgba(32,22,63,0.78)]">{item.description}</p>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag} className="rounded-full border border-[rgba(196,162,63,0.62)] bg-[rgba(191,174,218,0.42)] px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-[#20163f] transition-colors duration-200 group-hover:border-[rgba(196,162,63,0.82)] group-hover:bg-[rgba(191,174,218,0.52)]">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ExperiencePhotos photos={item.photos} />
                  </div>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
