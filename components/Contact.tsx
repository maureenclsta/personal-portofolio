import Image from "next/image";

import { CopyEmailButton } from "@/components/CopyEmailButton";
import { Reveal } from "@/components/Reveal";
import { contactItems, contactPhotos, socialItems } from "@/data/portfolio";

function ContactIcon({ label }: { label: string }) {
  const stroke = {
    className: "h-5 w-5",
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (label) {
    case "Email":
      return (
        <svg {...stroke}>
          <rect x="3" y="5" width="18" height="14" rx="2.5" />
          <path d="m4 7 8 6 8-6" />
        </svg>
      );
    case "LinkedIn":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
        </svg>
      );
    case "GitHub":
      return (
        <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
          <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.73 1.17 1.73 1.17 1.01 1.72 2.65 1.22 3.3.93.1-.73.4-1.22.72-1.5-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.16-3.04-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.04 0 4.35-2.64 5.3-5.16 5.59.41.36.77 1.04.77 2.1v3.08c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
        </svg>
      );
    case "Instagram":
      return (
        <svg {...stroke}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="18" cy="6" r="0.75" fill="currentColor" stroke="none" />
        </svg>
      );
    case "TikTok":
      return (
        <svg {...stroke}>
          <path d="M14 4v11.5a3.5 3.5 0 1 1-3.5-3.5" />
          <path d="M14 5c.7 2.5 2.2 3.8 5 4" />
        </svg>
      );
    default:
      return (
        <svg {...stroke}>
          <path d="M7.5 4h9A3.5 3.5 0 0 1 20 7.5v5A3.5 3.5 0 0 1 16.5 16H13l-4 4v-4H7.5A3.5 3.5 0 0 1 4 12.5v-5A3.5 3.5 0 0 1 7.5 4Z" />
        </svg>
      );
  }
}

const primaryEmail = contactItems.find((item) => item.label === "Email")?.links[0];

export function Contact() {
  const directLinks = contactItems.filter((item) => item.label !== "Email");

  return (
    <section id="contact" className="panel scroll-mt-24 overflow-hidden">
      {/* Hero band */}
      <div className="relative px-5 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14">
        <div aria-hidden="true" className="pointer-events-none absolute -left-16 top-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(124,77,255,0.4),transparent_70%)] blur-3xl" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(177,140,255,0.28),transparent_70%)] blur-3xl" />

        <div className="relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <div>
              <span className="eyebrow">Get in touch</span>
              <h1 className="mt-4 text-3xl font-black leading-[1.08] tracking-[-0.02em] text-[var(--text-strong)] sm:text-4xl lg:text-5xl">
                Let&apos;s build something <span className="text-gradient">worth talking about.</span>
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
                I&apos;m actively looking for <strong className="font-semibold text-[var(--text)]">internship opportunities</strong> in AI and web development. Whether you have a role,
                a project idea, or just want to say hi — my inbox is always open. I&apos;ll get back to you as soon as I can.
              </p>

              {primaryEmail ? (
                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
                  <a href={primaryEmail.href} className="btn btn-primary px-6 py-3.5 text-[0.95rem]">
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                      <rect x="3" y="5" width="18" height="14" rx="2.5" />
                      <path d="m4 7 8 6 8-6" />
                    </svg>
                    Email me
                  </a>
                  <CopyEmailButton email={primaryEmail.value} />
                </div>
              ) : null}
            </div>
          </Reveal>

          {/* Availability card */}
          <Reveal delay={140}>
            <div className="glass-card p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-400" />
                </span>
                <span className="text-sm font-bold text-[var(--text-strong)]">Available for internships</span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-[var(--muted)]">
                Currently a 5th-semester Computer Science student at BINUS University, open to opportunities starting in 2026.
              </p>
              <dl className="mt-6 grid grid-cols-2 gap-4 border-t border-[var(--border)] pt-5">
                <div>
                  <dt className="text-xs font-medium text-[var(--muted-soft)]">Based in</dt>
                  <dd className="mt-1 font-semibold text-[var(--text)]">Semarang, Indonesia</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-[var(--muted-soft)]">Response time</dt>
                  <dd className="mt-1 font-semibold text-[var(--text)]">Within a day</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-[var(--muted-soft)]">Focus</dt>
                  <dd className="mt-1 font-semibold text-[var(--text)]">AI · Web Dev</dd>
                </div>
                <div>
                  <dt className="text-xs font-medium text-[var(--muted-soft)]">Languages</dt>
                  <dd className="mt-1 font-semibold text-[var(--text)]">ID · EN</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Channels */}
      <div className="border-t border-[var(--border)] px-5 py-8 sm:px-8 sm:py-10 lg:px-12">
        <Reveal>
          <h2 className="text-lg font-bold text-[var(--text-strong)]">Reach me directly</h2>
        </Reveal>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {/* Email as an info card with each address */}
          {primaryEmail ? (
            <Reveal className="h-full">
              <div className="glass-card flex h-full flex-col gap-3 p-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(var(--accent-rgb),0.35)] bg-[rgba(var(--accent-rgb),0.14)] text-[var(--accent-bright)]">
                    <ContactIcon label="Email" />
                  </span>
                  <span className="text-sm font-bold text-[var(--text-strong)]">Email</span>
                </div>
                <div className="space-y-1.5">
                  {contactItems.find((item) => item.label === "Email")!.links.map((link) => (
                    <a key={link.href} href={link.href} className="block break-all text-sm text-[var(--muted)] transition hover:text-[var(--accent-bright)]">
                      {link.value}
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>
          ) : null}

          {directLinks.map((item, index) => (
            <Reveal key={item.label} delay={(index + 1) * 70} className="h-full">
              <a
                href={item.links[0].href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card card-hover-lift group flex h-full items-center gap-3 p-5"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-[rgba(var(--accent-rgb),0.35)] bg-[rgba(var(--accent-rgb),0.14)] text-[var(--accent-bright)] transition-transform duration-300 group-hover:scale-105">
                  <ContactIcon label={item.label} />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-bold text-[var(--text-strong)]">{item.label}</span>
                  <span className="block break-all text-sm text-[var(--muted)]">{item.links[0].value}</span>
                </span>
                <svg className="h-4 w-4 shrink-0 text-[var(--muted-soft)] transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[var(--accent-bright)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M7 17 17 7" />
                  <path d="M8 7h9v9" />
                </svg>
              </a>
            </Reveal>
          ))}
        </div>

        {/* Socials */}
        <Reveal>
          <h2 className="mt-9 text-lg font-bold text-[var(--text-strong)]">Elsewhere</h2>
        </Reveal>
        <div className="mt-4 flex flex-wrap gap-3">
          {socialItems.map((item, index) => {
            const inner = (
              <>
                <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--border)] bg-white/5 text-[var(--text)] transition-colors duration-300 group-hover:border-[var(--accent)] group-hover:text-[var(--accent-bright)]">
                  <ContactIcon label={item.label} />
                </span>
                <span className="pr-1">
                  <span className="block text-sm font-semibold text-[var(--text)]">{item.label}</span>
                  <span className="block text-xs text-[var(--muted-soft)]">{item.value}</span>
                </span>
              </>
            );
            const cls = "chip group flex items-center gap-2.5 py-2 pl-2 pr-3 transition-colors duration-300 hover:border-[rgba(var(--accent-rgb),0.45)] hover:bg-[rgba(var(--accent-rgb),0.1)]";
            return (
              <Reveal key={item.label} delay={index * 60}>
                {item.href ? (
                  <a href={item.href} target="_blank" rel="noopener noreferrer" className={cls}>
                    {inner}
                  </a>
                ) : (
                  <div className={`${cls} opacity-80`}>{inner}</div>
                )}
              </Reveal>
            );
          })}
        </div>

        {contactPhotos.length > 0 ? (
          <div className="mt-9">
            <h2 className="text-lg font-bold text-[var(--text-strong)]">A few moments</h2>
            <div className="mt-4 grid w-fit grid-cols-4 gap-2">
              {contactPhotos.map((photo) => (
                <div key={photo.src} className="relative h-16 w-16 overflow-hidden rounded-xl border border-[var(--border)] sm:h-[72px] sm:w-[72px]">
                  <Image src={photo.src} alt={photo.alt} fill sizes="72px" className="object-cover" />
                </div>
              ))}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
