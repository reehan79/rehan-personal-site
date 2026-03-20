"use client";

import type { SimulationEvent } from "@/src/lib/demo-adapters/ngn-types";
import { formatTimestamp, getEventDisplayInfo } from "@/src/lib/demo-adapters/ngn-runData";

interface EventsTimelineProps {
  events: SimulationEvent[];
}

export function EventsTimeline({ events }: EventsTimelineProps) {
  const sorted = [...events].sort((a, b) => a.timestamp - b.timestamp);

  if (sorted.length === 0) {
    return (
      <div className="rounded-lg border border-[var(--border)] bg-[var(--off-white)] p-4">
        <h3 className="font-serif text-sm font-semibold text-[var(--heading-color)]">
          Events Timeline
        </h3>
        <p className="mt-2 text-sm text-[var(--muted)]">No events recorded</p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-[var(--border)] bg-[var(--off-white)] p-4">
      <h3 className="font-serif text-sm font-semibold text-[var(--heading-color)]">
        Events Timeline
      </h3>
      <div className="mt-3 space-y-3">
        {sorted.map((event, i) => {
          const { label, color, icon } = getEventDisplayInfo(event.type);
          const meta = event.metadata ?? {};
          return (
            <div key={i} className="flex gap-3">
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 border-[var(--border)] bg-white text-sm ${color}`}
              >
                {icon}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-medium text-[var(--heading-color)]">{label}</span>
                  <span className="text-xs text-[var(--muted)]">
                    {formatTimestamp(event.timestamp)}
                  </span>
                </div>
                {Object.keys(meta).length > 0 && (
                  <div className="mt-0.5 text-xs text-[var(--muted)]">
                    {Object.entries(meta).map(([k, v]) => (
                      <span key={k}>
                        {k}: {typeof v === "object" ? JSON.stringify(v) : String(v)}{" "}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
