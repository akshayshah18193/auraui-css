# Quick Start Guide - AuraUI CSS Testing

## Initial Setup (One Time)
```bash
npm install
npx playwright install
```

## Daily Commands
```bash
# Run all tests
npm test

# Run just CSS linting
npm run test:css

# Run visual tests only
npm run test:visual

# Interactive test UI (best for debugging)
npm run test:visual:ui
```

## After Making CSS Changes
```bash
# 1. Run tests to see what changed
npm run test:visual

# 2. Review screenshots in the UI
npm run test:visual:ui

# 3. If changes are intentional, update baselines
npm run test:visual:update

# 4. Commit the baseline changes
git add tests/**/*-snapshots/
git commit -m "Update visual baselines for [feature]"
```

## What Gets Tested

✅ **Glass Components**
- Small, default, large variants
- Glow effects
- Backdrop filters

✅ **Buttons**
- All style variants (primary, secondary, outline, etc.)
- All sizes (xs, sm, lg, xl)
- Hover, focus, active states

✅ **Forms**
- Input fields (default, error, success)
- Checkboxes, radios, toggles
- Sliders and file uploads

✅ **Responsive Design**
- Desktop (1920×1080)
- Tablet (768×1024)
- Mobile (375×667)

✅ **Themes**
- Dark mode (default)
- Light mode
- Theme switching

✅ **Accessibility**
- Focus states
- Reduced motion
- Keyboard navigation

## CI/CD

Tests run automatically on:
- Pushes
- Pull requests

View results: GitHub → Actions tab

## Troubleshooting

**Tests failing after CSS changes?**
- Review changes in UI mode: `npm run test:visual:ui`
- If intentional: `npm run test:visual:update`
- If bugs: fix the CSS and re-run tests

**Linting errors?**
- Auto-fix: `npm run lint:css`
- Check `.stylelintrc.json` for rules

**Need to see browser?**
- Use `--headed` flag: `npx playwright test --headed`
- Or use UI mode: `npm run test:visual:ui`

## Files & Folders

```
.
├── package.json              # Dependencies & scripts
├── playwright.config.ts      # Test configuration
├── .stylelintrc.json        # CSS linting rules
├── TESTING.md               # Full documentation
├── .github/workflows/
│   └── css-testing.yml      # CI/CD pipeline
└── tests/
    ├── README.md                     # Test docs
    ├── visual-regression.spec.ts     # Component tests
    ├── theme-accessibility.spec.ts   # Theme/a11y tests
    └── css-validation.spec.ts        # CSS validation
```

## More Help

- Full docs: See `TESTING.md`
- Test docs: See `tests/README.md`
- Playwright docs: https://playwright.dev
