"use client";

import type { TimeseriesPoint } from "@/src/lib/demo-adapters/ngn-types";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

interface LatencyChartProps {
  timeseries: TimeseriesPoint[];
  scenarioName: string;
}

export function LatencyChart({ timeseries, scenarioName }: LatencyChartProps) {
  const data = timeseries.map((p) => ({ t: p.t, latencyMs: p.latencyMs }));

  return (
    <div className="rounded-lg border border-[var(--border)] bg-white p-5">
      <h3 className="font-serif text-sm font-semibold text-[var(--heading-color)]">
        Latency over Time — {scenarioName}
      </h3>
      <div className="mt-3 h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 5, right: 10, left: 36, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
            <XAxis
              dataKey="t"
              tick={{ fontSize: 11 }}
              tickFormatter={(v) => `${v}s`}
            />
            <YAxis
              width={36}
              tick={{ fontSize: 11 }}
              tickFormatter={(v) => `${v}`}
            />
            <Tooltip
              formatter={(value) => [typeof value === "number" ? `${value.toFixed(2)} ms` : value, "Latency"]}
              labelFormatter={(t) => `Time: ${t}s`}
              contentStyle={{
                fontSize: "11px",
                border: "1px solid var(--border)",
                borderRadius: "6px",
              }}
            />
            <Line
              type="monotone"
              dataKey="latencyMs"
              stroke="var(--link-color)"
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
