import {
  LoginDialog,
  LandingPage,
  LeftNavBar,
  ProfilePage,
  EditProfileDialog,
} from "../support/poms";

const landingPage = new LandingPage();
const profilePage = new ProfilePage();
const editProfileDialog = new EditProfileDialog();

// To enable, uncomment import in cypress/support/e2e.js and config file
describe.skip("Profile page tests - snapshot testing", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
    cy.env(["defaultUserCreds"]).then(({ defaultUserCreds }) => {
      const loginDialog = landingPage.clickSignIn();
      landingPage.loginDialog.executeLogin(
        defaultUserCreds.username,
        defaultUserCreds.password,
      );
    });
  });

  it("Get to profile page after login and update profile photo - Snapshot testing", () => {
    cy.url().should("eq", `${Cypress.config().baseUrl}/panel/garage`);
    profilePage.selectProfilePage();
    profilePage.selectors.profileName().should("be.visible");
    cy.matchImageSnapshot("profile-page");
    profilePage.clickEditProfile();
    editProfileDialog.selectors
      .dialogContent()
      .should("be.visible")
      .matchImageSnapshot("edit-profile-dialog");
  });
});
