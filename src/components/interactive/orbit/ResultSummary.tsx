"use client";

function getScoreMessage(score: number): string {
  if (score >= 90) return "Outstanding!";
  if (score >= 80) return "Excellent!";
  if (score >= 70) return "Great job!";
  if (score >= 60) return "Good work!";
  if (score >= 50) return "Not bad!";
  return "Keep trying!";
}

function getScoreColor(score: number): string {
  if (score >= 80) return "text-green-600";
  if (score >= 60) return "text-yellow-600";
  if (score >= 40) return "text-orange-600";
  return "text-red-600";
}

interface ResultSummaryProps {
  score: number;
  className?: string;
}

export function ResultSummary({ score, className = "" }: ResultSummaryProps) {
  return (
    <div
      className={`rounded-lg border border-[var(--border)] bg-white p-6 shadow-sm ${className}`}
    >
      <h2 className="font-serif text-base font-semibold text-[var(--heading-color)] mb-3">
        Challenge Complete!
      </h2>
      <div className={`text-3xl font-bold ${getScoreColor(score)}`}>
        {score.toFixed(1)}
      </div>
      <div className="mt-1 text-sm text-[var(--muted)]">
        {getScoreMessage(score)}
      </div>
    </div>
  );
}
