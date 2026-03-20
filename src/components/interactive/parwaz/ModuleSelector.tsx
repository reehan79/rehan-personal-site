"use client";

import type { ModuleId } from "@/src/lib/demo-adapters/parwaz-types";

interface ModuleSelectorProps {
  selectedModule: ModuleId;
  onSelect: (id: ModuleId) => void;
}

const MODULES: { id: ModuleId; title: string; desc: string; tag: string }[] = [
  {
    id: "orbit",
    title: "Orbit Challenge",
    desc: "Create classroom races and challenges. Students design satellite orbits to keep cities online.",
    tag: "Orbit",
  },
  {
    id: "lab",
    title: "Mission Labs",
    desc: "AI-graded mission labs with real-time feedback. Students solve orbital mechanics problems.",
    tag: "Lab",
  },
  {
    id: "quiz",
    title: "Teacher Co-Pilot",
    desc: "Interactive quizzes and exit assessments. Reinforce learning with instant feedback.",
    tag: "Quiz",
  },
];

export function ModuleSelector({ selectedModule, onSelect }: ModuleSelectorProps) {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {MODULES.map((mod) => (
        <button
          key={mod.id}
          type="button"
          onClick={() => onSelect(mod.id)}
          className={`rounded-lg border p-5 text-left shadow-sm transition-all hover:shadow-md focus:outline-none focus:ring-2 focus:ring-[var(--accent)] focus:ring-offset-2 ${
            selectedModule === mod.id
              ? "border-[var(--accent)] bg-[var(--off-white)]"
              : "border-[var(--border)] bg-white"
          }`}
        >
          <span className="inline-block text-[10px] font-medium uppercase tracking-wider text-[var(--muted)] mb-2">
            {mod.tag}
          </span>
          <h3 className="font-serif text-base font-semibold text-[var(--heading-color)]">
            {mod.title}
          </h3>
          <p className="mt-2 text-sm text-[var(--muted)]">{mod.desc}</p>
        </button>
      ))}
    </div>
  );
}
