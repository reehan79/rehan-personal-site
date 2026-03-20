"use client";

import { useState } from "react";
import type { QuizQuestion } from "@/src/lib/demo-adapters/parwaz-types";

interface QuizResponse {
  answer: number;
  is_correct: boolean;
}

interface QuizSliceProps {
  questions: QuizQuestion[];
  onComplete: (correctCount: number, totalCount: number) => void;
}

export function QuizSlice({ questions, onComplete }: QuizSliceProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState<Map<string, QuizResponse>>(new Map());

  const currentQuestion = questions[currentIndex];
  const currentResponse = currentQuestion
    ? responses.get(currentQuestion.id)
    : undefined;
  const isLastQuestion = currentIndex === questions.length - 1;
  const canViewResults =
    isLastQuestion && currentResponse !== undefined;

  const handleAnswer = (answerIndex: number) => {
    if (!currentQuestion || responses.has(currentQuestion.id)) return;

    const isCorrect = answerIndex === currentQuestion.correct_answer;
    setResponses(
      new Map(responses.set(currentQuestion.id, { answer: answerIndex, is_correct: isCorrect }))
    );
  };

  const handleNext = () => {
    if (canViewResults) {
      const correctCount = Array.from(responses.values()).filter(
        (r) => r.is_correct
      ).length;
      onComplete(correctCount, questions.length);
    } else if (currentIndex < questions.length - 1) {
      setCurrentIndex((i) => i + 1);
    }
  };

  if (questions.length === 0) {
    return (
      <div className="rounded-lg border border-[var(--border)] bg-white p-6 text-center text-[var(--muted)]">
        No questions available.
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-[var(--border)] bg-white p-6 shadow-sm">
      <h2 className="font-serif text-base font-semibold text-[var(--heading-color)] mb-2">
        Quiz
      </h2>
      <p className="text-sm text-[var(--muted)] mb-4">
        Question {currentIndex + 1} of {questions.length}
      </p>

      <div className="text-lg font-medium text-[var(--body-text)] mb-4">
        {currentQuestion.question}
      </div>

      <div className="space-y-2">
        {currentQuestion.options.map((option, idx) => {
          const isSelected = currentResponse?.answer === idx;
          const isCorrect = idx === currentQuestion.correct_answer;
          const showFeedback = currentResponse !== undefined;

          let btnClass =
            "w-full rounded-md border px-4 py-3 text-left text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[var(--accent)] ";
          if (showFeedback) {
            if (isCorrect) {
              btnClass += "border-green-500 bg-green-50 text-green-800";
            } else if (isSelected) {
              btnClass += "border-red-500 bg-red-50 text-red-800";
            } else {
              btnClass +=
                "border-[var(--border)] bg-[var(--off-white)] text-[var(--muted)]";
            }
          } else if (isSelected) {
            btnClass += "border-[var(--accent)] bg-[var(--off-white)]";
          } else {
            btnClass +=
              "border-[var(--border)] bg-white hover:bg-[var(--off-white)]";
          }

          return (
            <button
              key={idx}
              type="button"
              onClick={() => handleAnswer(idx)}
              disabled={showFeedback}
              className={btnClass}
            >
              <span className="mr-2 font-medium">
                {String.fromCharCode(65 + idx)}.
              </span>
              {option}
              {showFeedback && isCorrect && (
                <span className="ml-2 text-green-600">✓</span>
              )}
              {showFeedback && isSelected && !isCorrect && (
                <span className="ml-2 text-red-600">✗</span>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setCurrentIndex((i) => Math.max(0, i - 1))}
          disabled={currentIndex === 0}
          className="rounded-md border border-[var(--border)] px-4 py-2 text-sm text-[var(--body-text)] hover:bg-[var(--off-white)] disabled:opacity-50"
        >
          Previous
        </button>

        {currentResponse && (
          <span className="text-sm text-[var(--muted)]">
            {currentResponse.is_correct ? "Correct!" : "Incorrect"}
          </span>
        )}

        <button
          type="button"
          onClick={handleNext}
          disabled={!currentResponse}
          className="rounded-md bg-[var(--navy-900)] px-4 py-2 text-sm font-medium text-white hover:opacity-90 disabled:opacity-50"
        >
          {canViewResults ? "View Results" : "Next"}
        </button>
      </div>
    </div>
  );
}
