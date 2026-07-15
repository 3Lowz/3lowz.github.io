import React from 'react';

export interface BadgeProps {
  children: React.ReactNode;
  /** @default 'neutral' */
  tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger';
  /** Show a leading status dot. */
  dot?: boolean;
  style?: React.CSSProperties;
}

/** Pill status / availability indicator (e.g. "Available for work"). */
export function Badge(props: BadgeProps): JSX.Element;
