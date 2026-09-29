import Image from "next/image";

import { contactItems, contactPhotos, socialItems } from "@/data/portfolio";

function ContactIcon({ label }: { label: string }) {
  if (label === "Email") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (label === "LinkedIn") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
      </svg>
    );
  }

  if (label === "GitHub") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
        <path d="M12 .75a11.25 11.25 0 0 0-3.56 21.92c.56.1.77-.24.77-.54v-2.1c-3.14.68-3.8-1.33-3.8-1.33-.51-1.3-1.25-1.65-1.25-1.65-1.03-.7.08-.69.08-.69 1.14.08 1.73 1.17 1.73 1.17 1.01 1.72 2.65 1.22 3.3.93.1-.73.4-1.22.72-1.5-2.51-.29-5.15-1.26-5.15-5.6 0-1.24.44-2.25 1.16-3.04-.12-.29-.5-1.44.11-3 0 0 .95-.3 3.1 1.16a10.8 10.8 0 0 1 5.64 0c2.15-1.46 3.1-1.16 3.1-1.16.61 1.56.23 2.71.11 3 .72.79 1.16 1.8 1.16 3.04 0 4.35-2.64 5.3-5.16 5.59.41.36.77 1.04.77 2.1v3.08c0 .3.2.65.78.54A11.25 11.25 0 0 0 12 .75Z" />
      </svg>
    );
  }

  if (label === "Instagram") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (label === "TikTok") {
    return (
      <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 4v11.5a3.5 3.5 0 1 1-3.5-3.5" />
        <path d="M14 5c.7 2.5 2.2 3.8 5 4" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className="h-8 w-8" fill="currentColor" aria-hidden="true">
      <path d="M12 3C6.48 3 2 6.62 2 11.08c0 2.55 1.4 4.82 3.6 6.29L4.7 21l4.12-2.08c1.01.28 2.08.43 3.18.43 5.52 0 10-3.62 10-8.08S17.52 3 12 3Z" />
      <text x="6" y="14" fontSize="6" fontWeight="700" fill="var(--bg-dark)">LINE</text>
    </svg>
  );
}

export function Contact() {
  return (
    <section id="contact" className="section-shell scroll-mt-24 rounded-[28px] border border-white/15 bg-[rgba(40,31,67,0.88)] px-5 py-8 sm:px-8 lg:px-10">
      <div className="mb-7">
        <p className="text-sm uppercase tracking-[0.18em] text-[var(--muted)]">Contact</p>
        <h2 className="mt-2 text-3xl font-black text-[var(--text)] sm:text-4xl">Let’s connect.</h2>
      </div>

      <div className="grid justify-items-start gap-5 md:grid-cols-3">
        {contactItems.map((item) => {
          const content = (
            <>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#321b55]/15 bg-white/40 text-[#321b55]">
                <ContactIcon label={item.label} />
              </span>
              <span className="min-w-0">
                <span className="block text-sm font-bold text-[#321b55]">{item.label}</span>
                <span className="mt-0.5 block break-all text-sm leading-5 text-[#321b55]">
                  {item.links.map((link) => (
                    <span key={link.href} className="block w-fit max-w-full">
                      {item.label === "Email" ? (
                        <a href={link.href} className="box-decoration-clone rounded-[0.18em] bg-[#fff0a8] px-1 py-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#321b55]">
                          {link.value}
                        </a>
                      ) : (
                        <span className="box-decoration-clone rounded-[0.18em] bg-[#fff0a8] px-1 py-0.5">{link.value}</span>
                      )}
                    </span>
                  ))}
                </span>
              </span>
            </>
          );
          const className = "flex min-h-[76px] w-fit max-w-full items-center gap-3 rounded-[22px] border border-[#321b55]/15 bg-[#e9ddff] p-4 transition hover:border-[#321b55]/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#321b55]";

          return item.label === "Email" ? (
            <div key={item.label} className={className}>{content}</div>
          ) : (
            <a key={item.label} href={item.links[0].href} target="_blank" rel="noopener noreferrer" className={className}>
              {content}
            </a>
          );
        })}
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-start">
        <section>
          <h3 className="text-xl font-bold text-[var(--text)]">Social</h3>
          <div className="mt-4 grid justify-items-start gap-3 sm:grid-cols-2">
            {socialItems.map((item) => {
              const content = (
                <>
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#321b55]/15 bg-white/40 text-[#321b55]">
                    <ContactIcon label={item.label} />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-bold text-[#321b55]">{item.label}</span>
                    <span className="mt-0.5 block break-all text-sm leading-5 text-[#321b55]"><span className="box-decoration-clone rounded-[0.18em] bg-[#fff0a8] px-1 py-0.5">{item.value}</span></span>
                  </span>
                </>
              );
              const className = "flex min-h-[76px] w-fit max-w-full items-center gap-3 rounded-[18px] border border-[#321b55]/15 bg-[#e9ddff] p-4 transition hover:border-[#321b55]/35 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#321b55]";

              return item.href ? (
                <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className={className}>
                  {content}
                </a>
              ) : (
                <div key={item.label} className={`${className} opacity-80`}>
                  {content}
                </div>
              );
            })}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-bold text-[var(--text)]">A few moments</h3>
          {contactPhotos.length > 0 ? (
            <div className="mt-4 grid w-fit grid-cols-4 gap-2">
              {contactPhotos.map((photo) => (
                <div key={photo.src} className="relative h-16 w-16 overflow-hidden rounded-xl border border-white/10 sm:h-[72px] sm:w-[72px]">
                  <Image src={photo.src} alt={photo.alt} fill sizes="72px" className="object-cover" />
                </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 max-w-[280px] text-sm leading-relaxed text-[var(--muted)]">Personal photos will appear here when added to the contactPhotos list in data/portfolio.ts.</p>
          )}
        </section>
      </div>
    </section>
  );
}
