/**
 * Policy simulator types — adapted from policy-sim-leo api.ts.
 * Used by interactive preview only; no backend or API.
 *
 * Demo data is a representative frontend preview derived from
 * configs/*.yaml and paperA/results/*.csv. Full raw internals are not exposed.
 */

export interface RunMetricsRow {
  regime: string;
  n_events: number;
  n_action_required: number;
  n_complied: number;
  compliance_rate: number;
  total_penalty: number;
}

export interface PolicyRunResult {
  run_id: string;
  mode: string;
  config: string;
  regimes: string[];
  created_at: string;
  metrics: RunMetricsRow[];
  event_summary?: string;
  evidence: string;
  recommendation?: string;
}

export type PolicyScenarioId = "baseline" | "shock-event" | "compliance-mixed";
