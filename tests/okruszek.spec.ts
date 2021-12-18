import { test, expect } from '@playwright/test';
import { HomePage } from '../pageobjects/okruszek/home-page';

test.describe('Okruszek', () => {
    test('Click on bread should donate hungers', async ({ page }) => {
        const homePage = new HomePage(page);
        await homePage.goto();
        await homePage.clickBread();
        await expect(homePage.thanks).toBeVisible();
    });
});