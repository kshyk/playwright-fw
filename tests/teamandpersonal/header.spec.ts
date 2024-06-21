import { test } from '@playwright/test';
import Header from '../../pageobjects/teamandpersonal/header';
import HomePage from '../../pageobjects/teamandpersonal/home-page';

test.describe('Header', () => {
  let header: Header;

  test.beforeEach(async ({ page }) => {
    await new HomePage(page).goto();
    header = new Header(page);
  });

  test('Phone number with e-mail address', async () => {
    await header.checkPhoneNumber('+48 660 22 77 22');
    await header.checkEmailAddress('biuro [at] teamandpersonal.pl');
  });
});
