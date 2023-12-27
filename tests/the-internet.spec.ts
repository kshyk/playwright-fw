import { test, expect } from '@playwright/test';
import { LoginPage } from '../pageobjects/the-internet/login-page';
import { SecurePage } from '../pageobjects/the-internet/secure-page';
import { FileUpload } from '../pageobjects/the-internet/file-upload-page';
import { FlashMessage } from '../pageobjects/the-internet/flash-message';
import { FileDownload } from '../pageobjects/the-internet/file-download-page';
import fs from 'fs';

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
  authMap.forEach((endpoint, name) => {
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
    const username = process.env.USER_NAME;
    const password = process.env.USER_PASSWORD;
    const loginPage = new LoginPage(page);
    await loginPage.goto();
    const flash = new FlashMessage(page);
    const usernameCases = new Map<string, string>([
      ['', password],
      [username.slice(0, -1), password]
    ]);
    for (const [username, password] of usernameCases) {
      await loginPage.login(username, password);
      await expect(flash.errorAlert).toContainText('Your username is invalid!');
    }
    const passwordCases = new Map<string, string>([
      ['', username],
      [password.slice(0, -1), username]
    ]);
    for (const [password, username] of passwordCases) {
      await loginPage.login(username, password);
      await expect(flash.errorAlert).toContainText('Your password is invalid!');
    }
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

  test('File upload and download', async ({ page }) => {
    const fileName = 'upload-me.txt';
    const uploadPage = new FileUpload(page);
    await uploadPage.goto();
    const uploadPath = `./data/${fileName}`;
    await uploadPage.uploadFile(uploadPath);
    await expect(uploadPage.uploadSuccess).toContainText(fileName);
    const downloadPage = new FileDownload(page);
    await downloadPage.goto();
    const [download] = await Promise.all([
      page.waitForEvent('download'),
      page.click(`a[href='download/${fileName}']`)
    ]);
    const downloadPath = await download.path();
    const actualFile = fs.readFileSync(downloadPath);
    const expectedFile = fs.readFileSync(uploadPath);
    expect(actualFile).toEqual(expectedFile);
    expect(actualFile).toStrictEqual(expectedFile);
  });
});
