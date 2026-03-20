import type { Metadata } from "next";
import Link from "next/link";
import {
  loadProfile,
  loadProjects,
  loadDownloads,
  loadProof,
  loadContact,
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

const PUBLIC_CREDIBILITY_ORDER = ["p3", "p2", "p1", "p17", "p4", "p5", "p6", "p11"] as const;
const CREDIBILITY_LABELS: Record<string, string> = {
  p1: "SSTRL / NCGSA",
  p2: "LinkedIn",
  p3: "Google Scholar",
  p4: "Dawn",
  p5: "Geo News",
  p6: "The News",
  p11: "APSCO / COSPAR",
  p17: "Space Systems",
};

export default function Home() {
  const profile = loadProfile();
  const projects = loadProjects();
  const downloads = loadDownloads();
  const proofItems = loadProof();
  const contact = loadContact();

  const icubeQ = projects.find((p) => p.slug === "icube-q");
  const ntnSimulator = projects.find((p) => p.slug === "ntn-ppdr-simulator");

  const proofById = Object.fromEntries(proofItems.map((p) => [p.id, p]));
  const credibilityItems = PUBLIC_CREDIBILITY_ORDER.map((id) => proofById[id]).filter(Boolean);

  return (
    <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-10">
      <div className="flex flex-col gap-0 lg:flex-row lg:gap-16">
        <IdentityRail profile={profile} contact={contact} downloads={downloads} />

        <div className="min-w-0 flex-1 py-6 lg:py-10">
          <div className="max-w-3xl space-y-8 md:space-y-12">
            <section id="overview" className="scroll-mt-24">
              <h2 className="font-serif text-xl font-semibold text-[var(--navy-900)] tracking-tight md:text-2xl">
                Overview
              </h2>
              <p className="mt-3 text-[0.9375rem] leading-[1.7] text-[var(--slate-600)] max-w-3xl md:text-base">
                {profile.heroBio || profile.bio.slice(0, 220) + (profile.bio.length > 220 ? "…" : "")}
              </p>
            </section>

            <section id="selected-work" className="scroll-mt-24">
              <h2 className="font-serif text-xl font-semibold text-[var(--navy-900)] tracking-tight md:text-2xl">
                Selected Work
              </h2>
              <div className="mt-3 space-y-5">
                {icubeQ && (
                  <div>
                    <h3 className="font-serif text-xl font-semibold text-[var(--navy-900)] tracking-tight md:text-2xl">
                      {icubeQ.title}
                    </h3>
                    <p className="mt-1.5 text-[0.9375rem] leading-[1.7] text-[var(--slate-600)] md:text-base">
                      {icubeQ.shortDescription}
                    </p>
                    <Link
                      href={`/projects/${icubeQ.slug}`}
                      className="mt-1.5 inline-block text-sm font-medium text-[var(--accent)] hover:text-[var(--navy-900)] hover:underline"
                    >
                      View details
                    </Link>
                  </div>
                )}
                <div>
                  <p className="text-[0.9375rem] leading-[1.7] text-[var(--slate-600)] md:text-base">
                    <span className="font-medium text-[var(--navy-900)]">SSTRL / CubeSat Programs</span>
                    {" — "}
                    National CubeSat initiative. ICUBE-1, ICUBE-N, SSS-2A.
                  </p>
                  <Link
                    href="/projects"
                    className="mt-1 inline-block text-sm font-medium text-[var(--accent)] hover:text-[var(--navy-900)] hover:underline"
                  >
                    View details
                  </Link>
                </div>
                {ntnSimulator && (
                  <div>
                    <p className="text-[0.9375rem] leading-[1.7] text-[var(--slate-600)] md:text-base">
                      <span className="font-medium text-[var(--navy-900)]">
                        NGN/NTN–PPDR Simulator
                      </span>
                      {" — "}
                      {ntnSimulator.shortDescription}
                    </p>
                    <Link
                      href="/simulator"
                      className="mt-1 inline-block text-sm font-medium text-[var(--accent)] hover:text-[var(--navy-900)] hover:underline"
                    >
                      View details
                    </Link>
                  </div>
                )}
              </div>
            </section>

            <section id="current-work" className="scroll-mt-24">
              <h2 className="font-serif text-xl font-semibold text-[var(--navy-900)] tracking-tight md:text-2xl">
                Current Work
              </h2>
              <ul className="mt-3 space-y-1 text-[0.9375rem] leading-[1.7] text-[var(--slate-600)] md:text-base">
                <li>NGN/NTN–PPDR digital twin and scenario evaluation</li>
                <li>Simple visual demo direction with mock data</li>
                <li>Policy simulator direction with mock data</li>
                <li>Current applied telecom-space / PPDR focus</li>
              </ul>
              <Link
                href="/simulator"
                className="mt-2 inline-block text-sm font-medium text-[var(--accent)] hover:text-[var(--navy-900)] hover:underline"
              >
                View simulator
              </Link>
            </section>

            <section id="research-direction" className="scroll-mt-24">
              <h2 className="font-serif text-xl font-semibold text-[var(--navy-900)] tracking-tight md:text-2xl">
                Research Direction
              </h2>
              <ul className="mt-3 space-y-1 text-[0.9375rem] leading-[1.7] text-[var(--slate-600)] md:text-base">
                <li>NTN channel / Doppler / propagation work</li>
                <li>PPDR architecture and policy evaluation</li>
                <li>Future publications / demo modules</li>
                <li>Decision-support direction</li>
              </ul>
              <Link
                href="/simulator"
                className="mt-2 inline-block text-sm font-medium text-[var(--accent)] hover:text-[var(--navy-900)] hover:underline"
              >
                Research direction
              </Link>
            </section>

            <section id="selected-coverage" className="scroll-mt-24">
              <h2 className="font-serif text-xl font-semibold text-[var(--navy-900)] tracking-tight md:text-2xl">
                Selected Coverage & Profiles
              </h2>
              <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[0.9375rem] md:text-base">
                {credibilityItems.map((item) => (
                  <li key={item.id}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[var(--accent)] hover:underline"
                    >
                      {CREDIBILITY_LABELS[item.id] || item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section id="contact" className="scroll-mt-24 pb-6">
              <h2 className="font-serif text-xl font-semibold text-[var(--navy-900)] tracking-tight md:text-2xl">
                Contact
              </h2>
              <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-1 text-[0.9375rem] md:text-base">
                <a href={`mailto:${contact.email}`} className="text-[var(--accent)] hover:underline">
                  {contact.email}
                </a>
                {contact.phone && (
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, "")}`}
                    className="text-[var(--slate-600)] hover:underline"
                  >
                    {contact.phone}
                  </a>
                )}
                {contact.linkedin && (
                  <a
                    href={contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--accent)] hover:underline"
                  >
                    LinkedIn
                  </a>
                )}
              </div>
              <div className="mt-4">
                <p className="text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-[var(--slate-500)]">
                  CVs
                </p>
                <div className="mt-2 flex flex-wrap gap-2.5">
                  {downloads.map((item) => (
                    <a
                      key={item.id}
                      href={item.filePath}
                      download
                      className="rounded-md border border-[var(--border)] bg-white px-2.5 py-1 text-[0.8125rem] font-medium text-[var(--accent)] transition-colors hover:border-[var(--slate-400)] hover:bg-[var(--off-white)]"
                    >
                      {item.title}
                    </a>
                  ))}
                  <Link
                    href="/downloads"
                    className="rounded-md border border-[var(--border)] bg-white px-2.5 py-1 text-[0.8125rem] font-medium text-[var(--slate-600)] transition-colors hover:border-[var(--slate-400)] hover:bg-[var(--off-white)]"
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
