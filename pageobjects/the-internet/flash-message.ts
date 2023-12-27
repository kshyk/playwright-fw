import { Locator, Page } from '@playwright/test';

export class FlashMessage {
  readonly successAlert: Locator;
  readonly errorAlert: Locator;

  constructor(page: Page) {
    this.successAlert = page.locator('.success');
    this.errorAlert = page.locator('.error');
  }
}
