// 3Lowz — Security Stack (blue, security, red team with skill bars)
const { useState: useStateS, useRef: useRefS, useEffect: useEffectS } = React;

function SecuritySkillBar({ item, index, inView }) {
  const filled = inView;
  return (
    <div style={{
      position: 'relative', height: 34, borderRadius: 'var(--radius-sm)', overflow: 'hidden',
      background: 'var(--surface-raised)', border: '1px solid var(--border-subtle)',
    }}>
      <div style={{
        position: 'absolute', inset: '0 auto 0 0', height: '100%',
        width: filled ? item.level + '%' : '0%',
        background: 'linear-gradient(90deg, var(--teal-tint2), var(--teal-tint))',
        borderRight: '1.5px solid var(--accent)',
        boxShadow: filled ? '0 0 12px var(--accent-glow)' : 'none',
        transition: 'width 1s var(--ease-out)',
        transitionDelay: (index * 55) + 'ms',
      }} />
      <div style={{
        position: 'relative', height: '100%', display: 'flex', alignItems: 'center',
        gap: 9, padding: '0 12px',
      }}>
        <i className={`${item.icon} colored`} style={{ fontSize: '1.05rem' }} />
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

function SecurityTeamGroup({ team, theme, inView, startIndex }) {
  const themeColors = {
    blue: { accentColor: '#3b82f6', dotColor: 'rgba(59, 130, 246, 0.6)' },
    security: { accentColor: '#6b7280', dotColor: 'rgba(107, 114, 128, 0.6)' },
    red: { accentColor: '#ef4444', dotColor: 'rgba(239, 68, 68, 0.6)' },
  };

  const colors = themeColors[theme];

  return (
    <div style={{
      padding: 'var(--space-5)', borderRadius: 'var(--radius-lg)',
      background: 'var(--surface)', border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--edge-light)',
      display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
    }}>
      <div style={{
        fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.16em',
        textTransform: 'uppercase', color: colors.accentColor, marginBottom: 'var(--space-4)',
        display: 'flex', alignItems: 'center', gap: 8,
      }}>
        <span style={{
          width: 6, height: 6, borderRadius: '50%', background: colors.dotColor,
          boxShadow: `0 0 8px ${colors.accentColor}40`,
        }} />
        {team.team}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {team.items.map((item, idx) => (
          <SecuritySkillBar key={item.name} item={item} index={startIndex + idx} inView={inView} />
        ))}
      </div>
    </div>
  );
}

function SecurityStack({ inView, baseIndex }) {
  const R = window.RESUME;
  if (!R.securityStack) return null;

  let gi = baseIndex;

  return (
    <>
      {R.securityStack.map((team) => {
        const startIdx = gi;
        gi += team.items.length;
        return <SecurityTeamGroup key={team.team} team={team} theme={team.theme} inView={inView} startIndex={startIdx} />;
      })}
    </>
  );
}

window.SecurityStack = SecurityStack;
