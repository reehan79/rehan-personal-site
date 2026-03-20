import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  loadProfile,
  loadProjects,
  loadDownloads,
  loadProof,
  loadContact,
} from "@/lib/content/load";

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
  const proofStrip = profile.keyFacts || profile.proofStrip || [];

  const icubeQ = projects.find((p) => p.slug === "icube-q");
  const ntnSimulator = projects.find((p) => p.slug === "ntn-ppdr-simulator");

  const proofById = Object.fromEntries(proofItems.map((p) => [p.id, p]));
  const credibilityItems = PUBLIC_CREDIBILITY_ORDER.map((id) => proofById[id]).filter(Boolean);

  return (
    <>
      <section id="hero" className="scroll-mt-24 border-b border-[var(--border)] bg-[var(--off-white)]">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 md:py-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-start md:gap-12">
            <div className="flex-1 min-w-0">
              <h1 className="font-serif text-2xl font-semibold text-[var(--navy-900)] md:text-3xl lg:text-4xl">
                {profile.name}
              </h1>
              <p className="mt-2 text-sm font-medium text-[var(--slate-700)]">
                Director, SSTRL · Associate Professor, IST
              </p>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[var(--slate-600)]">
                {profile.heroBio || profile.bio.slice(0, 180) + (profile.bio.length > 180 ? "…" : "")}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="#selected-work"
                  className="inline-flex items-center rounded border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--navy-900)] transition-colors hover:bg-[var(--border)]"
                >
                  Selected work
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center rounded border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--navy-900)] transition-colors hover:bg-[var(--border)]"
                >
                  Contact
                </Link>
                <Link
                  href="#contact"
                  className="inline-flex items-center rounded bg-[var(--navy-900)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90"
                >
                  CVs
                </Link>
              </div>
            </div>
            {profile.image ? (
              <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-[var(--border)] md:h-32 md:w-32">
                <Image
                  src={profile.image}
                  alt={profile.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            ) : (
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-md bg-[var(--border)] text-lg font-serif font-semibold text-[var(--muted)] md:h-20 md:w-20">
                RM
              </div>
            )}
          </div>
        </div>
      </section>

      {proofStrip.length > 0 && (
        <section id="proof" className="scroll-mt-24 border-b border-[var(--border)] bg-white py-5">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="flex flex-wrap justify-center gap-2">
              {proofStrip.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full border border-[var(--border)] bg-[var(--off-white)] px-3 py-1.5 text-xs font-medium text-[var(--slate-700)]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="selected-work" className="scroll-mt-24 border-b border-[var(--border)] py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-lg font-semibold text-[var(--navy-900)] md:text-xl">
            Selected work
          </h2>
          <ul className="mt-6 space-y-6">
            {icubeQ && (
              <li>
                <p className="text-sm text-[var(--slate-700)]">
                  <span className="font-medium text-[var(--navy-900)]">{icubeQ.title}</span>
                  {" — "}
                  {icubeQ.shortDescription}
                </p>
                <Link
                  href={`/projects/${icubeQ.slug}`}
                  className="mt-1 inline-block text-sm font-medium text-[var(--accent)] hover:underline"
                >
                  View details
                </Link>
              </li>
            )}
            <li>
              <p className="text-sm text-[var(--slate-700)]">
                <span className="font-medium text-[var(--navy-900)]">SSTRL / CubeSat Programs</span>
                {" — "}
                National CubeSat initiative. ICUBE-1, ICUBE-N, SSS-2A.
              </p>
              <Link
                href="/projects"
                className="mt-1 inline-block text-sm font-medium text-[var(--accent)] hover:underline"
              >
                View details
              </Link>
            </li>
            {ntnSimulator && (
              <li>
                <p className="text-sm text-[var(--slate-700)]">
                  <span className="font-medium text-[var(--navy-900)]">
                    NGN/NTN–PPDR Simulator
                  </span>
                  {" — "}
                  {ntnSimulator.shortDescription}
                </p>
                <Link
                  href="/simulator"
                  className="mt-1 inline-block text-sm font-medium text-[var(--accent)] hover:underline"
                >
                  View details
                </Link>
              </li>
            )}
          </ul>
        </div>
      </section>

      <section id="public-credibility" className="scroll-mt-24 border-b border-[var(--border)] py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-lg font-semibold text-[var(--navy-900)] md:text-xl">
            Public credibility
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            {credibilityItems.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[var(--accent)] hover:underline"
              >
                {CREDIBILITY_LABELS[item.id] || item.title}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="scroll-mt-24 border-b border-[var(--border)] py-8">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-lg font-semibold text-[var(--navy-900)] md:text-xl">
            Contact
          </h2>
          <div className="mt-4 space-y-3">
            <a
              href={`mailto:${contact.email}`}
              className="block text-sm text-[var(--accent)] hover:underline"
            >
              {contact.email}
            </a>
            {contact.phone && (
              <a
                href={`tel:${contact.phone.replace(/\s/g, "")}`}
                className="block text-sm text-[var(--slate-600)] hover:underline"
              >
                {contact.phone}
              </a>
            )}
            {contact.linkedin && (
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm text-[var(--accent)] hover:underline"
              >
                LinkedIn
              </a>
            )}
          </div>
          <div className="mt-6">
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--slate-500)]">
              CVs
            </p>
            <div className="mt-2 flex flex-wrap gap-3">
              {downloads.map((item) => (
                <a
                  key={item.id}
                  href={item.filePath}
                  download
                  className="text-sm font-medium text-[var(--accent)] hover:underline"
                >
                  {item.title}
                </a>
              ))}
              <Link
                href="/downloads"
                className="text-sm text-[var(--slate-500)] hover:underline"
              >
                All downloads
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
