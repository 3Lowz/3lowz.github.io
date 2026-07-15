import React from 'react';

/**
 * 3Lowz — Badge
 * Compact status / count indicator. Optional leading dot.
 */
export function Badge({
  children,
  tone = 'neutral',
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: { bg: 'var(--surface-raised)', fg: 'var(--text-secondary)', dotc: 'var(--text-muted)' },
    accent:  { bg: 'var(--accent-soft)', fg: 'var(--accent-bright)', dotc: 'var(--accent)' },
    success: { bg: 'color-mix(in srgb, var(--success) 14%, transparent)', fg: 'var(--success)', dotc: 'var(--success)' },
    warning: { bg: 'color-mix(in srgb, var(--warning) 14%, transparent)', fg: 'var(--warning)', dotc: 'var(--warning)' },
    danger:  { bg: 'color-mix(in srgb, var(--danger) 14%, transparent)', fg: 'var(--danger)', dotc: 'var(--danger)' },
  };
  const t = tones[tone];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        padding: '3px 10px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        fontWeight: 'var(--weight-medium)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        background: t.bg,
        color: t.fg,
        borderRadius: 'var(--radius-pill)',
        lineHeight: 1,
        ...style,
      }}
      {...rest}
    >
      {dot && (
        <span style={{
          width: 6, height: 6, borderRadius: '50%',
          background: t.dotc,
          boxShadow: tone === 'success' ? '0 0 8px var(--success)' : 'none',
        }} />
      )}
      {children}
    </span>
  );
}
