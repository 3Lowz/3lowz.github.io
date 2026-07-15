import React from 'react';

export interface TagProps {
  children: React.ReactNode;
  /** Optional leading icon (devicon / bootstrap-icon node). */
  icon?: React.ReactNode;
  /** @default 'default' */
  tone?: 'default' | 'accent' | 'outline';
  /** @default 'md' */
  size?: 'sm' | 'md';
  style?: React.CSSProperties;
}

/**
 * Tech-stack chip — the signature metadata element of the resume.
 * @startingPoint section="Core" subtitle="Tech-stack chips" viewport="700x150"
 */
export function Tag(props: TagProps): JSX.Element;
