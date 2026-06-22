export class EditProfileDialog {
  selectors = {
    dialogContent: () => cy.get('[class="modal-content"]'),
    firstNameInput: () => cy.get('[id="editProfileName"]'),
    lastNameInput: () => cy.get('[id="editProfileLastName"]'),
    countryInput: () => cy.get('[id="editProfileCountry"]'),
    birthdayInput: () => cy.get('[id="editProfileDateBirth"]'),
    profileImageInput: () => cy.get('[id="editProfilePhoto"] input'),
    saveButton: () => cy.contains("button", "Save"),
  };

  fillFirstName(firstName) {
    this.selectors.firstNameInput().clear().type(firstName);
  }

  fillLastName(lastName) {
    this.selectors.lastNameInput().clear().type(lastName);
  }

  fillCountry(country) {
    this.selectors.countryInput().clear().type(country);
  }

  /**
   * Fill in birthday input. Date should be in dd.mm.yyyy format, e.g. 31.12.1999
   * @param {string} birthday dd.mm.yyyy format
   * @returns {void}
   */
  fillBirthday(birthday) {
    this.selectors.birthdayInput().clear().type(birthday);
  }

  /**
   * Upload a profile image.
   * @param {string} imagePath Path to the image file
   * @returns {void}
   */
  uploadProfileImage(imagePath) {
    cy.wait(1000);
    this.selectors.profileImageInput().selectFile(imagePath, { timeout: 3000 });
    cy.wait(1000);
  }

  clickSaveButton() {
    this.selectors.saveButton().should("be.enabled").click();
  }
}
