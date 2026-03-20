import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ProjectImage } from "@/components/ui/ProjectImage";
import { loadProjects, loadProjectBySlug } from "@/lib/content/load";
import { PageLayout } from "@/components/ui/PageLayout";
import { Section } from "@/components/ui/Section";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const projects = loadProjects();
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = loadProjectBySlug(slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Dr. Rehan Mahmood`,
    description: project.shortDescription,
    openGraph: {
      title: `${project.title} | Dr. Rehan Mahmood`,
      description: project.shortDescription,
    },
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = loadProjectBySlug(slug);
  if (!project) notFound();

  return (
    <PageLayout
      title={project.title}
      subtitle={project.role || project.year}
      description={project.shortDescription}
    >
      {project.image && (
        <ProjectImage src={project.image} alt={project.title} />
      )}

      {(project.partners || project.tags?.length) && (
        <Section>
          <dl className="grid gap-3 sm:grid-cols-1">
            {project.partners && (
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                  Partners
                </dt>
                <dd className="mt-0.5 text-sm text-[var(--slate-700)]">{project.partners}</dd>
              </div>
            )}
            {project.tags && project.tags.length > 0 && (
              <div>
                <dt className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                  Tags
                </dt>
                <dd className="mt-1.5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-[var(--border)] px-2 py-0.5 text-xs font-medium text-[var(--slate-600)]"
                    >
                      {tag}
                    </span>
                  ))}
                </dd>
              </div>
            )}
          </dl>
        </Section>
      )}

      {project.sections && project.sections.length > 0 && (
        <>
          {project.sections.map((section, i) => (
            <Section key={i} title={section.title}>
              <p className="max-w-4xl text-sm leading-[1.85] text-[var(--body-text)]">
                {section.content}
              </p>
            </Section>
          ))}
        </>
      )}

      {project.links && project.links.length > 0 && (
        <Section>
          <div className="flex flex-wrap gap-4">
            {project.links.map((link) => (
              <a
                key={link.url}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </Section>
      )}

      <Section>
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-sm font-medium underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)]"
        >
          <span aria-hidden>←</span>
          Back to Projects
        </Link>
      </Section>
    </PageLayout>
  );
}
