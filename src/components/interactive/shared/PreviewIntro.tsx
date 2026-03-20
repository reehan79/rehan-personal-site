import type { PreviewIntroContent } from "@/src/lib/content/preview-intros";

const LABEL_CLASS =
  "mb-1 text-[0.6875rem] font-medium uppercase tracking-wider text-[var(--muted)]";

interface PreviewIntroProps {
  content: PreviewIntroContent;
}

export function PreviewIntro({ content }: PreviewIntroProps) {
  const { title, overview, currentPreview, currentWork, futureDirection, whyItMatters, status, researchTrajectory } =
    content;

  return (
    <div className="space-y-4">
      <h2 className="font-serif text-xl font-semibold text-[var(--heading-color)]">{title}</h2>

      {status && (status.preview || status.research || status.mockNote) && (
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[0.6875rem] text-[var(--muted)]">
          {status.preview && <span>{status.preview}</span>}
          {status.research && (
            <>
              {status.preview && <span aria-hidden>·</span>}
              <span>{status.research}</span>
            </>
          )}
          {status.mockNote && (
            <>
              {(status.preview || status.research) && <span aria-hidden>·</span>}
              <span>{status.mockNote}</span>
            </>
          )}
        </div>
      )}

      <p className="text-sm leading-relaxed text-[var(--body-text)]">{overview}</p>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-4">
          <div>
            <p className={LABEL_CLASS}>What this preview shows</p>
            <p className="text-sm leading-relaxed text-[var(--body-text)]">{currentPreview}</p>
          </div>
          <div className="border-t border-[var(--border)] pt-4">
            <p className={LABEL_CLASS}>Current work</p>
            <p className="text-sm leading-relaxed text-[var(--body-text)]">{currentWork}</p>
          </div>
        </div>
        <div className="space-y-4">
          <div className="pl-3 border-l-2 border-[var(--link-color)]">
            <p className={LABEL_CLASS}>Future direction</p>
            <p className="text-sm leading-relaxed text-[var(--body-text)]">{futureDirection}</p>
          </div>
          <div className="border-t border-[var(--border)] pt-4">
            <p className={LABEL_CLASS}>Why it matters</p>
            <p className="text-sm leading-relaxed text-[var(--body-text)]">{whyItMatters}</p>
          </div>
        </div>
      </div>

      {researchTrajectory && researchTrajectory.length > 0 && (
        <div className="mt-5 pt-5 border-t border-[var(--border)] bg-[var(--off-white)]/40 rounded-md px-3 py-3">
          <p className={`${LABEL_CLASS} mb-2`}>Research Trajectory</p>
          <ul className="grid gap-2.5 sm:grid-cols-2 text-sm leading-relaxed text-[var(--body-text)]">
            {researchTrajectory.map((item, i) => (
              <li key={i} className="pl-3 border-l-2 border-[var(--link-color)]/60">
                {item}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
