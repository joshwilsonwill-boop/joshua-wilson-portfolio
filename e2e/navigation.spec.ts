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

    // Scope to the dropdown: the footer renders links with the same labels.
    const menu = page.locator('#site-menu');

    for (const label of expectedLinks) {
      const link = menu.locator(`a:has-text("${label}")`);
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

  test('Lab cards are informational and the archive remains reachable', async ({ page }) => {
    for (const route of ['/', '/lab']) {
      await page.goto(route);
      const lab = page.locator('#lab');
      await expect(lab.locator('article.lab-card')).toHaveCount(4);
      await expect(lab.locator('.lab-card a, a.lab-card')).toHaveCount(0);

      if (route === '/') {
        await lab.getByRole('link', { name: 'View All Experiments' }).filter({ visible: true }).click();
        await expect(page).toHaveURL(/\/lab$/);
        await expect(page.getByRole('heading', { name: 'Lab Archive', exact: true })).toBeVisible();
      }
    }
  });
});
