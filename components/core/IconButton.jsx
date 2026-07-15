import React from 'react';

/**
 * 3Lowz — IconButton
 * Square/circle icon-only control. Used for social links and toolbar
 * actions. Hover lifts toward the teal accent.
 */
export function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  shape = 'rounded',
  href,
  onClick,
  style = {},
  ...rest
}) {
  const dims = { sm: 32, md: 42, lg: 52 }[size];

  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent',
    },
    outline: {
      background: 'var(--surface-glass)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      backdropFilter: 'var(--blur-glass)',
    },
    solid: {
      background: 'var(--grad-accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent',
      boxShadow: 'var(--glow-sm)',
    },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: dims,
    height: dims,
    fontSize: size === 'lg' ? '1.4rem' : size === 'sm' ? '1rem' : '1.2rem',
    borderRadius: shape === 'circle' ? 'var(--radius-circle)' : 'var(--radius-sm)',
    cursor: 'pointer',
    textDecoration: 'none',
    transition: 'color var(--dur-base) var(--ease-out), background var(--dur-base) var(--ease-out), transform var(--dur-fast) var(--ease-out)',
    ...variants[variant],
    ...style,
  };

  const Comp = href ? 'a' : 'button';

  return (
    <Comp
      href={href}
      onClick={onClick}
      aria-label={label}
      title={label}
      style={base}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        if (variant !== 'solid') e.currentTarget.style.color = 'var(--accent)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        if (variant !== 'solid') e.currentTarget.style.color = variants[variant].color;
      }}
      {...rest}
    >
      {icon}
    </Comp>
  );
}
