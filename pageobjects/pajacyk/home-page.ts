import { expect, Page } from '@playwright/test';

export default class HomePage {
  constructor(
    private readonly page: Page,
    private readonly bellyButton = page.locator('.pajacyk__clickbox'),
    private readonly thanks = page.locator('.pajacyk__thankyou')
  ) {}

  goto = async () => {
    this.page.setDefaultNavigationTimeout(0);
    await this.page.goto('https://www.pajacyk.pl', {
      waitUntil: 'domcontentloaded',
      timeout: 10000
    });
    return this;
  };

  clickBellyButton = async () => await this.bellyButton.first().click();

  checkThanksMessage = async () => await expect(this.thanks).toBeVisible();
}
