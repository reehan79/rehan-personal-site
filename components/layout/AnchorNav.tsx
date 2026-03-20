"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const sections = [
  { id: "overview", label: "Overview" },
  { id: "selected-work", label: "Selected Work" },
  { id: "current-work", label: "Current Work" },
  { id: "research-direction", label: "Research Direction" },
  { id: "selected-coverage", label: "Coverage" },
  { id: "recognition", label: "Recognition" },
  { id: "contact", label: "Contact" },
] as const;

export function AnchorNav({
  onNavigate,
  className = "",
}: {
  onNavigate?: () => void;
  className?: string;
}) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const updateActive = () => {
      const headerHeight = 96;
      const sectionTops: { id: string; top: number; height: number }[] = [];
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          sectionTops.push({ id, top: rect.top, height: rect.height });
        }
      });

      const inView = sectionTops.filter((s) => s.top <= headerHeight + 50 && s.top + s.height > headerHeight);
      const aboveView = sectionTops.filter((s) => s.top < headerHeight);
      const active = inView[0]?.id ?? (aboveView.length > 0 ? aboveView[aboveView.length - 1].id : sectionTops[0]?.id);
      setActiveId(active ?? null);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    return () => window.removeEventListener("scroll", updateActive);
  }, []);

  return (
    <ul
      className={`flex flex-col gap-0 lg:flex-row lg:flex-wrap lg:items-center lg:gap-x-6 lg:gap-y-2 ${className}`}
    >
      {sections.map(({ id, label }) => (
        <li key={id}>
          <Link
            href={`/#${id}`}
            onClick={onNavigate}
            className={`block px-4 py-3 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[var(--accent)] lg:px-0 lg:py-0 lg:hover:bg-transparent ${
              activeId === id
                ? "bg-[var(--border)] text-[var(--heading-color)] lg:bg-transparent underline underline-offset-[3px] decoration-2"
                : "text-[var(--secondary-text)] hover:bg-[var(--border)] hover:text-[var(--heading-color)] lg:hover:bg-transparent hover:underline hover:underline-offset-[3px] hover:decoration-2"
            }`}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
