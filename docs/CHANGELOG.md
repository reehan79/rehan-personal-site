# Changelog

## 2026-03-20 — Compact flagship blurbs (scannability polish)

- **`projects.json`**: Shorter `shortDescription` for ICUBE-Q, NGN/NTN, SSS-2A, ICUBE-1, ICUBE-N (card/home scan); full `description` + first section unchanged on project detail.
- **`app/page.tsx`**: Tighter SSTRL body copy; `max-w-2xl` on Selected Work body paragraphs (ICUBE-Q, SSTRL, NGN).

---

## 2026-03-20 — Canonical content pass (Part A–H)

- **Homepage** (`app/page.tsx`): Overview, Current Work, and Research Direction bullets set to supplied canonical text; Selected Work: ICUBE-Q support line; SSTRL block title **SSTRL and CubeSat Programs**, support line, primary paragraph; NGN/NTN support line; Interactive Previews intro line.
- **`content/generated/projects.json`**: Part B `shortDescription` for ICUBE-Q and NGN/NTN; Part C `description` + `sections[0].content` for all five flagship entries (ICUBE-Q, SSS-2A, ICUBE-1, ICUBE-N, NGN/NTN–PPDR); SSS-2A/ICUBE-1/ICUBE-N use Part C for `shortDescription` as specified.
- **`profile.json`**, **`home.json`**, **`rehan_master_profile.md`**, **`rehan_research_direction.md`**: Aligned with canonical Overview / Current Work / Research Direction / project facts.
- **Docs**: `docs/UI_AUDIT.md`, `docs/STATE.yaml`, `docs/CHANGELOG.md`; `docs/ui-review/home-*.png` regenerated.

---

## 2025-03-21 — Final copy polish (clarity & flagship emphasis)

- Tightened Overview / Current Work / Research Direction bullets; clearer ICUBE-Q subtitle; SSTRL paragraph reframed (first CubeSat → today’s missions + current 3U/training kit)
- `projects.json`: shorter flagship blurbs (ICUBE-Q, SSS-2A, ICUBE-1, ICUBE-N, NGN/NTN); removed vague “visibility” phrasing
- `profile.json` bio/heroBio aligned with same wording

---

## 2025-03-20 — Content clarity and elegance pass

### Scope
- Improve first-time understanding for recruiters and non-specialists without changing layout architecture
- Bullet-led homepage: Overview, Selected Work, Current Work, Research Direction
- Align projects.json, profile.json, and source-of-truth markdown

### Changes
- Overview: full SSTRL name; ICUBE-Q as one of three PIs + Chang'e-6; indigenous 3U CubeSat + training kit + private partners; sharpened mission list
- Selected Work: ICUBE-Q subtitle line; SSTRL block as lab-building + current 3U/training-kit direction; copy from updated projects.json
- Current Work: present-tense indigenous work, representative previews, policy direction
- Research Direction: expanded acronyms where helpful (NTN, SDR), active-lab tone
- projects.json: ICUBE-Q (APSCO selection, payload on Chang'e-6); SSS-2A (SSS program, ADCS/power/comms, SJTU); ICUBE-1 (first CubeSat, 21 Nov 2013); ICUBE-N (indigenous emphasis); NGN/NTN simulator as active program + site preview note
- profile.json / rehan_master_profile.md / rehan_research_direction.md: synced
- Part E (IAF/IAC 2025): not added—no verifiable source in repo

### Files Changed
- app/page.tsx, content/generated/projects.json, content/generated/profile.json
- content/source-of-truth/rehan_master_profile.md, rehan_research_direction.md
- docs/UI_AUDIT.md, docs/STATE.yaml, docs/CHANGELOG.md; docs/ui-review/home-*.png

---


## 2025-03-20 — Focused SEO enhancement (OG image, JSON-LD Person)

### Scope
- Clean Open Graph / Twitter share image
- Polished JSON-LD Person structured data
- No layout or architecture changes

### OG Image
- Static image: public/og/rehan-mahmood-og.jpg (1200x630)
- Branded: name, title line, subtitle; premium aerospace tone
- Wired in app/layout.tsx openGraph.images and twitter.images
- Replaces previous public/opengraph.png

### JSON-LD Person Schema
- Reusable component: src/components/seo/PersonSchema.tsx
- Replaces inline schema in layout
- jobTitle: Associate Professor, Director SSTRL
- worksFor: Institute of Space Technology, SSTRL, Space Systems Pvt. Ltd.
- sameAs: LinkedIn, Google Scholar, SSTRL/NCGSA page
- knowsAbout: Satellite Communications, CubeSats, Lunar Mission Systems, NTN/PPDR, etc.
- alumniOf: Beihang University, University of Surrey, UET Taxila

### Files Changed
- public/og/rehan-mahmood-og.jpg (new)
- app/layout.tsx: OG path, PersonSchema component
- src/components/seo/PersonSchema.tsx (new)
- docs/STATE.yaml, docs/CHANGELOG.md

---

