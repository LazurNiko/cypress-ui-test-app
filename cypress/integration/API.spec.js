describe('', () => {


    it.only(`"Home page" should have existing user's list`, () => {
        cy.visit('/');
        cy.get("#username").type('Snow');
        cy.get("#password").type('12345Qwert!');
        cy.get('[data-test="signin-submit"]').click();
        cy.intercept({
            path: '/transactions/public'
        }).as('home')
        cy.get('[data-test="nav-public-tab"] > .MuiTab-wrapper').should('contain', 'Everyone').click()
        cy.wait('@home').then(inter => {
            cy.log(JSON.stringify(inter))
            console.log(JSON.stringify(inter))
            expect(inter.response.body).to.include("")
    
        })
    })
    it('', () => {
    cy.visit('/');
    cy.get("#username").type('Snow');
    cy.get("#password").type('12345Qwert!');
    cy.get('[data-test="signin-submit"]').click();
    cy.intercept('GET', '/login', {totalPages: 21}).as('home')
    cy.get('[data-test="nav-public-tab"] > .MuiTab-wrapper').should('contain', 'Everyone').click()
    })
})

it('', () => {
    cy.visit('/');
    cy.get("#username").type('Snow');
    cy.get("#password").type('12345Qwert!');
    cy.get('[data-test="signin-submit"]').click();
    cy.intercept('POST', '/login', (req) => {
        req.body = 'username=Snow&password=12345Qwert!'
      })

})