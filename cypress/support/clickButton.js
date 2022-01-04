Cypress.Commands.add('clickButton', () => {
    cy.get('button').should('have.attr','type','submit').click();
  })
// Cypress.env({
//     host: 'veronica.dev.local',
//     api_server: 'http://localhost:8888/v1/',
//   })
