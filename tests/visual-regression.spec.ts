import { test, expect } from '@playwright/test';

test.describe('AuraUI Glass Components', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/aura-ui-demo.html');
  });

  test('glass card renders correctly', async ({ page }) => {
    const glassCard = page.locator('.au-glass').first();
    await expect(glassCard).toBeVisible();
    await expect(glassCard).toHaveScreenshot('glass-card.png');
  });

  test('glass variants render correctly', async ({ page }) => {
    const glassSmall = page.locator('.au-glass-sm').first();
    const glassLarge = page.locator('.au-glass-lg').first();
    
    await expect(glassSmall).toBeVisible();
    await expect(glassLarge).toBeVisible();
    
    await expect(glassSmall).toHaveScreenshot('glass-sm.png');
    await expect(glassLarge).toHaveScreenshot('glass-lg.png');
  });

  test('glass with glow effect', async ({ page }) => {
    const glassGlow = page.locator('.au-glass-glow').first();
    await expect(glassGlow).toBeVisible();
    await expect(glassGlow).toHaveScreenshot('glass-glow.png');
  });
});

test.describe('AuraUI Buttons', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/aura-ui-demo.html');
  });

  test('button variants render correctly', async ({ page }) => {
    const buttonGroup = page.locator('.au-btn').first().locator('..');
    await expect(buttonGroup).toHaveScreenshot('button-variants.png');
  });

  test('button states (hover, focus, active)', async ({ page }) => {
    const primaryBtn = page.locator('.au-btn-primary').first();
    
    await expect(primaryBtn).toHaveScreenshot('button-default.png');
    
    await primaryBtn.hover();
    await expect(primaryBtn).toHaveScreenshot('button-hover.png');
    
    await primaryBtn.focus();
    await expect(primaryBtn).toHaveScreenshot('button-focus.png');
  });

  test('button sizes render correctly', async ({ page }) => {
    const btnXs = page.locator('.au-btn-xs').first();
    const btnSm = page.locator('.au-btn-sm').first();
    const btnLg = page.locator('.au-btn-lg').first();
    const btnXl = page.locator('.au-btn-xl').first();
    
    await expect(btnXs).toHaveScreenshot('button-xs.png');
    await expect(btnSm).toHaveScreenshot('button-sm.png');
    await expect(btnLg).toHaveScreenshot('button-lg.png');
    await expect(btnXl).toHaveScreenshot('button-xl.png');
  });
});

test.describe('AuraUI Form Elements', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/aura-ui-demo.html');
  });

  test('input field renders correctly', async ({ page }) => {
    const input = page.locator('.au-input').first();
    await expect(input).toBeVisible();
    await expect(input).toHaveScreenshot('input-default.png');
  });

  test('input validation states', async ({ page }) => {
    const inputError = page.locator('.au-input-error').first();
    const inputSuccess = page.locator('.au-input-success').first();
    
    await expect(inputError).toHaveScreenshot('input-error.png');
    await expect(inputSuccess).toHaveScreenshot('input-success.png');
  });

  test('checkbox and radio buttons', async ({ page }) => {
    const checkbox = page.locator('.au-checkbox').first();
    const radio = page.locator('.au-radio').first();
    
    await expect(checkbox).toHaveScreenshot('checkbox.png');
    await expect(radio).toHaveScreenshot('radio.png');
  });

  test('toggle switch', async ({ page }) => {
    const toggle = page.locator('.au-toggle').first();
    await expect(toggle).toBeVisible();
    await expect(toggle).toHaveScreenshot('toggle.png');
  });

  test('range slider', async ({ page }) => {
    const range = page.locator('.au-range').first();
    await expect(range).toBeVisible();
    await expect(range).toHaveScreenshot('range-slider.png');
  });
});

test.describe('AuraUI Cards and Badges', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/aura-ui-demo.html');
  });

  test('card component renders correctly', async ({ page }) => {
    const card = page.locator('.au-card').first();
    await expect(card).toBeVisible();
    await expect(card).toHaveScreenshot('card.png');
  });

  test('badge variants', async ({ page }) => {
    const badgePrimary = page.locator('.au-badge-primary').first();
    const badgeSuccess = page.locator('.au-badge-success').first();
    const badgeDanger = page.locator('.au-badge-danger').first();
    
    await expect(badgePrimary).toHaveScreenshot('badge-primary.png');
    await expect(badgeSuccess).toHaveScreenshot('badge-success.png');
    await expect(badgeDanger).toHaveScreenshot('badge-danger.png');
  });
});

test.describe('AuraUI Responsive Layout', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/aura-ui-demo.html');
  });

  test('grid layout on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 1920, height: 1080 });
    const grid = page.locator('.au-grid').first();
    await expect(grid).toHaveScreenshot('grid-desktop.png');
  });

  test('grid layout on tablet', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    const grid = page.locator('.au-grid').first();
    await expect(grid).toHaveScreenshot('grid-tablet.png');
  });

  test('grid layout on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    const grid = page.locator('.au-grid').first();
    await expect(grid).toHaveScreenshot('grid-mobile.png');
  });
});
