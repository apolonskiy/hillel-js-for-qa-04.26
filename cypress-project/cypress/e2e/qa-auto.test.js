describe("Registration tests", () => {
  beforeEach(() => {
    cy.visit("https://qauto.forstudy.space/", {
      auth: Cypress.expose("basicAuth"),
    });
    cy.xpath("//button[contains(text(), 'Sign In')]").as("signInButton");
    cy.wrap(Cypress.expose("basicAuth")).as("basicAuthData");
    // cy.fixture("basicAuth").as("basicAuthData");
  });

  it("should navigate to qauto site", function () {
    cy.log(this.basicAuthData);
    cy.get("@signInButton").click();
    const expectedText = "Remember me";
    const emailStr = "QWWRWR";
    cy.get('[class="modal-content"]')
      .find('input[id="signinEmail"]')
      .type(emailStr);
    cy.contains("Registration").should("be.visible");
    cy.get('[class="modal-content"]')
      .children("app-signin-modal")
      .should("have.length", 1);
    cy.get('[class="modal-content"]')
      .find('input[id="signinEmail"]')
      .closest("app-signin-form")
      .should("be.visible");
    cy.focused().should("have.value", emailStr);
    cy.focused().invoke("val").should("eq", emailStr);
    cy.get('[class="form-check-label"]').then((element) => {
      const elementText = element.text().trim();
    });
    cy.get('[class="form-check-label"]')
      .invoke("text")
      .then((text) => {
        expect(text.trim()).to.equal(expectedText);
      });

    cy.window().its("sessionStorage").invoke("setItem", "rememberMe", "false");
    cy.window()
      .its("sessionStorage")
      .invoke("getItem", "rememberMe")
      .should("eq", "false");

    cy.get('[class="modal-content"]').find("input").eq(1).type(expectedText);
    cy.get('[class="modal-content"]')
      .find("button")
      .filter(":disabled")
      .should("have.text", "Login");
    cy.get('[class*="modal-footer"]')
      .find("button")
      .not(":disabled")
      .should("have.text", "Registration");
  });

  it("Valid login test with default user credentials", () => {
    cy.get("@signInButton").click();
    cy.env(["defaultUserCreds"]).then(({ defaultUserCreds }) => {
      cy.log(defaultUserCreds);
      cy.get('[class="modal-content"]').within(() => {
        cy.get('input[id="signinEmail"]').type(defaultUserCreds.username);
        cy.get('input[id="signinPassword"]').type(defaultUserCreds.password);
        cy.contains("button", "Login").should("be.enabled").click();
      });
      cy.url().should("eq", "https://qauto.forstudy.space/panel/garage");
    });
  });
});
