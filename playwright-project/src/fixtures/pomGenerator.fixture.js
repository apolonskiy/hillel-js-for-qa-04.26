import { test as base } from "@playwright/test";
import { LoginDialog, LandingPage, Header, SettingsPage } from "../poms";

export const test = base.extend({
  poms: async ({ page }, use) => {
    const landingPage = new LandingPage(page);
    const loginDialog = new LoginDialog(page);
    const header = new Header(page);
    const settingsPage = new SettingsPage(page);
    await use({ landingPage, loginDialog, header, settingsPage });
  },
});
