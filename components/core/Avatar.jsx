import React from 'react';

/**
 * 3Lowz — Avatar
 * Monochrome portrait frame. The brand portrait reads as cool B&W;
 * a teal ring + glow marks it as the identity anchor in the sidebar.
 */
export function Avatar({
  src,
  alt = '',
  size = 'md',
  ring = true,
  mono = true,
  status = null,
  style = {},
  ...rest
}) {
  const dims = { sm: 40, md: 72, lg: 120, xl: 160 }[size] || size;

  return (
    <span
      style={{
        position: 'relative',
        display: 'inline-flex',
        width: dims,
        height: dims,
        flex: '0 0 auto',
        ...style,
      }}
      {...rest}
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: 'var(--radius-circle)',
          filter: mono ? 'grayscale(1) contrast(1.06)' : 'none',
          border: ring ? '2px solid color-mix(in srgb, var(--accent) 60%, transparent)' : '2px solid var(--border-default)',
          boxShadow: ring ? 'var(--glow-md), 0 0 0 6px rgba(45,212,189,0.06)' : 'var(--shadow-md)',
        }}
      />
      {status && (
        <span style={{
          position: 'absolute', bottom: '6%', right: '6%',
          width: Math.max(10, dims * 0.16), height: Math.max(10, dims * 0.16),
          borderRadius: '50%',
          background: status === 'online' ? 'var(--success)' : 'var(--text-muted)',
          border: '2px solid var(--bg-base)',
          boxShadow: status === 'online' ? '0 0 8px var(--success)' : 'none',
        }} />
      )}
    </span>
  );
}
