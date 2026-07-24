import { test, expect } from "../src/fixtures/loginPom.fixture";
import { Currencies, Units } from "../src";

test.describe("Settings page tests", () => {
  test.use({
    defaultUserCreds: [
      {
        username: process.env.DEFAULT_USER_EMAIL,
        password: process.env.DEFAULT_USER_PASSWORD,
      },
      { scope: "test" },
    ],
  });

  test.beforeEach(async ({ page, baseURL, poms: { header } }) => {
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

  test("Verify currency and units settings", async ({
    page,
    poms: { settingsPage },
  }) => {
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

  test("Validate Change Email input errors", async ({
    page,
    poms: { settingsPage },
  }) => {
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

  test("Validate Change Password input errors", async ({
    page,
    poms: { settingsPage },
  }) => {
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

  test("Validate multiple cases with steps", async ({
    page,
    poms: { settingsPage },
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
