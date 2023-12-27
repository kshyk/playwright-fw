import { expect, Locator, Page } from '@playwright/test';

export class SecurePage {
  readonly logoutButton: Locator;

  constructor(page: Page) {
    this.logoutButton = page.locator("a[href='/logout']");
  }

  async logout(): Promise<void> {
    await this.logoutButton.first().click();
    await expect(this.logoutButton).toBeHidden();
  }
}
