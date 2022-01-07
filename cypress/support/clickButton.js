Cypress.Commands.add("clickButton", (label) => {
    cy.get('button,a').contains(label).click();
  })
    

