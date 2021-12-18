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
        await this.page.goto('http://www.okruszek.org.pl');
    }

    async clickBread() {
        await this.breadButton.first().click();
    }
}