import { Locator, Page } from '@playwright/test';

export class Header {
  readonly phone: Locator;
  readonly mail: Locator;

  constructor(page: Page) {
    this.phone = page.locator('.topka-tel');
    this.mail = page.locator('.topka-mail');
  }
}
