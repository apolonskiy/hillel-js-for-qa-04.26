export class LoginDialog {
  selectors = {
    emailInput: () => cy.get('[class="modal-content"] input[id="signinEmail"]'),
    passwordInput: () =>
      cy.get('[class="modal-content"] input[id="signinPassword"]'),
    loginButton: () => cy.contains('[class="modal-content"] button', "Login"),
    registerButton: () =>
      cy.contains('[class="modal-content"] button', "Registration"),
    closeCrossButton: () =>
      cy.get('[class="modal-content"] button[aria-label="Close"]'),
    rememberMeCheckbox: () => cy.get('[class="modal-content"] [id="remember"]'),
    forgotPasswordLink: () =>
      cy.contains('[class="modal-content"] button', "Forgot password"),
  };

  clickCloseCross() {
    this.selectors.closeCrossButton().click();
  }

  clickRegister() {
    this.selectors.registerButton().click();
  }

  clickLogin() {
    this.selectors.loginButton().click();
  }

  fillEmail(email) {
    this.selectors.emailInput().type(email);
  }

  fillPassword(password) {
    this.selectors.passwordInput().type(password);
  }

  toggleRememberMe() {
    this.selectors.rememberMeCheckbox().click();
  }

  clickForgotPassword() {
    this.selectors.forgotPasswordLink().click();
  }

  executeLogin(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.clickLogin();
  }
}
