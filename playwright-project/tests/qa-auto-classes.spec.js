import { test, expect, request } from "@playwright/test";
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
  test.beforeEach(async ({ page, baseURL, request: defaultRequest }) => {
    // const customRequestContext = await request.newContext()
    // await customRequestContext.post(`${baseURL}/api/auth/login`)
    // await defaultRequest.post(`/api/auth/login`);
    settingsPage = new SettingsPage(page);
    landingPage = new LandingPage(page);
    loginDialog = new LoginDialog(page);
    header = new Header(page);
    // page.on("request", (request) => {
    //   if (request.url().includes(baseURL)) {
    //     console.log(">>", request.method(), request.url(), request.postData());
    //   }
    // });
    // page.on("response", async (response) => {
    //   if (response.url().includes(baseURL)) {
    //     console.log(
    //       "<<",
    //       response.status(),
    //       response.url(),
    //       (await response.body()).toString(),
    //     );
    //   }
    // });
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

  test.afterEach(async ({ page, request: defaultTestRequest }) => {
    // await defaultTestRequest.post("/api/auth/signin", {
    //   data: {
    //     email: process.env.DEFAULT_USER_EMAIL,
    //     password: process.env.DEFAULT_USER_PASSWORD,
    //   },
    // });
    // const resp = await defaultTestRequest.put("/api/users/settings", {
    //   data: { currency: Currencies.USD.toLowerCase(), distanceUnits: Units.KM },
    // });

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
    const requestPromise = page.waitForRequest(
      (request) =>
        request.url().includes("/api/users/settings") &&
        request.method() === "PUT",
    );
    const responsePromise = page.waitForResponse(
      async (response) =>
        response.url().includes("/api/users/settings") &&
        response.request().method() === "PUT" &&
        (await response.request().postData()) !==
          JSON.stringify({ currency: "eur" }),
    );
    await settingsPage.updateSettings({
      currency: Currencies.EUR,
      units: Units.ML,
    });
    const req = await requestPromise;
    // console.log(await req.postData());
    const resp = await responsePromise;
    // console.log(await resp.json());
    await expect(
      settingsPage.selectors.currencyButton(Currencies.EUR),
    ).toContainClass("-active");
    await expect(settingsPage.selectors.unitsButton(Units.ML)).toContainClass(
      "-active",
    );
  });

  test.skip("Verify currency and units settings with api route interceptions", async ({
    page,
  }) => {
    await expect(
      settingsPage.selectors.currencyButton(Currencies.USD),
    ).toContainClass("-active");
    await expect(settingsPage.selectors.unitsButton(Units.KM)).toContainClass(
      "-active",
    );

    // Fetch + fultill
    // await page.route("**/api/users/settings", async (route) => {
    //   const resp = await route.fetch();
    //   const json = await resp.json();
    //   await route.fulfill({
    //     status: 200,
    //     json: { data: { ...json.data, currency: "uah", distanceUnits: "ml" } },
    //   });
    // });

    // Continue
    // await page.context().clearCookies({ name: "sid" });
    // await page.route("**/api/users/settings", async (route, request) => {
    //   const reqHeaders = request.headers();
    //   console.log("reqHeaders", reqHeaders);
    //   // Cookie replacement is not supported in Playwright, so we need to set both cookie and Cookie headers
    //   // https://playwright.dev/docs/api/class-route#route-continue
    //   const headers = {
    //     ...reqHeaders,
    //     cookie: "sid=invalid;",
    //     Cookie: "sid=invalid;",
    //   };
    //   console.log("headers", headers);
    //   await route.continue({ headers });
    // });

    // Abort
    // await page.route("**/api/users/settings", async (route) => {
    //   await route.abort("aborted");
    // });
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

  test("Validate multiple cases with steps", async ({ page }) => {
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
