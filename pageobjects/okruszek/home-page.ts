import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly breadButton: Locator;
    readonly thanks: Locator;

    constructor(page: Page) {
        this.page = page;
        this.breadButton = page.locator('.click-crumb');
        this.thanks = page.locator("text=DZIĘKUJEMY!");
    }

    async goto() {
        this.page.setDefaultNavigationTimeout(0);
        await this.page.goto('http://www.okruszek.org.pl', {
            waitUntil: 'load',
            timeout: 0
        });
    }

    async clickBread() {
        await this.breadButton.first().click();
    }
}