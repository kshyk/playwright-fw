import { Page } from '@playwright/test';

export class FileDownload {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto(): Promise<void> {
    this.page.setDefaultNavigationTimeout(0);
    await this.page.goto('https://the-internet.herokuapp.com/download', {
      waitUntil: 'load',
      timeout: 0
    });
    return;
  }
}
