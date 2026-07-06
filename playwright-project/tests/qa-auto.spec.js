import { test, expect, devices } from "@playwright/test";
import * as path from "path";

test.describe("Basic login to QAuto test site", () => {
  test("Successful login", async ({ page }) => {
    await page.goto("https://qauto.forstudy.space/");
    await page.getByRole("button", { name: "Sign In", exact: true }).click();
    const isVisibleInput = page.locator('input[id="signinEmail"]');
    await expect(isVisibleInput).toBeVisible();
    await page.locator('input[id="signinEmail"]').fill("hillel-1@aaa.com");
    await page.locator('input[id="signinPassword"]').fill("testHillel1!");
    await page
      .locator("button[class*=btn-primary]", { hasText: "Login" })
      .click({ timeout: 5000 });
    await expect(page).toHaveURL("https://qauto.forstudy.space/panel/garage");
    await expect(
      page.getByRole("heading").filter({ hasText: "Garage" }),
    ).toBeVisible();
    await page.getByRole("link", { name: "Profile" }).first().click();
    await expect(page.locator('[class="profile_photo"]')).toBeVisible();
    await page
      .locator("button[class*=btn-primary]", { hasText: "Edit profile" })
      .click();
    await page
      .locator('input[id="editProfilePhoto"]')
      .setInputFiles(
        path.join(__dirname, "../src/data/images/profile-image.jpg"),
      );
    await page
      .locator("button[class*=btn-primary]", { hasText: "Save" })
      .click();
  });

  test.skip("Snapshot testing for profile page", async ({ page }) => {
    await page.goto("https://qauto.forstudy.space/");
    await expect(page).toHaveScreenshot("landing-page.png");
    await page.getByRole("button", { name: "Sign In", exact: true }).click();
    await page.locator('input[id="signinEmail"]').fill("hillel-1@aaa.com");
    await page.locator('input[id="signinPassword"]').fill("testHillel1!");
    await page
      .locator("button[class*=btn-primary]", { hasText: "Login" })
      .click({ timeout: 5000 });
    await expect(page).toHaveURL("https://qauto.forstudy.space/panel/garage");
    await page.getByRole("link", { name: "Profile" }).first().click();
    await page.waitForTimeout(1000);
    await expect(page).toHaveScreenshot("profile-page.png");
  });
});
