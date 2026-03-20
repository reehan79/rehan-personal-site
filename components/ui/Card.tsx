import type { ReactNode } from "react";
import Link from "next/link";

interface CardProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "article" | "section";
  href?: string;
  download?: boolean;
}

export function Card({
  children,
  className = "",
  as: Component = "div",
  href,
  download = false,
}: CardProps) {
  const baseClasses =
    "block rounded-lg border border-[var(--border)] bg-white p-6 shadow-sm transition-all duration-[var(--transition)] hover:shadow-md hover:scale-[1.01] focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2";

  if (href) {
    if (download) {
      return (
        <a
          href={href}
          download
          className={`${baseClasses} ${className}`}
        >
          {children}
        </a>
      );
    }
    const isInternal = href.startsWith("/");
    if (isInternal) {
      return (
        <Link href={href} className={`${baseClasses} ${className}`}>
          {children}
        </Link>
      );
    }
    return (
      <a
        href={href}
        className={`${baseClasses} ${className}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    );
  }

  return <Component className={`rounded-lg border border-[var(--border)] bg-white p-6 shadow-sm transition-shadow hover:shadow-md ${className}`}>{children}</Component>;
}
