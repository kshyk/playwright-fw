import { Locator, Page } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly bellyButton: Locator;
  readonly thanks: Locator;

  constructor(page: Page) {
    this.page = page;
    this.bellyButton = page.locator('.pajacyk__clickbox');
    this.thanks = page.locator('.pajacyk__thankyou');
  }

  async goto(): Promise<void> {
    this.page.setDefaultNavigationTimeout(0);
    await this.page.goto('https://www.pajacyk.pl/#index', {
      waitUntil: 'load',
      timeout: 0
    });
    return;
  }

  async clickBelly(): Promise<void> {
    await this.bellyButton.first().click();
    return;
  }
}
