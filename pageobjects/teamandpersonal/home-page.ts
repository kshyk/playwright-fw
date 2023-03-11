import { Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<void> {
    this.page.setDefaultNavigationTimeout(0);
    await this.page.goto('https://teamandpersonal.pl', {
      waitUntil: 'load',
      timeout: 0
    });
    return;
  }
}
