/**
 * Run data utilities — adapted from ngn-ntn-ppdr-sim lib/utils/runData.ts
 */

import type { TimeseriesPoint, EventType } from "./ngn-types";

export function formatTimestamp(seconds: number): string {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  if (hours > 0) {
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  }
  return `${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
}

export function getEventDisplayInfo(type: EventType): {
  label: string;
  color: string;
  icon: string;
} {
  switch (type) {
    case "handoff":
      return { label: "Handoff", color: "text-blue-600", icon: "🛰️" };
    case "outage":
      return { label: "Outage", color: "text-red-600", icon: "⚠️" };
    case "beam_switch":
      return { label: "Beam Switch", color: "text-amber-600", icon: "📡" };
    case "session_continuity":
      return { label: "Session Continuity", color: "text-green-600", icon: "✓" };
    default:
      return { label: "Event", color: "text-slate-500", icon: "•" };
  }
}

export function getMaxTime(timeseries: TimeseriesPoint[]): number {
  if (timeseries.length === 0) return 0;
  return Math.max(...timeseries.map((p) => p.t));
}
