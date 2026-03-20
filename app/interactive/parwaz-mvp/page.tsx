import type { Metadata } from "next";
import { PageLayout } from "@/components/ui/PageLayout";
import { Section } from "@/components/ui/Section";
import { PreviewIntro } from "@/src/components/interactive/shared/PreviewIntro";
import { getPreviewIntro } from "@/src/lib/content/preview-intros";
import { ParwazMvpPreview } from "@/src/components/interactive/parwaz/ParwazMvpPreview";

export const metadata: Metadata = {
  title: "Parwaz MVP Preview | Dr. Rehan Mahmood",
  description:
    "Interactive preview of Parwaz MVP demos using representative mock data.",
  openGraph: {
    title: "Parwaz MVP Preview | Dr. Rehan Mahmood",
    description: "Minimum viable product demos for satellite and NTN workflows.",
  },
};

export default function ParwazMvpPage() {
  const intro = getPreviewIntro("parwaz-mvp");
  return (
    <PageLayout
      title="Parwaz MVP"
      subtitle="Minimum viable product demos"
      description="Interactive preview of minimum viable product demos for satellite and NTN workflows."
    >
      <Section>
        {intro && <PreviewIntro content={intro} />}
        <div className={intro ? "mt-6 border-t border-[var(--border)] pt-6 sm:mt-8 sm:pt-8" : ""}>
          <ParwazMvpPreview />
        </div>
      </Section>
    </PageLayout>
  );
}
