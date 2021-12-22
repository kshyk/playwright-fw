import { Locator, Page } from "@playwright/test";

export class FlashMessage {
    readonly page: Page;
    readonly successAlert: Locator;
    readonly errorAlert: Locator;

    constructor(page: Page) {
        this.page = page;
        this.successAlert = page.locator('.success');
        this.errorAlert = page.locator('.error');
    }
}