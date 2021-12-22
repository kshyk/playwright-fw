import { expect, Locator, Page } from "@playwright/test";

export class SecurePage {
    readonly page: Page;
    readonly logoutButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.logoutButton = page.locator("a[href='/logout']");
    }

    async logout() {
        await this.logoutButton.first().click();
        await expect(this.logoutButton).toBeHidden();
    }
}