import { BasePage } from "../BasePage.pom.js";

export class LandingPage extends BasePage {
  selectors = {
    signInButton: this._page.getByRole("button", {
      name: "Sign In",
      exact: true,
    }),
  };

  constructor(page) {
    super(page, "/");
  }

  async clickSignInButton() {
    await this.selectors.signInButton.click();
  }
}
