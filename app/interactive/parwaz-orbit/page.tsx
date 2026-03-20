import type { Metadata } from "next";
import { PageLayout } from "@/components/ui/PageLayout";
import { Section } from "@/components/ui/Section";
import { PreviewIntro } from "@/src/components/interactive/shared/PreviewIntro";
import { getPreviewIntro } from "@/src/lib/content/preview-intros";
import { OrbitPreview } from "@/src/components/interactive/orbit/OrbitPreview";

export const metadata: Metadata = {
  title: "Parwaz Orbit Preview | Dr. Rehan Mahmood",
  description:
    "Interactive preview of Parwaz Orbit tools using representative mock data.",
  openGraph: {
    title: "Parwaz Orbit Preview | Dr. Rehan Mahmood",
    description: "Orbit visualization and analysis preview.",
  },
};

export default function ParwazOrbitPage() {
  const intro = getPreviewIntro("parwaz-orbit");
  return (
    <PageLayout
      title="Parwaz Orbit"
      subtitle="Orbit visualization and analysis"
      description="Interactive preview of orbit visualization and analysis tools for satellite missions."
    >
      <Section>
        {intro && <PreviewIntro content={intro} />}
        <div className={intro ? "mt-6 border-t border-[var(--border)] pt-6 sm:mt-8 sm:pt-8" : ""}>
          <OrbitPreview />
        </div>
      </Section>
    </PageLayout>
  );
}
