"use client";

import {
  evaluateSuccess,
  getMedalEmoji,
} from "./scenarioEvaluation";
import type { LabResult } from "@/src/lib/demo-adapters/parwaz-types";

interface ResultPanelProps {
  mode: "quiz" | "lab";
  correctCount?: number;
  totalCount?: number;
  labResult?: LabResult | null;
}

export function ResultPanel({
  mode,
  correctCount = 0,
  totalCount = 0,
  labResult = null,
}: ResultPanelProps) {
  if (mode === "quiz") {
    const pct = totalCount > 0 ? Math.round((correctCount / totalCount) * 100) : 0;
    return (
      <div className="rounded-lg border border-[var(--border)] bg-white p-6 shadow-sm">
        <h2 className="font-serif text-base font-semibold text-[var(--heading-color)] mb-3">
          Quiz Results
        </h2>
        <div className="text-3xl font-bold text-[var(--heading-color)]">
          {correctCount} / {totalCount}
        </div>
        <p className="mt-1 text-sm text-[var(--muted)]">
          {pct}% correct
        </p>
      </div>
    );
  }

  if (mode === "lab" && labResult) {
    const result = evaluateSuccess(
      labResult.metrics,
      labResult.params,
      labResult.successCondition,
      labResult.metrics.score
    );
    const medalEmoji = getMedalEmoji(result.medal ?? null);

    return (
      <div className="rounded-lg border border-[var(--border)] bg-white p-6 shadow-sm">
        <h2 className="font-serif text-base font-semibold text-[var(--heading-color)] mb-3">
          Lab Result
        </h2>
        <div className="space-y-2">
          <p
            className={
              result.success
                ? "text-green-700 font-medium"
                : "text-[var(--body-text)]"
            }
          >
            {result.message}
          </p>
          {result.medal && (
            <p className="text-sm text-[var(--muted)]">
              {medalEmoji} {result.medal} medal
            </p>
          )}
        </div>
      </div>
    );
  }

  return null;
}
