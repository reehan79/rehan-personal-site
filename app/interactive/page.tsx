import type { Metadata } from "next";
import { PageLayout } from "@/components/ui/PageLayout";
import { Section } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Interactive Previews | Dr. Rehan Mahmood",
  description:
    "Representative mock demos: NGN/NTN–PPDR, Policy Simulator, Parwaz Orbit, Parwaz MVP. Interactive previews using representative mock data.",
  openGraph: {
    title: "Interactive Previews | Dr. Rehan Mahmood",
    description: "Representative mock demos for NTN, policy simulation, and orbit tools.",
  },
};

const previews = [
  {
    href: "/interactive/ngn-ntn",
    title: "NGN/NTN–PPDR",
    summary: "Next-generation network and non-terrestrial network simulator for PPDR communications.",
  },
  {
    href: "/interactive/policy-sim",
    title: "Policy Simulator",
    summary: "Policy and capacity planning simulation for LEO and NTN scenarios.",
  },
  {
    href: "/interactive/parwaz-orbit",
    title: "Parwaz Orbit",
    summary: "Orbit visualization and analysis tools for satellite missions.",
  },
  {
    href: "/interactive/parwaz-mvp",
    title: "Parwaz MVP",
    summary: "Minimum viable product demos for satellite and NTN workflows.",
  },
];

export default function InteractivePage() {
  return (
    <PageLayout
      title="Interactive Previews"
      subtitle="Representative mock demos"
      description="Explore interactive demos using representative mock data. No backend or APIs."
    >
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {previews.map((preview) => (
            <Card key={preview.href} href={preview.href}>
              <h3 className="font-serif text-lg font-semibold text-[var(--heading-color)]">
                {preview.title}
              </h3>
              <p className="mt-3 text-sm text-[var(--muted)]">{preview.summary}</p>
            </Card>
          ))}
        </div>
      </Section>
    </PageLayout>
  );
}
