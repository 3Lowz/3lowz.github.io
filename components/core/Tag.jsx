import React from 'react';

/**
 * 3Lowz — Tag
 * The tech-stack chip used everywhere on the resume. Mono label,
 * optional leading icon (devicon / bootstrap-icon). The "accent"
 * tone highlights a primary technology.
 */
export function Tag({
  children,
  icon = null,
  tone = 'default',
  size = 'md',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '2px 8px', fontSize: '0.7rem', gap: 5 },
    md: { padding: '4px 11px', fontSize: 'var(--text-xs)', gap: 6 },
  };

  const tones = {
    default: {
      background: 'var(--surface-raised)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-subtle)',
    },
    accent: {
      background: 'var(--accent-soft)',
      color: 'var(--accent-bright)',
      border: '1px solid color-mix(in srgb, var(--accent) 35%, transparent)',
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid var(--border-default)',
    },
  };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: sizes[size].gap,
        fontFamily: 'var(--font-mono)',
        fontWeight: 'var(--weight-medium)',
        letterSpacing: '0.02em',
        borderRadius: 'var(--radius-sm)',
        lineHeight: 1,
        whiteSpace: 'nowrap',
        ...sizes[size],
        ...tones[tone],
        ...style,
      }}
      {...rest}
    >
      {icon && <span style={{ display: 'inline-flex', fontSize: '1.15em', opacity: 0.95 }}>{icon}</span>}
      {children}
    </span>
  );
}
