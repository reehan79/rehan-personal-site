import type { Metadata } from "next";
import { PageLayout } from "@/components/ui/PageLayout";
import { Section } from "@/components/ui/Section";
import { PreviewIntro } from "@/src/components/interactive/shared/PreviewIntro";
import { getPreviewIntro } from "@/src/lib/content/preview-intros";
import { NgnNtnPreview } from "@/src/components/interactive/ngn/NgnNtnPreview";

export const metadata: Metadata = {
  title: "NGN/NTN–PPDR Preview | Dr. Rehan Mahmood",
  description:
    "Interactive preview of NGN/NTN–PPDR simulator using representative mock data.",
  openGraph: {
    title: "NGN/NTN–PPDR Preview | Dr. Rehan Mahmood",
    description: "NGN/NTN–PPDR simulator preview with representative mock data.",
  },
};

export default function NgnNtnPage() {
  const intro = getPreviewIntro("ngn-ntn");
  return (
    <PageLayout
      title="NGN/NTN–PPDR"
      subtitle="Next-generation network simulator"
      description="Interactive preview of the NGN/NTN–PPDR communications simulator."
    >
      <Section>
        {intro && <PreviewIntro content={intro} />}
        <div className={intro ? "mt-6 border-t border-[var(--border)] pt-6 sm:mt-8 sm:pt-8" : ""}>
          <NgnNtnPreview />
        </div>
      </Section>
    </PageLayout>
  );
}
