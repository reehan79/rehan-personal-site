/**
 * Orbit demo adapter types. Representative frontend preview; no backend.
 */

export interface SatelliteParams {
  a_km: number;
  e: number;
  inc_deg: number;
  raan_deg: number;
  argp_deg: number;
}

export interface OrbitSeed {
  seedId: string;
  regionGeoJSON: { type: "Polygon"; coordinates: number[][][] };
  minElevDeg: number;
}

export interface LeaderboardEntry {
  displayName: string;
  bestScore: number;
  rank: number;
}
