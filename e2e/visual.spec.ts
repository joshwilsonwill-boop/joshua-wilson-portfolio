import { test, expect } from '@playwright/test';

test('homepage visual regression', async ({ page }) => {
  await page.goto('/');
  await page.waitForTimeout(2000); // Let animations settle
  await expect(page).toHaveScreenshot('homepage.png', {
    fullPage: true,
    threshold: 0.2,
  });
});

test('dual-x popup visible', async ({ page }) => {
  await page.goto('/');
  // We don't have a reliable data-testid on the dual-x popup right now, so we will click by aria-label
  await page.click('button[aria-label="X (Twitter) Accounts"]');
  // Wait for animation to finish
  await page.waitForTimeout(500);
  
  // Find the popup. We can use the link that contains personal text as an anchor.
  const popupLink = page.locator('a[href="https://x.com/joshwilson_will"]');
  await expect(popupLink).toBeVisible();
  
  await expect(page).toHaveScreenshot('dual-x-popup.png');
});
