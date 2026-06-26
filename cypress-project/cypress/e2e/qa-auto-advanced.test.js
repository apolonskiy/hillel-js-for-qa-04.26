import {
  LoginDialog,
  LandingPage,
  LeftNavBar,
  ProfilePage,
  EditProfileDialog,
  GaragePage,
} from "../support/poms";

const landingPage = new LandingPage();
const profilePage = new ProfilePage();
const editProfileDialog = new EditProfileDialog();
const garagePage = new GaragePage();

// This is replaced with Class-based test.
describe.skip("Profile page tests", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
    cy.getByClassName("-guest").should("be.visible");
    cy.env(["defaultUserCreds"]).then(({ defaultUserCreds }) => {
      cy.login(defaultUserCreds.username, defaultUserCreds.password);
    });
  });

  it("Get to profile page after login and update profile photo", () => {
    cy.url().should("eq", `${Cypress.config().baseUrl}/panel/garage`);
    cy.contains('[class*="sidebar"] a', "Profile").click();
    cy.contains("button", "Edit profile").click();
    cy.get('[id="editProfilePhoto"] input').selectFile(
      "cypress/fixtures/images/profile-image.jpg",
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
    // console.log(Cypress.config().baseUrl)
    cy.visit(Cypress.config().baseUrl);
    cy.env(["defaultUserCreds"]).then(({ defaultUserCreds }) => {
      const loginDialog = landingPage.clickSignIn();
      landingPage.loginDialog.executeLogin(
        defaultUserCreds.username,
        defaultUserCreds.password,
      );
    });
  });

  it("Get to profile page after login and update profile photo - class based", () => {
    // cy.env(["DARIA"]).then(( {DARIA} ) => {
    //   cy.task("log", `<><><><Running test in ${JSON.stringify(DARIA)} environment<><><>`);
    // });
    cy.url().should("eq", `${Cypress.config().baseUrl}/panel/garage`);
    profilePage.selectProfilePage();
    profilePage.selectors.profileName().should("be.visible");
    profilePage.clickEditProfile();
    editProfileDialog.selectors.dialogContent().should("be.visible");
    editProfileDialog.uploadProfileImage(
      "cypress/fixtures/images/profile-image.jpg",
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

describe("Create car with interception and cleanup", () => {
  beforeEach(() => {
    cy.env(["defaultUserCreds"]).then(({ defaultUserCreds }) => {
      cy.loginHeadless(defaultUserCreds.username, defaultUserCreds.password);
    });
    cy.visit(Cypress.config().baseUrl);
    garagePage.selectGaragePage();
  });

  afterEach(function () {
    if (this.createdCarId) {
      cy.request({
        method: "DELETE",
        url: `/api/cars/${this.createdCarId}`,
      });
    }
  });

  it("Create car via UI and intercept its ID for future cleanup", () => {
    cy.wait(500);
    garagePage.clickAddButton();
    cy.intercept("POST", "/api/cars").as("createCarRequest");
    const brand = "Porsche";
    const model = "911";
    garagePage.addCarDialog.addCar({
      brand,
      model,
      mileage: "10000",
    });
    cy.wait("@createCarRequest").then((interception) => {
      console.log(interception);
      cy.wrap(interception.response.body.data.id).as("createdCarId");
    });
    garagePage.selectors
      .genericCarCard(`${brand} ${model}`)
      .first()
      .should("be.visible");
  });
});
