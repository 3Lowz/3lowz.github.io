// 3Lowz — Experience timeline
const { Card: ECard, Tag: ETag, Badge: EBadge, SectionHeading: EHeading } = window.Ds3LowzDesignSystem_742f16;

function ExperienceItem({ job }) {
  return (
    <div style={{ position: 'relative', paddingLeft: 'var(--space-7)' }}>
      {/* timeline node */}
      <span style={{
        position: 'absolute', left: 0, top: 26, width: 13, height: 13, borderRadius: '50%',
        background: job.current ? 'var(--accent)' : 'var(--surface-raised)',
        border: '2px solid ' + (job.current ? 'var(--accent)' : 'var(--border-strong)'),
        boxShadow: job.current ? 'var(--glow-md)' : 'none', zIndex: 1,
      }} />
      <ECard variant={job.current ? 'glow' : 'solid'} interactive padding="md" style={{ marginBottom: 'var(--space-4)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 600, fontSize: 'var(--text-lg)', letterSpacing: '-0.02em', margin: 0, color: 'var(--text-primary)' }}>
              {job.company}
              <span style={{ color: 'var(--text-faint)', fontWeight: 400 }}>  ·  {job.place}</span>
            </h3>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--accent)', marginTop: 5, letterSpacing: '0.04em' }}>{job.title}</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            {job.current && <EBadge tone="success" dot>Now</EBadge>}
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{job.period}</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 'var(--space-4)' }}>
          {job.stack.map((s) => <ETag key={s} size="sm" tone="outline">{s}</ETag>)}
        </div>
      </ECard>
    </div>
  );
}

function Experience() {
  const R = window.RESUME;
  return (
    <section id="experience" style={{ padding: 'var(--space-10) var(--space-9)', maxWidth: '62rem' }}>
      <EHeading index="03" eyebrow="Where I've shipped" title="Experience" />
      <div style={{ position: 'relative' }}>
        {/* vertical line */}
        <span style={{ position: 'absolute', left: 6, top: 8, bottom: 8, width: 1, background: 'linear-gradient(var(--border-strong), transparent)' }} />
        {R.experience.map((job) => <ExperienceItem key={job.company} job={job} />)}
      </div>
    </section>
  );
}

window.Experience = Experience;
