import { BasePage } from "../BasePage.pom.js";

export class Header extends BasePage {
  selectors = {
    logo: this._page.locator('a[class="header_logo"]'),
    headerLink: (linkText) =>
      this._page.locator('a[class*="header-link"]', { hasText: linkText }),
    myProfileButton: this._page.locator('button[id="userNavDropdown"]'),
    myProfileDropdownLink: (linkText) =>
      this._page.locator('[class*="dropdown-item"]', { hasText: linkText }),
  };

  async clickLogo() {
    await this.selectors.logo.click();
  }

  async clickHeaderLink(linkText) {
    await this.selectors.headerLink(linkText).click();
  }

  async clickMyProfileButton() {
    await this.selectors.myProfileButton.click();
  }

  /**
   *
   * @param {'Garage' | 'Fuel expenses' | 'Instructions' | 'Profile' | 'Settings' | 'Logout'} linkText
   */
  async clickMyProfileDropdownLink(linkText) {
    await this.selectors.myProfileDropdownLink(linkText).click();
  }
}
