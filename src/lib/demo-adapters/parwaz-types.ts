/**
 * Parwaz MVP demo adapter types. Representative frontend preview; no backend.
 */

export type ModuleId = "orbit" | "lab" | "quiz";

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correct_answer: number;
}

export interface SuccessCondition {
  type: "coverage" | "score" | "passes";
  threshold: number;
  requires_polar?: boolean;
  requires_sso?: boolean;
}

export interface ScenarioRubric {
  success_condition?: SuccessCondition;
}

export interface Scenario {
  id: string;
  title: string;
  description: string | null;
  goal_text: string | null;
  target_city: string | null;
  timer_sec: number | null;
  grade_key: string | null;
  preset_key: string | null;
  rubric: ScenarioRubric;
}

export interface LabResult {
  metrics: { coverage_min?: number; num_passes?: number; score?: number };
  params: { inclination_deg?: number; altitude_km?: number };
  successCondition: SuccessCondition | null;
}
