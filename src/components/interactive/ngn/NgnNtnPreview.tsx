"use client";

import { useState } from "react";
import type { RunResult, ScenarioId } from "@/src/lib/demo-adapters/ngn-types";
import { getScenarioIds, loadRunResult } from "@/src/lib/demo-adapters/ngn";
import { PreviewDisclaimer } from "@/src/components/interactive/shared/PreviewDisclaimer";
import { KPICards } from "./KPICards";
import { EventsTimeline } from "./EventsTimeline";
import { LatencyChart } from "./LatencyChart";

const SCENARIO_LABELS: Record<ScenarioId, string> = {
  baseline: "Baseline",
  "emergency-load": "Emergency Load",
  "satellite-fade": "Satellite Fade",
};

export function NgnNtnPreview() {
  const [scenarioId, setScenarioId] = useState<ScenarioId>("baseline");
  const [isRunning, setIsRunning] = useState(false);
  const [run, setRun] = useState<RunResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const scenarioIds = getScenarioIds();

  const handleRun = async () => {
    setError(null);
    setRun(null);
    setIsRunning(true);
    try {
      await new Promise((r) => setTimeout(r, 600));
      const result = await loadRunResult(scenarioId);
      setRun(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load scenario");
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-6">
        <div className="min-w-0 flex-1">
          <label
            htmlFor="scenario-select"
            className="block text-sm font-medium text-[var(--heading-color)]"
          >
            Scenario
          </label>
          <select
            id="scenario-select"
            value={scenarioId}
            onChange={(e) => setScenarioId(e.target.value as ScenarioId)}
            disabled={isRunning}
            className="mt-1 block w-full rounded-md border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--body-text)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] disabled:opacity-60"
          >
            {scenarioIds.map((id) => (
              <option key={id} value={id}>
                {SCENARIO_LABELS[id]}
              </option>
            ))}
          </select>
        </div>
        <button
          type="button"
          onClick={handleRun}
          disabled={isRunning}
          className="inline-flex items-center justify-center rounded-md bg-[var(--navy-900)] px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 disabled:opacity-50"
        >
          {isRunning ? "Running…" : "Run Simulation"}
        </button>
      </div>

      {error && (
        <div className="rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-800">
          {error}
        </div>
      )}

      {isRunning && !run && (
        <div className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--off-white)] p-4">
          <div className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--navy-900)]" />
          <p className="text-sm text-[var(--muted)]">Loading…</p>
        </div>
      )}

      {run && !isRunning && (
        <div className="space-y-5">
          <KPICards kpis={run.summaryKPIs} timeseries={run.timeseries} />
          <LatencyChart timeseries={run.timeseries} scenarioName={run.scenarioName} />
          <EventsTimeline events={run.events} />
          <div className="rounded-lg border border-[var(--border)] bg-[var(--off-white)] p-5">
            <h3 className="font-serif text-sm font-semibold text-[var(--heading-color)]">
              Run Summary
            </h3>
            <p className="mt-2 text-sm text-[var(--muted)]">
              Run ID: {run.runId} · Scenario: {run.scenarioName} ·{" "}
              {run.timeseries.length} data points · {run.events.length} events
            </p>
          </div>
        </div>
      )}

      {!run && !isRunning && !error && (
        <div className="rounded-lg border-2 border-dashed border-[var(--border)] bg-[var(--off-white)] p-6 text-center">
          <p className="text-sm text-[var(--muted)]">
            Select a scenario and click Run Simulation to view results.
          </p>
        </div>
      )}

      <PreviewDisclaimer />
    </div>
  );
}
