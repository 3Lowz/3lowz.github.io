import React from 'react';

/**
 * 3Lowz — Card
 * Surface container with a faint top-light edge. The "glow" variant
 * adds a teal hairline + halo on hover for featured items; "glass"
 * uses backdrop blur for overlay contexts.
 */
export function Card({
  children,
  variant = 'solid',
  interactive = false,
  padding = 'md',
  style = {},
  ...rest
}) {
  const pads = { none: 0, sm: 'var(--space-4)', md: 'var(--space-6)', lg: 'var(--space-7)' };

  const variants = {
    solid: {
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm), var(--edge-light)',
    },
    glass: {
      background: 'var(--surface-glass)',
      border: '1px solid var(--border-default)',
      backdropFilter: 'var(--blur-glass)',
      boxShadow: 'var(--shadow-md)',
    },
    glow: {
      background: 'var(--surface)',
      border: '1px solid color-mix(in srgb, var(--accent) 22%, var(--border-subtle))',
      boxShadow: 'var(--shadow-sm), var(--edge-light)',
    },
  };

  return (
    <div
      style={{
        position: 'relative',
        borderRadius: 'var(--radius-lg)',
        padding: pads[padding],
        transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
        ...variants[variant],
        ...style,
      }}
      onMouseEnter={interactive ? (e) => {
        e.currentTarget.style.transform = 'translateY(-3px)';
        e.currentTarget.style.boxShadow = 'var(--shadow-lg), var(--glow-md)';
        e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--accent) 40%, transparent)';
      } : undefined}
      onMouseLeave={interactive ? (e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = variants[variant].boxShadow;
        e.currentTarget.style.borderColor = variants[variant].border.split(' ').slice(2).join(' ');
      } : undefined}
      {...rest}
    >
      {children}
    </div>
  );
}
