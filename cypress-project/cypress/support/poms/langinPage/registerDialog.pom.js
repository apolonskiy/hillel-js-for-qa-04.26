import { LoginDialog } from "./loginDialog.pom";

export class RegisterDialog extends LoginDialog {
  selectors = {
    // ...super.selectors, //this will not work
    ...this.selectors,
    nameInput: () => cy.get('input[name="name"]'),
    confirmPasswordInput: () => cy.get('input[name="confirmPassword"]'),
    registerButton: () => cy.contains("button", "Register"),
  };

  methodName() {
    console.log(super.selectors);
  }
}
