import { test } from '@playwright/test';

test.afterEach('Close page', async ({ page }) => {
  await page.close();
});
