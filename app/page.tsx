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

const PROOF_GROUP_ORDER: { label: string; ids: string[] }[] = [
  { label: "Profiles / Institutional", ids: ["p2", "p3", "p1", "p17"] },
  { label: "Media / Technical Visibility", ids: ["p4", "p5", "p6", "p18", "p8", "p9", "p10", "p11"] },
];

const OVERVIEW_BULLETS = [
  "Director & Principal Investigator, SSTRL at IST, Islamabad",
  "Associate Professor in satellite and communication engineering",
  "Chief Technology Officer, Space Systems Pvt. Ltd.",
  "20+ years in satellite communications, CubeSat systems, and technical leadership",
  "Principal role in Pakistan's ICUBE-Q lunar CubeSat mission",
  "Leadership across ICUBE-1, SSS-2A, ICUBE-N, ICUBE-CSAT, and STEM-focused space initiatives",
  "Current work in NGN/NTN–PPDR digital twin, resilient communications, and policy-oriented simulation",
];

const CURRENT_WORK_BULLETS = [
  "NGN/NTN–PPDR digital twin and scenario evaluation",
  "Representative operator-facing views for resilient communication workflows",
  "Telecom-space convergence for public protection and disaster relief contexts",
  "Frontend preview layers for simulator interaction using representative mock data",
  "Policy-oriented simulation direction for structured scenario comparison",
  "Ongoing capability-building around mission-oriented technical platforms",
];

const RESEARCH_DIRECTION_BULLETS = [
  "Doppler and propagation-effect analysis in integrated NTN scenarios",
  "KPI-driven and digital-twin-oriented evaluation of resilient communication environments",
  "5G-LENA / ns-3 aligned scenario and architecture workflows",
  "SDR-linked experimentation, including USRP E310-oriented prototyping direction",
  "Deep-space image transmission and coding/decoding research themes",
  "CubeSat subsystem engineering, including OBC, antenna, and magnetorquer work",
  "Future publication, simulator, and mission-training modules",
];

const BULLET_LIST_CLASS =
  "mt-5 space-y-2.5 text-[0.9375rem] leading-[1.75] text-[var(--body-text)] max-w-3xl sm:text-base list-none pl-5 sm:pl-6 [&_li]:flex [&_li]:gap-x-2.5 [&_li]:before:content-['–'] [&_li]:before:shrink-0 [&_li]:before:min-w-[1ch] [&_li]:before:text-[var(--secondary-text)]";

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
          <div className="max-w-4xl space-y-7 md:space-y-10">
            <section id="overview" className="scroll-mt-24 pt-8 first:pt-0 border-t border-[var(--border)] first:border-t-0">
              <h2 className="font-serif text-2xl font-extrabold text-[var(--heading-color)] tracking-tight md:text-[1.75rem] lg:text-3xl border-b border-[var(--border)] pb-2 -tracking-[0.02em]">
                Overview
              </h2>
              <ul className={BULLET_LIST_CLASS}>
                {OVERVIEW_BULLETS.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
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
              <ul className={BULLET_LIST_CLASS}>
                {CURRENT_WORK_BULLETS.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
              <div className="mt-5 pl-3 border-l border-[var(--border)]">
                <h3 className="font-serif text-base font-semibold text-[var(--heading-color)]">
                  Selected Interactive Previews
                </h3>
                <p className="mt-1.5 text-[0.8125rem] leading-[1.7] text-[var(--muted)] max-w-2xl">
                  Frontend interactive previews using representative mock data. Derived from ongoing simulator and platform development work.
                </p>
                <ul className="mt-3 space-y-2">
                  <li>
                    <Link
                      href="/interactive/ngn-ntn"
                      className="font-medium underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)] rounded-sm px-1 py-0.5 -mx-1 hover:bg-[var(--link-color)]/[0.08]"
                    >
                      NGN/NTN–PPDR Preview
                    </Link>
                    <span className="text-[0.8125rem] text-[var(--muted)]"> — Next-generation network and NTN simulator for PPDR communications</span>
                  </li>
                  <li>
                    <Link
                      href="/interactive/policy-sim"
                      className="font-medium underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)] rounded-sm px-1 py-0.5 -mx-1 hover:bg-[var(--link-color)]/[0.08]"
                    >
                      Policy Simulator Preview
                    </Link>
                    <span className="text-[0.8125rem] text-[var(--muted)]"> — Policy and capacity planning for LEO and NTN scenarios</span>
                  </li>
                  <li>
                    <Link
                      href="/interactive/parwaz-orbit"
                      className="font-medium underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)] rounded-sm px-1 py-0.5 -mx-1 hover:bg-[var(--link-color)]/[0.08]"
                    >
                      Parwaz Orbit Preview
                    </Link>
                    <span className="text-[0.8125rem] text-[var(--muted)]"> — Orbit visualization and analysis for satellite missions</span>
                  </li>
                  <li>
                    <Link
                      href="/interactive/parwaz-mvp"
                      className="font-medium underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)] rounded-sm px-1 py-0.5 -mx-1 hover:bg-[var(--link-color)]/[0.08]"
                    >
                      Parwaz MVP Preview
                    </Link>
                    <span className="text-[0.8125rem] text-[var(--muted)]"> — MVP demos for satellite and NTN workflows</span>
                  </li>
                </ul>
              </div>
            </section>

            <section id="research-direction" className="scroll-mt-24 pt-8 border-t border-[var(--border)]">
              <h2 className="font-serif text-2xl font-extrabold text-[var(--heading-color)] tracking-tight md:text-[1.75rem] lg:text-3xl border-b border-[var(--border)] pb-2 -tracking-[0.02em]">
                Research Direction
              </h2>
              <ul className={BULLET_LIST_CLASS}>
                {RESEARCH_DIRECTION_BULLETS.map((bullet, i) => (
                  <li key={i}>{bullet}</li>
                ))}
              </ul>
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
