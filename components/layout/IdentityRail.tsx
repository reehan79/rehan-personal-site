import Link from "next/link";
import Image from "next/image";
import type { Profile, Contact, Download } from "@/lib/content/types";
import { AuthorityImageCarousel } from "@/components/ui/AuthorityImageCarousel";

const PORTRAIT_SRC = "/profile/rehan-mahmood-portrait.jpeg";

const DEFAULT_PROOF_STRIP = ["20+ years", "Director, SSTRL", "ICUBE-Q lunar mission", "Satellite Communications", "NTN / PPDR"];

const SECTION_NAV = [
  { id: "overview", label: "Overview" },
  { id: "selected-work", label: "Selected Work" },
  { id: "current-work", label: "Current Work" },
  { id: "research-direction", label: "Research Direction" },
  { id: "selected-coverage", label: "Selected Coverage" },
  { id: "contact", label: "Contact" },
] as const;

const DEFAULT_KEY_FACTS = [
  "Associate Professor, Institute of Space Technology",
  "Director & PI, Small Satellite Technology and Research Lab (SSTRL)",
  "CTO, Space Systems Pvt. Ltd.",
];

interface IdentityRailProps {
  profile: Profile;
  contact: Contact;
  downloads: Download[];
  authorityImages: { id: string; image: string; caption?: string; label?: string }[];
}

export function IdentityRail({ profile, contact, downloads, authorityImages }: IdentityRailProps) {
  const linkedinUrl = contact.linkedin || profile.social?.linkedin;
  const proofStrip = profile.proofStrip?.length ? profile.proofStrip : DEFAULT_PROOF_STRIP;
  const keyFacts = profile.keyFacts?.length ? profile.keyFacts : DEFAULT_KEY_FACTS;

  return (
    <aside
      className="lg:sticky lg:top-24 lg:self-start shrink-0 w-full lg:w-[360px] xl:w-[380px] lg:border-r lg:border-[var(--border)] lg:pr-8 xl:pr-10"
      aria-label="Profile and navigation"
    >
      <div className="border-b border-[var(--border)] bg-[var(--off-white)] pb-4 lg:border-0 lg:bg-transparent lg:pb-0">
        {/* Identity block: name, title, summary, portrait — tightly grouped */}
        <div className="space-y-3.5 lg:space-y-4">
          <div>
            <h1 className="font-serif text-[1.75rem] font-semibold text-[var(--heading-color)] md:text-[2rem] lg:text-[2.25rem] tracking-tight">
              {profile.name}
            </h1>
            <p className="mt-1 text-sm md:text-base font-medium text-[var(--slate-700)] tracking-tight">
              {profile.headline || "Director, SSTRL · Associate Professor, IST"}
            </p>
            <p className="mt-2 text-sm leading-[1.85] text-[var(--body-text)]">
              {(() => {
                const text = profile.heroBio || profile.bio;
                const first = text.split(/\n\n/)[0];
                return first.length > 200 ? first.slice(0, 200) + "…" : first;
              })()}
            </p>
          </div>
          <div className="w-full max-w-[130px] sm:max-w-[180px] lg:max-w-[200px] shrink-0 overflow-hidden rounded-lg bg-[var(--off-white)] shadow-sm ring-1 ring-[var(--border)]">
            <Image
              src={PORTRAIT_SRC}
              alt="Portrait of Dr. Rehan Mahmood"
              width={200}
              height={250}
              sizes="(max-width: 640px) 130px, (max-width: 1024px) 180px, 200px"
              className="aspect-[4/5] w-full object-cover object-[50%_22%]"
              priority
            />
          </div>
        </div>

        <div className="mt-4 lg:mt-5 space-y-4 lg:space-y-5 border-t border-[var(--border)] pt-4 lg:pt-5">
        {authorityImages.length > 0 && (
          <AuthorityImageCarousel images={authorityImages} />
        )}

        <ul className="space-y-2 text-[0.8125rem] text-[var(--body-text)]">
          {keyFacts.map((fact) => (
            <li key={fact} className="pl-2 border-l border-[var(--border)]">
              {fact}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-x-3 gap-y-1 text-[0.8125rem]">
          <a
            href={`mailto:${contact.email}`}
            className="font-medium underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)]"
          >
            Email
          </a>
          {linkedinUrl && (
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)]"
            >
              LinkedIn
            </a>
          )}
          {profile.social?.googleScholar && (
            <a
              href={profile.social.googleScholar}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)]"
            >
              Google Scholar
            </a>
          )}
        </div>

        <div>
          <p className="text-[0.6875rem] font-medium uppercase tracking-[0.08em] text-[var(--muted)]">
            CVs
          </p>
          <div className="mt-1.5 flex flex-wrap gap-2">
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
              className="text-[0.6875rem] font-medium underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)] self-center"
            >
              All
            </Link>
          </div>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {proofStrip.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-[var(--border)] bg-white px-3 py-1.5 text-[0.8125rem] font-medium text-[var(--slate-700)]"
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
                  href={`/#${id}`}
                  className="font-medium underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)]"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        </div>
      </div>
    </aside>
  );
}
