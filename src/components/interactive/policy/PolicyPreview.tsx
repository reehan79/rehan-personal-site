"use client";

import { useState } from "react";
import { marked } from "marked";
import type { PolicyRunResult, PolicyScenarioId } from "@/src/lib/demo-adapters/policy-types";
import { getPolicyScenarioIds, loadPolicyRun } from "@/src/lib/demo-adapters/policy";
import { PreviewDisclaimer } from "@/src/components/interactive/shared/PreviewDisclaimer";
import { PolicyBarChart } from "./PolicyBarChart";

const SCENARIO_LABELS: Record<PolicyScenarioId, string> = {
  baseline: "Baseline",
  "shock-event": "Shock Event",
  "compliance-mixed": "Compliance Mixed",
};

const ContentCard = ({
  title,
  children,
}: {
  title: string;
  children?: React.ReactNode;
}) => (
  <div className="rounded-lg border border-[var(--border)] bg-white p-5 shadow-sm">
    <h2 className="font-serif text-base font-semibold text-[var(--heading-color)] mb-3">
      {title}
    </h2>
    {children}
  </div>
);

export function PolicyPreview() {
  const [scenarioId, setScenarioId] = useState<PolicyScenarioId>("baseline");
  const [isRunning, setIsRunning] = useState(false);
  const [run, setRun] = useState<PolicyRunResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  const scenarioIds = getPolicyScenarioIds();

  const handleRun = async () => {
    setError(null);
    setRun(null);
    setIsRunning(true);
    try {
      await new Promise((r) => setTimeout(r, 500));
      const result = await loadPolicyRun(scenarioId);
      setRun(result);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load scenario");
    } finally {
      setIsRunning(false);
    }
  };

  return (
    <div className="space-y-5">
      <ContentCard title="Configuration">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:gap-4">
          <div className="min-w-0 flex-1">
            <label
              htmlFor="policy-scenario"
              className="block text-sm font-medium text-[var(--heading-color)] mb-2"
            >
              Scenario
            </label>
            <select
              id="policy-scenario"
              value={scenarioId}
              onChange={(e) => setScenarioId(e.target.value as PolicyScenarioId)}
              disabled={isRunning}
              className="block w-full rounded-md border border-[var(--border)] bg-white px-3 py-2 text-sm text-[var(--body-text)] focus:border-[var(--accent)] focus:outline-none focus:ring-1 focus:ring-[var(--accent)] disabled:opacity-60"
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
            {isRunning ? "Running…" : "Run Compare"}
          </button>
        </div>
        {error && (
          <p className="mt-3 text-sm text-red-600" role="alert">
            {error}
          </p>
        )}
      </ContentCard>

      {run && !isRunning && (
        <div className="space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="font-serif text-base font-semibold text-[var(--heading-color)]">
              Run {run.run_id}
            </h2>
          </div>

          <ContentCard title="Summary Table">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-[var(--border)]">
                    <th className="text-left py-2 px-2 font-medium text-[var(--heading-color)]">
                      Regime
                    </th>
                    <th className="text-right py-2 px-2 font-medium text-[var(--heading-color)]">
                      n_events
                    </th>
                    <th className="text-right py-2 px-2 font-medium text-[var(--heading-color)]">
                      n_action_required
                    </th>
                    <th className="text-right py-2 px-2 font-medium text-[var(--heading-color)]">
                      n_complied
                    </th>
                    <th className="text-right py-2 px-2 font-medium text-[var(--heading-color)]">
                      compliance_rate
                    </th>
                    <th className="text-right py-2 px-2 font-medium text-[var(--heading-color)]">
                      total_penalty
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {run.metrics.map((m) => (
                    <tr key={m.regime} className="border-b border-[var(--border)]">
                      <td className="py-2 px-2 font-mono text-[var(--slate-700)]">
                        {m.regime}
                      </td>
                      <td className="py-2 px-2 text-right text-[var(--muted)]">
                        {m.n_events}
                      </td>
                      <td className="py-2 px-2 text-right text-[var(--muted)]">
                        {m.n_action_required}
                      </td>
                      <td className="py-2 px-2 text-right text-[var(--muted)]">
                        {m.n_complied}
                      </td>
                      <td className="py-2 px-2 text-right text-[var(--muted)]">
                        {(m.compliance_rate * 100).toFixed(1)}%
                      </td>
                      <td className="py-2 px-2 text-right text-[var(--muted)]">
                        {m.total_penalty.toFixed(2)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ContentCard>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PolicyBarChart
              data={run.metrics.map((m) => ({
                label: m.regime,
                value: m.n_action_required,
              }))}
              title="High-risk count (n_action_required) by regime"
              valueLabel="Events requiring action (R ≥ τ)"
            />
            <PolicyBarChart
              data={run.metrics.map((m) => ({
                label: m.regime,
                value: m.n_complied,
              }))}
              title="Actions executed (n_complied) by regime"
              valueLabel="Actions actually completed"
            />
          </div>

          {run.event_summary && (
            <ContentCard title="Event Summary">
              <p className="text-sm text-[var(--body-text)] leading-relaxed">
                {run.event_summary}
              </p>
            </ContentCard>
          )}

          {run.recommendation && (
            <ContentCard title="Recommendation">
              <p className="text-sm text-[var(--heading-color)] font-medium leading-relaxed">
                {run.recommendation}
              </p>
            </ContentCard>
          )}

          <ContentCard title="Evidence Report">
            <div
              className="prose prose-sm max-w-none text-[var(--body-text)] text-sm leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: marked.parse(run.evidence, { async: false }) as string,
              }}
            />
          </ContentCard>
        </div>
      )}

      {!run && !isRunning && !error && (
        <div className="rounded-lg border-2 border-dashed border-[var(--border)] bg-[var(--off-white)] p-6 text-center">
          <p className="text-sm text-[var(--muted)]">
            Select a scenario and click Run Compare to view results.
          </p>
        </div>
      )}

      <PreviewDisclaimer />
    </div>
  );
}
