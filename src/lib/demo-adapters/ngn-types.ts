/**
 * NGN/NTN simulation types — adapted from ngn-ntn-ppdr-sim.
 * Used by interactive preview only; no backend.
 * Demo data is representative and derived from internal simulator work.
 */

export interface SummaryKPIs {
  availabilityPct: number;
  avgLatencyMs: number;
  p95LatencyMs: number;
  avgThroughputMbps: number;
  handoverSuccessPct: number;
}

export interface TimeseriesPoint {
  t: number;
  latencyMs: number;
  jitterMs: number | null;
  throughputMbps: number;
  sinrDb: number | null;
  dopplerHz: number | null;
  packetLossPct: number;
}

export type EventType = "handoff" | "outage" | "beam_switch" | "session_continuity";

export interface SimulationEvent {
  type: EventType;
  timestamp: number;
  metadata: Record<string, unknown>;
}

export interface RunResult {
  runId: string;
  scenarioName: string;
  startedAt: number;
  summaryKPIs: SummaryKPIs;
  timeseries: TimeseriesPoint[];
  events: SimulationEvent[];
}

export type ScenarioId = "baseline" | "emergency-load" | "satellite-fade";
