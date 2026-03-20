"use client";

import Image from "next/image";
import { useState } from "react";
import { Section } from "./Section";

interface ProjectImageProps {
  src: string;
  alt: string;
}

export function ProjectImage({ src, alt }: ProjectImageProps) {
  const [error, setError] = useState(false);

  if (error) {
    return null;
  }

  return (
    <Section>
      <div className="relative mx-auto max-w-2xl aspect-video overflow-hidden rounded-md bg-[var(--border)]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          unoptimized
          onError={() => setError(true)}
        />
      </div>
    </Section>
  );
}
