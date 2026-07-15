Brand action button — mono uppercase label, teal-glow primary, glass secondary, text ghost. Use for any call-to-action.

```jsx
<Button variant="primary" icon={<i className="bi bi-download" />}>Resume</Button>
<Button variant="secondary">Contact</Button>
<Button variant="ghost" size="sm">Skip</Button>
```

Variants: `primary` (teal gradient + glow), `secondary` (glass outline), `ghost` (text), `danger` (red outline). Sizes: `sm | md | lg`. Pass `href` to render as a link; `icon` / `iconRight` accept any node.
