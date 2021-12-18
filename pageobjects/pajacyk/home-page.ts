import { Locator, Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly bellyButton: Locator;
    readonly thanks: Locator;

    constructor(page: Page) {
        this.page = page;
        this.bellyButton = page.locator('.pajacyk__clickbox');
        this.thanks = page.locator(".pajacyk__thankyou");
    }

    async goto() {
        await this.page.goto('https://www.pajacyk.pl/#index');
    }

    async clickBelly() {
        await this.bellyButton.first().click();
    }
}