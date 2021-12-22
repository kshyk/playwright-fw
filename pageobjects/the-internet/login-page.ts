import { Locator, Page } from "@playwright/test";

export class LoginPage {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('button:has-text("Login")');
    }

    async login(username: string, password: string) {
        await this.usernameInput.type(username);
        await this.passwordInput.type(password);
        await this.loginButton.click();
    }
}