import React from 'react';

/**
 * 3Lowz — Button
 * Primary action uses the teal accent with a soft glow; secondary is a
 * glass outline; ghost is text-only. Mono label, slight letter-spacing.
 */
export function Button({
  variant = 'primary',
  size = 'md',
  icon = null,
  iconRight = null,
  disabled = false,
  href,
  onClick,
  children,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '0 14px', height: 34, fontSize: 'var(--text-xs)' },
    md: { padding: '0 20px', height: 42, fontSize: 'var(--text-sm)' },
    lg: { padding: '0 28px', height: 52, fontSize: 'var(--text-base)' },
  };

  const variants = {
    primary: {
      background: 'var(--grad-accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent',
      boxShadow: 'var(--glow-sm)',
    },
    secondary: {
      background: 'var(--surface-glass)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      backdropFilter: 'var(--blur-glass)',
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent',
    },
    danger: {
      background: 'transparent',
      color: 'var(--danger)',
      border: '1px solid color-mix(in srgb, var(--danger) 45%, transparent)',
    },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 'var(--space-2)',
    fontFamily: 'var(--font-mono)',
    fontWeight: 'var(--weight-medium)',
    letterSpacing: '0.04em',
    textTransform: 'uppercase',
    borderRadius: 'var(--radius-sm)',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.45 : 1,
    whiteSpace: 'nowrap',
    transition: 'transform var(--dur-fast) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out)',
    textDecoration: 'none',
    ...sizes[size],
    ...variants[variant],
    ...style,
  };

  const Comp = href ? 'a' : 'button';

  return (
    <Comp
      href={href}
      onClick={disabled ? undefined : onClick}
      disabled={Comp === 'button' ? disabled : undefined}
      style={base}
      onMouseEnter={(e) => { if (!disabled) e.currentTarget.style.transform = 'translateY(-1px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; }}
      {...rest}
    >
      {icon && <span style={{ display: 'inline-flex', fontSize: '1.1em' }}>{icon}</span>}
      {children}
      {iconRight && <span style={{ display: 'inline-flex', fontSize: '1.1em' }}>{iconRight}</span>}
    </Comp>
  );
}
