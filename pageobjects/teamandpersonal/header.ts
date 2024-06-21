import { expect, Page } from '@playwright/test';

export default class Header {
  constructor(
    readonly page: Page,
    private readonly phone = page.locator('.topka-tel'),
    private readonly mail = page.locator('.topka-mail')
  ) {}

  checkPhoneNumber = async (number: string) =>
    expect(this.phone).toContainText(number);

  checkEmailAddress = async (email: string) =>
    expect(this.mail).toContainText(email);
}
