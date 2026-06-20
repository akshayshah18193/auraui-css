import { test, expect } from '@playwright/test';

test.describe('AuraUI Theme Switching', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/aura-ui-demo.html');
  });

  test('dark theme (default)', async ({ page }) => {
    await expect(page).toHaveScreenshot('theme-dark-full.png', {
      fullPage: true,
    });
  });

  test('light theme', async ({ page }) => {
    await page.evaluate(() => {
      document.documentElement.classList.add('au-light');
    });
    
    await expect(page).toHaveScreenshot('theme-light-full.png', {
      fullPage: true,
    });
  });

  test('theme toggle affects all components', async ({ page }) => {
    const glassCard = page.locator('.au-glass').first();
    const button = page.locator('.au-btn-primary').first();
    
    await expect(glassCard).toHaveScreenshot('dark-glass-card.png');
    await expect(button).toHaveScreenshot('dark-button.png');
    
    await page.evaluate(() => {
      document.documentElement.classList.add('au-light');
    });
    
    await expect(glassCard).toHaveScreenshot('light-glass-card.png');
    await expect(button).toHaveScreenshot('light-button.png');
  });
});

test.describe('AuraUI Accessibility', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/aura-ui-demo.html');
  });

  test('focus states are visible', async ({ page }) => {
    const button = page.locator('.au-btn').first();
    const input = page.locator('.au-input').first();
    
    await button.focus();
    await expect(button).toHaveScreenshot('button-focused.png');
    
    await input.focus();
    await expect(input).toHaveScreenshot('input-focused.png');
  });

  test('prefers reduced motion', async ({ page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    const button = page.locator('.au-btn-primary').first();
    
    await button.hover();
    await expect(button).toHaveScreenshot('button-reduced-motion.png');
  });
});
