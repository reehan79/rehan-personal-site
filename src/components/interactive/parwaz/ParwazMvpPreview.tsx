"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import type { ModuleId } from "@/src/lib/demo-adapters/parwaz-types";
import type { QuizQuestion, Scenario, LabResult } from "@/src/lib/demo-adapters/parwaz-types";
import { loadQuizQuestions, loadScenarios } from "@/src/lib/demo-adapters/parwaz";
import { PreviewDisclaimer } from "@/src/components/interactive/shared/PreviewDisclaimer";
import { ModuleSelector } from "./ModuleSelector";
import { QuizSlice } from "./QuizSlice";
import { LabSlice } from "./LabSlice";
import { ResultPanel } from "./ResultPanel";

export function ParwazMvpPreview() {
  const [selectedModule, setSelectedModule] = useState<ModuleId>("quiz");
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [quizComplete, setQuizComplete] = useState(false);
  const [quizCorrect, setQuizCorrect] = useState(0);
  const [quizTotal, setQuizTotal] = useState(0);
  const [labComplete, setLabComplete] = useState(false);
  const [labResult, setLabResult] = useState<LabResult | null>(null);
  const [labRunning, setLabRunning] = useState(false);
  const [labSelectedId, setLabSelectedId] = useState<string | null>(null);
  const [isDataLoaded, setIsDataLoaded] = useState(false);

  useEffect(() => {
    Promise.all([loadQuizQuestions(), loadScenarios()])
      .then(([q, s]) => {
        setQuestions(q);
        setScenarios(s);
        if (s.length > 0 && !labSelectedId) {
          setLabSelectedId(s[0].id);
        }
        setIsDataLoaded(true);
      })
      .catch(() => setError("Failed to load demo data"));
  }, []);

  const handleQuizComplete = (correctCount: number, totalCount: number) => {
    setQuizCorrect(correctCount);
    setQuizTotal(totalCount);
    setQuizComplete(true);
  };

  const handleLabRun = () => {
    setLabRunning(true);
  };

  const handleLabComplete = (result: LabResult) => {
    setLabResult(result);
    setLabComplete(true);
    setLabRunning(false);
  };

  const resetQuiz = () => {
    setQuizComplete(false);
    setQuizCorrect(0);
    setQuizTotal(0);
  };

  const resetLab = () => {
    setLabComplete(false);
    setLabResult(null);
  };

  if (error) {
    return (
      <div className="rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800">
        {error}
      </div>
    );
  }

  if (!isDataLoaded) {
    return (
      <div className="flex items-center gap-3 rounded-lg border border-[var(--border)] bg-[var(--off-white)] p-4">
        <div className="h-4 w-4 animate-spin rounded-full border-2 border-[var(--border)] border-t-[var(--navy-900)]" />
        <p className="text-sm text-[var(--muted)]">Loading…</p>
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="rounded-lg border border-[var(--border)] bg-white p-5 shadow-sm">
        <h2 className="font-serif text-base font-semibold text-[var(--heading-color)]">
          CubeSTEM Orbit Lab
        </h2>
        <p className="mt-2 text-sm text-[var(--body-text)]">
          Classroom satellite challenges. Orbit design, mission labs, and
          quizzes.
        </p>
      </div>

      <div className="rounded-lg border border-[var(--border)] bg-white p-5 shadow-sm">
        <h2 className="font-serif text-base font-semibold text-[var(--heading-color)] mb-4">
          Module Selection
        </h2>
        <ModuleSelector
          selectedModule={selectedModule}
          onSelect={setSelectedModule}
        />
      </div>

      {selectedModule === "orbit" && (
        <div className="rounded-lg border border-[var(--border)] bg-white p-5 shadow-sm">
          <h2 className="font-serif text-base font-semibold text-[var(--heading-color)] mb-2">
            Orbit Challenge
          </h2>
          <p className="text-sm text-[var(--muted)] mb-4">
            Design satellite orbits to keep cities online. Try the full
            interactive preview.
          </p>
          <Link
            href="/interactive/parwaz-orbit"
            className="inline-flex items-center justify-center rounded-md bg-[var(--navy-900)] px-4 py-2 text-sm font-medium text-white hover:opacity-90"
          >
            Open Orbit Preview
          </Link>
        </div>
      )}

      {selectedModule === "quiz" && (
        <>
          {!quizComplete ? (
            <QuizSlice questions={questions} onComplete={handleQuizComplete} />
          ) : (
            <>
              <ResultPanel
                mode="quiz"
                correctCount={quizCorrect}
                totalCount={quizTotal}
              />
              <button
                type="button"
                onClick={resetQuiz}
                className="text-sm text-[var(--accent)] hover:underline"
              >
                Try again
              </button>
            </>
          )}
        </>
      )}

      {selectedModule === "lab" && (
        <>
          {!labComplete ? (
            <LabSlice
              scenarios={scenarios}
              selectedId={labSelectedId}
              onSelectScenario={setLabSelectedId}
              onRun={handleLabRun}
              onComplete={handleLabComplete}
              isRunning={labRunning}
            />
          ) : (
            <>
              <ResultPanel mode="lab" labResult={labResult} />
              <button
                type="button"
                onClick={resetLab}
                className="text-sm text-[var(--accent)] hover:underline"
              >
                Try again
              </button>
            </>
          )}
        </>
      )}

      <PreviewDisclaimer />
    </div>
  );
}
