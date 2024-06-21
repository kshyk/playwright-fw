import { test } from '@playwright/test';
import HomePage from '../pageobjects/pajacyk/home-page';

test.describe('Pajacyk', () => {
  test('Click on belly should donate kids', async ({ page }) => {
    const homePage = await new HomePage(page).goto();
    await homePage.clickBellyButton();
    await homePage.checkThanksMessage();
  });
});
