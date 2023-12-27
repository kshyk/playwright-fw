import { test, expect } from '@playwright/test';
import { Header } from '../../pageobjects/teamandpersonal/header';
import { HomePage } from '../../pageobjects/teamandpersonal/home-page';

test.describe('Header', () => {
  let header: Header;

  test.beforeEach(async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    header = new Header(page);
  });

  test('Phone number with e-mail address', async () => {
    await expect.soft(header.phone).toContainText('+48 660 22 77 22');
    await expect
      .soft(header.mail)
      .toContainText('biuro [at] teamandpersonal.pl');
  });
});
