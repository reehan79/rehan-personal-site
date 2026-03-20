import type { Metadata } from "next";
import { loadDownloads } from "@/lib/content/load";
import { PageLayout } from "@/components/ui/PageLayout";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Downloads | Dr. Rehan Mahmood",
  description:
    "Four role-specific CV versions for academic, consulting, industry, and satellite-communications / NTN opportunities.",
  openGraph: {
    title: "Downloads | Dr. Rehan Mahmood",
    description: "Role-specific CV downloads.",
  },
};

export default function DownloadsPage() {
  const downloads = loadDownloads();

  return (
    <PageLayout
      title="Downloads"
      description="Role-specific CV versions for academic, consulting, industry, and satellite-communications / NTN opportunities."
    >
      <Section>
        <ul className="space-y-3">
          {downloads.map((item) => (
            <li key={item.id} className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <div>
                <span className="font-medium text-[var(--navy-900)]">{item.title}</span>
                {item.description && (
                  <p className="mt-0.5 text-sm text-[var(--slate-500)]">{item.description}</p>
                )}
              </div>
              <a
                href={item.filePath}
                download
                className="shrink-0 text-sm font-medium text-[var(--accent)] hover:underline"
              >
                Download PDF
              </a>
            </li>
          ))}
        </ul>
      </Section>
    </PageLayout>
  );
}
