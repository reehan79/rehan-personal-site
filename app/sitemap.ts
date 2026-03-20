import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { loadProjects } from "@/lib/content/load";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl;
  const projects = loadProjects();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/simulator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/media`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/awards`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/gallery`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/downloads`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...projectPages];
}
