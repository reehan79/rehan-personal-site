"use client";

import { getMockLeaderboard } from "@/src/lib/demo-adapters/orbit";

export function LeaderboardPreview() {
  const entries = getMockLeaderboard();

  return (
    <div className="rounded-lg border border-[var(--border)] bg-white p-6 shadow-sm">
      <h2 className="font-serif text-base font-semibold text-[var(--heading-color)] mb-4">
        Leaderboard
      </h2>
      <div className="space-y-2">
        {entries.map((entry) => (
          <div
            key={entry.rank}
            className="flex items-center justify-between py-2 border-b border-[var(--border)] last:border-0"
          >
            <div className="flex items-center gap-3">
              <span className="w-6 text-sm font-medium text-[var(--muted)]">
                #{entry.rank}
              </span>
              <span className="text-sm text-[var(--body-text)]">
                {entry.displayName}
              </span>
            </div>
            <span className="font-semibold text-[var(--heading-color)]">
              {entry.bestScore.toFixed(1)}
            </span>
          </div>
        ))}
      </div>
      <p className="mt-3 text-xs text-[var(--muted)]">
        Static mock data — representative preview only.
      </p>
    </div>
  );
}
