import { expect, Locator, Page } from '@playwright/test';

export class PlaywrightDevPage {
  readonly page: Page;
  readonly getStartedLink: Locator;
  readonly guidesExpander: Locator;
  readonly tocList: Locator;
  readonly tocMenuList: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.locator('text=Get Started');
    this.guidesExpander = page.locator('text=Guides');
    this.tocList = page.locator('article ul > li > a');
    this.tocMenuList = page.locator('.table-of-contents a');
  }

  async goto() {
    await this.page.goto('https://playwright.dev');
  }

  async getStarted() {
    await this.getStartedLink.first().click();
    await expect(this.guidesExpander).toBeVisible();
  }
}