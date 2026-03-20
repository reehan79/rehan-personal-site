"use client";

import type { SatelliteParams } from "@/src/lib/demo-adapters/orbit-types";

interface OrbitControlsProps {
  params: SatelliteParams;
  onParamsChange: (params: SatelliteParams) => void;
  previewScore: number;
  className?: string;
}

const ORBITAL_PRESETS: { name: string; params: SatelliteParams }[] = [
  { name: "Equatorial 600", params: { a_km: 6971, e: 0, inc_deg: 0, raan_deg: 0, argp_deg: 0 } },
  { name: "SSO 550", params: { a_km: 6921, e: 0, inc_deg: 98.6, raan_deg: 0, argp_deg: 0 } },
  { name: "Polar 97.6", params: { a_km: 6971, e: 0, inc_deg: 97.6, raan_deg: 0, argp_deg: 0 } },
];

const RE = 6371;

function getAltitude(a_km: number) {
  return Math.round(a_km - RE);
}

export function OrbitControls({
  params,
  onParamsChange,
  previewScore,
  className = "",
}: OrbitControlsProps) {
  const handlePreset = (p: SatelliteParams) => {
    onParamsChange(p);
  };

  const handleChange = (key: keyof SatelliteParams, value: number) => {
    onParamsChange({ ...params, [key]: value });
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="rounded-lg border border-[var(--border)] bg-white p-5 shadow-sm">
        <h2 className="font-serif text-base font-semibold text-[var(--heading-color)] mb-4">
          Orbital Parameters
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {ORBITAL_PRESETS.map((preset) => (
            <button
              key={preset.name}
              type="button"
              onClick={() => handlePreset(preset.params)}
              className="rounded-md border border-[var(--border)] bg-[var(--off-white)] px-3 py-1.5 text-sm text-[var(--body-text)] hover:bg-[var(--border)] focus:outline-none focus:ring-2 focus:ring-[var(--accent)]"
            >
              {preset.name}
            </button>
          ))}
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--heading-color)] mb-1">
              Altitude: {getAltitude(params.a_km)} km
            </label>
            <input
              type="range"
              min={6521}
              max={8371}
              step={20}
              value={params.a_km}
              onChange={(e) => handleChange("a_km", Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[var(--accent)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--heading-color)] mb-1">
              Eccentricity: {params.e.toFixed(3)}
            </label>
            <input
              type="range"
              min={0}
              max={0.1}
              step={0.002}
              value={params.e}
              onChange={(e) => handleChange("e", Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[var(--accent)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--heading-color)] mb-1">
              Inclination: {params.inc_deg.toFixed(1)}°
            </label>
            <input
              type="range"
              min={0}
              max={180}
              step={0.5}
              value={params.inc_deg}
              onChange={(e) => handleChange("inc_deg", Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[var(--accent)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--heading-color)] mb-1">
              RAAN: {params.raan_deg.toFixed(1)}°
            </label>
            <input
              type="range"
              min={0}
              max={360}
              step={5}
              value={params.raan_deg}
              onChange={(e) => handleChange("raan_deg", Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[var(--accent)]"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-[var(--heading-color)] mb-1">
              Arg. of Perigee: {params.argp_deg.toFixed(1)}°
            </label>
            <input
              type="range"
              min={0}
              max={360}
              step={5}
              value={params.argp_deg}
              onChange={(e) => handleChange("argp_deg", Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer accent-[var(--accent)]"
            />
          </div>
        </div>
        <div className="mt-4 pt-4 border-t border-[var(--border)]">
          <span className="text-sm text-[var(--muted)]">Preview score: </span>
          <span className="font-semibold text-[var(--heading-color)]">
            {Math.round(previewScore)}
          </span>
          <span className="text-sm text-[var(--muted)]"> pts</span>
        </div>
      </div>
    </div>
  );
}
