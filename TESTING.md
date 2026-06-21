# Automated CSS Testing Setup - AuraUI

This branch contains a comprehensive automated testing infrastructure for the AuraUI CSS framework.

## 🎯 What's Been Added

### Testing Infrastructure
- ✅ **CSS Linting** with Stylelint
- ✅ **Visual Regression Testing** with Playwright
- ✅ **Cross-Browser Testing** (Chrome, Firefox, Safari)
- ✅ **Mobile Testing** (iPhone 12, Pixel 5)
- ✅ **Accessibility Testing** (Focus states, reduced motion)
- ✅ **CI/CD Pipeline** via GitHub Actions

### New Files Created

```
auraui-css/
├── package.json              # NPM dependencies and scripts
├── playwright.config.ts      # Playwright configuration
├── .stylelintrc.json        # CSS linting rules
├── .gitignore               # Git ignore patterns
├── .github/
│   └── workflows/
│       └── css-testing.yml  # CI/CD pipeline
└── tests/
    ├── README.md                     # Testing documentation
    ├── visual-regression.spec.ts     # Visual component tests
    ├── theme-accessibility.spec.ts   # Theme & a11y tests
    └── css-validation.spec.ts        # CSS validation tests
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Install Playwright Browsers (First Time Only)
```bash
npx playwright install
```

### 3. Run All Tests
```bash
npm test
```

## 📋 Available Commands

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests (CSS lint + visual) |
| `npm run test:css` | Run CSS linting only |
| `npm run test:visual` | Run visual regression tests |
| `npm run test:visual:ui` | Run tests in interactive UI mode |
| `npm run test:visual:update` | Update baseline screenshots |
| `npm run lint:css` | Auto-fix CSS linting issues |

## 🧪 Test Coverage

### Visual Regression Tests
- **Glass Components**: sm, default, lg, glow variants
- **Buttons**: All variants (primary, secondary, outline, ghost, glass, danger, success)
- **Button States**: Default, hover, focus
- **Button Sizes**: xs, sm, lg, xl
- **Forms**: Inputs, selects, checkboxes, radios, toggles, sliders
- **Form States**: Error, success, focus
- **Cards & Badges**: All variants
- **Layouts**: Responsive grid (desktop, tablet, mobile)

### Theme Testing
- Dark theme (default)
- Light theme
- Theme switching validation

### Accessibility Testing
- Focus state visibility
- Reduced motion support
- Keyboard navigation

### CSS Validation
- Custom property definitions
- Backdrop-filter application
- Responsive behavior
- W3C CSS validation

## 🔄 CI/CD Integration

The GitHub Actions workflow runs automatically on:
- Every push
- Every pull request

### Pipeline Stages:
1. **Lint CSS** - Validates syntax and conventions
2. **Visual Regression** - Compares screenshots
3. **Cross-Browser Tests** - Tests on Ubuntu, Windows, macOS
4. **W3C Validation** - Validates CSS standards

### Viewing CI Results:
- Check the "Actions" tab in GitHub
- Failed tests upload artifacts (reports + screenshots)
- Download artifacts to debug failures

## 📸 Visual Regression Testing

### How It Works:
1. First run creates baseline screenshots
2. Subsequent runs compare against baselines
3. Tests fail if visual differences detected

### Updating Baselines:
After intentional CSS changes:
```bash
npm run test:visual:update
git add tests/**/*-snapshots/
git commit -m "Update visual regression baselines"
```

## 🐛 Debugging Failed Tests

### Locally:
```bash
# Interactive UI mode (best for debugging)
npm run test:visual:ui

# View last test report
npx playwright show-report
```

### In CI:
1. Go to Actions tab → Failed workflow
2. Download `playwright-report` artifact
3. Unzip and open `index.html`
4. Review screenshots and traces

## ✅ Best Practices

1. **Run tests before committing** CSS changes
2. **Update baselines** only for intentional changes
3. **Test multiple viewports** (desktop, tablet, mobile)
4. **Verify both themes** (dark and light)
5. **Check accessibility** (focus, reduced motion)
6. **Add tests** for new components

## 🔧 Configuration

### Stylelint (`.stylelintrc.json`)
- Enforces `au-*` class naming convention
- Validates custom property names
- Extends standard CSS rules

### Playwright (`playwright.config.ts`)
- Tests 5 browsers: Desktop Chrome/Firefox/Safari, Mobile Chrome/Safari
- Runs local dev server on port 8080
- Captures screenshots on failure
- Generates HTML reports

## 📝 Example: Adding a New Component Test

```typescript
// tests/visual-regression.spec.ts

test('new component renders correctly', async ({ page }) => {
  await page.goto('/aura-ui-demo.html');
  
  const newComponent = page.locator('.au-new-component');
  await expect(newComponent).toBeVisible();
  await expect(newComponent).toHaveScreenshot('new-component.png');
});
```

## 🎓 Learning Resources

- [Playwright Documentation](https://playwright.dev/)
- [Stylelint Documentation](https://stylelint.io/)
- [Visual Regression Testing Guide](https://playwright.dev/docs/test-snapshots)

## 🤝 Contributing

When contributing CSS changes:
1. Run `npm test` before committing
2. Update baselines if visual changes are intentional
3. Add tests for new components
4. Ensure CI passes before merging

## 📊 Metrics

- **Test Coverage**: All major components
- **Browser Support**: Chrome 88+, Firefox 103+, Safari 14+
- **Mobile Testing**: iOS and Android devices
- **Test Execution Time**: ~2-3 minutes (all browsers)

---

## Next Steps

1. ✅ Install dependencies: `npm install`
2. ✅ Install browsers: `npx playwright install`
3. ✅ Run initial tests: `npm test`
4. ✅ Generate baselines: `npm run test:visual:update`
5. ✅ Commit baselines: `git add tests/**/*-snapshots/ && git commit`
6. ✅ Push to trigger CI: `git push`

---

**Created**: 2026-06-20  
**Branch**: `akshayshah18193-automated-css-testing`  
**Author**: Akshay Shah
