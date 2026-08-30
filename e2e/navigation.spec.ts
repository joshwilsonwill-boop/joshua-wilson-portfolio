import { test, expect } from '@playwright/test';

test.describe('Navigation & Section Link Tests', () => {
  test('hamburger menu opens and displays all navigation links', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // Click menu toggle button
    const menuButton = page.locator('button[aria-label="Toggle menu"]');
    await expect(menuButton).toBeVisible();
    await menuButton.click();

    // Verify all 8 links are rendered in menu
    const expectedLinks = [
      'About Me',
      'Stack',
      'Services',
      'Lab',
      'Featured Projects',
      'Thoughts',
      'Field Notes',
      'Contact',
    ];

    for (const label of expectedLinks) {
      const link = page.locator(`a:has-text("${label}")`);
      await expect(link).toBeVisible();
    }
  });

  test('direct navigation to sub-routes', async ({ page }) => {
    const routes = ['/work', '/thoughts', '/field-notes', '/lab'];

    for (const route of routes) {
      await page.goto(route);
      await page.waitForLoadState('domcontentloaded');
      expect(page.url()).toContain(route);
    }
  });
});
