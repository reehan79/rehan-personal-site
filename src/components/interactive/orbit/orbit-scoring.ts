/**
 * Orbit propagation and simplified scoring. Ported from parwaz-orbit-master.
 * No external deps; used for preview only.
 */

import type { SatelliteParams } from "@/src/lib/demo-adapters/orbit-types";

export interface Position {
  lat: number;
  lon: number;
  alt: number;
}

export function propagateOrbit(
  params: SatelliteParams,
  timeSinceEpoch: number
): Position {
  const { a_km, e, inc_deg, raan_deg, argp_deg } = params;

  const GM = 3.986004418e5;
  const RE = 6371;

  const n = Math.sqrt(GM / Math.pow(a_km, 3));
  const M = n * timeSinceEpoch;

  let E = M;
  for (let i = 0; i < 5; i++) {
    E = M + e * Math.sin(E);
  }

  const nu = 2 * Math.atan2(
    Math.sqrt(1 + e) * Math.sin(E / 2),
    Math.sqrt(1 - e) * Math.cos(E / 2)
  );

  const r = a_km * (1 - e * Math.cos(E));
  const x = r * Math.cos(nu);
  const y = r * Math.sin(nu);

  const cos_raan = Math.cos((raan_deg * Math.PI) / 180);
  const sin_raan = Math.sin((raan_deg * Math.PI) / 180);
  const cos_inc = Math.cos((inc_deg * Math.PI) / 180);
  const sin_inc = Math.sin((inc_deg * Math.PI) / 180);
  const cos_argp = Math.cos((argp_deg * Math.PI) / 180);
  const sin_argp = Math.sin((argp_deg * Math.PI) / 180);

  const x_argp = x * cos_argp - y * sin_argp;
  const y_argp = x * sin_argp + y * cos_argp;
  const z_argp = 0;

  const x_inc = x_argp;
  const y_inc = y_argp * cos_inc - z_argp * sin_inc;
  const z_inc = y_argp * sin_inc + z_argp * cos_inc;

  const X = x_inc * cos_raan - y_inc * sin_raan;
  const Y = x_inc * sin_raan + y_inc * cos_raan;
  const Z = z_inc;

  const zOverR = Z / r;
  const clampedZOverR = Math.max(-1, Math.min(1, zOverR));
  const lat = (Math.asin(clampedZOverR) * 180) / Math.PI;

  let lon = (Math.atan2(Y, X) * 180) / Math.PI;
  lon = ((lon % 360) + 360) % 360;
  if (lon > 180) lon -= 360;

  const isValidLat = isFinite(lat) && lat >= -90 && lat <= 90;
  const isValidLon = isFinite(lon) && lon >= -180 && lon <= 180;
  const isValidAlt = isFinite(r) && r > 0 && r < RE + 2000;

  if (isValidLat && isValidLon && isValidAlt) {
    return { lat, lon, alt: r - RE };
  }
  return { lat: 0, lon: 0, alt: 600 };
}

export function calculateScore(
  params: SatelliteParams,
  seed: { regionGeoJSON?: { type: string; coordinates: number[][][] } }
): { score: number; computeMs: number } {
  const startTime = Date.now();

  try {
    const { a_km, e, inc_deg, raan_deg, argp_deg } = params;
    const { regionGeoJSON } = seed;

    const RE = 6371;
    const altitude = a_km - RE;

    if (altitude < 150 || altitude > 2000) {
      return { score: 0, computeMs: Date.now() - startTime };
    }
    if (e < 0 || e > 0.1) {
      return { score: 0, computeMs: Date.now() - startTime };
    }
    if (inc_deg < 0 || inc_deg > 180) {
      return { score: 0, computeMs: Date.now() - startTime };
    }

    let regionCenterLat = 0;
    let regionCenterLon = 0;

    if (regionGeoJSON && regionGeoJSON.type === "Polygon") {
      const coords = regionGeoJSON.coordinates[0];
      let minLat = 90, maxLat = -90, minLon = 180, maxLon = -180;
      for (let i = 0; i < coords.length; i++) {
        const [lon, lat] = coords[i];
        minLat = Math.min(minLat, lat);
        maxLat = Math.max(maxLat, lat);
        minLon = Math.min(minLon, lon);
        maxLon = Math.max(maxLon, lon);
      }
      regionCenterLat = (minLat + maxLat) / 2;
      regionCenterLon = (minLon + maxLon) / 2;
    }

    const maxLatReached = Math.abs(inc_deg);
    if (maxLatReached < Math.abs(regionCenterLat)) {
      return { score: 0, computeMs: Date.now() - startTime };
    }

    let finalScore = 0;
    const inclinationMatch = 1 - Math.abs(inc_deg - Math.abs(regionCenterLat)) / 90;
    finalScore += Math.max(0, inclinationMatch * 40);

    const altitudeFactor = Math.min(1, altitude / 600);
    finalScore += altitudeFactor * 30;

    const eccentricityFactor = 1 - e * 10;
    finalScore += Math.max(0, eccentricityFactor * 20);

    const raanFactor = 1 - Math.abs(raan_deg - regionCenterLon) / 180;
    finalScore += Math.max(0, raanFactor * 10);

    finalScore = Math.max(0, Math.min(100, finalScore));

    return {
      score: Math.round(finalScore * 100) / 100,
      computeMs: Date.now() - startTime,
    };
  } catch {
    return { score: 0, computeMs: Date.now() - startTime };
  }
}
