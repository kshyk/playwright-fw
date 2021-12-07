import { test, expect } from '@playwright/test';

test.describe('home page', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto('https://playwright.dev/');
        await expect(page).toHaveTitle(/Playwright/);
    });

    test('introduction page should be displayed after click on get started button', async ({ page }) => {
        const getStartedButton = page.locator('text=Get Started').first();
        await expect(getStartedButton).toHaveAttribute('href', '/docs/intro');
        await getStartedButton.click();
        await expect(page.locator('text=Introduction').first()).toBeVisible();
    });
});