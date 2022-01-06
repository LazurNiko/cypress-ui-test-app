Cypress.Commands.add("clickButton", (label) => {
  cy.get("button").contains('Sign').click();
});
