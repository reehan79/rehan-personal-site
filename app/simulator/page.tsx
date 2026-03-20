import type { Metadata } from "next";
import Link from "next/link";
import { loadSimulatorPage } from "@/lib/content/load";
import { PageLayout } from "@/components/ui/PageLayout";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "NGN/NTN–PPDR Simulator | Dr. Rehan Mahmood",
  description:
    "Digital twin and next-generation network simulator for NTN and PPDR communications. Protocol validation, capacity planning, and training.",
  openGraph: {
    title: "NGN/NTN–PPDR Simulator | Dr. Rehan Mahmood",
    description:
      "Digital twin and next-generation network simulator for NTN and PPDR communications.",
  },
  keywords: ["NTN", "PPDR", "digital twin", "simulator", "next-generation network", "non-terrestrial network"],
};

export default function SimulatorPage() {
  const content = loadSimulatorPage();
  const mergedContent = content.sections.map((s) => s.content).join(" ");

  return (
    <PageLayout
      title={content.title}
      subtitle={content.subtitle}
      description={content.description}
    >
      <Section>
        <p className="max-w-4xl text-[0.9375rem] leading-[1.85] text-[var(--body-text)] md:text-base">
          {mergedContent}
        </p>
        <p className="mt-3 text-[0.9375rem] text-[var(--secondary-text)]">
          For collaboration or consulting, please{" "}
          <Link
            href="/#contact"
            className="font-medium underline underline-offset-[3px] decoration-2 text-[var(--link-color)] transition-colors hover:text-[var(--link-hover)]"
          >
            get in touch
          </Link>
          .
        </p>
      </Section>
    </PageLayout>
  );
}
