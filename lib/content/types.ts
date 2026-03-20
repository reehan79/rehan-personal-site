/**
 * Content type definitions for the personal site.
 * Content loaded from content/generated/*.json (seeded; v1.2 will add CSV/XLSX import).
 */

export interface Profile {
  name: string;
  title?: string;
  headline?: string;
  bio: string;
  heroBio?: string;
  tagline?: string;
  roles?: string[];
  location?: string;
  phone?: string;
  proofStrip?: string[];
  keyFacts?: string[];
  image?: string;
  email?: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    orcid?: string;
    googleScholar?: string;
  };
}

export interface Project {
  slug: string;
  id?: string;
  title: string;
  shortDescription: string;
  description?: string;
  year?: string;
  role?: string;
  partners?: string;
  image?: string;
  links?: { label: string; url: string }[];
  tags?: string[];
  sections?: { title: string; content: string }[];
}

export interface MediaItem {
  id: string;
  title: string;
  outlet?: string;
  date?: string;
  url?: string;
  type: "article" | "interview" | "presentation" | "video" | "other";
  group?: "media" | "conference" | "stem";
  description?: string;
  summary?: string;
}

export interface Award {
  id: string;
  title: string;
  issuer?: string;
  year?: string;
  description?: string;
  url?: string;
  group?: "recognitions" | "leadership";
}

export interface Download {
  id: string;
  title: string;
  description?: string;
  filePath: string;
  category?: string;
}

export interface HomeHighlight {
  id: string;
  title: string;
  description: string;
  href: string;
  image?: string;
}

export interface PageContent {
  title: string;
  subtitle?: string;
  description: string;
  sections: { title: string; content: string }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  image: string;
  caption?: string;
  category?: string;
}

export interface ProofItem {
  id: string;
  title: string;
  url: string;
  category: "institutional" | "media" | "publications" | "conference" | "social" | "corporate";
  featured: boolean;
  summary: string;
}

export interface Contact {
  name: string;
  email: string;
  phone?: string;
  linkedin?: string;
  location?: string;
  cta?: string;
}
