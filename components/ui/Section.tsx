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
      className={`scroll-mt-24 py-4 md:py-5 ${className}`}
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        {(title || description) && (
          <div className="mb-2 md:mb-3 max-w-2xl">
            {title && (
              <h2 className="font-serif text-base font-medium text-[var(--heading-color)] md:text-lg">
                {title}
              </h2>
            )}
            {description && (
              <p className="mt-3 text-[var(--muted)] leading-relaxed">
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
