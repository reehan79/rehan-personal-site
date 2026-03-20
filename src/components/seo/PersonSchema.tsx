/**
 * JSON-LD Person schema for Dr. Rehan Mahmood.
 * Renders a script tag for structured data. Single source of truth for identity metadata.
 */

const SITE_URL = "https://rehan-mahmood.com";

const PERSON_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Dr. Rehan Mahmood",
  url: SITE_URL,
  image: SITE_URL + "/profile/rehan-mahmood-portrait.jpeg",
  jobTitle: ["Associate Professor", "Director, SSTRL"],
  description:
    "Associate Professor, Director of SSTRL, and CubeSat mission specialist working across satellite communications, ICUBE-Q, CubeSat systems, and NGN/NTN–PPDR research.",
  worksFor: [
    { "@type": "Organization", name: "Institute of Space Technology" },
    { "@type": "Organization", name: "Small Satellite Technology and Research Lab (SSTRL)" },
    { "@type": "Organization", name: "Space Systems Pvt. Ltd." },
  ],
  sameAs: [
    "https://www.linkedin.com/in/rehan-mahmood/",
    "https://scholar.google.com/citations?user=A5jqkssAAAAJ&hl=en",
    "https://ncgsa.org.pk/small-satellite-technology-and-research-lab-sstr/",
  ],
  knowsAbout: [
    "Satellite Communications",
    "CubeSats",
    "Lunar Mission Systems",
    "NTN / PPDR",
    "Space Systems Engineering",
    "Engineering Education",
    "Digital Twin Simulation",
  ],
  alumniOf: [
    { "@type": "CollegeOrUniversity", name: "Beihang University" },
    { "@type": "CollegeOrUniversity", name: "University of Surrey" },
    { "@type": "CollegeOrUniversity", name: "UET Taxila" },
  ],
};

export function PersonSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(PERSON_SCHEMA) }}
    />
  );
}
