import type { Metadata } from "next";
import Link from "next/link";
import {
  loadProfile,
  loadProjects,
  loadDownloads,
  loadProof,
  loadContact,
  loadAwards,
  loadAuthorityImages,
} from "@/lib/content/load";
import { IdentityRail } from "@/components/layout/IdentityRail";

export const metadata: Metadata = {
  title: "Dr. Rehan Mahmood | Satellite Communications & Space Systems",
  description:
    "Associate Professor, Director SSTRL. One of three PIs for ICUBE-Q, Pakistan's lunar CubeSat. NTN/PPDR research.",
  openGraph: {
    title: "Dr. Rehan Mahmood | Satellite Communications & Space Systems",
    description:
      "Associate Professor, Director SSTRL. ICUBE-Q lunar mission PI. SSS-2A technical lead. NTN/PPDR research.",
  },
};

const PROOF_GROUP_ORDER: { label: string; ids: string[] }[] = [
  { label: "Profiles / Institutional", ids: ["p2", "p3", "p1", "p17"] },
  { label: "Media / Technical Visibility", ids: ["p4", "p5", "p6", "p18", "p8", "p9", "p10", "p11"] },
];

export default function Home() {
  const profile = loadProfile();
  const projects = loadProjects();
  const downloads = loadDownloads();
  const proofItems = loadProof();
  const contact = loadContact();
  const awards = loadAwards();
  const authorityImages = loadAuthorityImages();

  const icubeQ = projects.find((p) => p.slug === "icube-q");
  const ntnSimulator = projects.find((p) => p.slug === "ntn-ppdr-simulator");
  const icubeQDawnProof = proofItems.find((p) => p.id === "p4");


  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
      <div className="flex flex-col gap-0 lg:flex-row lg:gap-16">
        <IdentityRail profile={profile} contact={contact} downloads={downloads} authorityImages={authorityImages} />

        <div className="min-w-0 flex-1 py-4 lg:py-10">
          <div className="max-w-4xl space-y-8 md:space-y-12">
            <section id="overview" className="scroll-mt-24 pt-8 first:pt-0 border-t border-[var(--border)] first:border-t-0">
              <h2 className="font-serif text-2xl font-extrabold text-[var(--heading-color)] tracking-tight md:text-[1.75rem] lg:text-3xl border-b border-[var(--border)] pb-2 -tracking-[0.02em]">
                Overview
              </h2>
              <div className="mt-5 space-y-5 text-[0.9375rem] leading-[1.8] text-[var(--body-text)] max-w-3xl md:text-base">
                {(profile.heroBio || profile.bio).split(/\n\n/).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </section>

            <section id="selected-work" className="scroll-mt-24 pt-8 border-t border-[var(--border)]">
              <h2 className="font-serif text-2xl font-extrabold text-[var(--heading-color)] tracking-tight md:text-[1.75rem] lg:text-3xl border-b border-[var(--border)] pb-2 -tracking-[0.02em]">
                Selected Work
              </h2>
              <div className="mt-5 space-y-6">
                {icubeQ && (
                  <div className="pl-4 border-l-2 border-[var(--link-color)] py-4 pr-4 bg-[var(--off-white)]/50 rounded-r">
                    <h3 className="font-serif text-xl font-semibold text-[var(--heading-color)] tracking-tight md:text-2xl">
                      {icubeQ.title}
                    </h3>
                    <p className="mt-2 text-[0.9375rem] leading-[1.85] text-[var(--body-text)] md:text-base">
                      {icubeQ.shortDescription}
                    </p>
                    {icubeQ.role && (
                      <p className="mt-1.5 text-[0.8125rem] text-[var(--secondary-text)]">
                        {icubeQ.role} · {icubeQ.year}
                      </p>
                    )}
                    {icubeQDawnProof && (
                      <a
                        href={icubeQDawnProof.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-block font-medium text-[0.8125rem] underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)]"
                      >
                        {icubeQDawnProof.title} →
                      </a>
                    )}
                  </div>
                )}
                <div className="pl-3 border-l border-[var(--border)]">
                  <h3 className="font-serif text-lg font-semibold text-[var(--heading-color)] tracking-tight">
                    SSTRL / CubeSat Programs
                  </h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-[1.85] text-[var(--body-text)] md:text-base">
                    Leadership of Pakistan's small-satellite lab ecosystem through SSTRL: CubeSat capability development,
                    lab establishment, training, student projects, and national missions (ICUBE-1, ICUBE-N, SSS-2A,
                    ICUBE-CSAT).
                  </p>
                </div>
                {ntnSimulator && (
                  <div className="pl-3 border-l border-[var(--border)]">
                    <h3 className="font-serif text-lg font-semibold text-[var(--heading-color)] tracking-tight">
                      NGN/NTN–PPDR Simulator
                    </h3>
                    <p className="mt-1.5 text-[0.9375rem] leading-[1.85] text-[var(--body-text)] md:text-base">
                      {ntnSimulator.shortDescription}
                    </p>
                  </div>
                )}
              </div>
            </section>

            <section id="current-work" className="scroll-mt-24 pt-8 border-t border-[var(--border)]">
              <h2 className="font-serif text-2xl font-extrabold text-[var(--heading-color)] tracking-tight md:text-[1.75rem] lg:text-3xl border-b border-[var(--border)] pb-2 -tracking-[0.02em]">
                Current Work
              </h2>
              <div className="mt-5 pl-4 border-l-2 border-[var(--slate-400)] bg-[var(--off-white)]/30 rounded-r px-4 py-3">
                <p className="text-[0.9375rem] leading-[1.8] text-[var(--body-text)] md:text-base">
                  NGN/NTN–PPDR digital-twin and scenario evaluation; visual mock demo direction for telecom-space and
                  PPDR workflows; policy simulator direction with mock data; current focus on resilient communications
                  and telecom-space convergence.
                </p>
              </div>
            </section>

            <section id="research-direction" className="scroll-mt-24 pt-8 border-t border-[var(--border)]">
              <h2 className="font-serif text-2xl font-extrabold text-[var(--heading-color)] tracking-tight md:text-[1.75rem] lg:text-3xl border-b border-[var(--border)] pb-2 -tracking-[0.02em]">
                Research Direction
              </h2>
              <div className="mt-5 pl-4 border-l-2 border-[var(--slate-400)] bg-[var(--off-white)]/30 rounded-r px-4 py-3">
                <ul className="space-y-2 text-[0.9375rem] leading-[1.8] text-[var(--body-text)] md:text-base">
                  <li>Doppler, channel, and propagation effects in integrated NTN scenarios</li>
                  <li>Resilient communications architectures for PPDR</li>
                  <li>Deep-space image transmission and coding/decoding</li>
                  <li>CubeSat OBC, antennas, magnetorquers, subsystem engineering</li>
                  <li>Future publication and demonstration roadmap</li>
                </ul>
              </div>
            </section>

            <section id="selected-coverage" className="scroll-mt-24 pt-8 border-t border-[var(--border)]">
              <h2 className="font-serif text-2xl font-extrabold text-[var(--heading-color)] tracking-tight md:text-[1.75rem] lg:text-3xl border-b border-[var(--border)] pb-2 -tracking-[0.02em]">
                Selected Coverage & Profiles
              </h2>
              <div className="mt-5 space-y-0">
                {PROOF_GROUP_ORDER.map((group, idx) => {
                  const items = group.ids
                    .map((id) => proofItems.find((p) => p.id === id))
                    .filter((p): p is NonNullable<typeof p> => Boolean(p));
                  if (items.length === 0) return null;
                  return (
                    <div
                      key={group.label}
                      className="pb-4 mb-4 border-b border-[var(--border)] last:border-b-0 last:pb-0 last:mb-0"
                    >
                      <p className="text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-[var(--muted)] mb-2">
                        {group.label}
                      </p>
                      <ul className="space-y-2">
                        {items.map((item) => (
                          <li key={item.id} className="flex flex-col gap-0.5">
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="font-medium underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)] hover:decoration-[var(--link-hover)] w-fit rounded-sm px-1.5 py-0.5 -mx-1.5 hover:bg-[var(--link-color)]/[0.08]"
                            >
                              {item.title}
                            </a>
                            {item.summary && (
                              <span className="text-[0.8125rem] text-[var(--muted)] leading-snug">
                                — {item.summary}
                              </span>
                            )}
                          </li>
                        ))}
                      </ul>
                    </div>
                  );
                })}
                <div className="pt-4 border-t border-[var(--border)]">
                  <p className="text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-[var(--muted)] mb-2">
                    Recognition
                  </p>
                  <div className="space-y-3">
                    <div>
                      <p className="text-[0.625rem] font-medium uppercase tracking-[0.08em] text-[var(--muted)] mb-1">
                        Recognitions & Credentials
                      </p>
                      <ul className="space-y-1">
                        {awards
                          .filter((a) => a.group === "recognitions")
                          .map((a) => (
                            <li key={a.id} className="pl-2 border-l border-[var(--border)] text-[0.875rem] leading-[1.7] text-[var(--body-text)]">
                              {a.title}
                              {a.issuer && ` — ${a.issuer}`}
                            </li>
                          ))}
                      </ul>
                    </div>
                    <div>
                      <p className="text-[0.625rem] font-medium uppercase tracking-[0.08em] text-[var(--muted)] mb-1">
                        Leadership & Impact
                      </p>
                      <ul className="space-y-1">
                        {awards
                          .filter((a) => a.group === "leadership")
                          .map((a) => (
                            <li key={a.id} className="pl-2 border-l border-[var(--border)] text-[0.875rem] leading-[1.7] text-[var(--body-text)]">
                              {a.title}
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            <section id="contact" className="scroll-mt-24 pt-8 pb-6 border-t border-[var(--border)]">
              <h2 className="font-serif text-2xl font-extrabold text-[var(--heading-color)] tracking-tight md:text-[1.75rem] lg:text-3xl border-b border-[var(--border)] pb-2 -tracking-[0.02em]">
                Contact
              </h2>
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-1 text-[0.9375rem] md:text-base">
                <a
                  href={`mailto:${contact.email}`}
                  className="font-semibold underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)] rounded-sm px-1.5 py-0.5 -mx-1.5 hover:bg-[var(--link-color)]/[0.08]"
                >
                  {contact.email}
                </a>
                {contact.phone && (
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="font-semibold underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)] rounded-sm px-1.5 py-0.5 -mx-1.5 hover:bg-[var(--link-color)]/[0.08]"
                  >
                    {contact.phone}
                  </a>
                )}
                {contact.linkedin && (
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)] rounded-sm px-1.5 py-0.5 -mx-1.5 hover:bg-[var(--link-color)]/[0.08]"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
              <div className="mt-4">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-[var(--muted)]">
                  CVs
                </p>
                <div className="mt-2 flex flex-wrap gap-2.5 items-center">
                  {downloads.map((item) => (
                    <a
                      key={item.id}
                      href={item.filePath}
                      download
                      className="rounded-md border border-[var(--border)] bg-white px-2.5 py-1 text-[0.8125rem] font-medium text-[var(--body-text)] transition-colors hover:border-[var(--slate-400)] hover:bg-[var(--off-white)]"
                    >
                      {item.title}
                    </a>
                  ))}
                  <Link
                    href="/downloads"
                    className="text-[0.6875rem] underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)] ml-1"
                  >
                    All downloads
                  </Link>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
