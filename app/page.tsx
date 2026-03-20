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

  const credentialsLine = proofStrip.slice(0, 3).join(" · ");
  const location = profile.location || contact.location || "Islamabad, Pakistan";

  return (
    <>
      <section id="hero" className="scroll-mt-24 border-b border-[var(--border)] bg-[var(--off-white)]">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 md:py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
            <div className="min-w-0 flex-1 max-w-2xl">
              <h1 className="font-serif text-2xl font-semibold text-[var(--navy-900)] md:text-3xl">
                {profile.name}
              </h1>
              <p className="mt-1.5 text-sm font-medium text-[var(--slate-700)]">
                Director, SSTRL · Associate Professor, IST
              </p>
              <p className="mt-3 text-sm leading-[1.65] text-[var(--slate-600)]">
                {profile.heroBio || profile.bio.slice(0, 180) + (profile.bio.length > 180 ? "…" : "")}
              </p>
              <div className="mt-4 flex flex-wrap gap-2 sm:gap-3">
                <Link
                  href="#selected-work"
                  className="text-sm font-medium text-[var(--slate-700)] hover:text-[var(--navy-900)]"
                >
                  Selected work
                </Link>
                <span className="text-[var(--slate-400)]">·</span>
                <Link
                  href="#contact"
                  className="text-sm font-medium text-[var(--slate-700)] hover:text-[var(--navy-900)]"
                >
                  Contact
                </Link>
                <span className="text-[var(--slate-400)]">·</span>
                <Link
                  href="#contact"
                  className="text-sm font-medium text-[var(--navy-900)] hover:underline"
                >
                  CVs
                </Link>
              </div>
              {credentialsLine && (
                <p className="mt-3 text-xs text-[var(--slate-500)]">{credentialsLine}</p>
              )}
            </div>
            <div className="shrink-0 md:w-56">
              {profile.image ? (
                <div className="relative h-24 w-24 overflow-hidden rounded-md bg-[var(--border)] md:h-28 md:w-28">
                  <Image
                    src={profile.image}
                    alt={profile.name}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              ) : (
                <div className="p-4 text-sm">
                  <p className="font-medium text-[var(--navy-900)]">Director, SSTRL</p>
                  <p className="font-medium text-[var(--navy-900)]">Associate Professor, IST</p>
                  <p className="mt-1.5 text-[var(--slate-600)]">{location}</p>
                  <p className="mt-1.5 text-[var(--slate-600)]">
                    {profile.headline || "Satellite Communications | CubeSat Programs | NGN/NTN–PPDR"}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {profile.social?.googleScholar && (
                      <a
                        href={profile.social.googleScholar}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-[var(--accent)] hover:underline"
                      >
                        Google Scholar
                      </a>
                    )}
                    {(contact.linkedin || profile.social?.linkedin) && (
                      <a
                        href={contact.linkedin || profile.social?.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-medium text-[var(--accent)] hover:underline"
                      >
                        LinkedIn
                      </a>
                    )}
                    <Link href="#contact" className="text-xs font-medium text-[var(--accent)] hover:underline">
                      CVs
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {proofStrip.length > 0 && (
        <section id="proof" className="scroll-mt-24 border-b border-[var(--border)] bg-white py-3">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="flex flex-wrap justify-center gap-1.5 sm:gap-2">
              {proofStrip.map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-[var(--off-white)] px-3 py-1.5 text-xs font-medium text-[var(--slate-600)]"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </section>
      )}

      <section id="selected-work" className="scroll-mt-24 border-b border-[var(--border)] py-4 sm:py-5 md:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-serif text-base font-medium text-[var(--navy-900)] md:text-lg">
            Selected work
          </h2>
          <ul className="mt-3 space-y-3">
            {icubeQ && (
              <li>
                <p className="text-base leading-[1.65] text-[var(--slate-700)]">
                  <span className="font-semibold text-[var(--navy-900)]">{icubeQ.title}</span>
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
              <p className="text-sm leading-[1.65] text-[var(--slate-600)]">
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
                <p className="text-sm leading-[1.65] text-[var(--slate-600)]">
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

      <section id="current-work" className="scroll-mt-24 border-b border-[var(--border)] py-4 sm:py-5 md:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-serif text-base font-medium text-[var(--navy-900)] md:text-lg">
            Current Work & Research Direction
          </h2>
          <div className="mt-3 grid gap-6 sm:grid-cols-2 max-w-3xl">
            <div>
              <h3 className="text-xs font-medium uppercase tracking-wide text-[var(--slate-500)]">
                Current Work
              </h3>
              <ul className="mt-1.5 space-y-1 text-sm leading-[1.65] text-[var(--slate-600)]">
                <li>NGN/NTN–PPDR digital twin and scenario evaluation</li>
                <li>Visual mock demo direction for telecom-space / PPDR workflows</li>
                <li>Policy simulator direction with mock data</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-medium uppercase tracking-wide text-[var(--slate-500)]">
                Research Direction
              </h3>
              <ul className="mt-1.5 space-y-1 text-sm leading-[1.65] text-[var(--slate-600)]">
                <li>NTN channel / Doppler / propagation-related work</li>
                <li>PPDR architecture and policy evaluation</li>
                <li>Future publication and demo roadmap</li>
                <li>Decision-support / emergency communications direction</li>
              </ul>
            </div>
          </div>
          <div className="mt-3 flex flex-wrap gap-3">
            <Link
              href="/simulator"
              className="text-sm font-medium text-[var(--accent)] hover:underline"
            >
              View simulator
            </Link>
            <Link
              href="/simulator"
              className="text-sm font-medium text-[var(--accent)] hover:underline"
            >
              Research direction
            </Link>
          </div>
        </div>
      </section>

      <section id="selected-coverage" className="scroll-mt-24 border-b border-[var(--border)] py-4 sm:py-5 md:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-serif text-base font-medium text-[var(--navy-900)] md:text-lg">
            Selected Coverage & Profiles
          </h2>
          <div className="mt-3 grid gap-3 sm:grid-cols-2">
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

      <section id="contact" className="scroll-mt-24 border-b border-[var(--border)] py-4 sm:py-5 md:py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="font-serif text-base font-medium text-[var(--navy-900)] md:text-lg">
            Contact
          </h2>
          <div className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm">
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
          <div className="mt-3">
            <p className="text-xs font-medium uppercase tracking-wide text-[var(--slate-500)]">
              CVs
            </p>
            <div className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-sm">
              {downloads.map((item) => (
                <a
                  key={item.id}
                  href={item.filePath}
                  download
                  className="font-medium text-[var(--accent)] hover:underline"
                >
                  {item.title}
                </a>
              ))}
              <Link
                href="/downloads"
                className="text-[var(--slate-500)] hover:underline"
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
