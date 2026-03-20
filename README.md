# Dr. Rehan Mahmood — Personal Website

Professional personal website for Dr. Rehan Mahmood. Focus: Satellite Communications, CubeSat Programs, Space Systems Leadership, NTN/PPDR Simulation, SSTRL, consulting, and Gulf-facing visibility.

## Tech Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Static export (`output: 'export'`)

## Run Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Output: `out/` (static HTML, CSS, JS). Deploy to any static host.

## Content

The site uses **direct structured JSON** only. No CSV, XLSX, import scripts, or automation.

Edit `content/generated/*.json` directly:

| File | Purpose |
|------|---------|
| profile.json | Name, headline, bio, roles, email, social |
| projects.json | Projects (slug, title, shortDescription, sections) |
| media.json | Media items |
| awards.json | Awards (grouped) |
| proof.json | Proof items |
| contact.json | Contact info |
| downloads.json | CV downloads |
| simulator.json | Simulator page |
| home.json | Home highlights |
| gallery.json | Gallery items |

## Images

Images can be added later. The site uses text-first cards where images are missing. Place assets in:

- `public/images/hero/` — Profile/hero image (set `image` in profile.json)
- `public/images/projects/` — Project thumbnails (set `image` in projects.json)
- `public/images/gallery/` — Gallery images

## CV PDFs (Required)

Place four CV PDFs in `public/docs/cv/` with these **exact filenames**:

- `rehan_cv_academic.pdf`
- `rehan_cv_consulting.pdf`
- `rehan_cv_industry.pdf`
- `rehan_cv_ntn_satcom.pdf`

Rename existing PDFs to match if needed.

## Configuration

- **Base URL**: Set `NEXT_PUBLIC_SITE_URL` for production sitemap/robots (e.g. `https://rehanmahmood.com`).

## Documentation

- [docs/MASTER_PLAN.md](docs/MASTER_PLAN.md) — v1.1 scope, v1.2 roadmap
- [docs/STATE.yaml](docs/STATE.yaml) — Current state and placeholders
- [docs/CHANGELOG.md](docs/CHANGELOG.md) — Implementation log
