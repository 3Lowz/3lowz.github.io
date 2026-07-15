import React from 'react';

export interface SectionHeadingProps {
  title: React.ReactNode;
  /** Mono kicker above the title. */
  eyebrow?: React.ReactNode;
  /** Code-style index prefix on the eyebrow. */
  index?: string | number | null;
  /** @default 'left' */
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}

/** Eyebrow + display title that opens each resume section. */
export function SectionHeading(props: SectionHeadingProps): JSX.Element;
