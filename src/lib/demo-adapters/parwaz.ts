/**
 * Parwaz MVP demo adapter — load representative data from public/demo-data/.
 * No API, no backend, no Supabase, no licensing.
 */

import type { QuizQuestion, Scenario } from "./parwaz-types";

const QUIZ_PATH = "/demo-data/parwaz-mvp/quiz.json";
const SCENARIOS_PATH = "/demo-data/parwaz-mvp/scenarios.json";

export async function loadQuizQuestions(): Promise<QuizQuestion[]> {
  const res = await fetch(QUIZ_PATH);
  if (!res.ok) {
    throw new Error("Failed to load quiz questions");
  }
  const data = await res.json();
  return Array.isArray(data) ? data : data.questions ?? [];
}

export async function loadScenarios(): Promise<Scenario[]> {
  const res = await fetch(SCENARIOS_PATH);
  if (!res.ok) {
    throw new Error("Failed to load scenarios");
  }
  const data = await res.json();
  return Array.isArray(data) ? data : data.scenarios ?? [];
}
