/**
 * Load content at build time from content/generated/*.json.
 * v1.1: Seeded JSON. v1.2: CSV/XLSX import will populate these files.
 */

import type {
  Profile,
  Project,
  MediaItem,
  Award,
  Download,
  HomeHighlight,
  PageContent,
  GalleryItem,
  ProofItem,
  Contact,
} from "./types";

import profileData from "@/content/generated/profile.json";
import projectsData from "@/content/generated/projects.json";
import mediaData from "@/content/generated/media.json";
import awardsData from "@/content/generated/awards.json";
import downloadsData from "@/content/generated/downloads.json";
import homeData from "@/content/generated/home.json";
import simulatorData from "@/content/generated/simulator.json";
import galleryData from "@/content/generated/gallery.json";
import proofData from "@/content/generated/proof.json";
import contactData from "@/content/generated/contact.json";

export function loadProfile(): Profile {
  return profileData as Profile;
}

export function loadProjects(): Project[] {
  return projectsData as Project[];
}

export function loadProjectBySlug(slug: string): Project | undefined {
  return (projectsData as Project[]).find((p) => p.slug === slug);
}

export function loadMedia(): MediaItem[] {
  return mediaData as MediaItem[];
}

export function loadAwards(): Award[] {
  return awardsData as Award[];
}

export function loadDownloads(): Download[] {
  return downloadsData as Download[];
}

export function loadHomeHighlights(): HomeHighlight[] {
  return homeData as HomeHighlight[];
}

export function loadSimulatorPage(): PageContent {
  return simulatorData as PageContent;
}

export function loadGallery(): GalleryItem[] {
  return galleryData as GalleryItem[];
}

export function loadProof(): ProofItem[] {
  return proofData as ProofItem[];
}

export function loadContact(): Contact {
  return contactData as Contact;
}
