/* @ds-bundle: {"format":3,"namespace":"Ds3LowzDesignSystem_742f16","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"SectionHeading","sourcePath":"components/core/SectionHeading.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"8ac80df988ef","components/core/Badge.jsx":"713729bf6430","components/core/Button.jsx":"db39f36663b0","components/core/Card.jsx":"fa6a3e8fb8cc","components/core/Eyebrow.jsx":"45d6055712e2","components/core/IconButton.jsx":"abbb8085da13","components/core/SectionHeading.jsx":"2e61eb58789c","components/core/Tag.jsx":"dcb6043bb878","ui_kits/portfolio/Experience.jsx":"17210bf0df23","ui_kits/portfolio/Hero.jsx":"67c5458a20bc","ui_kits/portfolio/SideNav.jsx":"fc592158a29f","ui_kits/portfolio/Skills.jsx":"49468151ab2a","ui_kits/portfolio/data.js":"1bc2ec9d987c"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Ds3LowzDesignSystem_742f16 = window.Ds3LowzDesignSystem_742f16 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 3Lowz — Avatar
 * Monochrome portrait frame. The brand portrait reads as cool B&W;
 * a teal ring + glow marks it as the identity anchor in the sidebar.
 */
function Avatar({
  src,
  alt = '',
  size = 'md',
  ring = true,
  mono = true,
  status = null,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 40,
    md: 72,
    lg: 120,
    xl: 160
  }[size] || size;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      width: dims,
      height: dims,
      flex: '0 0 auto',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      borderRadius: 'var(--radius-circle)',
      filter: mono ? 'grayscale(1) contrast(1.06)' : 'none',
      border: ring ? '2px solid color-mix(in srgb, var(--accent) 60%, transparent)' : '2px solid var(--border-default)',
      boxShadow: ring ? 'var(--glow-md), 0 0 0 6px rgba(45,212,189,0.06)' : 'var(--shadow-md)'
    }
  }), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      bottom: '6%',
      right: '6%',
      width: Math.max(10, dims * 0.16),
      height: Math.max(10, dims * 0.16),
      borderRadius: '50%',
      background: status === 'online' ? 'var(--success)' : 'var(--text-muted)',
      border: '2px solid var(--bg-base)',
      boxShadow: status === 'online' ? '0 0 8px var(--success)' : 'none'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 3Lowz — Badge
 * Compact status / count indicator. Optional leading dot.
 */
function Badge({
  children,
  tone = 'neutral',
  dot = false,
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      bg: 'var(--surface-raised)',
      fg: 'var(--text-secondary)',
      dotc: 'var(--text-muted)'
    },
    accent: {
      bg: 'var(--accent-soft)',
      fg: 'var(--accent-bright)',
      dotc: 'var(--accent)'
    },
    success: {
      bg: 'color-mix(in srgb, var(--success) 14%, transparent)',
      fg: 'var(--success)',
      dotc: 'var(--success)'
    },
    warning: {
      bg: 'color-mix(in srgb, var(--warning) 14%, transparent)',
      fg: 'var(--warning)',
      dotc: 'var(--warning)'
    },
    danger: {
      bg: 'color-mix(in srgb, var(--danger) 14%, transparent)',
      fg: 'var(--danger)',
      dotc: 'var(--danger)'
    }
  };
  const t = tones[tone];
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 10px',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.7rem',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      background: t.bg,
      color: t.fg,
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: t.dotc,
      boxShadow: tone === 'success' ? '0 0 8px var(--success)' : 'none'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 3Lowz — Button
 * Primary action uses the teal accent with a soft glow; secondary is a
 * glass outline; ghost is text-only. Mono label, slight letter-spacing.
 */
function Button({
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
    sm: {
      padding: '0 14px',
      height: 34,
      fontSize: 'var(--text-xs)'
    },
    md: {
      padding: '0 20px',
      height: 42,
      fontSize: 'var(--text-sm)'
    },
    lg: {
      padding: '0 28px',
      height: 52,
      fontSize: 'var(--text-base)'
    }
  };
  const variants = {
    primary: {
      background: 'var(--grad-accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent',
      boxShadow: 'var(--glow-sm)'
    },
    secondary: {
      background: 'var(--surface-glass)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      backdropFilter: 'var(--blur-glass)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent'
    },
    danger: {
      background: 'transparent',
      color: 'var(--danger)',
      border: '1px solid color-mix(in srgb, var(--danger) 45%, transparent)'
    }
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
    ...style
  };
  const Comp = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Comp, _extends({
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Comp === 'button' ? disabled : undefined,
    style: base,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.transform = 'translateY(-1px)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.1em'
    }
  }, icon), children, iconRight && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.1em'
    }
  }, iconRight));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 3Lowz — Card
 * Surface container with a faint top-light edge. The "glow" variant
 * adds a teal hairline + halo on hover for featured items; "glass"
 * uses backdrop blur for overlay contexts.
 */
function Card({
  children,
  variant = 'solid',
  interactive = false,
  padding = 'md',
  style = {},
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 'var(--space-4)',
    md: 'var(--space-6)',
    lg: 'var(--space-7)'
  };
  const variants = {
    solid: {
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--shadow-sm), var(--edge-light)'
    },
    glass: {
      background: 'var(--surface-glass)',
      border: '1px solid var(--border-default)',
      backdropFilter: 'var(--blur-glass)',
      boxShadow: 'var(--shadow-md)'
    },
    glow: {
      background: 'var(--surface)',
      border: '1px solid color-mix(in srgb, var(--accent) 22%, var(--border-subtle))',
      boxShadow: 'var(--shadow-sm), var(--edge-light)'
    }
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      position: 'relative',
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding],
      transition: 'transform var(--dur-base) var(--ease-out), box-shadow var(--dur-base) var(--ease-out), border-color var(--dur-base) var(--ease-out)',
      ...variants[variant],
      ...style
    },
    onMouseEnter: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(-3px)';
      e.currentTarget.style.boxShadow = 'var(--shadow-lg), var(--glow-md)';
      e.currentTarget.style.borderColor = 'color-mix(in srgb, var(--accent) 40%, transparent)';
    } : undefined,
    onMouseLeave: interactive ? e => {
      e.currentTarget.style.transform = 'translateY(0)';
      e.currentTarget.style.boxShadow = variants[variant].boxShadow;
      e.currentTarget.style.borderColor = variants[variant].border.split(' ').slice(2).join(' ');
    } : undefined
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 3Lowz — Eyebrow
 * Mono uppercase tracked label — the developer "signature" voice used
 * above section titles and as small metadata kickers. Optional index
 * number rendered as a code-style prefix (e.g. "02 /").
 */
function Eyebrow({
  children,
  index = null,
  color = 'var(--accent)',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: 'var(--tracking-eyebrow)',
      textTransform: 'uppercase',
      color,
      ...style
    }
  }, rest), index != null && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)'
    }
  }, index), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 18,
      height: 1,
      background: 'currentColor',
      opacity: 0.6,
      display: 'inline-block'
    }
  }), children);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 3Lowz — IconButton
 * Square/circle icon-only control. Used for social links and toolbar
 * actions. Hover lifts toward the teal accent.
 */
function IconButton({
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
  const dims = {
    sm: 32,
    md: 42,
    lg: 52
  }[size];
  const variants = {
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent'
    },
    outline: {
      background: 'var(--surface-glass)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)',
      backdropFilter: 'var(--blur-glass)'
    },
    solid: {
      background: 'var(--grad-accent)',
      color: 'var(--text-on-accent)',
      border: '1px solid transparent',
      boxShadow: 'var(--glow-sm)'
    }
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
    ...style
  };
  const Comp = href ? 'a' : 'button';
  return /*#__PURE__*/React.createElement(Comp, _extends({
    href: href,
    onClick: onClick,
    "aria-label": label,
    title: label,
    style: base,
    onMouseEnter: e => {
      e.currentTarget.style.transform = 'translateY(-2px)';
      if (variant !== 'solid') e.currentTarget.style.color = 'var(--accent)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'translateY(0)';
      if (variant !== 'solid') e.currentTarget.style.color = variants[variant].color;
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/SectionHeading.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 3Lowz — SectionHeading
 * Eyebrow + large display title. Used to open each resume section
 * (ABOUT / SKILLS / EXPERIENCES …).
 */
function SectionHeading({
  title,
  eyebrow,
  index = null,
  align = 'left',
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("header", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-3)',
      alignItems: align === 'center' ? 'center' : 'flex-start',
      textAlign: align,
      marginBottom: 'var(--space-6)',
      ...style
    }
  }, rest), eyebrow && /*#__PURE__*/React.createElement(__ds_scope.Eyebrow, {
    index: index
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-heading)',
      fontSize: 'var(--text-2xl)',
      fontWeight: 'var(--weight-bold)',
      letterSpacing: 'var(--tracking-display)',
      lineHeight: 'var(--leading-tight)',
      color: 'var(--text-primary)'
    }
  }, title));
}
Object.assign(__ds_scope, { SectionHeading });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/SectionHeading.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * 3Lowz — Tag
 * The tech-stack chip used everywhere on the resume. Mono label,
 * optional leading icon (devicon / bootstrap-icon). The "accent"
 * tone highlights a primary technology.
 */
function Tag({
  children,
  icon = null,
  tone = 'default',
  size = 'md',
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: '2px 8px',
      fontSize: '0.7rem',
      gap: 5
    },
    md: {
      padding: '4px 11px',
      fontSize: 'var(--text-xs)',
      gap: 6
    }
  };
  const tones = {
    default: {
      background: 'var(--surface-raised)',
      color: 'var(--text-secondary)',
      border: '1px solid var(--border-subtle)'
    },
    accent: {
      background: 'var(--accent-soft)',
      color: 'var(--accent-bright)',
      border: '1px solid color-mix(in srgb, var(--accent) 35%, transparent)'
    },
    outline: {
      background: 'transparent',
      color: 'var(--text-muted)',
      border: '1px solid var(--border-default)'
    }
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: sizes[size].gap,
      fontFamily: 'var(--font-mono)',
      fontWeight: 'var(--weight-medium)',
      letterSpacing: '0.02em',
      borderRadius: 'var(--radius-sm)',
      lineHeight: 1,
      whiteSpace: 'nowrap',
      ...sizes[size],
      ...tones[tone],
      ...style
    }
  }, rest), icon && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      fontSize: '1.15em',
      opacity: 0.95
    }
  }, icon), children);
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Experience.jsx
try { (() => {
// 3Lowz — Experience timeline
const {
  Card: ECard,
  Tag: ETag,
  Badge: EBadge,
  SectionHeading: EHeading
} = window.Ds3LowzDesignSystem_742f16;
function ExperienceItem({
  job
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      paddingLeft: 'var(--space-7)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 0,
      top: 26,
      width: 13,
      height: 13,
      borderRadius: '50%',
      background: job.current ? 'var(--accent)' : 'var(--surface-raised)',
      border: '2px solid ' + (job.current ? 'var(--accent)' : 'var(--border-strong)'),
      boxShadow: job.current ? 'var(--glow-md)' : 'none',
      zIndex: 1
    }
  }), /*#__PURE__*/React.createElement(ECard, {
    variant: job.current ? 'glow' : 'solid',
    interactive: true,
    padding: "md",
    style: {
      marginBottom: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      gap: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 600,
      fontSize: 'var(--text-lg)',
      letterSpacing: '-0.02em',
      margin: 0,
      color: 'var(--text-primary)'
    }
  }, job.company, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-faint)',
      fontWeight: 400
    }
  }, "  \xB7  ", job.place)), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--accent)',
      marginTop: 5,
      letterSpacing: '0.04em'
    }
  }, job.title)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, job.current && /*#__PURE__*/React.createElement(EBadge, {
    tone: "success",
    dot: true
  }, "Now"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      color: 'var(--text-muted)',
      whiteSpace: 'nowrap'
    }
  }, job.period))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: 6,
      marginTop: 'var(--space-4)'
    }
  }, job.stack.map(s => /*#__PURE__*/React.createElement(ETag, {
    key: s,
    size: "sm",
    tone: "outline"
  }, s)))));
}
function Experience() {
  const R = window.RESUME;
  return /*#__PURE__*/React.createElement("section", {
    id: "experience",
    style: {
      padding: 'var(--space-10) var(--space-9)',
      maxWidth: '62rem'
    }
  }, /*#__PURE__*/React.createElement(EHeading, {
    index: "03",
    eyebrow: "Where I've shipped",
    title: "Experience"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 6,
      top: 8,
      bottom: 8,
      width: 1,
      background: 'linear-gradient(var(--border-strong), transparent)'
    }
  }), R.experience.map(job => /*#__PURE__*/React.createElement(ExperienceItem, {
    key: job.company,
    job: job
  }))));
}
window.Experience = Experience;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Experience.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Hero.jsx
try { (() => {
// 3Lowz — Hero / About section
const {
  Button: HButton,
  Badge: HBadge,
  Eyebrow: HEyebrow
} = window.Ds3LowzDesignSystem_742f16;
function Hero() {
  const R = window.RESUME;
  return /*#__PURE__*/React.createElement("section", {
    id: "about",
    style: {
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      padding: 'var(--space-10) var(--space-9)',
      maxWidth: '60rem'
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: 'absolute',
      top: '12%',
      left: '-6%',
      width: 460,
      height: 460,
      background: 'radial-gradient(circle, var(--teal-tint) 0%, transparent 65%)',
      filter: 'blur(20px)',
      pointerEvents: 'none',
      zIndex: 0
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      zIndex: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: 'var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement(HBadge, {
    tone: "success",
    dot: true
  }, "Available for freelance")), /*#__PURE__*/React.createElement(HEyebrow, null, R.role), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'clamp(3rem, 8vw, 5.5rem)',
      lineHeight: 0.98,
      letterSpacing: '-0.04em',
      margin: 'var(--space-4) 0 var(--space-5)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      background: 'var(--grad-text)',
      WebkitBackgroundClip: 'text',
      backgroundClip: 'text',
      WebkitTextFillColor: 'transparent'
    }
  }, R.name)), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 'var(--text-md)',
      lineHeight: 'var(--leading-body)',
      color: 'var(--text-secondary)',
      maxWidth: '46ch',
      margin: '0 0 var(--space-7)'
    }
  }, R.intro), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-3)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(HButton, {
    variant: "primary",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "bi bi-arrow-down"
    }),
    href: "#experience"
  }, "View experience"), /*#__PURE__*/React.createElement(HButton, {
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement("i", {
      className: "bi bi-envelope"
    })
  }, "Get in touch"))));
}
window.Hero = Hero;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/SideNav.jsx
try { (() => {
// 3Lowz — fixed sidebar navigation
const {
  Avatar,
  IconButton
} = window.Ds3LowzDesignSystem_742f16;
function SideNav({
  active,
  onNavigate
}) {
  const R = window.RESUME;
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: 'var(--sidebar-w)',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: 'var(--space-7) var(--space-5)',
      background: 'linear-gradient(180deg, var(--ink-850), var(--ink-900))',
      borderRight: '1px solid var(--border-subtle)',
      zIndex: 'var(--z-nav)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    src: R.portrait,
    alt: R.name,
    size: 104,
    status: "online"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 'var(--text-lg)',
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)'
    }
  }, R.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.66rem',
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--accent)',
      marginTop: 4
    }
  }, "Senior Engineer"))), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      margin: 'var(--space-8) 0 0',
      padding: 0,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, R.nav.map(item => {
    const isActive = active === item.toLowerCase();
    return /*#__PURE__*/React.createElement("li", {
      key: item
    }, /*#__PURE__*/React.createElement("a", {
      href: '#' + item.toLowerCase(),
      onClick: e => {
        e.preventDefault();
        onNavigate(item.toLowerCase());
      },
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-3)',
        padding: '10px 14px',
        borderRadius: 'var(--radius-sm)',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        color: isActive ? 'var(--accent)' : 'var(--text-muted)',
        background: isActive ? 'var(--accent-soft)' : 'transparent',
        textDecoration: 'none',
        transition: 'all var(--dur-base) var(--ease-out)'
      },
      onMouseEnter: e => {
        if (!isActive) e.currentTarget.style.color = 'var(--text-primary)';
      },
      onMouseLeave: e => {
        if (!isActive) e.currentTarget.style.color = 'var(--text-muted)';
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        width: isActive ? 16 : 8,
        height: 1.5,
        background: 'currentColor',
        transition: 'width var(--dur-base) var(--ease-out)'
      }
    }), item));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      display: 'flex',
      gap: 'var(--space-2)'
    }
  }, R.social.map(s => /*#__PURE__*/React.createElement(IconButton, {
    key: s.label,
    icon: /*#__PURE__*/React.createElement("i", {
      className: s.icon
    }),
    label: s.label,
    variant: "ghost",
    href: s.href
  }))));
}
window.SideNav = SideNav;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/SideNav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Skills.jsx
try { (() => {
// 3Lowz — Skills section (animated proficiency bars)
const {
  SectionHeading: SHeading
} = window.Ds3LowzDesignSystem_742f16;
const {
  useState,
  useRef,
  useEffect: useEffectS
} = React;
function SkillBar({
  item,
  index,
  inView
}) {
  const filled = inView;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 34,
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      background: 'var(--surface-raised)',
      border: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: '0 auto 0 0',
      height: '100%',
      width: filled ? item.level + '%' : '0%',
      background: 'linear-gradient(90deg, var(--teal-tint2), var(--teal-tint))',
      borderRight: '1.5px solid var(--accent)',
      boxShadow: filled ? '0 0 12px var(--accent-glow)' : 'none',
      transition: 'width 1s var(--ease-out)',
      transitionDelay: index * 55 + 'ms'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '0 12px'
    }
  }, /*#__PURE__*/React.createElement("i", {
    className: `${item.icon} colored`,
    style: {
      fontSize: '1.05rem'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 'var(--text-xs)',
      fontWeight: 500,
      letterSpacing: '0.02em',
      color: 'var(--text-primary)'
    }
  }, item.name), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: 'auto',
      fontFamily: 'var(--font-mono)',
      fontSize: '0.66rem',
      color: filled ? 'var(--accent)' : 'var(--text-faint)',
      transition: 'color 1s var(--ease-out)',
      transitionDelay: index * 55 + 'ms'
    }
  }, item.level, "%")));
}
function Skills() {
  const R = window.RESUME;
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffectS(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      });
    }, {
      threshold: 0.18
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // running index across all bars for a continuous cascade
  let gi = 0;
  return /*#__PURE__*/React.createElement("section", {
    id: "skills",
    ref: ref,
    style: {
      padding: 'var(--space-10) var(--space-9)',
      maxWidth: '62rem'
    }
  }, /*#__PURE__*/React.createElement(SHeading, {
    index: "02",
    eyebrow: "What I work with",
    title: "Skills & stack"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
      gap: 'var(--space-5)'
    }
  }, R.skills.map(cat => /*#__PURE__*/React.createElement("div", {
    key: cat.group,
    style: {
      padding: 'var(--space-5)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface)',
      border: '1px solid var(--border-subtle)',
      boxShadow: 'var(--edge-light)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: '0.68rem',
      letterSpacing: '0.16em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 'var(--space-4)',
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: '50%',
      background: 'var(--accent)',
      boxShadow: 'var(--glow-sm)'
    }
  }), cat.group), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 8
    }
  }, cat.items.map(it => /*#__PURE__*/React.createElement(SkillBar, {
    key: it.name,
    item: it,
    index: gi++,
    inView: inView
  })))))));
}
window.Skills = Skills;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Skills.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
// 3Lowz portfolio — content model (lifted from the original site)
window.RESUME = {
  name: '3Lowz',
  role: 'Freelance Senior Software Engineer',
  intro: "A decade of crafting software across startups, consultancies, and international teams. I thrive where architecture meets code — building systems that are as clean under the hood as they are effective on the surface.",
  portrait: '../../assets/portrait.jpg',
  social: [{
    label: 'GitHub',
    icon: 'bi bi-github',
    href: 'https://github.com/3Lowz'
  }, {
    label: 'LinkedIn',
    icon: 'bi bi-linkedin',
    href: 'https://www.linkedin.com/in/henriidan316358a47/'
  }],
  nav: ['About', 'Skills', 'Experience', 'Blog', 'Showcase'],
  // `level` = self-rated proficiency 0–100, drives the fill bars.
  skills: [{
    group: 'Programming Languages',
    items: [{
      name: 'TypeScript',
      icon: 'devicon-typescript-plain',
      level: 95
    }, {
      name: 'NodeJS',
      icon: 'devicon-nodejs-plain',
      level: 92
    }, {
      name: 'Python',
      icon: 'devicon-python-plain',
      level: 88
    }, {
      name: 'PHP',
      icon: 'devicon-php-plain',
      level: 80
    }]
  }, {
    group: 'Others (personal)',
    items: [{
      name: 'Rust',
      icon: 'devicon-rust-original',
      level: 70
    }, {
      name: 'C++',
      icon: 'devicon-cplusplus-plain',
      level: 65
    }, {
      name: 'Elixir',
      icon: 'devicon-elixir-plain',
      level: 58
    }]
  }, {
    group: 'Frontend',
    items: [{
      name: 'React',
      icon: 'devicon-react-plain',
      level: 93
    }, {
      name: 'Rx',
      icon: 'devicon-rxjs-plain',
      level: 82
    }, {
      name: 'd3',
      icon: 'devicon-d3js-plain',
      level: 78
    }, {
      name: 'Wasm',
      icon: 'devicon-wasm-plain',
      level: 66
    }, {
      name: 'Webpack',
      icon: 'devicon-webpack-plain',
      level: 80
    }, {
      name: 'Rollup',
      icon: 'devicon-rollup-plain',
      level: 72
    }, {
      name: 'Backbone',
      icon: 'devicon-backbonejs-plain',
      level: 70
    }]
  }, {
    group: 'Web Frameworks',
    items: [{
      name: 'Fastify',
      icon: 'devicon-fastify-plain',
      level: 85
    }, {
      name: 'Express',
      icon: 'devicon-express-original',
      level: 90
    }, {
      name: 'Django',
      icon: 'devicon-django-plain',
      level: 84
    }, {
      name: 'Flask',
      icon: 'devicon-flask-plain',
      level: 78
    }, {
      name: 'Symfony',
      icon: 'devicon-symfony-original',
      level: 80
    }]
  }, {
    group: 'Databases',
    items: [{
      name: 'MySQL',
      icon: 'devicon-mysql-plain',
      level: 88
    }, {
      name: 'Postgres',
      icon: 'devicon-postgresql-plain',
      level: 90
    }, {
      name: 'Mongo',
      icon: 'devicon-mongodb-plain',
      level: 85
    }, {
      name: 'Redis',
      icon: 'devicon-redis-plain',
      level: 82
    }]
  }, {
    group: 'Clouds & OS',
    items: [{
      name: 'AWS',
      icon: 'devicon-amazonwebservices-plain-wordmark',
      level: 84
    }, {
      name: 'GCP',
      icon: 'devicon-googlecloud-plain',
      level: 80
    }, {
      name: 'Linux',
      icon: 'devicon-linux-plain',
      level: 92
    }, {
      name: 'macOS',
      icon: 'devicon-apple-plain',
      level: 85
    }, {
      name: 'Windows',
      icon: 'devicon-windows11-plain',
      level: 75
    }]
  }],
  experience: [{
    company: 'Extark Srl',
    place: 'Udine',
    period: "Aug '24 — current",
    title: 'Software Engineer',
    current: true,
    stack: ['Python', 'Pandas', 'NumPy', 'FastAPI', 'Django', 'React', 'Angular', 'MySQL', 'Postgres', 'Redis', 'Symfony', 'GCP']
  }, {
    company: 'WeDigital Srl',
    place: 'Pordenone',
    period: "Aug '22 — Aug '24",
    title: 'Software Engineer',
    stack: ['NestJS', 'Fastify', 'SocketIO', 'TypeORM', 'TypeScript', 'React-ReduxSaga', 'Webpack federation', 'MySQL', 'Mongo', 'AWS', 'Kubernetes']
  }, {
    company: 'Musircle Ltd',
    place: 'London',
    period: "Sep '23 — Feb '24",
    title: 'Software Engineer · Remote',
    stack: ['NestJS', 'GraphQL', 'TypeScript', 'React', 'Recoil', 'Mongo', 'Redis', 'AWS', 'Docker', 'Nginx']
  }, {
    company: 'ItEquipe Srls',
    place: 'Pordenone',
    period: "Aug '21 — Jul '22",
    title: 'Software Engineer',
    stack: ['Django', 'NumPy', 'Tastypie', 'React-Native', 'TypeScript', 'D3js', 'MySQL', 'Nginx', 'Gunicorn']
  }, {
    company: 'Consultant',
    place: 'Udine',
    period: "Sep '18 — Dec '20",
    title: 'Software Specialist',
    stack: ['TypeScript', 'React-Native', 'Python', 'C/C++', 'PHP', 'Java', 'PostgreSQL', 'Docker', 'Kubernetes', 'K3s']
  }, {
    company: 'Fullstack Agency',
    place: 'Rome',
    period: "Sep '16 — Feb '17",
    title: 'Lead Web Developer · Remote',
    stack: ['ExpressJS', 'Ionic', 'Angular', 'React-Redux-Thunk', 'MongoDB', 'DigitalOcean', 'Nginx']
  }, {
    company: 'Delta Askii Srl',
    place: 'Udine',
    period: "Oct '14 — Jul '16",
    title: 'Lead Web Developer · Hybrid',
    stack: ['HapiJS', 'ExpressJS', 'SocketIO', 'RxJS', 'Angular', 'React/Redux', 'D3js', 'Laravel', 'MySQL', 'MongoDB']
  }, {
    company: 'uForge / Canton Srl',
    place: 'Pordenone',
    period: "Oct '12 — May '14",
    title: 'Web Developer · Co-Founder',
    stack: ['Django', 'BackboneJS', 'Angular', 'PostgreSQL', 'Redis', 'Cordova/PhoneGap', 'Heroku']
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.SectionHeading = __ds_scope.SectionHeading;

__ds_ns.Tag = __ds_scope.Tag;

})();
