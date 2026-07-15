// 3Lowz — Hero / About section
const { Button: HButton, Badge: HBadge, Eyebrow: HEyebrow } = window.Ds3LowzDesignSystem_742f16;

function Hero() {
  const R = window.RESUME;
  return (
    <section id="about" style={{
      position: 'relative', minHeight: '100vh',
      display: 'flex', flexDirection: 'column', justifyContent: 'center',
      padding: 'var(--space-10) var(--space-9)', maxWidth: '60rem',
    }}>
      {/* ambient glow */}
      <div aria-hidden style={{
        position: 'absolute', top: '12%', left: '-6%', width: 460, height: 460,
        background: 'radial-gradient(circle, var(--teal-tint) 0%, transparent 65%)',
        filter: 'blur(20px)', pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ marginBottom: 'var(--space-5)' }}>
          <HBadge tone="success" dot>Available for freelance</HBadge>
        </div>

        <HEyebrow>{R.role}</HEyebrow>

        <h1 style={{
          fontFamily: 'var(--font-display)', fontWeight: 700,
          fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: 0.98, letterSpacing: '-0.04em',
          margin: 'var(--space-4) 0 var(--space-5)',
        }}>
          <span style={{
            background: 'var(--grad-text)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent',
          }}>{R.name}</span>
        </h1>

        <p style={{
          fontFamily: 'var(--font-sans)', fontSize: 'var(--text-md)', lineHeight: 'var(--leading-body)',
          color: 'var(--text-secondary)', maxWidth: '46ch', margin: '0 0 var(--space-7)',
        }}>{R.intro}</p>

        <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
          <HButton variant="primary" icon={<i className="bi bi-arrow-down" />} href="#experience">View experience</HButton>
          <HButton variant="secondary" icon={<i className="bi bi-envelope" />}>Get in touch</HButton>
        </div>
      </div>
    </section>
  );
}

window.Hero = Hero;
