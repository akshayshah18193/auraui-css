# Contributing to AuraUI

Thanks for your interest! AuraUI is a **strictly CSS-only** framework.

## Scope of contributions

### ✅ Accepted
- New CSS components (cards, modals, navs, etc.)
- New utility classes
- New design tokens or theme variables
- Bug fixes for existing styles
- Accessibility improvements (focus states, reduced-motion, contrast)
- Documentation, examples, and HTML demos
- New presets for the playground

### ❌ Not accepted
- **JavaScript dependencies** in the core framework
- CSS-in-JS solutions or runtime style generation
- Build tooling that requires Node modules to consume the framework
- Preprocessors as a requirement (Sass, Less, Stylus) — vanilla CSS only
- Tailwind-style PostCSS plugins or JIT compilers
- Framework-specific components (React components, Vue components, etc.)
- External CSS dependencies

**Rationale:** AuraUI's promise is "one file, works anywhere." Anything that 
breaks that promise — a Node build step, a JS runtime, a framework lock-in — 
defeats the whole point. The playground HTML and demos may use vanilla JS 
for interactivity, but the framework itself stays pure CSS.

## Pull request guidelines

1. **One concern per PR.** A new component, a bug fix, or a doc update — not all three at once.
2. **Use existing design tokens.** Don't hardcode colors or spacing values; reference `var(--au-*)` variables. If you need a new token, add it to the `:root` block and explain why.
3. **Follow the naming convention.** All classes prefixed with `au-`. Components use `au-{component}`, modifiers use `au-{component}-{modifier}`.
4. **Mobile-first and accessible.** Test at 320px width. Include `:focus-visible` states. Respect `prefers-reduced-motion`.
5. **Add a demo.** Update `aura-ui-demo.html` or `aura-playground.html` to showcase your component.
6. **Keep it lean.** Aim for the smallest possible CSS footprint. Justify any addition over ~50 lines.

## File structure

\`\`\`
aura-ui.css           ← The framework. ONLY CSS goes here.
aura-ui-demo.html     ← Static showcase
aura-playground.html  ← Interactive customizer (JS allowed here, demo only)
docs/                 ← Markdown documentation
\`\`\`

## How to submit

1. Fork the repo
2. Create a branch: `git checkout -b feat/component-name`
3. Make your changes
4. Open a PR with a clear description and before/after screenshots if visual
5. Tag your PR: `feat`, `fix`, `docs`, `a11y`, or `perf`

## Code style

- 2-space indentation
- Lowercase hex colors (`#7c6ef8` not `#7C6EF8`) — except in tokens
- One selector per line for multi-selector rules
- Group related properties (layout → box → typography → visual)
- Comment non-obvious choices

Questions? Open a discussion before starting a large PR.
