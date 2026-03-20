import type { ReactNode } from "react";

interface PreviewShellProps {
  title: string;
  summary: string;
  children?: ReactNode;
}

export function PreviewShell({ title, summary, children }: PreviewShellProps) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="font-serif text-lg font-semibold text-[var(--heading-color)]">{title}</h2>
        <p className="mt-1 text-sm text-[var(--muted)]">{summary}</p>
      </div>
      <div className="min-h-[200px] rounded-lg border-2 border-dashed border-[var(--border)] bg-[var(--off-white)] p-8 flex items-center justify-center">
        {children ?? (
          <p className="text-sm text-[var(--muted)]">Preview content will be rendered here</p>
        )}
      </div>
      <p className="text-xs text-[var(--muted)]">
        Interactive preview using representative mock data.
      </p>
    </div>
  );
}
