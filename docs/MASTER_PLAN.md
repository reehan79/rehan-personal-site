# Master Plan — Dr. Rehan Mahmood Personal Site

## v1.1 (Current) — No-Automation Build

**Goal**: Publishable site with direct structured JSON content. No CSV, XLSX, import, scraping, or automation.

### Scope
- Homepage as primary recruiter-facing authority (scroll-first persuasion)
- Full page structure: Home, Projects (list + detail), Simulator, Media, Downloads, Contact
- Redirects: About, Awards, Gallery → `/#section`
- Content in `content/generated/*.json` (manually edited)
- Static export, sitemap, robots
- Text-first cards where images are missing

### Content Files
| File | Purpose |
|------|---------|
| profile.json | Name, headline, bio, roles, email, social |
| projects.json | Projects with slug, sections for detail pages |
| media.json | Media items (grouped) |
| awards.json | Awards (recognitions, leadership) |
| proof.json | Proof items |
| contact.json | Contact info |
| downloads.json | Four role-specific CVs |
| simulator.json | Simulator page content |
| home.json | Home highlights |
| gallery.json | Gallery items |

### Asset Paths
| Path | Purpose |
|------|---------|
| public/docs/cv/ | Four CV PDFs (exact filenames required) |
| public/images/hero/ | Profile/hero image |
| public/images/projects/ | Project thumbnails |
| public/images/gallery/ | Gallery images |
| public/images/inbox/ | General assets |

---

## v1.2 (Deferred) — Content Automation

**Status**: Deferred. v1.1 explicitly excludes automation.

### Previously Considered (Not in v1.1)
- CSV/XLSX import
- Link preview fetch
- Image discovery / manifest
- Contact-bank systems
