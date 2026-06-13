import React from 'react';
import { Eyebrow } from './Eyebrow.jsx';

/**
 * 3Lowz — SectionHeading
 * Eyebrow + large display title. Used to open each resume section
 * (ABOUT / SKILLS / EXPERIENCES …).
 */
export function SectionHeading({ title, eyebrow, index = null, align = 'left', style = {}, ...rest }) {
  return (
    <header
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
        alignItems: align === 'center' ? 'center' : 'flex-start',
        textAlign: align,
        marginBottom: 'var(--space-6)',
        ...style,
      }}
      {...rest}
    >
      {eyebrow && <Eyebrow index={index}>{eyebrow}</Eyebrow>}
      <h2 style={{
        margin: 0,
        fontFamily: 'var(--font-heading)',
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--weight-bold)',
        letterSpacing: 'var(--tracking-display)',
        lineHeight: 'var(--leading-tight)',
        color: 'var(--text-primary)',
      }}>
        {title}
      </h2>
    </header>
  );
}
