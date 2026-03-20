"use client";

import Image from "next/image";
import { useState } from "react";

interface ImageWithFallbackProps {
  src: string;
  alt: string;
  fill?: boolean;
  className?: string;
}

export function ImageWithFallback({
  src,
  alt,
  fill = true,
  className = "",
}: ImageWithFallbackProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-[var(--border)] text-[var(--slate-400)] ${className}`}
      >
        <span className="text-sm">Image unavailable</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      className={className}
      unoptimized
      onError={() => setError(true)}
    />
  );
}
