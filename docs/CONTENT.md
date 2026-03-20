# Content Guide

## Adding Content (v1.1)

Edit files in `content/generated/`:

| File | Purpose |
|------|---------|
| profile.json | Name, title, bio, image path, email, social links |
| projects.json | Projects (slug, title, shortDescription, sections, role, partners) |
| media.json | Media items (title, outlet, date, url, type) |
| awards.json | Awards (title, issuer, year, description) |
| gallery.json | Gallery items (id, title, image, caption, category) |
| downloads.json | Downloads (title, description, filePath, category) |
| home.json | Home highlights (id, title, description, href) |
| simulator.json | Simulator page (title, subtitle, description, sections) |

## Asset Paths

- `public/docs/cv/` — CV and papers
- `public/images/hero/` — Profile image
- `public/images/projects/` — Project images
- `public/images/gallery/` — Gallery images
- `public/images/inbox/` — General assets

Reference in JSON as `/docs/cv/cv.pdf`, `/images/hero/profile.jpg`, etc.

## v1.2 (Planned)

CSV/XLSX import will populate `content/generated/` from `content/raw/`. Schemas are designed for future automation.
