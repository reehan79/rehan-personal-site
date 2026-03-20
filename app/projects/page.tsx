import type { Metadata } from "next";
import { loadProjects } from "@/lib/content/load";
import { ImageWithFallback } from "@/components/ui/ImageWithFallback";
import { PageLayout } from "@/components/ui/PageLayout";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Projects | Dr. Rehan Mahmood",
  description:
    "CubeSat programs and space systems: ICUBE-Q, SSS-2A, ICUBE-N, ICUBE-1, NTN/PPDR Simulator, KidSat, ICUBE-CSAT.",
  openGraph: {
    title: "Projects | Dr. Rehan Mahmood",
    description: "CubeSat and space systems leadership.",
  },
};

export default function ProjectsPage() {
  const projects = loadProjects();

  return (
    <PageLayout
      title="Projects"
      subtitle="CubeSat & Space Systems"
      description="Leadership and contribution track: ICUBE-Q, SSS-2A, ICUBE-N, ICUBE-1, NTN/PPDR Simulator, KidSat, ICUBE-CSAT."
    >
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <Card key={project.slug} href={`/projects/${project.slug}`}>
              {project.image ? (
                <div className="relative -mx-6 -mt-6 mb-4 aspect-video overflow-hidden rounded-t-lg bg-[var(--border)]">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="object-cover"
                  />
                </div>
              ) : (
                <div className="-mx-6 -mt-6 mb-4 flex aspect-video items-center justify-center rounded-t-lg bg-[var(--border)]">
                  <span className="font-serif text-2xl font-semibold text-[var(--muted)]">
                    {project.title.slice(0, 2).toUpperCase()}
                  </span>
                </div>
              )}
              <h3 className="font-serif text-lg font-semibold text-[var(--heading-color)]">
                {project.title}
              </h3>
              {project.year && (
                <p className="mt-1 text-sm text-[var(--slate-500)]">{project.year}</p>
              )}
              <p className="mt-3 text-sm text-[var(--slate-500)]">
                {project.shortDescription}
              </p>
              {project.tags && project.tags.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-[var(--border)] px-2 py-0.5 text-xs font-medium text-[var(--slate-600)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </Card>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
