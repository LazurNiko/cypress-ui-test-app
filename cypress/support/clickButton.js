Cypress.Commands.add("clickButton", (label) => {
  // cy.get("button").contains('Sign').click();
  switch(label) {
    case "label":
      cy.get("button").contains('Sign').click();
      break;
      case "label":
        cy.get("a").contains('href').click();
        break;
          default:
  }
  return label
});
