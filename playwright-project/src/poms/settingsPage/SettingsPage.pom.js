import { BasePage } from "../BasePage.pom";
export const Currencies = {
  EUR: "EUR",
  USD: "USD",
  UAH: "UAH",
  PLN: "PLN",
  GBP: "GBP",
};

export const Units = {
  KM: "km",
  ML: "ml",
};

export class SettingsPage extends BasePage {
  selectors = {
    currencyButton: (currency) =>
      this._page
        .locator('[class="user-settings_item"]', {
          has: this._page.getByRole("heading", { name: "Currency" }),
        })
        .getByRole("button", { name: currency }),
    unitsButton: (unit) =>
      this._page
        .locator('[class="user-settings_item"]', {
          has: this._page.getByRole("heading", { name: "Units of distance" }),
        })
        .getByRole("button", { name: unit }),
    genericInputValidationError: (errorText) =>
      this._page.locator('[class="invalid-feedback"]', { hasText: errorText }),
    changeEmailEmailInput: this._page.locator('input[id="emailChangeEmail"]'),
    changeEmailPasswordInput: this._page.locator(
      'input[id="emailChangePassword"]',
    ),
    changeEmailButton: this._page.getByRole("button", { name: "Change email" }),
    changePwdOldPasswordInput: this._page.locator(
      'input[id="passwordChangeOldPassword"]',
    ),
    changePwdNewPasswordInput: this._page.locator(
      'input[id="passwordChangePassword"]',
    ),
    changePwdConfirmPasswordInput: this._page.locator(
      'input[id="passwordChangeRepeatPassword"]',
    ),
    changePwdButton: this._page.getByRole("button", {
      name: "Change password",
    }),
    errorSnackbar: this._page.locator('[class*="alert-danger"]'),
    errorSnackbarByText: (errorText) =>
      this._page.locator('[class*="alert-danger"]', { hasText: errorText }),
  };

  constructor(page) {
    super(page, "/panel/settings");
    // this.selectors = {
    //     currencyButton: (currency) => this._page.locator('[class="user-settings_item"]', {has: this._page.getByRole('heading', { name: 'Currency' })}).getByRole('button', { name: currency }),
    //     unitsButton: (unit) => this._page.locator('[class="user-settings_item"]', {has: this._page.getByRole('heading', { name: 'Units of distance' })}).getByRole('button', { name: unit }),
    //     changeEmailButton: this._page.getByRole('button', { name: 'Change email' }),
    // }
  }

  /**
   *
   * @param {{currency: string; units: string;}} settings
   */
  async updateSettings(settings) {
    await this.selectors.currencyButton(settings.currency).click();
    await this.selectors.unitsButton(settings.units).click();
  }

  async clickChangeEmailButton() {
    await this.selectors.changeEmailButton.click();
  }

  async changeEmail(email, password) {
    await this.selectors.changeEmailEmailInput.fill(email);
    await this.selectors.changeEmailPasswordInput.fill(password);
    await this.clickChangeEmailButton();
  }

  async clickChangePasswordButton() {
    await this.selectors.changePwdButton.click();
  }

  /**
   *
   * @param {string} oldPassword
   * @param {string} newPassword
   */
  async changePassword(oldPassword, newPassword) {
    await this.selectors.changePwdOldPasswordInput.fill(oldPassword);
    await this.selectors.changePwdNewPasswordInput.fill(newPassword);
    await this.selectors.changePwdConfirmPasswordInput.fill(newPassword);
    await this.clickChangePasswordButton();
  }
}
