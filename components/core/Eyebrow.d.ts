import React from 'react';

export interface EyebrowProps {
  children: React.ReactNode;
  /** Optional code-style index prefix, e.g. "02". */
  index?: string | number | null;
  /** Label color. @default teal accent */
  color?: string;
  style?: React.CSSProperties;
}

/** Mono uppercase tracked kicker label above headings. */
export function Eyebrow(props: EyebrowProps): JSX.Element;
