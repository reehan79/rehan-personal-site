import type { Metadata } from "next";
import { loadMedia } from "@/lib/content/load";
import { PageLayout } from "@/components/ui/PageLayout";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { EmptyState } from "@/components/ui/EmptyState";

export const metadata: Metadata = {
  title: "Media | Dr. Rehan Mahmood",
  description:
    "Media visibility: Dawn, Geo News, The News, COSPAR, and STEM outreach.",
  openGraph: {
    title: "Media | Dr. Rehan Mahmood",
    description: "Media visibility, publications, and appearances.",
  },
};

function isPlaceholder(item: { title: string }) {
  return item.title.toLowerCase().startsWith("placeholder");
}

export default function MediaPage() {
  const allItems = loadMedia();
  const items = allItems.filter((item) => !isPlaceholder(item));

  return (
    <PageLayout
      title="Media"
      subtitle="Visibility & Appearances"
      description="Publications, interviews, presentations, and media coverage."
    >
      <Section>
        {items.length === 0 ? (
          <EmptyState
            title="Media coverage"
            description="Media appearances and publications will be listed here as they are added."
            ctaLabel="View Projects"
            ctaHref="/projects"
          />
        ) : (
          <div className="grid gap-6 sm:grid-cols-2">
            {items.map((item) => (
              <Card
                key={item.id}
                href={item.url || undefined}
                as={item.url ? undefined : "article"}
              >
                <span className="text-xs font-medium uppercase tracking-wide text-[var(--slate-500)]">
                  {item.type}
                </span>
                <h3 className="mt-2 font-serif text-lg font-semibold text-[var(--navy-900)]">
                  {item.title}
                </h3>
                {item.outlet && (
                  <p className="mt-1 text-sm text-[var(--slate-500)]">{item.outlet}</p>
                )}
                {item.date && (
                  <p className="mt-1 text-sm text-[var(--slate-500)]">{item.date}</p>
                )}
                {(item.summary || item.description) && (
                  <p className="mt-3 text-[var(--slate-500)]">
                    {item.summary || item.description}
                  </p>
                )}
              </Card>
            ))}
          </div>
        )}
      </Section>
    </PageLayout>
  );
}
