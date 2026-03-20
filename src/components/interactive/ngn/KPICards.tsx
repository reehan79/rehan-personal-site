"use client";

import type { SummaryKPIs, TimeseriesPoint } from "@/src/lib/demo-adapters/ngn-types";
import {
  LineChart,
  Line,
  ResponsiveContainer,
} from "recharts";

interface KPICardsProps {
  kpis: SummaryKPIs;
  timeseries?: TimeseriesPoint[];
}

function extractSparklineData(
  timeseries: TimeseriesPoint[],
  field: keyof TimeseriesPoint
): Array<{ t: number; value: number }> {
  return timeseries.map((point) => ({
    t: point.t,
    value: (point[field] as number) ?? 0,
  }));
}

function KpiCard({
  title,
  value,
  sparklineData,
}: {
  title: string;
  value: string;
  sparklineData?: Array<{ t: number; value: number }>;
}) {
  return (
    <div className="rounded-lg border border-[var(--border)] bg-white p-5 shadow-sm">
      <p className="text-xs font-medium text-[var(--muted)]">{title}</p>
      <p className="mt-1 text-[0.9375rem] font-semibold text-[var(--heading-color)]">
        {value}
      </p>
      {sparklineData && sparklineData.length > 0 && (
        <div className="mt-2 min-h-[2rem] h-8 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sparklineData} margin={{ top: 2, right: 2, bottom: 2, left: 2 }}>
              <Line
                type="monotone"
                dataKey="value"
                stroke="var(--link-color)"
                strokeWidth={1.5}
                dot={false}
                isAnimationActive={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}

export function KPICards({ kpis, timeseries }: KPICardsProps) {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      <KpiCard
        title="Availability"
        value={`${kpis.availabilityPct.toFixed(2)}%`}
        sparklineData={
          timeseries
            ? timeseries.map((p) => ({
                t: p.t,
                value: p.latencyMs < 100 && p.throughputMbps > 0.1 ? 100 : 0,
              }))
            : undefined
        }
      />
      <KpiCard
        title="Avg Latency"
        value={`${kpis.avgLatencyMs.toFixed(2)} ms`}
        sparklineData={timeseries ? extractSparklineData(timeseries, "latencyMs") : undefined}
      />
      <KpiCard
        title="P95 Latency"
        value={`${kpis.p95LatencyMs.toFixed(2)} ms`}
      />
      <KpiCard
        title="Throughput"
        value={`${kpis.avgThroughputMbps.toFixed(2)} Mbps`}
        sparklineData={timeseries ? extractSparklineData(timeseries, "throughputMbps") : undefined}
      />
      <KpiCard
        title="Handover Success"
        value={`${kpis.handoverSuccessPct.toFixed(2)}%`}
      />
    </div>
  );
}
