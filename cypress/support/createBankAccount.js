Cypress.Commands.add("newBankAccount", () => {
  cy.get(".MuiDialog-container.MuiDialog-scrollPaper").contains(
    "h2.MuiTypography-h6",
    "Get Started with Real World App"
  );
  cy.contains(
    "p.MuiTypography-body1",
    "Real World App requires a Bank Account to perform transactions."
  );
  cy.get('[placeholder="Bank Name"]');
  cy.get('[placeholder="Routing Number"]');
  cy.get('[placeholder="Account Number"]');
});
