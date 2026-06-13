// 3Lowz — fixed sidebar navigation
const { Avatar, IconButton } = window.Ds3LowzDesignSystem_742f16;

function SideNav({ active, onNavigate }) {
  const R = window.RESUME;
  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, width: 'var(--sidebar-w)', height: '100vh',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      padding: 'var(--space-7) var(--space-5)',
      background: 'linear-gradient(180deg, var(--ink-850), var(--ink-900))',
      borderRight: '1px solid var(--border-subtle)',
      zIndex: 'var(--z-nav)',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 'var(--space-4)' }}>
        <Avatar src={R.portrait} alt={R.name} size={104} status="online" />
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 'var(--text-lg)', letterSpacing: '-0.02em', color: 'var(--text-primary)' }}>{R.name}</div>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.66rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', marginTop: 4 }}>Senior Engineer</div>
        </div>
      </div>

      <ul style={{ listStyle: 'none', margin: 'var(--space-8) 0 0', padding: 0, width: '100%', display: 'flex', flexDirection: 'column', gap: 2 }}>
        {R.nav.map((item) => {
          const isActive = active === item.toLowerCase();
          return (
            <li key={item}>
              <a
                href={'#' + item.toLowerCase()}
                onClick={(e) => { e.preventDefault(); onNavigate(item.toLowerCase()); }}
                style={{
                  display: 'flex', alignItems: 'center', gap: 'var(--space-3)',
                  padding: '10px 14px', borderRadius: 'var(--radius-sm)',
                  fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', letterSpacing: '0.16em', textTransform: 'uppercase',
                  color: isActive ? 'var(--accent)' : 'var(--text-muted)',
                  background: isActive ? 'var(--accent-soft)' : 'transparent',
                  textDecoration: 'none', transition: 'all var(--dur-base) var(--ease-out)',
                }}
                onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = 'var(--text-primary)'; }}
                onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = 'var(--text-muted)'; }}
              >
                <span style={{ width: isActive ? 16 : 8, height: 1.5, background: 'currentColor', transition: 'width var(--dur-base) var(--ease-out)' }} />
                {item}
              </a>
            </li>
          );
        })}
      </ul>

      <div style={{ marginTop: 'auto', display: 'flex', gap: 'var(--space-2)' }}>
        {R.social.map((s) => (
          <IconButton key={s.label} icon={<i className={s.icon} />} label={s.label} variant="ghost" href={s.href} />
        ))}
      </div>
    </nav>
  );
}

window.SideNav = SideNav;
