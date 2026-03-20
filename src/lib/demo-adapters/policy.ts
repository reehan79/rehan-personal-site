/**
 * Policy simulator demo adapter — loads run data from public/demo-data/policy-sim/.
 * Replaces original API (getScenarios, runCompare, getRun, getEvidence) with local data.
 * No backend, no Python, no real API calls.
 *
 * Demo data is a representative frontend preview derived from configs/*.yaml
 * and paperA/results/*.csv. Full raw internals are not exposed.
 */

import type { PolicyRunResult, PolicyScenarioId } from "./policy-types";

const SCENARIO_IDS: PolicyScenarioId[] = ["baseline", "shock-event", "compliance-mixed"];

export function getPolicyScenarioIds(): PolicyScenarioId[] {
  return [...SCENARIO_IDS];
}

export async function loadPolicyRun(scenarioId: PolicyScenarioId): Promise<PolicyRunResult> {
  const url = `/demo-data/policy-sim/${scenarioId}.json`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to load scenario: ${scenarioId}`);
  }
  const data = (await res.json()) as PolicyRunResult;
  return data;
}
