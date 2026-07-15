import React from 'react';

export interface IconButtonProps {
  /** Icon node (e.g. <i className="bi bi-github" />). */
  icon: React.ReactNode;
  /** Accessible label / tooltip. */
  label: string;
  /** @default 'ghost' */
  variant?: 'ghost' | 'outline' | 'solid';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** @default 'rounded' */
  shape?: 'rounded' | 'circle';
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}

/** Icon-only control for social links and toolbar actions. */
export function IconButton(props: IconButtonProps): JSX.Element;
