import { test, expect } from "@playwright/test";
import { LandingPage, LoginDialog } from "../../src";

/** @type {LandingPage} */
let landingPage;
/** @type {LoginDialog} */
let loginDialog;

const authFilePath = "playwright-report/.auth/user.json";

test("authenticate", async ({ page, baseURL }) => {
  landingPage = new LandingPage(page);
  loginDialog = new LoginDialog(page);
  await landingPage.open();
  await landingPage.clickSignInButton();
  await loginDialog.login(
    process.env.DEFAULT_USER_EMAIL,
    process.env.DEFAULT_USER_PASSWORD,
  );
  await expect(page).toHaveURL(`${baseURL}/panel/garage`);
  await expect(page).toHaveURL(/panel\/garage/);
  await expect(page).toHaveURL(new RegExp("/panel/garage"));
  await page.context().storageState({ path: authFilePath });
});
