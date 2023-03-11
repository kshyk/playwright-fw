import { Locator, Page } from '@playwright/test';

export class Header {
  readonly page: Page;
  readonly phone: Locator;
  readonly mail: Locator;

  constructor(page: Page) {
    this.page = page;
    this.phone = page.locator('.topka-tel');
    this.mail = page.locator('.topka-mail');
  }
}
