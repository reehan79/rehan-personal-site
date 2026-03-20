"use client";

interface PolicyBarChartProps {
  data: { label: string; value: number }[];
  title: string;
  valueLabel?: string;
}

export function PolicyBarChart({ data, title, valueLabel }: PolicyBarChartProps) {
  const max = data.length > 0 ? Math.max(...data.map((d) => d.value), 1) : 1;

  return (
    <div className="rounded-lg border border-[var(--border)] bg-white p-5 shadow-sm">
      <h3 className="font-serif text-sm font-semibold text-[var(--heading-color)] mb-3">
        {title}
      </h3>
      <div className="flex items-end gap-2 h-32">
        {data.map(({ label, value }) => (
          <div key={label} className="flex-1 flex flex-col items-center gap-1 min-w-0">
            <div
              className="w-full rounded-t bg-[var(--navy-900)] transition-all"
              style={{
                height: value > 0 ? `max(8px, ${(value / max) * 100}%)` : "0",
              }}
              title={`${label}: ${value}`}
            />
            <span className="text-xs text-[var(--muted)] truncate max-w-full">
              {label}
            </span>
          </div>
        ))}
      </div>
      {valueLabel && (
        <p className="text-xs text-[var(--muted)] mt-1">{valueLabel}</p>
      )}
    </div>
  );
}
