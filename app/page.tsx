import type { Metadata } from "next";
import Link from "next/link";
import {
  loadProfile,
  loadProjects,
  loadDownloads,
  loadProof,
  loadContact,
  loadAwards,
} from "@/lib/content/load";
import { IdentityRail } from "@/components/layout/IdentityRail";

export const metadata: Metadata = {
  title: "Dr. Rehan Mahmood | Satellite Communications & Space Systems",
  description:
    "Director SSTRL, Associate Professor IST. One of three PIs for ICUBE-Q, Pakistan's lunar CubeSat. Technical lead for SSS-2A. NTN/PPDR simulator.",
  openGraph: {
    title: "Dr. Rehan Mahmood | Satellite Communications & Space Systems",
    description:
      "Director SSTRL, Associate Professor IST. ICUBE-Q lunar mission PI. SSS-2A technical lead. NTN/PPDR research.",
  },
};

const PUBLIC_CREDIBILITY_ORDER = ["p3", "p2", "p1", "p4", "p5", "p6", "p18", "p11", "p17"] as const;
const CREDIBILITY_LABELS: Record<string, string> = {
  p1: "SSTRL / NCGSA",
  p2: "LinkedIn",
  p3: "Google Scholar",
  p4: "Dawn",
  p5: "Geo News",
  p6: "The News",
  p11: "APSCO / COSPAR",
  p17: "Space Systems Pvt. Ltd.",
  p18: "CGTN",
};

export default function Home() {
  const profile = loadProfile();
  const projects = loadProjects();
  const downloads = loadDownloads();
  const proofItems = loadProof();
  const contact = loadContact();
  const awards = loadAwards();

  const icubeQ = projects.find((p) => p.slug === "icube-q");
  const ntnSimulator = projects.find((p) => p.slug === "ntn-ppdr-simulator");

  const proofById = Object.fromEntries(proofItems.map((p) => [p.id, p]));
  const credibilityItems = PUBLIC_CREDIBILITY_ORDER.map((id) => proofById[id]).filter(Boolean);


  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
      <div className="flex flex-col gap-0 lg:flex-row lg:gap-16">
        <IdentityRail profile={profile} contact={contact} downloads={downloads} />

        <div className="min-w-0 flex-1 py-4 lg:py-10">
          <div className="max-w-3xl space-y-8 md:space-y-14">
            <section id="overview" className="scroll-mt-24">
              <h2 className="font-serif text-2xl font-extrabold text-[var(--heading-color)] tracking-tight md:text-3xl">
                Overview
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-[1.85] text-[var(--body-text)] max-w-3xl md:text-base">
                {profile.heroBio || profile.bio.slice(0, 220) + (profile.bio.length > 220 ? "…" : "")}
              </p>
            </section>

            <section id="selected-work" className="scroll-mt-24">
              <h2 className="font-serif text-2xl font-extrabold text-[var(--heading-color)] tracking-tight md:text-3xl">
                Selected Work
              </h2>
              <div className="mt-4 space-y-6">
                {icubeQ && (
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[var(--heading-color)] tracking-tight md:text-2xl">
                      {icubeQ.title}
                    </h3>
                    <p className="mt-1.5 text-[0.9375rem] leading-[1.85] text-[var(--body-text)] md:text-base">
                      {icubeQ.shortDescription}
                    </p>
                  </div>
                )}
                <div>
                  <h3 className="font-serif text-lg font-semibold text-[var(--heading-color)] tracking-tight">
                    SSTRL and CubeSat Programs
                  </h3>
                  <p className="mt-1.5 text-[0.9375rem] leading-[1.85] text-[var(--body-text)] md:text-base">
                    Leadership of Pakistan's small-satellite lab ecosystem through SSTRL, including CubeSat capability
                    development, lab establishment, training, student projects, and national mission programs such as
                    ICUBE-1, ICUBE-N, SSS-2A, and ICUBE-CSAT.
                  </p>
                </div>
                {ntnSimulator && (
                  <div>
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

            <section id="current-work" className="scroll-mt-24">
              <h2 className="font-serif text-2xl font-extrabold text-[var(--heading-color)] tracking-tight md:text-3xl">
                Current Work
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-[1.85] text-[var(--body-text)] md:text-base">
                Current work focuses on NGN/NTN–PPDR scenario evaluation, digital-twin-driven analysis of resilient
                communications, and the development of visual mock interfaces for operator-facing workflows. This
                includes ongoing work around integrated terrestrial/non-terrestrial communications, mock policy-simulation
                ideas for PPDR decision support, and architecture-facing exploration of telecom-space convergence.
              </p>
            </section>

            <section id="research-direction" className="scroll-mt-24">
              <h2 className="font-serif text-2xl font-extrabold text-[var(--heading-color)] tracking-tight md:text-3xl">
                Research Direction
              </h2>
              <p className="mt-4 text-[0.9375rem] leading-[1.85] text-[var(--body-text)] md:text-base">
                Current research direction spans integrated NTN performance evaluation, Doppler and channel-effect
                analysis, resilient communication architectures for PPDR use cases, and continued work on CubeSat
                subsystems, on-board computing, and satellite communications. This direction builds on earlier work in
                deep-space image transmission, nanosatellite software and hardware design, antenna systems, and compact
                attitude-control components.
              </p>
            </section>

            <section id="selected-coverage" className="scroll-mt-24">
              <h2 className="font-serif text-2xl font-extrabold text-[var(--heading-color)] tracking-tight md:text-3xl">
                Selected Coverage & Profiles
              </h2>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1 text-[0.9375rem] md:text-base">
                {credibilityItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)] hover:decoration-[var(--link-hover)]"
                    >
                      {CREDIBILITY_LABELS[item.id] || item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section id="recognition" className="scroll-mt-24">
              <h2 className="font-serif text-2xl font-extrabold text-[var(--heading-color)] tracking-tight md:text-3xl">
                Recognition
              </h2>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-[var(--muted)]">
                    Recognitions & Credentials
                  </p>
                  <ul className="mt-1.5 space-y-1 text-[0.9375rem] leading-[1.85] text-[var(--body-text)] md:text-base">
                    {awards
                      .filter((a) => a.group === "recognitions")
                      .map((a) => (
                        <li key={a.id}>
                          {a.title}
                          {a.issuer && ` — ${a.issuer}`}
                        </li>
                      ))}
                  </ul>
                </div>
                <div>
                  <p className="text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-[var(--muted)]">
                    Leadership & Impact
                  </p>
                  <ul className="mt-1.5 space-y-1 text-[0.9375rem] leading-[1.85] text-[var(--body-text)] md:text-base">
                    {awards
                      .filter((a) => a.group === "leadership")
                      .map((a) => (
                        <li key={a.id}>{a.title}</li>
                      ))}
                  </ul>
                </div>
              </div>
            </section>

            <section id="contact" className="scroll-mt-24 pb-6">
              <h2 className="font-serif text-2xl font-extrabold text-[var(--heading-color)] tracking-tight md:text-3xl">
                Contact
              </h2>
              <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-y-1 text-[0.9375rem] md:text-base">
                <a
                  href={`mailto:${contact.email}`}
                  className="underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)]"
                >
                  {contact.email}
                </a>
                {contact.phone && (
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)]"
                  >
                    {contact.phone}
                  </a>
                )}
                {contact.linkedin && (
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)]"
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
