// 3Lowz — Skills section (animated proficiency bars)
const { SectionHeading: SHeading } = window.Ds3LowzDesignSystem_742f16;
const { useState, useRef, useEffect: useEffectS } = React;
const { SecurityStack } = window;

function SkillBar({ item, index, inView }) {
  const filled = inView;
  return (
    <div style={{
      position: 'relative', height: 34, borderRadius: 'var(--radius-sm)', overflow: 'hidden',
      background: 'var(--surface-raised)', border: '1px solid var(--border-subtle)',
    }}>
      {/* fill */}
      <div style={{
        position: 'absolute', inset: '0 auto 0 0', height: '100%',
        width: filled ? item.level + '%' : '0%',
        background: 'linear-gradient(90deg, color-mix(in srgb, var(--white) 65%, var(--teal-200)) 0px, var(--teal-400) 20px, var(--teal-700) 52px, var(--teal-700) 100%)',
        borderRight: '1.5px solid var(--accent)',
        boxShadow: filled ? '0 0 12px var(--accent-glow)' : 'none',
        transition: 'width 1s var(--ease-out)',
        transitionDelay: (index * 55) + 'ms',
      }} />
      {/* content */}
      <div style={{
        position: 'relative', height: '100%', display: 'flex', alignItems: 'center',
        gap: 9, padding: '0 12px',
      }}>
        {item.iconBg ? (
          <span style={{
            display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
            width: 20, height: 20, borderRadius: 5, flexShrink: 0,
            background: 'linear-gradient(135deg, var(--white), var(--slate-200))',
          }}>
            <i className={`${item.icon} colored`} style={{ fontSize: '0.82rem' }} />
          </span>
        ) : (
          <i className={`${item.icon} colored`} style={{ fontSize: '1.05rem' }} />
        )}
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', fontWeight: 500,
          letterSpacing: '0.02em', color: 'var(--text-primary)',
        }}>{item.name}</span>
        <span style={{
          marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: '0.66rem',
          color: filled ? 'var(--accent)' : 'var(--text-faint)',
          transition: 'color 1s var(--ease-out)', transitionDelay: (index * 55) + 'ms',
        }}>{item.level}%</span>
      </div>
    </div>
  );
}

function Skills() {
  const R = window.RESUME;
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffectS(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } });
    }, { threshold: 0.18 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // running index across all bars for a continuous cascade
  let gi = 0;

  return (
    <section id="skills" ref={ref} style={{ padding: 'var(--space-10) var(--space-9)', maxWidth: '62rem' }}>
      <SHeading index="02" eyebrow="What I work with" title="Skills & stack" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 'var(--space-5)' }}>
        {R.skills.map((cat) => (
          <div key={cat.group} style={{
            padding: 'var(--space-5)', borderRadius: 'var(--radius-lg)',
            background: 'var(--surface)', border: '1px solid var(--border-subtle)',
            boxShadow: 'var(--edge-light)',
          }}>
            <div style={{
              fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.16em', textTransform: 'uppercase',
              color: 'var(--text-muted)', marginBottom: 'var(--space-4)',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', boxShadow: 'var(--glow-sm)' }} />
              {cat.group}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {cat.items.map((it) => (
                <SkillBar key={it.name} item={it} index={gi++} inView={inView} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {/* TODO: fix full width below */}
      <div style={{ display: 'grid', gap: 'var(--space-5)' }}> 
        {/* <SecurityStack inView={inView} baseIndex={gi} /> */}
      </div>
    </section>
  );
}

window.Skills = Skills;
