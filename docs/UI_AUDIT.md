# UI Visual Audit — Dr. Rehan Mahmood Personal Site

**Date:** March 2025  
**Screenshots:** `docs/ui-review/`

## Screenshots Captured

| File | Page | Viewport | Notes |
|------|------|----------|-------|
| `home-desktop-full.png` | Homepage | 1920×1080 full page | Entire homepage scroll |
| `home-desktop-above-fold.png` | Homepage | 1920×1080 viewport | Hero + start of Proof |
| `home-laptop.png` | Homepage | 1024×768 full page | Tablet/laptop layout |
| `home-mobile.png` | Homepage | 375×667 full page | Mobile layout |
| `project-icube-q.png` | Project detail | 1920×1080 full page | ICUBE-Q mission page |
| `simulator.png` | Simulator | 1920×1080 full page | NGN/NTN–PPDR page |
| `downloads.png` | Downloads | 1920×1080 full page | CV downloads page |

---

## Too App-Like

- **Evidence / Proof section:** 10+ uniform cards with "View →" links create a dashboard/repository feel rather than a narrative. See `home-desktop-full.png`, `home-laptop.png`.
- **Downloads section:** Repetitive card grid with "Download PDF" buttons feels like a functional app module. Same pattern on homepage and dedicated downloads page. See `home-desktop-full.png`, `downloads.png`.
- **Simulator section:** Text block with CTA feels like a product feature tile. See `home-desktop-full.png`.
- **Downloads page:** Card-based grid and uniform whitespace read as app UI rather than a document-style page. See `downloads.png`.

---

## Too Scroll-Heavy

- **Homepage:** Exceptionally long. Evidence/Proof (10 cards), Awards (5 cards), Media (3+ cards), Downloads (4 cards) add significant vertical bulk. See `home-desktop-full.png`, `home-laptop.png`.
- **Evidence / Proof:** Primary contributor to scroll length; dense grid of small cards. See `home-desktop-full.png`.
- **Mobile:** Single-column stack makes the page feel extremely long; project cards and media cards stack vertically. See `home-mobile.png`.
- **Project detail (ICUBE-Q):** Excessive vertical padding between header, title, image placeholder, and text sections; page feels long relative to content. See `project-icube-q.png`.
- **Simulator page:** High vertical whitespace between sections despite limited text; feels scroll-heavy for the amount of content. See `simulator.png`.

---

## Weak Hierarchy

- **Evidence / Proof:** All 10 cards styled identically; no focal point; hierarchy within the section is flat. See `home-desktop-full.png`.
- **Project detail:** "Image unavailable" placeholder dominates; text blocks are narrow and centered with wide empty margins. See `project-icube-q.png`.
- **Simulator page:** Very flat; no images, icons, or graphics; headings are clear but the page lacks visual differentiation. See `simulator.png`.
- **Downloads page:** Hierarchy is clear but flat; title → card titles → buttons with little visual emphasis. See `downloads.png`.
- **Above-the-fold:** Transition from Hero to About is rapid; right side of About feels empty and asymmetrical. See `home-desktop-above-fold.png`.

---

## Cluttered Design

- **Evidence / Proof:** High density of small text blocks; feels cluttered despite clean card styling. See `home-desktop-full.png`.
- **Middle of homepage:** Dense succession of card grids (Evidence → Projects → Simulator → Media → Awards) may overwhelm visitors. See `home-laptop.png`.
- **Mobile:** Many similar-looking cards; Professional Work / Projects section overwhelms other content. See `home-mobile.png`.

---

## Sections to Compress

- **Evidence / Proof:** Reduce to 3–4 featured items; move the rest to a dedicated page or collapse behind "View all."
- **Awards:** Condense Recognitions and Leadership into a single, shorter block or 2–3 highlights.
- **Media:** Featured coverage + expandable talks is already partially compressed; consider further reduction.
- **Downloads on homepage:** Show 1–2 CV options with "View all downloads" link; full grid belongs on `/downloads`.
- **Project detail:** Reduce vertical padding between sections; tighten spacing around image placeholder.
- **Simulator page:** Reduce vertical whitespace; consider combining Overview and Applications into one block.

---

## Sections to Move Off Homepage

- **Evidence / Proof:** Move full grid to `/media` or a dedicated `/evidence` page; keep 1–2 highlights on homepage.
- **Awards:** Move full list to `/about` or `/awards`; keep 1–2 top recognitions on homepage.
- **Downloads:** Move full CV grid off homepage; keep a single "Download CV" CTA or link to `/downloads`.
- **Media (expandable talks):** Move "Talks, conference, and STEM outreach" to `/media`; keep 2–3 featured items on homepage.

---

## Executive Microsite Fit

**Assessment:** The site leans toward a comprehensive CV/portfolio rather than a high-level executive microsite.

- **Strengths:** Serif headings, clean typography, professional palette, and hero section support an executive feel.
- **Weaknesses:**
  - Volume of detailed cards (Evidence, Awards, Downloads) reads as exhaustive repository, not curated highlights.
  - Dashboard-like card grids and repetitive CTAs feel more like a functional app than a narrative microsite.
  - Scroll length and density of sections work against a concise, authority-first impression.

**Recommendation:** To feel more like an executive microsite: compress homepage to Hero, About, 1 flagship project, 1–2 proof highlights, and Contact; move Evidence, full Awards, full Downloads, and secondary Media to dedicated pages.

---

## Summary

| Issue | Severity | Primary Location |
|-------|----------|------------------|
| Too app-like | High | Evidence, Downloads |
| Too scroll-heavy | High | Homepage, project detail, simulator |
| Weak hierarchy | Medium | Evidence, project detail, simulator |
| Cluttered | Medium | Evidence, middle homepage, mobile |
| Sections to compress | — | Evidence, Awards, Downloads, Media |
| Sections to move off | — | Evidence, Awards, Downloads, expandable Media |

---

## After Redesign (March 2025)

### Before / After

| Aspect | Before | After |
|--------|--------|-------|
| Homepage sections | 9 (Hero, About, Proof, Evidence, Projects, Simulator, Media, Awards, Downloads, Contact) | 5 (Hero, Proof strip, Selected work, Public credibility, Contact + CVs) |
| Homepage length | Exceptionally long, scroll-heavy | Compact, low-scroll |
| Evidence / Proof | 10+ card grid | Compact linked list (8 curated items) |
| Selected work | Flagship card + expandable grid + 6 more | 3 items only: ICUBE-Q, SSTRL/CubeSat, NGN/NTN–PPDR |
| Downloads on homepage | 4-card grid | Inline CV links + "All downloads" |
| Contact | Full Section with large CTA | Compact block: email, phone, LinkedIn, CV links |
| Detail pages | Large padding, giant image placeholder | Tighter padding, image omitted on failure |
| Downloads page | 2×2 Card grid | Single-column list with Download links |
| Simulator page | Multiple sections, bordered CTA box | Merged content, inline "get in touch" link |

### What Was Removed

- Full About section (2 paragraphs)
- Large Evidence / Proof card grid (10+ items)
- Standalone Simulator section
- Media / Talks / Interviews section (card grid + expandable)
- Awards / Recognition section (Recognitions + Leadership grids)
- Large Downloads card section on homepage
- Large Contact Section with prominent CTA buttons
- Giant project image placeholder when image unavailable
- Card components from homepage and downloads page

### What Was Compressed

- Hero: tighter spacing (`py-12 md:py-16`), smaller monogram (`h-16 w-16`), 3 buttons
- Proof strip: reduced padding (`py-5`), smaller pills
- Selected work: 3 items as text list, no cards
- Public credibility: 8 links in two-column grid, no cards
- Contact + CVs: inline links, no large buttons
- Section padding: `py-16 md:py-20` → `py-8 md:py-10`
- PageLayout hero: `py-16 md:py-20` → `py-10 md:py-12`
- Simulator: merged Overview + Applications into one paragraph
- Downloads page: Card grid → compact list

### What Still Needs Refinement

- Proof strip: consider adding "ICUBE-Q Lunar Mission", "Satellite Communications", "NTN / PPDR" from headline if profile.keyFacts is minimal
- Public credibility: verify all 8 links resolve; consider fallback to profile.social if proof item missing
- Mobile: confirm proof strip and credibility grid wrap cleanly on narrow viewports
- Projects list page (`/projects`): still uses Card grid; could be tightened for consistency

---

## Layout Refinement (Pass 2 — March 2025)

### Before / After

| Aspect | Before (Pass 1) | After (Pass 2) |
|--------|-----------------|----------------|
| Desktop width | max-w-6xl | max-w-7xl (homepage, header, footer) |
| Hero right column | Small monogram (RM) or portrait | Compact professional info panel (Director, IST, location, headline, LinkedIn/Scholar/CVs) |
| Homepage sections | 5 | 6 (added Current Work & Research Direction) |
| Public credibility | Two-column grid | Renamed to "Selected Coverage & Profiles"; same layout |
| Selected work | Equal-weight list | Flagship (ICUBE-Q) prominent; secondary items smaller |
| Contact CVs | Text links | Compact pill buttons |
| Section padding | py-8 md:py-10 | py-6 md:py-8 |
| PageLayout | py-10 md:py-12 | py-8 md:py-10 |
| Deep page content | max-w-2xl | max-w-4xl / max-w-5xl |
| Footer | Overview, Projects, Downloads | Work, Coverage, Contact |

### What Was Merged

- Hero: slim credentials line (first 3 proofStrip items) added below buttons
- About: already in heroBio; no standalone block

### What Was Removed

- Monogram placeholder when no profile image; replaced with info panel

### What Was Tightened

- All section py: py-8 → py-6, py-5 → py-4 (proof strip)
- PageLayout: py-10 md:py-12 → py-8 md:py-10
- Section: py-8 md:py-10 → py-6 md:py-8; mb-6 md:mb-8 → mb-4 md:mb-6
- Downloads list: space-y-4 → space-y-3
- Simulator: mt-4 → mt-3 for get-in-touch link

### What Still Needs Content Later

- Current Work & Research Direction: static bullets; consider moving to JSON or CMS when content evolves
- Research direction link: currently points to /simulator; dedicated route may be added later

---

## Layout Refinement (Pass 3 — March 2025)

### Before / After

| Aspect | Before (Pass 2) | After (Pass 3) |
|--------|-----------------|----------------|
| Desktop layout | Single-column, max-w-7xl | Two-column: sticky left rail (340–380px) + scrollable right content |
| Mobile layout | Single-column stack | Single-column collapse; identity block at top |
| Left column | N/A | IdentityRail: name, title, summary, portrait/monogram, key facts, quick links, CV links, proof strip, section nav |
| Right column | All content | Overview, Selected Work, Current Work, Research Direction, Selected Coverage, Contact |
| Selected work | Flagship + 2 secondary (same weight) | Flagship (ICUBE-Q) text-xl; secondary items text-sm |
| Current Work / Research Direction | Combined section | Split into separate sections with exact titles |
| Section nav | Proof, Work, Direction, Coverage, Contact | Overview, Selected Work, Current Work, Research Direction, Coverage, Contact |
| Typography | text-2xl/3xl name, text-base/lg headings | text-3xl/4xl name, text-lg/xl section headings |
| Section padding | py-6 md:py-8 | py-4 md:py-5 (Section), py-6 md:py-8 (PageLayout) |
| Proof strip badges | 5 from profile | 20+ Years, Director SSTRL, ICUBE-Q, Satellite Communications, NTN / PPDR |

### Files Changed

- `app/page.tsx` — Two-column layout, IdentityRail, new section structure
- `components/layout/IdentityRail.tsx` — **New** — Left rail component
- `components/layout/AnchorNav.tsx` — Updated section IDs and labels
- `components/layout/Footer.tsx` — Updated anchor links
- `components/ui/PageLayout.tsx` — Reduced padding
- `components/ui/Section.tsx` — Reduced padding
- `app/simulator/page.tsx` — Tighter spacing
- `content/generated/profile.json` — Updated proofStrip/keyFacts
- `docs/ui-review/*.png` — Regenerated screenshots

### Typography Changes

- Page title / name: `text-2xl md:text-3xl` → `text-3xl md:text-4xl`
- Positioning line: `text-sm` → `text-base md:text-lg font-medium`
- Section headings: `text-base md:text-lg` → `text-lg md:text-xl font-serif font-semibold`
- Flagship project (ICUBE-Q): `text-xl font-semibold`
- Metadata / minor text: `text-xs` or `text-sm` with slate-500/600

### What Was Compressed

- Section padding (py, mb) across PageLayout, Section
- Vertical gaps between homepage sections
- Simulator get-in-touch link margin
- Right column mobile padding (py-6 → py-4)

### What Still Needs Content Later

- Overview: may need dedicated short paragraph if heroBio is too brief
- Current Work & Research Direction: static bullets; consider JSON/CMS when content evolves
- Portrait: monogram placeholder when no image; add real photo later

### Recommended Commit Message

```
refactor(layout): two-column executive homepage with sticky identity rail

- Desktop: sticky left rail (340-380px) + scrollable right content
- Mobile: single-column collapse
- Left rail: name, title, summary, portrait/monogram, key facts, quick links, CV links, proof strip, section nav
- Right: Overview, Selected Work (flagship + 2 secondary), Current Work, Research Direction, Selected Coverage, Contact
- Stronger typography hierarchy; reduced whitespace
- Split Current Work and Research Direction; text-led coverage list
- Tighten deep pages (project, simulator, PageLayout, Section)
- Regenerate screenshots; update UI_AUDIT.md
```

---

## Visual Polish (Pass 4 — March 2025)

### Improvements

| Area | Change |
|------|--------|
| **Typography hierarchy** | Name: `text-[1.75rem] md:text-[2rem] lg:text-[2.25rem]`; section headings: `text-xl md:text-2xl`; body: `text-[0.9375rem] md:text-base`; metadata: `text-[0.6875rem]` uppercase |
| **Line lengths** | Right column `max-w-4xl` → `max-w-3xl` for denser reading width |
| **Spacing rhythm** | Section spacing `space-y-8 md:space-y-12`; heading-to-content `mt-3`; column gap `lg:gap-16` |
| **Left rail polish** | Subtle right border (`lg:border-r`), `lg:pr-8 xl:pr-10`; portrait/monogram `ring-1 ring-[var(--border)]`; proof pills `border border-[var(--border)] bg-white`; section nav vertical on desktop |
| **Right column** | Body `leading-[1.7]`; section headings `tracking-tight`; links `hover:text-[var(--navy-900)]` |
| **CV buttons** | Compact `px-2.5 py-1 text-[0.8125rem]`; hover `border-[var(--slate-400)] bg-[var(--off-white)]`; no underline |
| **Page wrapper** | `px-5 sm:px-6 lg:px-10`; `py-6 lg:py-10` for right column |
| **Mobile** | Identity block `pb-4`; nav divider `border-t` on mobile; body 15px base for readability |

### Files Changed

- `components/layout/IdentityRail.tsx` — Typography scale, spacing, sticky border, proof strip, section nav layout
- `app/page.tsx` — Typography scale, spacing, line lengths, CV button polish
- `docs/ui-review/*.png` — Regenerated screenshots

### Summary

- Clearer typography scale (name > headings > body > metadata)
- Left rail more scannable with refined spacing and subtle border
- Right column feels like a high-value reading surface with tighter max-width and improved line height
- CV buttons compact and elegant; proof strip pills with subtle definition
- Reduced visual flatness via tracking-tight, ring on portrait, hover states
