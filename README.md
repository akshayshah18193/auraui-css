<div align="center">

# AuraUI

**A plug-and-play CSS framework with glass morphism, a full form kit, and a live theme playground.**

Drop one file into any project — plain HTML, React, Vue, Svelte, Angular, Next.js, or any bundler.
Zero JavaScript dependencies. ~5 KB gzipped.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![CSS Only](https://img.shields.io/badge/CSS-Only-7C6EF8.svg)](#)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-2DD4A7.svg)](CONTRIBUTING.md)

[Demo](aura-ui-demo.html) · [Live Playground](aura-playground.html) · [Contributing](CONTRIBUTING.md)

</div>

---

## Features

- 🪟 **Glass morphism** — three glass tiers (`au-glass-sm`, `au-glass`, `au-glass-lg`) with configurable blur, opacity, and glow
- 📝 **Complete form kit** — inputs, selects, checkboxes, radios, toggles, sliders, file uploads, and validation states
- 🧩 **Layout system** — responsive grid, flex utilities, auto-fit columns, and a 12-column system
- 🎨 **Token-driven** — every color, radius, and spacing value is a CSS custom property; theme the whole system from one `:root` block
- 🌗 **Dark + light themes** — toggle with a single class
- 🎛️ **Live playground** — visual customizer to design your theme and export it as a ready-to-use CSS file
- 📦 **~5 KB gzipped** — no dependencies, no build step
- ♿ **Accessible by default** — focus rings, reduced-motion support, semantic markup

---

## Quick start

### 1. Plain HTML / static sites

```html
<link rel="stylesheet" href="glass.css">
```

### 2. Bundlers (Vite, Next.js, Webpack, Rollup, esbuild)

```js
import 'glass.css'
```

### 3. React / Vue / Svelte / Angular

Import the CSS once in your root entry file (e.g. `main.tsx`, `App.vue`, `main.js`):

```js
import 'glass.css'
```

Then use the `au-*` classes directly in your JSX/templates:

```jsx
<button className="au-btn au-btn-primary">Click me</button>
```

---

## Examples

### Glass card

```html
<div class="au-glass au-glass-glow au-p-6 au-stack">
  <span class="au-badge au-badge-primary">PRO</span>
  <h3 class="au-h4">Standard Glass</h3>
  <p class="au-text-sm au-text-muted">Cards, modals, dialogs.</p>
  <button class="au-btn au-btn-primary">Get started</button>
</div>
```

### Form with validation

```html
<div class="au-form-group">
  <label class="au-label au-label-required">Email</label>
  <input class="au-input au-input-error" type="email" value="not-an-email">
  <span class="au-hint au-hint-error">Please enter a valid email.</span>
</div>
```

### Responsive grid

```html
<div class="au-grid au-grid-auto">
  <div class="au-card">Auto-fit 1</div>
  <div class="au-card">Auto-fit 2</div>
  <div class="au-card">Auto-fit 3</div>
</div>
```

---

## Theming

Override any token in your own `:root` block — or use the [playground](aura-playground.html) to design visually and export a theme file.

```css
:root {
  --au-primary: #FF00C8;
  --au-bg: #04010F;
  --au-glass-blur: 22px;
  --au-radius: 4px;
  --au-font-sans: "Space Grotesk", sans-serif;
}
```

**Light mode:** add `class="au-light"` to `<html>` or any wrapper element.

---

## Components

| Category | Classes |
|----------|---------|
| Layout | `au-container`, `au-grid`, `au-grid-{1-12}`, `au-grid-auto`, `au-col-{1-12}`, `au-stack`, `au-cluster`, `au-row` |
| Glass | `au-glass`, `au-glass-sm`, `au-glass-lg`, `au-glass-glow` |
| Cards | `au-card`, `au-card-header`, `au-card-body`, `au-card-footer`, `au-card-sm` |
| Forms | `au-form-group`, `au-label`, `au-input`, `au-select`, `au-textarea`, `au-checkbox`, `au-radio`, `au-toggle`, `au-range`, `au-file`, `au-input-group`, `au-input-addon` |
| Buttons | `au-btn`, `au-btn-primary`, `au-btn-secondary`, `au-btn-outline`, `au-btn-ghost`, `au-btn-glass`, `au-btn-danger`, `au-btn-success`, `au-btn-{xs,sm,lg,xl}`, `au-btn-pill`, `au-btn-icon`, `au-btn-loading` |
| Badges | `au-badge`, `au-badge-{primary,success,danger,warning,info,neutral}`, `au-badge-dot` |
| Alerts | `au-alert`, `au-alert-{success,danger,warning,info}` |
| Avatars | `au-avatar`, `au-avatar-{xs,sm,lg,xl}`, `au-avatar-group` |
| Progress | `au-progress`, `au-progress-bar`, `au-progress-striped`, `au-progress-{sm,lg}` |
| Tabs | `au-tabs`, `au-tab`, `au-tabs-pill` |
| Tables | `au-table-wrapper`, `au-table`, `au-table-striped` |
| Typography | `au-h1`–`au-h6`, `au-text-{xs,sm,base,lg,xl,2xl}`, `au-gradient-text`, `au-font-mono`, `au-code`, `au-pre` |
| Utilities | spacing (`au-p-*`, `au-m-*`, `au-gap-*`), display (`au-flex`, `au-grid-d`, `au-hidden`), flexbox (`au-items-*`, `au-justify-*`), radius (`au-rounded-*`) |

---

## Browser support

AuraUI uses modern CSS features (custom properties, `backdrop-filter`, `:focus-visible`, color spaces). Supported in:

- Chrome / Edge 88+
- Firefox 103+
- Safari 14+

For older browsers, glass morphism gracefully degrades to a solid background.

---

## Contributing

AuraUI is **strictly CSS-only**. We welcome contributions for components, utilities, tokens, accessibility improvements, demos, and docs — but the framework itself stays pure CSS.

Read the full [Contributing Guide](CONTRIBUTING.md) before opening a PR.

---

## License

[MIT](LICENSE) © Akshay Shah
