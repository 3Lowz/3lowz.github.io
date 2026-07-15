import React from 'react';

export interface AvatarProps {
  src: string;
  alt?: string;
  /** Preset (sm 40 / md 72 / lg 120 / xl 160) or a number in px. @default 'md' */
  size?: 'sm' | 'md' | 'lg' | 'xl' | number;
  /** Teal accent ring + glow. @default true */
  ring?: boolean;
  /** Render the portrait in monochrome (brand default). @default true */
  mono?: boolean;
  /** Presence dot. */
  status?: 'online' | 'offline' | null;
  style?: React.CSSProperties;
}

/** Monochrome portrait frame — the identity anchor. */
export function Avatar(props: AvatarProps): JSX.Element;
