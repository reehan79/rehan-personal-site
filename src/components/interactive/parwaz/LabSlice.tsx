"use client";

import type { Scenario, LabResult } from "@/src/lib/demo-adapters/parwaz-types";

interface LabSliceProps {
  scenarios: Scenario[];
  selectedId: string | null;
  onSelectScenario: (id: string) => void;
  onRun: () => void;
  onComplete: (result: LabResult) => void;
  isRunning: boolean;
}

export function LabSlice({
  scenarios,
  selectedId,
  onSelectScenario,
  onRun,
  onComplete,
  isRunning,
}: LabSliceProps) {
  const selectedScenario = scenarios.find((s) => s.id === selectedId);

  const handleStart = () => {
    onRun();
    setTimeout(() => {
      const result = {
        metrics: { coverage_min: 65, num_passes: 8, score: 72 },
        params: { inclination_deg: 97, altitude_km: 550 },
        successCondition: selectedScenario?.rubric?.success_condition ?? null,
      };
      onComplete(result);
    }, 500);
  };

  return (
    <div className="space-y-5">
      <div className="rounded-lg border border-[var(--border)] bg-white p-5 shadow-sm">
        <h2 className="font-serif text-base font-semibold text-[var(--heading-color)] mb-3">
          Select Scenario
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {scenarios.map((scenario) => {
            const isSelected = selectedId === scenario.id;
            const timerMinutes = scenario.timer_sec
              ? Math.floor(scenario.timer_sec / 60)
              : null;
            const cond = scenario.rubric?.success_condition;

            return (
              <button
                key={scenario.id}
                type="button"
                onClick={() => onSelectScenario(scenario.id)}
                className={`rounded-lg border p-4 text-left transition-all focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ${
                  isSelected
                    ? "border-[var(--accent)] bg-[var(--off-white)]"
                    : "border-[var(--border)] bg-white hover:bg-[var(--off-white)]"
                }`}
              >
                <h3 className="font-medium text-[var(--heading-color)]">
                  {scenario.title}
                </h3>
                {scenario.description && (
                  <p className="mt-1 text-sm text-[var(--muted)]">
                    {scenario.description}
                  </p>
                )}
                {scenario.goal_text && (
                  <p className="mt-2 text-sm text-[var(--body-text)]">
                    {scenario.goal_text}
                  </p>
                )}
                <div className="mt-3 flex flex-wrap gap-2 text-xs text-[var(--muted)]">
                  {scenario.target_city && (
                    <span>City: {scenario.target_city}</span>
                  )}
                  {timerMinutes && <span>Time: {timerMinutes} min</span>}
                  {cond && (
                    <span>
                      Goal: {cond.type} ≥ {cond.threshold}
                      {cond.type === "coverage" ? "%" : ""}
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {selectedScenario && (
        <div className="rounded-lg border border-[var(--border)] bg-white p-5 shadow-sm">
          <h3 className="font-serif text-base font-semibold text-[var(--heading-color)] mb-2">
            {selectedScenario.title}
          </h3>
          <p className="text-sm text-[var(--muted)] mb-4">
            {selectedScenario.description}
          </p>
          <button
            type="button"
            onClick={handleStart}
            disabled={isRunning}
            className="w-full rounded-md bg-[var(--navy-900)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 disabled:opacity-50"
          >
            {isRunning ? "Running…" : "Start Challenge"}
          </button>
        </div>
      )}
    </div>
  );
}
