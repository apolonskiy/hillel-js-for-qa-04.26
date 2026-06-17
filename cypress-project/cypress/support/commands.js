// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("login", (username, password) => {
  cy.xpath("//button[contains(text(), 'Sign In')]").click();
  cy.get('[class="modal-content"]').within(() => {
    cy.get('input[id="signinEmail"]').type(username);
    cy.get('input[id="signinPassword"]').type(password);
    cy.contains("button", "Login").should("be.enabled").click();
  });
});

Cypress.Commands.overwrite("visit", (originalFn, url, options) => {
  originalFn(url, {
    auth: Cypress.expose("basicAuth"),
    ...options,
  });
});

Cypress.Commands.addQuery("getByClassName", function getByClassName(name) {
  return () => {
    return Cypress.$(`[class*="${name}"]`);
  };
});
