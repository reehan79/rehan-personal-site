"use client";

import Link from "next/link";
import { useState } from "react";
import { AnchorNav } from "./AnchorNav";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const closeMobile = () => setMobileOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--off-white)]">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link
          href="/"
          className="font-serif text-xl font-semibold text-[var(--heading-color)] transition-opacity hover:opacity-80"
        >
          Dr. Rehan Mahmood
        </Link>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-md text-[var(--slate-700)] hover:bg-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 lg:hidden"
          aria-expanded={mobileOpen}
          aria-controls="main-nav"
          aria-label="Toggle navigation menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            {mobileOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            )}
          </svg>
        </button>

        <nav
          id="main-nav"
          aria-label="Main navigation"
          className={`absolute left-0 right-0 top-[57px] z-50 border-b border-[var(--border)] bg-[var(--off-white)] lg:static lg:flex lg:border-0 lg:bg-transparent ${
            mobileOpen ? "block" : "hidden lg:block"
          }`}
        >
          <AnchorNav onNavigate={closeMobile} className="border-t border-[var(--border)] lg:border-t-0" />
        </nav>
      </div>
    </header>
  );
}
