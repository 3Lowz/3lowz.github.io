import React from 'react';

export interface CardProps {
  children: React.ReactNode;
  /** @default 'solid' */
  variant?: 'solid' | 'glass' | 'glow';
  /** Lift + glow on hover. @default false */
  interactive?: boolean;
  /** @default 'md' */
  padding?: 'none' | 'sm' | 'md' | 'lg';
  style?: React.CSSProperties;
}

/**
 * Surface container with top-light edge; glass & glow variants.
 * @startingPoint section="Core" subtitle="Surface container" viewport="700x240"
 */
export function Card(props: CardProps): JSX.Element;
