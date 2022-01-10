Cypress.Commands.add("clickButton", (label) => {
  cy.get("button,a,span").contains(label).click();
});
