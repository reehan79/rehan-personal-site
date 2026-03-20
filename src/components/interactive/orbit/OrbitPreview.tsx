"use client";

import { useState, useEffect } from "react";
import { loadOrbitSeed, getCityFromSeed } from "@/src/lib/demo-adapters/orbit";
import type { OrbitSeed, SatelliteParams } from "@/src/lib/demo-adapters/orbit-types";
import { PreviewDisclaimer } from "@/src/components/interactive/shared/PreviewDisclaimer";
import { calculateScore } from "./orbit-scoring";
import { OrbitMapCanvas } from "./OrbitMapCanvas";
import { OrbitControls } from "./OrbitControls";
import { ResultSummary } from "./ResultSummary";
import { LeaderboardPreview } from "./LeaderboardPreview";

const DEFAULT_PARAMS: SatelliteParams = {
  a_km: 6821,
  e: 0.02,
  inc_deg: 30,
  raan_deg: 45,
  argp_deg: 90,
};

export function OrbitPreview() {
  const [seed, setSeed] = useState<OrbitSeed | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [params, setParams] = useState<SatelliteParams>(DEFAULT_PARAMS);
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  useEffect(() => {
    loadOrbitSeed()
      .then(setSeed)
      .catch(() => setError("Failed to load challenge data"));
  }, []);

  const previewScore = seed
    ? calculateScore(params, seed).score
    : 0;

  const handleSubmit = () => {
    if (!seed) return;
    const { score: s } = calculateScore(params, seed);
    setScore(s);
    setSubmitted(true);
  };

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
        {error}
      </div>
    );
  }

  if (!seed) {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--off-white)] p-4">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--navy-900)]" />
        <p className="text-sm text-[var(--muted)]">Loading…</p>
      </div>
    );
  }

  const cityName = getCityFromSeed(seed.seedId);

  return (
    <div className="space-y-5">
      <div className="rounded-lg border border-[var(--border)] bg-white p-5 shadow-sm">
        <h2 className="font-serif text-base font-semibold text-[var(--heading-color)] mb-3">
          Challenge
        </h2>
        <p className="text-sm text-[var(--body-text)]">
          Design a satellite orbit that keeps <strong>{cityName}</strong> online
          for 24 hours. Adjust orbital parameters and submit when ready.
        </p>
      </div>

      <div className="rounded-lg border border-[var(--border)] bg-white p-5 shadow-sm">
        <h3 className="font-serif text-sm font-semibold text-[var(--heading-color)] mb-3">
          Ground Track
        </h3>
        <p className="text-xs text-[var(--muted)] mb-2">
          Orange = target region · Blue = orbit path · Red = satellite position
        </p>
        <OrbitMapCanvas
          params={params}
          regionGeoJSON={seed.regionGeoJSON}
          minElevDeg={seed.minElevDeg}
        />
      </div>

      <OrbitControls
        params={params}
        onParamsChange={setParams}
        previewScore={previewScore}
      />

      <div>
        <button
          type="button"
          onClick={handleSubmit}
          className="inline-flex items-center justify-center rounded-md bg-[var(--navy-900)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 disabled:opacity-50"
        >
          Submit Score
        </button>
      </div>

      {submitted && score !== null && (
        <ResultSummary score={score} />
      )}

      <LeaderboardPreview />

      <PreviewDisclaimer />
    </div>
  );
}
