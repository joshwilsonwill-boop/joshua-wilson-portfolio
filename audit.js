const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const routes = ['/', '/work', '/thoughts'];

  for (const route of routes) {
    console.log(`Visiting ${route}...`);
    try {
      await page.goto(`http://localhost:3000${route}`, { waitUntil: 'networkidle' });
      // Wait a bit for any animations to settle
      await page.waitForTimeout(2000);
      
      const fileName = route === '/' ? 'home' : route.slice(1);
      await page.screenshot({ path: `screenshots/${fileName}.png`, fullPage: true });
      console.log(`Saved screenshots/${fileName}.png`);
    } catch (e) {
      console.error(`Error on ${route}:`, e.message);
    }
  }

  await browser.close();
})();
