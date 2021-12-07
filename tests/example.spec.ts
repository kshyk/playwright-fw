import { test, expect } from '@playwright/test';

test('check navigation to introduction page', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  const getStartedButton = page.locator('text=Get Started').first();
  await expect(getStartedButton).toHaveAttribute('href', '/docs/intro');
  await getStartedButton.click();
  await expect(page.locator('text=Introduction').first()).toBeVisible();
});