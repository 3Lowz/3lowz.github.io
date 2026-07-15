import React from 'react';

/**
 * 3Lowz — Eyebrow
 * Mono uppercase tracked label — the developer "signature" voice used
 * above section titles and as small metadata kickers. Optional index
 * number rendered as a code-style prefix (e.g. "02 /").
 */
export function Eyebrow({ children, index = null, color = 'var(--accent)', style = {}, ...rest }) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 8,
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        fontWeight: 'var(--weight-medium)',
        letterSpacing: 'var(--tracking-eyebrow)',
        textTransform: 'uppercase',
        color,
        ...style,
      }}
      {...rest}
    >
      {index != null && (
        <span style={{ color: 'var(--text-faint)' }}>{index}</span>
      )}
      <span style={{
        width: 18, height: 1, background: 'currentColor', opacity: 0.6, display: 'inline-block',
      }} />
      {children}
    </span>
  );
}
