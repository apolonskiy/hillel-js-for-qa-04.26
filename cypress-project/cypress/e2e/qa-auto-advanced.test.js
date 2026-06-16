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
// const loginDialog = new LoginDialog();

describe("Profile page tests", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space/");
    cy.getByClassName("-guest").should("be.visible");
    cy.env(["defaultUserCreds"]).then(({ defaultUserCreds }) => {
      cy.login(defaultUserCreds.username, defaultUserCreds.password);
    });
  });

  it("Get to profile page after login and update profile photo", () => {
    cy.url().should("eq", "https://qauto.forstudy.space/panel/garage");
    cy.contains('[class*="sidebar"] a', "Profile").click();
    cy.contains("button", "Edit profile").click();
    cy.get('[id="editProfilePhoto"] input').selectFile(
      "cypress/fixtures/images/profile-image.png",
    );
    cy.wait(1500);
    cy.contains("button", "Save").should("be.enabled").click();
    cy.get('div[class*="alert-success"] p')
      .should("be.visible")
      .and("have.text", "User profile has been updated");
  });
});

describe("Profile page tests - class based", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space/");
    cy.env(["defaultUserCreds"]).then(({ defaultUserCreds }) => {
      const loginDialog = landingPage.clickSignIn();
      landingPage.loginDialog.executeLogin(
        defaultUserCreds.username,
        defaultUserCreds.password,
      );
    });
  });

  it("Get to profile page after login and update profile photo", () => {
    cy.url().should("eq", "https://qauto.forstudy.space/panel/garage");
    profilePage.selectProfilePage();
    profilePage.clickEditProfile();
    editProfileDialog.uploadProfileImage(
      "cypress/fixtures/images/profile-image.png",
    );
    editProfileDialog.clickSaveButton();
    cy.get('div[class*="alert-success"] p')
      .should("be.visible")
      .and("have.text", "User profile has been updated");
    profilePage.selectors
      .profileImage()
      .should("exist")
      .and("have.attr", "src");
  });
});
