export function About() {
  const explorationAreas = [
    {
      title: "Artificial Intelligence & Machine Learning",
      description:
        "I’m interested in artificial intelligence, machine learning, and deep learning, especially developing and understanding intelligent models.",
    },
    {
      title: "NLP & Computer Vision",
      description:
        "I’m interested in how NLP models support language understanding, text processing, classification, and sentiment or emotion analysis. In computer vision, I want to learn about image processing, classification, feature extraction, object and image recognition, and computer vision models.",
    },
    {
      title: "Web Development",
      description:
        "I enjoy web development and building functional, user-friendly websites and applications with clear, easy-to-use interfaces.",
    },
    {
      title: "UI/UX Design",
      description:
        "I use Figma and Canva to explore interface ideas and think through how an application can feel clear and comfortable to use.",
    },
  ];

  return (
    <section id="about" className="section-shell scroll-mt-24 rounded-[28px] border border-white/15 bg-[rgba(40,31,67,0.88)] px-5 py-5 sm:px-8 lg:px-10 lg:py-6">
      <div className="max-w-3xl">
        <p className="text-sm uppercase tracking-[0.16em] text-[var(--accent)]">About Me</p>
        <h1 className="mt-2 text-3xl font-black text-[var(--text)] sm:text-4xl">A little about how I learn and build.</h1>
        <p className="mt-4 text-justify text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          I’m Maureen, a Computer Science undergraduate at BINUS University specializing in Intelligent Systems. I first became interested in computing through programming languages; learning them felt challenging in a way I enjoyed. I’m especially curious about AI and machine learning, and how they can be useful in real applications. I also enjoy building web projects and sketching interface ideas. Starting a new project gives me a chance to learn by doing, explore a topic more deeply, and work through practical problems that could make an application useful to someone.
        </p>
      </div>

      <section className="mt-6 border-t border-white/10 pt-5" aria-labelledby="education-heading">
        <p className="text-sm uppercase tracking-[0.16em] text-[var(--muted)]">Education</p>
        <div className="mt-3 space-y-3">
          <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 id="education-heading" className="text-2xl font-bold text-[var(--text)]">BINUS University</h2>
              <p className="mt-2 text-[var(--text)]">Computer Science — Intelligent System (AI)</p>
              <p className="mt-1 text-sm text-[var(--muted)]">GPA: 3.70 / 4.00</p>
            </div>
            <div className="md:text-right">
              <p className="mt-1 text-sm text-[var(--muted)]">2024–2028 (expected)</p>
            </div>
          </div>
          <div className="flex flex-col gap-3 border-t border-white/10 pt-3 md:flex-row md:items-start md:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[var(--text)]">SMA Theresiana 1 Semarang</h2>
              <p className="mt-1 text-[var(--muted)]">Science (IPA)</p>
            </div>
            <p className="text-sm text-[var(--muted)] md:text-right">2021 — 2024</p>
          </div>
        </div>
      </section>

      <section className="mt-6 border-t border-white/10 pt-5" aria-labelledby="areas-heading">
        <p className="text-sm uppercase tracking-[0.16em] text-[var(--muted)]">What I work with</p>
        <h2 id="areas-heading" className="mt-2 text-2xl font-bold text-[var(--text)] sm:text-3xl">Areas I Explore</h2>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {explorationAreas.map((area) => (
            <article key={area.title} className="rounded-2xl border border-white/10 bg-white/4 p-4">
              <h3 className="text-lg font-bold text-[var(--text)]">{area.title}</h3>
              <p className="mt-2 text-justify text-sm leading-relaxed text-[var(--muted)] sm:text-base">{area.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-6 border-t border-white/10 pt-5" aria-labelledby="currently-heading">
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between">
          <div className="lg:max-w-sm">
            <p className="text-sm uppercase tracking-[0.16em] text-[var(--accent)]">Currently</p>
            <h2 id="currently-heading" className="mt-2 text-2xl font-bold text-[var(--text)]">Exploring</h2>
            <p className="mt-2 inline-flex rounded-full border border-[var(--accent)]/30 bg-[var(--accent)]/10 px-3 py-0.5 text-sm font-semibold text-[var(--accent)]">Semester 5</p>
          </div>
          <div className="flex-1 lg:max-w-2xl">
            <p className="text-base leading-relaxed text-[var(--muted)]">
              I’m deepening my understanding of AI, with a current focus on Deep Learning and Speech Recognition. I’m also learning more about how computers work at a lower level while preparing for an internship and continuing to build projects.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="border-l-2 border-[var(--accent)]/60 pl-4">
                <h3 className="font-bold text-[var(--text)]">Plant disease identification</h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">A deep learning project exploring how plant diseases can be identified.</p>
              </div>
              <div className="border-l-2 border-[var(--accent)]/60 pl-4">
                <h3 className="font-bold text-[var(--text)]">Voice-controlled chess</h3>
                <p className="mt-1 text-sm leading-relaxed text-[var(--muted)]">A speech recognition project exploring a more accessible way to play chess for people with disabilities.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </section>
  );
}
