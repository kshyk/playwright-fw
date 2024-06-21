import { Page } from '@playwright/test';

export default class HomePage {
  constructor(private readonly page: Page) {}

  goto = async () => {
    await this.page.goto('https://teamandpersonal.pl');
    return this;
  };
}
