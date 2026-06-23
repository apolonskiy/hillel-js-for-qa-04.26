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

describe("Api intercept tests with cypress", () => {
  beforeEach(() => {
    cy.visit(Cypress.config().baseUrl);
  });

  it("Intercept login via UI", () => {
    cy.intercept("POST", "/api/auth/signin").as("loginRequest");
    cy.env(["defaultUserCreds"]).then(({ defaultUserCreds }) => {
      const loginDialog = landingPage.clickSignIn();
      landingPage.loginDialog.executeLogin(
        defaultUserCreds.username,
        defaultUserCreds.password,
      );
    });
    cy.wait("@loginRequest").then((interception) => {
      console.log(interception);
      expect(interception.response.statusCode).to.eq(200);
      expect(interception.response.body.data.userId).to.eq(163923);
    });
  });

  it("Intercept GET cars and stub with static response", () => {
    cy.intercept("GET", "/api/cars", {
      fixture: "carsData/getCarsResponse.json",
    }).as("getCarsRequest");
    cy.env(["defaultUserCreds"]).then(({ defaultUserCreds }) => {
      const loginDialog = landingPage.clickSignIn();
      landingPage.loginDialog.executeLogin(
        defaultUserCreds.username,
        defaultUserCreds.password,
      );
    });
  });

  it("Intercept POST singin with wrong crendentials", () => {
    cy.intercept("POST", "/api/auth/signin", {
      statusCode: 400,
      body: {
        status: "error",
        message: "Wrong email or password",
      },
    });
    cy.env(["defaultUserCreds"]).then(({ defaultUserCreds }) => {
      const loginDialog = landingPage.clickSignIn();
      landingPage.loginDialog.executeLogin(
        defaultUserCreds.username,
        defaultUserCreds.password,
      );
    });
  });

  it("Intercept GET cars with stubbing invalid cookies", () => {
    // cy.intercept("POST", "/api/auth/signin", (req) => {
    //     req.body.email = "invalid@aa.com"
    // });
    cy.intercept("GET", "/api/cars", (req) => {
      console.log(req.headers);
      req.headers["cookie"] = "invalidCookie=12345";
    });
    cy.env(["defaultUserCreds"]).then(({ defaultUserCreds }) => {
      const loginDialog = landingPage.clickSignIn();
      landingPage.loginDialog.executeLogin(
        defaultUserCreds.username,
        defaultUserCreds.password,
      );
    });
  });

  it("Intercept GET cars with routeHandler using req.continue and res.send", () => {
    cy.intercept("GET", "/api/cars", (req) => {
      console.log(req.headers);
      req.headers["cookie"] = "invalidCookie=12345";

      req.continue((res) => {
        if (res.statusCode === 401) {
          res.send({
            fixture: "carsData/getCarsResponse.json",
            statusCode: 200,
          });
        }
        console.log(res);
      });
    });
    cy.env(["defaultUserCreds"]).then(({ defaultUserCreds }) => {
      const loginDialog = landingPage.clickSignIn();
      landingPage.loginDialog.executeLogin(
        defaultUserCreds.username,
        defaultUserCreds.password,
      );
    });
    cy.pause();
  });
});

describe("Api request tests with cypress", () => {
  beforeEach(() => {
    cy.env(["defaultUserCreds"]).then(({ defaultUserCreds }) => {
      cy.request({
        url: "/api/auth/signin",
        method: "POST",
        body: {
          email: defaultUserCreds.username,
          password: defaultUserCreds.password,
          remember: false,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data.userId).to.eq(163923);
        // This is not needed for APIs hich return set-cookie header https://docs.cypress.io/api/commands/request#Cookies-are-automatically-sent-and-received
        // cy.setCookie(
        //   "sid",
        //   response.headers["set-cookie"][0].split(";")[0].split("=")[1],
        // );
      });
    });
    cy.visit(Cypress.config().baseUrl);
  });

  it("Api login must succeed", () => {
    cy.log("succcess");
  });
});
