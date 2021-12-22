import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects/the-internet/login-page';
import { SecurePage } from '../pageobjects/the-internet/secure-page';
import { FlashMessage } from '../pageobjects/the-internet/flash-message';

test.describe('The Internet', () => {
  test.use({
    httpCredentials: {
      username: 'admin',
      password: 'admin'
    }
  });

  const authMap = new Map<string, string>([
    ['Basic Auth', '/basic_auth'],
    ['Digest Auth', '/digest_auth']
  ]);
  authMap.forEach((endpoint: string, name: string) => {
    test(name, async ({ page }) => {
      page.setDefaultNavigationTimeout(0);
      await page.goto('https://the-internet.herokuapp.com'.concat(endpoint), {
        waitUntil: 'load',
        timeout: 0
      });
      await expect(page.locator('text=Congratulations!')).toBeVisible();
    });
  });

  test('Form Authentication', async ({ page }) => {
    page.setDefaultNavigationTimeout(0);
    await page.goto('https://the-internet.herokuapp.com/login', {
      waitUntil: 'load',
      timeout: 0
    });
    const username = 'tomsmith';
    const password = 'SuperSecretPassword!';
    const loginPage = new LoginPage(page);
    const flash = new FlashMessage(page);
    const usernameCases = new Map<string, string>([
      ['', password],
      [username.slice(0, -1), password]
    ]);
    usernameCases.forEach(async (password: string, username: string) => {
      await loginPage.login(username, password);
      await expect(flash.errorAlert).toContainText('Your username is invalid!');
    });
    const passwordCases = new Map<string, string>([
      ['', username],
      [password.slice(0, -1), username]
    ]);
    passwordCases.forEach(async (username: string, password: string) => {
      await loginPage.login(username, password);
      await expect(flash.errorAlert).toContainText('Your password is invalid!');
    });
    await loginPage.login(username, password);
    const securePage = new SecurePage(page);
    await expect(flash.successAlert).toContainText(
      'You logged into a secure area!'
    );
    await securePage.logout();
    await expect(flash.successAlert).toContainText(
      'You logged out of the secure area!'
    );
  });

  test.afterEach(async ({ page }) => {
    page.close();
  });
});
