# AuraUI Automated Testing

This directory contains automated tests for the AuraUI CSS framework.

## Test Structure

### 1. **CSS Linting** (`npm run test:css`)
- Uses Stylelint to validate CSS syntax and conventions
- Enforces consistent naming patterns (`au-*` prefixes)
- Configuration: `.stylelintrc.json`

### 2. **Visual Regression Tests** (`npm run test:visual`)
Playwright-based tests that capture screenshots and detect visual changes:

#### `visual-regression.spec.ts`
- Glass component variants (sm, default, lg, glow)
- Button variants and states (hover, focus, active)
- Form elements (inputs, checkboxes, radios, toggles, sliders)
- Cards and badges
- Responsive grid layouts (desktop, tablet, mobile)

#### `theme-accessibility.spec.ts`
- Dark theme (default) screenshots
- Light theme screenshots  
- Theme switching validation
- Focus state visibility
- Reduced motion support

#### `css-validation.spec.ts`
- CSS file loading validation
- CSS custom properties verification
- Backdrop-filter application checks
- Responsive grid behavior validation

### 3. **Cross-Browser Testing**
Tests run on:
- **Desktop**: Chrome, Firefox, Safari
- **Mobile**: Pixel 5 (Chrome), iPhone 12 (Safari)

## Running Tests

### Install Dependencies
```bash
npm install
```

### Run All Tests
```bash
npm test
```

### Run CSS Linting Only
```bash
npm run test:css
```

### Run Visual Tests Only
```bash
npm run test:visual
```

### Run Tests in UI Mode (Interactive)
```bash
npm run test:visual:ui
```

### Update Baseline Screenshots
After intentional CSS changes, update baselines:
```bash
npm run test:visual:update
```

## CI/CD Integration

The `.github/workflows/css-testing.yml` workflow runs automatically on:
- Every push to `master` or `develop`
- Every pull request to `master` or `develop`

### CI Pipeline Stages:
1. **Lint CSS** - Validates CSS syntax
2. **Visual Regression** - Compares screenshots against baselines
3. **Cross-Browser** - Tests on Ubuntu, Windows, macOS with Chrome, Firefox, Safari
4. **CSS Validation** - W3C CSS validator

## Test Artifacts

Failed test artifacts are uploaded to GitHub Actions:
- `playwright-report/` - HTML test report (30-day retention)
- `playwright-snapshots/` - Screenshot comparisons (7-day retention)

## Writing New Tests

### Visual Regression Test Example:
```typescript
test('new component renders correctly', async ({ page }) => {
  await page.goto('/aura-ui-demo.html');
  const component = page.locator('.au-new-component');
  await expect(component).toHaveScreenshot('new-component.png');
});
```

### CSS Validation Test Example:
```typescript
test('custom property is defined', async ({ page }) => {
  await page.goto('/aura-ui-demo.html');
  const value = await page.evaluate(() => {
    return getComputedStyle(document.documentElement)
      .getPropertyValue('--au-new-property').trim();
  });
  expect(value).toBeTruthy();
});
```

## Debugging Failed Tests

### Locally:
```bash
npm run test:visual:ui
```

### In CI:
1. Download the `playwright-report` artifact
2. Open `index.html` in your browser
3. Review failed screenshots and traces

## Best Practices

1. **Always run tests before committing CSS changes**
2. **Update baselines only for intentional visual changes**
3. **Test on multiple viewports** (desktop, tablet, mobile)
4. **Verify both dark and light themes**
5. **Check accessibility** (focus states, reduced motion)
6. **Add tests for new components** before merging

## Configuration Files

- `playwright.config.ts` - Playwright test configuration
- `.stylelintrc.json` - CSS linting rules
- `package.json` - NPM scripts and dependencies
- `.github/workflows/css-testing.yml` - CI/CD pipeline
