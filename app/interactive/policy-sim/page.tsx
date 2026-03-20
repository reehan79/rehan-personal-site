import type { Metadata } from "next";
import { PageLayout } from "@/components/ui/PageLayout";
import { Section } from "@/components/ui/Section";
import { PreviewIntro } from "@/src/components/interactive/shared/PreviewIntro";
import { getPreviewIntro } from "@/src/lib/content/preview-intros";
import { PolicyPreview } from "@/src/components/interactive/policy/PolicyPreview";

export const metadata: Metadata = {
  title: "Policy Simulator Preview | Dr. Rehan Mahmood",
  description:
    "Interactive preview of the policy simulator using representative mock data.",
  openGraph: {
    title: "Policy Simulator Preview | Dr. Rehan Mahmood",
    description: "Policy and capacity planning simulator preview.",
  },
};

export default function PolicySimPage() {
  const intro = getPreviewIntro("policy-sim");
  return (
    <PageLayout
      title="Policy Simulator"
      subtitle="Capacity and policy planning"
      description="Interactive preview of policy and capacity planning simulation for LEO and NTN scenarios."
    >
      <Section>
        {intro && <PreviewIntro content={intro} />}
        <div className={intro ? "mt-6 border-t border-[var(--border)] pt-6 sm:mt-8 sm:pt-8" : ""}>
          <PolicyPreview />
        </div>
      </Section>
    </PageLayout>
  );
}
