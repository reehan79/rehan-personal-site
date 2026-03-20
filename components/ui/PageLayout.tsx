import type { ReactNode } from "react";

interface PageLayoutProps {
  title: string;
  subtitle?: string;
  description?: string;
  children: ReactNode;
}

export function PageLayout({
  title,
  subtitle,
  description,
  children,
}: PageLayoutProps) {
  return (
    <>
      <section className="border-b border-[var(--border)] bg-[var(--off-white)]">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-12">
          <h1 className="font-serif text-3xl font-semibold text-[var(--navy-900)] md:text-4xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-2 text-lg text-[var(--slate-700)]">{subtitle}</p>
          )}
          {description && (
            <p className="mt-4 max-w-2xl text-[var(--slate-500)]">{description}</p>
          )}
        </div>
      </section>
      {children}
    </>
  );
}
