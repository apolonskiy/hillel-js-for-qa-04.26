import { LoginDialog } from "./loginDialog.pom.js";
export class LandingPage {
  selectors = {
    signInButton: () => cy.contains("button", "Sign In"),
    signUpButton: () => cy.contains("button", "Sign Up"),
    guestSignInButton: () => cy.contains("button", "Guest log in"),
  };

  loginDialog = new LoginDialog();

  get singUpButton() {
    return cy.contains("button", "Sign Up");
  }

  get guestSignInButton() {
    return cy.contains("button", "Guest log in");
  }

  get signInButton() {
    return cy.contains("button", "Sign In");
  }

  clickSignIn() {
    this.selectors.signInButton().click();
    return this.loginDialog;
  }

  clickSignUp() {
    this.selectors.signUpButton().click();
  }

  clickGuestSignIn() {
    this.selectors.guestSignInButton().click();
  }
}
