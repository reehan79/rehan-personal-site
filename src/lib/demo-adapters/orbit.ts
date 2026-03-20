/**
 * Orbit demo adapter — load representative data from public/demo-data/.
 * No API, no backend, no Supabase.
 */

import type { OrbitSeed, LeaderboardEntry } from "./orbit-types";

const SEED_PATH = "/demo-data/parwaz-orbit/seed.json";

export async function loadOrbitSeed(): Promise<OrbitSeed> {
  const res = await fetch(SEED_PATH);
  if (!res.ok) {
    throw new Error("Failed to load orbit seed");
  }
  return res.json();
}

export function getCityFromSeed(seedId: string): string {
  const parts = seedId?.split("-") ?? [];
  if (parts.length >= 3) {
    const code = parts[2];
    const map: Record<string, string> = {
      KHI: "Karachi",
      ISB: "Islamabad",
      LHR: "Lahore",
      DXB: "Dubai",
      DOH: "Doha",
      RUH: "Riyadh",
      LON: "London",
      NYC: "New York",
    };
    if (map[code]) return map[code];
  }
  const fallback: Record<string, string> = {
    "seed-demo-001-KHI": "Karachi",
    "seed-asia-01": "Karachi",
  };
  return fallback[seedId] ?? "Your City";
}

export function getMockLeaderboard(): LeaderboardEntry[] {
  return [
    { displayName: "Demo", bestScore: 78.2, rank: 1 },
    { displayName: "OrbitalMaster", bestScore: 72.1, rank: 2 },
    { displayName: "SkyWalker", bestScore: 68.5, rank: 3 },
    { displayName: "SatNav", bestScore: 64.3, rank: 4 },
    { displayName: "StarGazer", bestScore: 59.8, rank: 5 },
  ];
}
