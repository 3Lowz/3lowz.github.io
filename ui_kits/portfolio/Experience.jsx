// 3Lowz — Experience timeline
const { Card: ECard, Tag: ETag, Badge: EBadge, SectionHeading: EHeading } = window.Ds3LowzDesignSystem_742f16;

const SKILL_ICONS = {
  'TypeScript': 'devicon-typescript-plain',
  'NodeJS': 'devicon-nodejs-plain',
  'Python': 'devicon-python-plain',
  'PHP': 'devicon-php-plain',
  'Go': 'devicon-go-original-wordmark',
  'Java': 'devicon-java-plain',
  'Rust': 'devicon-rust-original',
  'C++': 'devicon-cplusplus-plain',
  'C/C++': 'devicon-cplusplus-plain',
  'Elixir': 'devicon-elixir-plain',
  'React': 'devicon-react-plain',
  'React-Native': 'devicon-react-plain',
  'React-Redux': 'devicon-react-plain',
  'React-Redux-Thunk': 'devicon-react-plain',
  'React/Redux': 'devicon-react-plain',
  'React-ReduxSaga': 'devicon-react-plain',
  'Recoil': 'devicon-react-plain',
  'Rx': 'devicon-rxjs-plain',
  'RxJS': 'devicon-rxjs-plain',
  'd3': 'devicon-d3js-plain',
  'D3js': 'devicon-d3js-plain',
  'Wasm': 'devicon-wasm-plain',
  'Webpack': 'devicon-webpack-plain',
  'Webpack federation': 'devicon-webpack-plain',
  'Rollup': 'devicon-rollup-plain',
  'Backbone': 'devicon-backbonejs-plain',
  'BackboneJS': 'devicon-backbonejs-plain',
  'Angular': 'devicon-angularjs-plain',
  'Ionic': 'devicon-ionic-original',
  'Fastify': 'devicon-fastify-plain',
  'Express': 'devicon-express-original',
  'ExpressJS': 'devicon-express-original',
  'Django': 'devicon-django-plain',
  'Flask': 'devicon-flask-plain',
  'FastAPI': 'devicon-fastapi-plain-wordmark',
  'Symfony': 'devicon-symfony-original',
  'Laravel': 'devicon-laravel-plain',
  'NestJS': 'devicon-nestjs-plain',
  'HapiJS': 'devicon-nodejs-plain',
  'GraphQL': 'devicon-graphql-plain',
  'Tastypie': 'devicon-python-plain',
  'TypeORM': 'devicon-typescript-plain',
  'MySQL': 'devicon-mysql-plain',
  'Postgres': 'devicon-postgresql-plain',
  'PostgreSQL': 'devicon-postgresql-plain',
  'Mongo': 'devicon-mongodb-plain',
  'MongoDB': 'devicon-mongodb-plain',
  'Redis': 'devicon-redis-plain',
  'AWS': 'devicon-amazonwebservices-plain-wordmark',
  'GCP': 'devicon-googlecloud-plain',
  'Docker': 'devicon-docker-plain',
  'Kubernetes': 'devicon-kubernetes-plain',
  'K3s': 'devicon-kubernetes-plain',
  'Nginx': 'devicon-nginx-original',
  'Gunicorn': 'devicon-python-plain',
  'Heroku': 'devicon-heroku-original',
  'DigitalOcean': 'devicon-digitalocean-plain',
  'Linux': 'devicon-linux-plain',
  'SocketIO': 'devicon-nodejs-plain',
  'Cordova': 'devicon-cordova-plain',
  'PhoneGap': 'devicon-cordova-plain',
  'Cordova/PhoneGap': 'devicon-cordova-plain',
  'NumPy': 'devicon-python-plain',
  'Pandas': 'devicon-python-plain',
};

function SkillIcon({ skillName }) {
  const icon = SKILL_ICONS[skillName];
  if (!icon) return <span style={{ fontSize: '0.85rem', opacity: 0.7 }}>{skillName}</span>;

  return (
    <i
      className={`${icon} colored`}
      title={skillName}
      style={{ fontSize: '1.3rem', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
    />
  );
}

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
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, marginTop: 'var(--space-4)', alignItems: 'center' }}>
          {job.stack.map((s) => <SkillIcon key={s} skillName={s} />)}
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
