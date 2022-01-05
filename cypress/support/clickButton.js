Cypress.Commands.add("clickButton", () => {
  cy.get("button").should("have.attr", "type", "submit").click();
});
