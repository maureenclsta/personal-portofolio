import { Reveal } from "@/components/Reveal";

const explorationAreas = [
  {
    title: "AI & Machine Learning",
    description:
      "I'm drawn to artificial intelligence, machine learning, and deep learning — especially building and understanding intelligent models.",
    icon: (
      <path d="M12 3a4 4 0 0 0-4 4v1a4 4 0 0 0 0 8v1a4 4 0 0 0 8 0v-1a4 4 0 0 0 0-8V7a4 4 0 0 0-4-4Z" />
    ),
  },
  {
    title: "NLP & Computer Vision",
    description:
      "In NLP I explore language understanding, text processing, classification, and sentiment analysis. In computer vision I study image processing, feature extraction, and recognition.",
    icon: (
      <>
        <circle cx="12" cy="12" r="3" />
        <path d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6-10-6-10-6Z" />
      </>
    ),
  },
  {
    title: "Web Development",
    description:
      "I enjoy building functional, user-friendly websites and applications with clean, easy-to-use interfaces.",
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 14l-2 2 2 2M13 14l2 2-2 2" />
      </>
    ),
  },
  {
    title: "UI/UX Design",
    description:
      "I use Figma and Canva to explore interface ideas and think through how an application can feel clear and comfortable to use.",
    icon: (
      <>
        <path d="M12 3v18" />
        <path d="M5 7h14M5 12h14M5 17h14" opacity="0.35" />
        <circle cx="12" cy="7" r="2" />
        <circle cx="12" cy="17" r="2" />
      </>
    ),
  },
];

const education = [
  {
    school: "BINUS University",
    program: "Computer Science — Intelligent Systems (AI)",
    detail: "GPA 3.70 / 4.00",
    period: "2024 — 2028 (expected)",
  },
  {
    school: "SMA Theresiana 1 Semarang",
    program: "Science (IPA)",
    detail: null,
    period: "2021 — 2024",
  },
];

const currentlyExploring = [
  {
    title: "Plant disease identification",
    description: "A deep learning project exploring how plant diseases can be identified from images.",
  },
  {
    title: "Voice-controlled chess",
    description: "A speech recognition project exploring a more accessible way to play chess for people with disabilities.",
  },
];

export function About() {
  return (
    <section id="about" className="panel scroll-mt-24 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
      {/* Intro */}
      <Reveal>
        <div className="max-w-3xl">
          <span className="eyebrow">About me</span>
          <h1 className="mt-4 text-3xl font-black leading-tight tracking-[-0.02em] text-[var(--text-strong)] sm:text-4xl lg:text-5xl">
            A little about how I <span className="text-gradient">learn and build.</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            I&apos;m Maureen, a Computer Science undergraduate at BINUS University specializing in Intelligent Systems. I first fell for computing through
            programming languages — learning them felt challenging in a way I genuinely enjoyed. I&apos;m especially curious about AI and machine learning and
            how they become useful in real applications. I also love building web projects and sketching interface ideas. Every new project is a chance to learn
            by doing, dig deeper into a topic, and solve practical problems that could make something useful to someone.
          </p>
        </div>
      </Reveal>

      {/* Education */}
      <div className="mt-10 hairline pt-8">
        <Reveal>
          <span className="eyebrow">Education</span>
        </Reveal>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {education.map((item, index) => (
            <Reveal key={item.school} delay={index * 90}>
              <article className="glass-card card-hover-lift h-full p-6">
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-xl font-bold text-[var(--text-strong)]">{item.school}</h2>
                  <span className="chip chip-accent shrink-0 px-3 py-1 text-xs font-semibold">{item.period}</span>
                </div>
                <p className="mt-3 text-[var(--text)]">{item.program}</p>
                {item.detail ? <p className="mt-1.5 text-sm font-semibold text-[var(--accent-bright)]">{item.detail}</p> : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Areas I explore */}
      <div className="mt-10 hairline pt-8">
        <Reveal>
          <span className="eyebrow">What I work with</span>
          <h2 className="mt-4 text-2xl font-bold text-[var(--text-strong)] sm:text-3xl">Areas I explore</h2>
        </Reveal>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {explorationAreas.map((area, index) => (
            <Reveal key={area.title} delay={index * 80}>
              <article className="glass-card card-hover-lift group h-full p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-[rgba(var(--accent-rgb),0.35)] bg-[rgba(var(--accent-rgb),0.14)] text-[var(--accent-bright)] transition-transform duration-300 group-hover:scale-105">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    {area.icon}
                  </svg>
                </span>
                <h3 className="mt-4 text-lg font-bold text-[var(--text-strong)]">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{area.description}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Currently */}
      <div className="mt-10 hairline pt-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <Reveal>
            <div>
              <span className="eyebrow">Currently</span>
              <h2 className="mt-4 text-2xl font-bold text-[var(--text-strong)] sm:text-3xl">What I&apos;m exploring now</h2>
              <span className="chip chip-accent mt-4 px-3.5 py-1.5 text-sm font-semibold">Semester 5</span>
              <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
                I&apos;m deepening my understanding of AI — currently focused on Deep Learning and Speech Recognition. I&apos;m also learning how computers work at a
                lower level while preparing for an internship and continuing to build projects.
              </p>
            </div>
          </Reveal>
          <div className="grid gap-4 sm:grid-cols-2 lg:content-start">
            {currentlyExploring.map((item, index) => (
              <Reveal key={item.title} delay={index * 90}>
                <div className="glass-card h-full border-l-2 border-l-[var(--accent)] p-5">
                  <h3 className="font-bold text-[var(--text-strong)]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{item.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
