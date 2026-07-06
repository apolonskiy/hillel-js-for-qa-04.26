import { BasePage } from "../BasePage.pom.js";

export class LoginDialog extends BasePage {
  selectors = {
    emailInput: this._page.locator('input[id="signinEmail"]'),
    passwordInput: this._page.locator('input[id="signinPassword"]'),
    loginButton: this._page.locator("button[class*=btn-primary]", {
      hasText: "Login",
    }),
  };

  async login(email, password) {
    await this.selectors.emailInput.fill(email);
    await this.selectors.passwordInput.fill(password);
    await this.selectors.loginButton.click({ timeout: 5000 });
  }
}
