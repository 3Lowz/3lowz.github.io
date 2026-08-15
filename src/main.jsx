// 3Lowz portfolio — application entry point.
//
// Everything below used to live in <script type="text/babel"> tags that the
// browser compiled at runtime with @babel/standalone. Now webpack + babel-loader
// compile it ahead of time into a single app.bundle.js.
//
// Import order matters: each generated/legacy file attaches to `window`, and the
// next one reads it back off `window`. ES module imports run top-to-bottom, so
// the globals are in place by the time they're needed.
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import '../_ds_bundle.js';                 // -> window.Ds3LowzDesignSystem_742f16
import '../ui_kits/portfolio/data.js';     // -> window.RESUME
import '../ui_kits/portfolio/SideNav.jsx'; // -> window.SideNav
import '../ui_kits/portfolio/Hero.jsx';    // -> window.Hero
import '../ui_kits/portfolio/Skills.jsx';  // -> window.Skills
import '../ui_kits/portfolio/SecurityStack.jsx'; // -> window.SecurityStack
import '../ui_kits/portfolio/Experience.jsx'; // -> window.Experience

const { SideNav, Hero, Skills, Experience } = window;

function Placeholder({ id, title }) {
  return (
    <section id={id} className="placeholder">
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--accent)' }}>{id}</div>
      <div className="big">{title}</div>
      <div className="sub">// to be done… soon</div>
    </section>
  );
}

function App() {
  const [active, setActive] = useState('about');
  const ids = ['about', 'skills', 'experience', 'blog', 'showcase'];

  useEffect(() => {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
    }, { rootMargin: '-45% 0px -50% 0px', threshold: 0 });
    ids.forEach((id) => { const el = document.getElementById(id); if (el) obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  const navigate = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
  };

  return (
    <React.Fragment>
      <SideNav active={active} onNavigate={navigate} />
      <main className="app-main">
        <Hero />
        <div className="sec-divider" />
        <Skills />
        <div className="sec-divider" />
        <Experience />
        <div className="sec-divider" />
        <Placeholder id="blog" title="Blog" />
        <div className="sec-divider" />
        <Placeholder id="showcase" title="Showcase" />
      </main>
    </React.Fragment>
  );
}

createRoot(document.getElementById('root')).render(<App />);
