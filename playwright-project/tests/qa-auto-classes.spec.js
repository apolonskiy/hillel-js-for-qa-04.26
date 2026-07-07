import { test, expect } from "@playwright/test";
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

test.describe("Settings page tests", () => {
  test.beforeEach(async ({ page, baseURL }) => {
    settingsPage = new SettingsPage(page);
    landingPage = new LandingPage(page);
    loginDialog = new LoginDialog(page);
    header = new Header(page);
    await landingPage.open();
    await landingPage.clickSignInButton();
    await loginDialog.login(
      process.env.DEFAULT_USER_EMAIL,
      process.env.DEFAULT_USER_PASSWORD,
    );
    await expect(page).toHaveURL(`${baseURL}/panel/garage`);
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

  test("Verify currency and units settings", async ({ page }) => {
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

  test("Validate Change Email input errors", async ({ page }) => {
    await settingsPage.clickChangeEmailButton();
    await expect(
      settingsPage.selectors.genericInputValidationError("Email required"),
    ).toBeVisible();
    await expect(
      settingsPage.selectors.genericInputValidationError("Password required"),
    ).toBeVisible();
    await settingsPage.changeEmail("invalid-email", "invalid-password");
    await expect(
      settingsPage.selectors.genericInputValidationError("Email is incorrect"),
    ).toBeVisible();
    await expect(
      settingsPage.selectors.genericInputValidationError(
        "Password is incorrect",
      ),
    ).toBeHidden();
  });

  test("Validate Change Password input errors", async ({ page }) => {
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
    await expect(settingsPage.selectors.errorSnackbar).toHaveText(
      "Wrong password",
    );
  });
});
