/**
 * Scenario success evaluation. Ported from parwaz-mvp-before_cleanup.
 * Pure logic; no external deps.
 */

import type { SuccessCondition } from "@/src/lib/demo-adapters/parwaz-types";

export interface SimulationMetrics {
  coverage_min?: number;
  num_passes?: number;
  max_elev?: number;
  score?: number;
}

export interface OrbitParams {
  inclination_deg?: number;
  altitude_km?: number;
  [key: string]: unknown;
}

export interface EvaluationResult {
  success: boolean;
  conditionMet: boolean;
  message: string;
  medal?: "gold" | "silver" | "bronze" | null;
}

export function evaluateSuccess(
  metrics: SimulationMetrics,
  params: OrbitParams,
  successCondition: SuccessCondition | null | undefined,
  score?: number
): EvaluationResult {
  if (!successCondition) {
    return {
      success: true,
      conditionMet: true,
      message: "Challenge completed!",
      medal: null,
    };
  }

  let conditionMet = false;
  let value = 0;

  switch (successCondition.type) {
    case "coverage":
      value = metrics.coverage_min ?? 0;
      conditionMet = value >= successCondition.threshold;
      break;
    case "score":
      value = score ?? metrics.score ?? 0;
      conditionMet = value >= successCondition.threshold;
      break;
    case "passes":
      value = metrics.num_passes ?? 0;
      conditionMet = value >= successCondition.threshold;
      break;
    default:
      return {
        success: false,
        conditionMet: false,
        message: "Unknown success condition type",
        medal: null,
      };
  }

  if (conditionMet) {
    if (successCondition.requires_polar) {
      const isPolar =
        params.inclination_deg !== undefined && params.inclination_deg >= 85;
      conditionMet = conditionMet && isPolar;
    }
    if (successCondition.requires_sso) {
      const isSSO =
        params.inclination_deg !== undefined &&
        params.inclination_deg >= 96 &&
        params.inclination_deg <= 100;
      conditionMet = conditionMet && isSSO;
    }
  }

  let medal: "gold" | "silver" | "bronze" | null = null;
  if (score !== undefined) {
    if (score >= 90) medal = "gold";
    else if (score >= 75) medal = "silver";
    else if (score >= 60) medal = "bronze";
  }

  let message = "";
  if (conditionMet) {
    message = `Success! Achieved ${value.toFixed(1)}${successCondition.type === "coverage" ? "%" : ""}`;
    if (successCondition.requires_polar && params.inclination_deg !== undefined) {
      message += ` with polar orbit (${params.inclination_deg.toFixed(1)}°)`;
    }
    if (successCondition.requires_sso && params.inclination_deg !== undefined) {
      message += ` with sun-synchronous orbit (${params.inclination_deg.toFixed(1)}°)`;
    }
  } else {
    message = `Not quite! Got ${value.toFixed(1)}${successCondition.type === "coverage" ? "%" : ""}, need ${successCondition.threshold}${successCondition.type === "coverage" ? "%" : ""}`;
    if (
      successCondition.requires_polar &&
      params.inclination_deg !== undefined &&
      params.inclination_deg < 85
    ) {
      message += ` (polar orbit required: ≥85°, got ${params.inclination_deg.toFixed(1)}°)`;
    }
    if (
      successCondition.requires_sso &&
      params.inclination_deg !== undefined &&
      (params.inclination_deg < 96 || params.inclination_deg > 100)
    ) {
      message += ` (sun-synchronous required: 96-100°, got ${params.inclination_deg.toFixed(1)}°)`;
    }
  }

  return {
    success: conditionMet,
    conditionMet,
    message,
    medal,
  };
}

export function getMedalEmoji(medal: "gold" | "silver" | "bronze" | null): string {
  switch (medal) {
    case "gold":
      return "🥇";
    case "silver":
      return "🥈";
    case "bronze":
      return "🥉";
    default:
      return "🏅";
  }
}
