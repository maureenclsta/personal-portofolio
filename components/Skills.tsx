import { skillGroups } from "@/data/portfolio";

export function Skills() {
  return (
    <section id="skills" className="section-shell scroll-mt-24 rounded-[28px] border border-white/15 bg-[rgba(40,31,67,0.88)] px-5 py-6 sm:px-8 lg:px-10 lg:py-7">
      <div className="mb-6 max-w-3xl">
        <p className="text-sm uppercase tracking-[0.16em] text-[var(--accent)]">My toolkit</p>
        <h1 className="mt-2 text-3xl font-black text-[var(--text)] sm:text-4xl">My Skills</h1>
        <p className="mt-3 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          Technologies, tools, and skills I use to learn, build, and create.
        </p>
      </div>

      <div className="grid items-start gap-3 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <section
            key={group.title}
            aria-labelledby={`skill-${group.title.toLowerCase().replaceAll(" ", "-")}`}
            className="group flex min-w-0 flex-col self-start rounded-[22px] border border-white/15 bg-[rgba(230,222,244,0.96)] p-4 transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(185,168,215,0.9)] hover:bg-[rgba(240,234,251,0.98)] hover:shadow-[0_8px_18px_rgba(16,8,26,0.12)] motion-reduce:transition-none sm:p-5"
          >
            <div className="flex items-start gap-2">
              <span className="mt-1 h-5 w-1 shrink-0 rounded-full bg-[var(--accent)]/75" aria-hidden="true" />
              <div>
                <h2 id={`skill-${group.title.toLowerCase().replaceAll(" ", "-")}`} className="text-xl font-bold text-[#20163f]">
                  <span className="box-decoration-clone rounded-[2px] bg-[linear-gradient(transparent_58%,rgba(245,229,166,0.88)_58%)] px-1">{group.title}</span>
                </h2>
                <p className="mt-1 text-sm leading-relaxed text-[rgba(32,22,63,0.78)]">{group.description}</p>
              </div>
            </div>

            <div className="mt-3 flex flex-wrap content-start items-start gap-x-1.5 gap-y-1">
              {group.items.map((item) => (
                <div key={item.name} title={item.description} className="group min-w-0 max-w-full rounded-full border border-[rgba(196,162,63,0.62)] bg-[rgba(191,174,218,0.42)] px-2 py-0.5 text-[#20163f] transition duration-200 hover:-translate-y-0.5 hover:border-[rgba(196,162,63,0.82)] hover:bg-[rgba(191,174,218,0.52)] motion-reduce:transition-none">
                  <h3 className="break-words text-xs font-semibold leading-snug text-[#20163f]">
                    {item.name}
                  </h3>
                  {item.status ? <p className="mt-0.5 text-xs font-medium text-[rgba(32,22,63,0.78)]">{item.status}</p> : null}
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
