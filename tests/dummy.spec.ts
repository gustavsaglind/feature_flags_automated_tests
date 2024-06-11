import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  const getStarted = page.locator('text=Get Started');

  await expect(getStarted).toHaveAttribute('href', '/docs/intro');
  await getStarted.click();
  await expect(page).toHaveURL('https://playwright.dev/docs/intro');
});

test('add feature flag', async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

test('remove feature flag', async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

test('enable feature flag', async ({ page }) => {
  await page.goto('https://playwright.dev/');
});

test('disable feature flag', async ({ page }) => {
  await page.goto('https://playwright.dev/');
});
