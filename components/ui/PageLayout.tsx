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
        <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 md:py-10">
          <h1 className="font-serif text-2xl font-semibold text-[var(--navy-900)] md:text-3xl">
            {title}
          </h1>
          {subtitle && (
            <p className="mt-1.5 text-base text-[var(--slate-700)]">{subtitle}</p>
          )}
          {description && (
            <p className="mt-2 max-w-2xl text-sm text-[var(--slate-500)]">{description}</p>
          )}
        </div>
      </section>
      {children}
    </>
  );
}
