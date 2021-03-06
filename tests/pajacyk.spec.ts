import { test, expect } from '@playwright/test';
import { HomePage } from '../pageobjects/pajacyk/home-page';

test.describe('Pajacyk', () => {
  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
  });

  test('Click on belly should donate kids', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.clickBelly();
    await expect(homePage.thanks).toBeVisible();
  });

  test.afterEach(async ({ page }) => {
    page.close();
  });
});
