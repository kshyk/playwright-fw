import { test, expect } from '@playwright/test';
import { PlaywrightDevPage } from '../pageobjects/playwright-dev-page';

test.describe('Intro page', () => {
    test.beforeEach(async ({ page }) => {
        const playwrightDev = new PlaywrightDevPage(page);
        await playwrightDev.goto();
        await playwrightDev.getStarted();
    });

    test('Get Started table of contents', async ({ page }) => {
        const playwrightDev = new PlaywrightDevPage(page);
        await expect(playwrightDev.tocList).toHaveText([
            'Installation',
            'First test',
            'Configuration file',
            'Writing assertions',
            'Using test fixtures',
            'Using test hooks',
            'Command line',
            'Configure NPM scripts',
            'Release notes',
        ]);
    });
    
    test('Get Started side menu table of contents',async ({ page }) => {
        const playwrightDev = new PlaywrightDevPage(page);
        await expect(playwrightDev.tocMenuList).toHaveText([
            'Installation',
            'First test',
            'Configuration file',
            'Writing assertions',
            'Using test fixtures',
            'Using test hooks',
            'Command line',
            'Configure NPM scripts'
        ]);
    });
});