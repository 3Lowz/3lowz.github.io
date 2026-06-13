# Portfolio UI Kit

A high-fidelity, interactive recreation of the **modernized 3Lowz résumé
site** — the canonical "typical view" of the product. It composes the
design-system primitives; it does not re-implement them.

## Run

Open `index.html`. It loads React + Babel, the compiled design-system bundle
(`../../_ds_bundle.js`), then the screen modules.

## Surfaces

| File | Role |
|------|------|
| `SideNav.jsx` | Fixed left sidebar — avatar identity block, scroll-spy nav, social links. |
| `Hero.jsx` | About / hero — availability badge, gradient wordmark, intro, CTAs, ambient glow. |
| `Skills.jsx` | Skill categories as cards of tech-stack `Tag` chips (devicon). |
| `Experience.jsx` | Vertical timeline of roles; current role glows; stack as outline tags. |
| `data.js` | The résumé content model (lifted from the original `index.html`). |
| `index.html` | Composes everything; `IntersectionObserver` drives active-nav state + smooth scroll. |

## Interaction

- **Scroll-spy:** the active section highlights in the sidebar as you scroll;
  clicking a nav item smooth-scrolls to it.
- **Hover:** experience cards lift + bloom a teal halo; nav items extend their
  leading rule.
- Blog & Showcase are honest placeholders, mirroring the live site.

## Components used

`Avatar`, `IconButton`, `Badge`, `Eyebrow`, `Button`, `SectionHeading`, `Tag`,
`Card` — all from `window.Ds3LowzDesignSystem_742f16`.

## Fidelity notes

This recreation preserves the original information architecture (About ·
Skills · Experience · Blog · Showcase, the fixed sidebar, the tech-stack
chips) and content, while replacing the Bootstrap visual layer with the 3Lowz
design system. It is a cosmetic recreation, not production code.
