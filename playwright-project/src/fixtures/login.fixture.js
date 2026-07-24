import { test as base } from "@playwright/test";
import { LoginDialog, LandingPage } from "../poms";

export const test = base.extend({
  defaultUserCreds: [
    {
      username: "hillel-1@aaa.com",
      password: "testHillel1!",
    },
    { option: true },
  ],
  login: [
    async ({ page, defaultUserCreds }, use) => {
      const landingPage = new LandingPage(page);
      const loginDialog = new LoginDialog(page);
      await landingPage.open();
      await landingPage.clickSignInButton();
      await loginDialog.login(
        defaultUserCreds.username,
        defaultUserCreds.password,
      );
      await use();
    },
    { auto: true },
  ],
});

export { expect } from "@playwright/test";
