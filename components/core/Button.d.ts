import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps {
  /** Visual style. @default 'primary' */
  variant?: ButtonVariant;
  /** @default 'md' */
  size?: ButtonSize;
  /** Leading icon node (e.g. an <i className="bi bi-..."/>). */
  icon?: React.ReactNode;
  /** Trailing icon node. */
  iconRight?: React.ReactNode;
  disabled?: boolean;
  /** Render as an anchor when set. */
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

/**
 * Primary call-to-action button. Mono uppercase label; primary variant
 * carries the teal glow, secondary is glass, ghost is text-only.
 *
 * @startingPoint section="Core" subtitle="Accent, glass & ghost actions" viewport="700x180"
 */
export function Button(props: ButtonProps): JSX.Element;
