import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";
import { loadProjects } from "@/lib/content/load";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.baseUrl;
  const projects = loadProjects();

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/simulator`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/media`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/downloads`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/interactive`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/interactive/ngn-ntn`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/interactive/policy-sim`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/interactive/parwaz-orbit`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/interactive/parwaz-mvp`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.5 },
  ];

  const projectPages: MetadataRoute.Sitemap = projects.map((p) => ({
    url: `${base}/projects/${p.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }));

  return [...staticPages, ...projectPages];
}
