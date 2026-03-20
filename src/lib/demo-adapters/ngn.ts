/**
 * NGN/NTN demo adapter — loads run data from public/demo-data/ngn-ntn/.
 * No API, no backend, no websocket.
 *
 * Demo data is representative and derived from internal simulator work.
 * Values are normalized for public display; internal backend details are not exposed.
 */

import type { RunResult, ScenarioId } from "./ngn-types";

const SCENARIO_IDS: ScenarioId[] = ["baseline", "emergency-load", "satellite-fade"];

export function getScenarioIds(): ScenarioId[] {
  return [...SCENARIO_IDS];
}

export async function loadRunResult(scenarioId: ScenarioId): Promise<RunResult> {
  const url = `/demo-data/ngn-ntn/${scenarioId}.json`;
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to load scenario: ${scenarioId}`);
  }
  const data = (await res.json()) as RunResult;
  return data;
}
