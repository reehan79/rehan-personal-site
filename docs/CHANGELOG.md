# Changelog

## 2025-03-20 — v1.1 Cleanup (No-Automation Build)

### Scope
- Full site consistency review
- Metadata for homepage and deep pages
- Nav anchor scroll offset (scroll-mt-24, headerHeight 96)
- Card spacing and section rhythm (gap-8)
- README: run locally, direct JSON, images later, 4 CV filenames
- MASTER_PLAN: v1.1 no-automation, v1.2 deferred
- STATE: v1.1 release status

### Metadata
- Homepage: title, description, openGraph
- Media, Downloads: openGraph added

### UI
- Section: scroll-mt-24 for anchor offset
- Grids: md:gap-8 for card spacing
- Proof strip: scroll-mt-24

---

## 2025-03-20 — Awards: Curated, Executive Presentation

### Content
- awards.json: group field (recognitions | leadership); refined titles and descriptions

### Groups
- **Recognitions & Credentials**: Cable & Wireless Prize (University of Surrey), Amateur Radio License
- **Leadership & Impact Highlights**: USD 750k for SSTRL, 30+ researchers led, 5 major CubeSat/lunar programs

### UI
- Elegant cards; items without links render as verified profile highlights (no broken/empty states)
- Curated, executive feel; not certificate dump

---

## 2025-03-20 — Homepage: Recruiter-Facing Authority

### Goal
Homepage functions as primary persuasion page; visitor understands profile by scrolling without many clicks.

### Hero
- SSTRL/IST credibility visible early: "Director, SSTRL · Associate Professor, Institute of Space Technology"
- CTA: "Get in touch" (professional)

### About
- Institutional credibility first: SSTRL, IST, 20+ years
- ICUBE-Q, SSS-2A, NTN/PPDR focus in second paragraph

### Proof Strip
- IST · SSTRL badge added for institutional visibility

### Projects
- ICUBE-Q flagship: full-width prominent card with description, role, partners inline
- Other missions: accordion "More missions" with text-first cards (no image placeholders)
- "View details" only where useful

### Simulator
- Strategic framing: "Strategic research and capability development" (not software-demo)
- Inline content; "Technical overview" link for deep dive

### Media
- Featured coverage first (Dawn, Geo, The News)
- Accordion for talks, conference, STEM outreach

### Awards
- Compact text-first cards; no empty state

### Downloads
- "Four role-specific CV versions" emphasized

### Contact
- Professional CTA: "For consulting, collaboration, recruitment, or partnership inquiries"

### UI
- No heavy animation; native details/summary for accordions
- Text-first cards without thumbnails where appropriate
- Weak empty states hidden

---

## 2025-03-20 — Downloads: 4 Role-Specific CVs

### Content
- downloads.json: 4 CVs (Academic, Consulting, Industry, NTN/Satcom) at fixed paths in public/docs/cv/

### UI
- Premium card layout with strong Download PDF button
- Intro sentence: "Role-specific CV versions are available for academic, consulting, industry, and satellite-communications / NTN opportunities."
- Homepage and /downloads page updated; EmptyState removed

### Docs
- README: expected PDF filenames in public/docs/cv/
- STATE.yaml: placeholders updated for 4 CV paths

---

## 2025-03-20 — Seed Content (Direct JSON)

### Content
- profile.json: headline, roles, location, phone, keyFacts, real email/LinkedIn/Google Scholar
- projects.json: 7 projects (icube-q, sss-2a, icube-n, icube-1, ntn-ppdr-simulator, kidsat, icube-csat)
- proof.json: 17 proof items (institutional, media, publications, conference, social, corporate)
- media.json: curated media grouped (Media & Interviews, Talks & Conference, Public STEM)
- awards.json: 5 awards (Cable & Wireless Prize, USD 750k, 30+ researchers, 5 programs, Amateur Radio)
- contact.json: name, email, phone, linkedin, location, cta
- downloads.json: CV only

### Types & Loaders
- ProofItem, Contact types; Profile extensions (headline, roles, location, phone, keyFacts)
- Award.url optional; MediaItem.group, summary
- loadProof(), loadContact()

### Homepage
- Proof Strip: profile.keyFacts or profile.proofStrip
- Evidence section: featured proof items as cards
- Media: grouped by type (media, conference, stem)
- Contact: loadContact() for email, phone, linkedin, location, cta
- Awards: optional issuer, optional url for link-backed items

### Nav
- AnchorNav: Evidence section (proof-items)

---

## 2025-03-20 — Hybrid Single-Page Authority

### Architecture
- Homepage is primary scroll-first experience; all content in one page
- Sticky header with anchor nav (Overview, Projects, Simulator, Media, Awards, Downloads, Contact)
- Section highlighting in nav via scroll position
- Detail pages: /projects/[slug], /simulator, /media, /downloads (secondary deep-dive)

### Homepage Sections (order)
1. Hero
2. About / Executive Summary (id: overview)
3. Proof Strip (credentials badges)
4. Featured Missions and Projects (id: projects)
5. NTN/PPDR Simulator (id: simulator)
6. Media / Talks / Interviews (id: media)
7. Awards / Recognition (id: awards)
8. Downloads (id: downloads)
9. Contact (id: contact)

### Components
- AnchorNav: scroll-based active section highlighting
- Section: id prop, scroll-mt-20 for anchor offset
- Header: sticky, pathname-based (anchor nav on /, detail nav elsewhere)

### Redirects
- /about -> /#overview
- /awards -> /#awards
- /contact -> /#contact
- /gallery -> /#media

### Content
- profile.proofStrip for Proof Strip badges
- scroll-behavior: smooth in CSS

### Footer
- Links to /#overview, /#projects, /#downloads, /#contact

---

## 2025-03-20 — v1.1 Polish (Publish-Ready)

### Visual Refinements
- Design tokens: --muted, --accent-hover, --transition
- Card: hover scale, focus-visible ring, transition
- Section: responsive px-4 sm:px-6, py-16 md:py-20
- PageLayout: responsive padding

### Components
- EmptyState: shared component for media, awards, gallery, downloads
- Card: download prop for PDF links
- Header: mobile hamburger nav with aria-expanded
- Footer: Get in touch CTA, expanded links

### Homepage
- heroBio, tagline in profile; shortened hero text
- Third CTA: View Projects
- Profile placeholder: "RM" initials when no image
- Improved spacing: py-24 md:py-32

### Projects
- Card placeholder: project initials instead of "No image"
- Detail: definition list for partners/tags, Open Graph metadata
- Back link: improved focus and hover

### Simulator
- Improved typography, CTA to Contact
- Metadata: keywords (NTN, PPDR, digital twin)

### Media, Awards, Gallery, Downloads
- Filter placeholder items (title/image)
- EmptyState with professional messaging
- Downloads: download attribute for PDFs, file type badge

### Metadata
- Open Graph on all pages
- Descriptive descriptions

---

## 2025-03-20 — v1.1 Bootstrap Mode

### Content Architecture
- Removed ingest pipeline; content loaded directly from `content/generated/*.json`
- Seeded profile, projects, media, awards, gallery, downloads, home, simulator with known facts
- Extended Project schema: slug, shortDescription, sections, role, partners
- Added GalleryItem type and gallery.json

### Page Structure
- Nav: About, Projects, Simulator, Media, Awards, Gallery, Downloads, Contact
- Removed: /sstrl, /cubesat, /icube-q, /lab (folded into project detail pages)
- Added: /projects (list), /projects/[slug] (detail with generateStaticParams)
- Added: /gallery

### Projects
- ICUBE-Q, SSS-2A, ICUBE-1, ICUBE-N, ICUBE-CSAT, KidSat with seeded content
- Project detail pages with sections, partners, tags

### Graceful Fallbacks
- ImageWithFallback component for 404 images
- Empty states for media, awards, gallery, downloads

### SEO
- app/sitemap.ts: static pages + project slugs
- app/robots.ts: allow all, sitemap reference
- lib/site-config.ts: baseUrl (NEXT_PUBLIC_SITE_URL)

### Docs
- docs/MASTER_PLAN.md: v1.1 scope, v1.2 roadmap
- docs/STATE.yaml, docs/CHANGELOG.md updated
- README.md updated

### Removed
- scripts/ingest.ts
- content:ingest from build
- tsx, xlsx devDependencies
