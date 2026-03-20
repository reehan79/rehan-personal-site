import Link from "next/link";
import Image from "next/image";
import type { Profile, Contact, Download } from "@/lib/content/types";

const PROOF_STRIP = [
  "20+ Years",
  "Director, SSTRL",
  "ICUBE-Q",
  "Satellite Communications",
  "NTN / PPDR",
];

const SECTION_NAV = [
  { id: "overview", label: "Overview" },
  { id: "selected-work", label: "Selected Work" },
  { id: "current-work", label: "Current Work" },
  { id: "research-direction", label: "Research Direction" },
  { id: "selected-coverage", label: "Selected Coverage" },
  { id: "contact", label: "Contact" },
] as const;

const KEY_FACTS = [
  "Director, SSTRL",
  "Associate Professor, IST",
  "Islamabad, Pakistan",
  "One of three PIs, ICUBE-Q",
  "Technical lead, SSS-2A (Pakistan side)",
];

interface IdentityRailProps {
  profile: Profile;
  contact: Contact;
  downloads: Download[];
}

export function IdentityRail({ profile, contact, downloads }: IdentityRailProps) {
  const linkedinUrl = contact.linkedin || profile.social?.linkedin;

  return (
    <aside
      className="lg:sticky lg:top-24 lg:self-start shrink-0 w-full lg:w-[360px] xl:w-[380px] lg:border-r lg:border-[var(--border)] lg:pr-8 xl:pr-10"
      aria-label="Profile and navigation"
    >
      <div className="border-b border-[var(--border)] bg-[var(--off-white)] pb-4 lg:border-0 lg:bg-transparent lg:pb-0 space-y-5 lg:space-y-6">
        <div>
          <h1 className="font-serif text-[1.75rem] font-semibold text-[var(--navy-900)] md:text-[2rem] lg:text-[2.25rem] tracking-tight">
            {profile.name}
          </h1>
          <p className="mt-1 text-sm md:text-base font-medium text-[var(--slate-700)] tracking-tight">
            Director, SSTRL · Associate Professor, IST
          </p>
          <p className="mt-2 text-sm leading-[1.65] text-[var(--slate-600)]">
            {profile.heroBio || profile.bio.slice(0, 180) + (profile.bio.length > 180 ? "…" : "")}
          </p>
        </div>

        <div>
          {profile.image ? (
            <div className="relative h-20 w-20 overflow-hidden rounded-md bg-[var(--border)] ring-1 ring-[var(--border)] md:h-24 md:w-24">
              <Image
                src={profile.image}
                alt={profile.name}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ) : (
            <div
              className="flex h-20 w-20 items-center justify-center rounded-md bg-[var(--border)] font-serif text-2xl font-semibold text-[var(--navy-900)] ring-1 ring-[var(--border)] md:h-24 md:w-24"
              aria-hidden
            >
              RM
            </div>
          )}
        </div>

        <ul className="space-y-1 text-[0.8125rem] text-[var(--slate-600)]">
          {KEY_FACTS.map((fact) => (
            <li key={fact}>{fact}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[0.8125rem]">
          <a href={`mailto:${contact.email}`} className="font-medium text-[var(--accent)] hover:underline">
            Email
          </a>
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--accent)] hover:underline"
            >
              LinkedIn
            </a>
          )}
          {profile.social?.googleScholar && (
            <a
              href={profile.social.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-[var(--accent)] hover:underline"
            >
              Google Scholar
            </a>
          )}
        </div>

        <div>
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-[var(--slate-500)]">
            CVs
          </p>
          <div className="mt-1.5 flex flex-wrap gap-x-3 gap-y-1 text-sm">
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
            <Link href="/downloads" className="text-[var(--slate-500)] hover:underline">
              All
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {PROOF_STRIP.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-[var(--border)] bg-white px-2.5 py-1 text-xs font-medium text-[var(--slate-600)]"
            >
              {badge}
            </span>
          ))}
        </div>

        <nav className="border-t border-[var(--border)] pt-4 lg:border-t-0 lg:pt-0" aria-label="Section navigation">
          <ul className="flex flex-wrap gap-x-3 gap-y-1 lg:flex-col lg:gap-1 text-[0.8125rem]">
            {SECTION_NAV.map(({ id, label }) => (
              <li key={id}>
                <Link
                  href={`#${id}`}
                  className="font-medium text-[var(--slate-600)] hover:text-[var(--navy-900)] hover:underline"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
}
