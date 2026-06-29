// @ts-check
import { test, expect, devices } from '@playwright/test';



// test.use({ ...devices['Desktop Firefox'], channel: 'firefox' }); // or 'firefox-beta'
test.describe('Basic test structure', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  })

  test('has title', {tag: ['@smoke', '@firefox-test']},async ({ page, browser, context }) => {
    // const context2 = await browser.newContext();
    const page2 = await context.newPage();
    await page2.goto('https://playwright.dev/');
    await page2.getByRole('link', { name: 'Get started' }).click();
    await page.waitForTimeout(1000);
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  // // opeing new tab handling
  // const newPagePromise = page.waitForEvent('popup');
  // //some action which opens new tab
  // const newPage = await newPagePromise;

  // --- alternatively, get page from context
  // const pages = context.pages();
  // const newPage = pages[1];
  // await expect(newPage).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});

})
