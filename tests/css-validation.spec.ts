import { test, expect } from '@playwright/test';

test.describe('AuraUI CSS Validation Tests', () => {
  test('glass.css loads successfully', async ({ page }) => {
    const response = await page.goto('/glass.css');
    expect(response?.status()).toBe(200);
    
    const contentType = response?.headers()['content-type'];
    expect(contentType).toContain('text/css');
  });

  test('CSS custom properties are defined', async ({ page }) => {
    await page.goto('/aura-ui-demo.html');
    
    const primaryColor = await page.evaluate(() => {
      return getComputedStyle(document.documentElement)
        .getPropertyValue('--au-primary').trim();
    });
    
    expect(primaryColor).toBeTruthy();
    expect(primaryColor).toMatch(/#[0-9A-Fa-f]{6}/);
  });

  test('backdrop-filter is applied to glass elements', async ({ page }) => {
    await page.goto('/aura-ui-demo.html');
    
    const hasBackdropFilter = await page.evaluate(() => {
      const glassElement = document.querySelector('.au-glass');
      if (!glassElement) return false;
      
      const styles = getComputedStyle(glassElement);
      const backdropFilter = styles.getPropertyValue('backdrop-filter');
      return backdropFilter !== 'none' && backdropFilter !== '';
    });
    
    expect(hasBackdropFilter).toBeTruthy();
  });

  test('responsive grid adjusts on different viewports', async ({ page }) => {
    await page.goto('/aura-ui-demo.html');
    
    await page.setViewportSize({ width: 1920, height: 1080 });
    const desktopCols = await page.evaluate(() => {
      const grid = document.querySelector('.au-grid');
      if (!grid) return 0;
      return getComputedStyle(grid).getPropertyValue('grid-template-columns').split(' ').length;
    });
    
    await page.setViewportSize({ width: 375, height: 667 });
    const mobileCols = await page.evaluate(() => {
      const grid = document.querySelector('.au-grid');
      if (!grid) return 0;
      return getComputedStyle(grid).getPropertyValue('grid-template-columns').split(' ').length;
    });
    
    expect(desktopCols).toBeGreaterThan(mobileCols);
  });
});
