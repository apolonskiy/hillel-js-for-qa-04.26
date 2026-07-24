import { paramsFixtures as test, expect } from "../src";
import {
  SettingsPage,
  Currencies,
  Units,
  LandingPage,
  LoginDialog,
  Header,
} from "../src";

/** @type {SettingsPage} */
let settingsPage;
/** @type {LandingPage} */
let landingPage;
/** @type {LoginDialog} */
let loginDialog;
/** @type {Header} */
let header;

test.describe("Settings page tests - params", () => {
  test.beforeEach(async ({ page, baseURL, params }) => {
    console.log(params);
    settingsPage = new SettingsPage(page);
    landingPage = new LandingPage(page);
    loginDialog = new LoginDialog(page);
    header = new Header(page);
    await page.goto(params.baseUrl);
    await landingPage.clickSignInButton();
    await loginDialog.login(
      params.defaultUserEmail,
      params.defaultUserPassword,
    );
    await expect(page).toHaveURL(`${params.baseUrl}/panel/garage`);
    await expect(page).toHaveURL(/panel\/garage/);
    await expect(page).toHaveURL(new RegExp("/panel/garage"));
    await header.clickMyProfileButton();
    await header.clickMyProfileDropdownLink("Settings");
  });

  test.afterEach(async ({ page }) => {
    await page.request.put("/api/users/settings", {
      data: { currency: Currencies.USD.toLowerCase(), distanceUnits: Units.KM },
    });
  });

  test("Validate multiple cases with steps - params @qauto1Override", async ({
    page,
  }) => {
    await test.step("Verify currency and units settings", async () => {
      await expect(
        settingsPage.selectors.currencyButton(Currencies.USD),
      ).toContainClass("-active");
      await expect(settingsPage.selectors.unitsButton(Units.KM)).toContainClass(
        "-active",
      );
      await settingsPage.updateSettings({
        currency: Currencies.EUR,
        units: Units.ML,
      });
      await expect(
        settingsPage.selectors.currencyButton(Currencies.EUR),
      ).toContainClass("-active");
      await expect(settingsPage.selectors.unitsButton(Units.ML)).toContainClass(
        "-active",
      );
    });

    await test.step("Verify change email errors", async () => {
      await page.reload();
      await settingsPage.clickChangeEmailButton();
      await expect(
        settingsPage.selectors.genericInputValidationError("Email required"),
      ).toBeVisible();
      await expect(
        settingsPage.selectors.genericInputValidationError("Password required"),
      ).toBeVisible();
      await settingsPage.changeEmail("invalid-email", "invalid-password");
      await expect(
        settingsPage.selectors.genericInputValidationError(
          "Email is incorrect",
        ),
      ).toBeVisible();
      await expect(
        settingsPage.selectors.genericInputValidationError(
          "Password is incorrect",
        ),
      ).toBeHidden();
    });

    await test.step("Verify change password errors", async () => {
      await page.reload();
      await settingsPage.clickChangePasswordButton();
      await expect(
        settingsPage.selectors.genericInputValidationError(
          "Old password required",
        ),
      ).toBeVisible();
      await expect(
        settingsPage.selectors.genericInputValidationError(
          "New password required",
        ),
      ).toBeVisible();
      await expect(
        settingsPage.selectors.genericInputValidationError(
          "Re-enter password required",
        ),
      ).toBeVisible();
      await settingsPage.changePassword("qwe", "qwe");
      await expect(
        settingsPage.selectors.genericInputValidationError(
          "Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter",
        ),
      ).toHaveCount(2);
      await settingsPage.changePassword("qwe", "qwQW12!@");
      await expect(
        settingsPage.selectors.genericInputValidationError(""),
      ).toHaveCount(0);
      await settingsPage.clickChangePasswordButton();
      await expect(
        settingsPage.selectors.errorSnackbarByText("Wrong password"),
      ).toBeVisible();
    });
  });
});

test.describe("Group params tests", () => {
  test.beforeEach(async ({ page, baseURL }) => {
    settingsPage = new SettingsPage(page);
    landingPage = new LandingPage(page);
    loginDialog = new LoginDialog(page);
    header = new Header(page);
  });

  test.afterEach(async ({ page }) => {
    await page.request.put("/api/users/settings", {
      data: { currency: Currencies.USD.toLowerCase(), distanceUnits: Units.KM },
    });
  });

  test("Verify login via group params and logout after @compareTests", async ({
    page,
    params,
  }) => {
    console.log(params);
    for await (const env of params.envs) {
      await page.goto(env.baseUrl);
      await landingPage.clickSignInButton();
      await loginDialog.login(env.defaultUserEmail, env.defaultUserPassword);
      await expect(page).toHaveURL(`${env.baseUrl}/panel/garage`);
      await expect(page).toHaveURL(/panel\/garage/);
      await expect(page).toHaveURL(new RegExp("/panel/garage"));
      await header.clickMyProfileButton();
      await header.clickMyProfileDropdownLink("Logout");
    }
  });
});
