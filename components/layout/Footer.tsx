import Link from "next/link";

const footerLinks = [
  { href: "/#overview", label: "Overview" },
  { href: "/#selected-work", label: "Work" },
  { href: "/#selected-coverage", label: "Coverage" },
  { href: "/#contact", label: "Contact" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-[var(--border)] bg-[var(--off-white)]">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="flex flex-col gap-4 items-center text-center sm:flex-row sm:justify-between sm:items-center sm:gap-6 sm:text-left">
          <p className="text-sm text-[var(--slate-600)]">
            © {year} Dr. Rehan Mahmood. All rights reserved.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <nav aria-label="Footer navigation">
              <ul className="flex flex-wrap justify-center gap-4 sm:gap-6">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium text-[var(--slate-700)] transition-colors hover:text-[var(--navy-900)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <Link
              href="/#contact"
              className="text-sm font-medium text-[var(--navy-900)] hover:underline"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
