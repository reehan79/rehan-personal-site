import type { ReactNode } from "react";

interface SectionProps {
  id?: string;
  title?: string;
  description?: string;
  children: ReactNode;
  className?: string;
}

export function Section({
  id,
  title,
  description,
  children,
  className = "",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-24 py-8 md:py-10 ${className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {(title || description) && (
          <div className="mb-6 md:mb-8 max-w-2xl">
            {title && (
              <h2 className="font-serif text-2xl font-semibold text-[var(--navy-900)] md:text-3xl">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-4 text-[var(--slate-500)] leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
