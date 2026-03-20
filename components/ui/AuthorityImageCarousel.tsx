"use client";

import { useState, useEffect } from "react";
import type { AuthorityImage } from "@/lib/content/types";

const AUTO_ADVANCE_MS = 7000;

interface AuthorityImageCarouselProps {
  images: AuthorityImage[];
}

function PlaceholderSlide({ caption }: { caption?: string }) {
  return (
    <div
      className="flex aspect-[4/3] w-full items-center justify-center bg-[var(--border)] text-[var(--muted)]"
      aria-hidden
    >
      <span className="text-[0.75rem] font-medium">{caption || "Image"}</span>
    </div>
  );
}

export function AuthorityImageCarousel({ images }: AuthorityImageCarouselProps) {
  const [index, setIndex] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
      setError(false);
    }, AUTO_ADVANCE_MS);
    return () => clearInterval(id);
  }, [images.length]);

  useEffect(() => {
    setError(false);
  }, [index]);

  if (images.length === 0) return null;

  const current = images[index];
  const caption = current.caption || current.label || "";
  const showPlaceholder = !current.image || error;

  return (
    <div className="w-full" aria-label="Authority images">
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md bg-[var(--border)] ring-1 ring-[var(--border)]">
        {current.image && !showPlaceholder ? (
          <img
            key={current.id}
            src={current.image}
            alt={caption}
            className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
            onError={() => setError(true)}
          />
        ) : (
          <PlaceholderSlide caption={caption} />
        )}
      </div>
      {caption && (
        <p className="mt-1.5 text-[0.6875rem] font-medium text-[var(--muted)] tracking-wide">
          {caption}
        </p>
      )}
      {images.length > 1 && (
        <div className="mt-2 flex justify-center gap-1" aria-hidden>
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              className={`h-1 rounded-full transition-colors ${
                i === index ? "w-3 bg-[var(--slate-600)]" : "w-1 bg-[var(--border)]"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
