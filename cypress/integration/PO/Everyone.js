class everyone {
    login() {
      cy.visit('/signin');
      cy.get("#username").type('Snow');
      cy.get("#password").type('12345Qwert!');
      cy.get('[data-test="signin-submit"]').click();
    }
    logo() {
      return cy.get('[xmlns="http://www.w3.org/2000/svg"]').should("be.visible");
    }
    transactionButtonTop() {
      return cy.get('[data-test="nav-top-new-transaction"]').should('be.visible').and("contain", " New");
    }
    notificationBell() {
      return cy.get(".MuiBadge-root").should('have.attr', 'data-test', 'nav-top-notifications-count').find("path")
    }
    pageTitle () {
      return cy.get('.MuiListSubheader-sticky').should('contain', 'Public');
    }
    burgerMenuButton() {
      return cy.get('[data-test="drawer-icon"]').should('be.visible')
    }   
    mainPageLinks() {
      return cy.get('.MuiTabs-centered').within(() => {
                cy.get(".MuiTab-wrapper").eq(0).should("contain", "Everyone");
                cy.get(".MuiTab-wrapper").eq(1).should("contain", "Friends");
                cy.get(".MuiTab-wrapper").eq(2).should("contain", "Mine");
            });
    }
    usersList() {
      return cy.get('.ReactVirtualized__Grid__innerScrollContainer').should('have.attr', 'role', 'rowgroup').within(() => {
                cy.get('div').find('li').eq(0)
                cy.get('div').find('li').eq(1)
                cy.get('div').find('li').eq(2).should('have.attr', 'data-test', 'transaction-item-Ke0eaLoOG8Dg');
                cy.get('div').find('li').eq(3).should('have.attr', 'data-test', 'transaction-item-8YnLpItFazLO');
            });
    }
    userComponents() {
        cy.get('.MuiAvatar-root.MuiAvatar-circular').should('be.visible');
        cy.get('.MuiBadge-badge.MuiBadge-anchorOriginBottomRightCircle').should('be.visible');
        cy.get('.MuiTypography-body1').should('contain', 'Arely Kertzmann paid Kaylin');
        cy.get('.MuiTypography-body2').should('contain', "Payment:");
        cy.get('.MuiGrid-align-items-xs-flex-start').within(() => {
            cy.get('.MuiGrid-root.MuiGrid-item').eq(0).find('svg');
            cy.get('p').eq(0).should('have.attr', 'data-test', "transaction-like-count").and('contain', '0');
            cy.get('.MuiGrid-root.MuiGrid-item').eq(1).find('svg');
            cy.get('p').eq(1).should('have.attr', 'data-test', "transaction-comment-count").and('contain', '0');
        })
        return this;
    }
    calendarFilter() {
      return cy.get('[data-test="transaction-list-filter-date-range-button"]')
               .contains('span', 'Date: ALL')
    }
    amountRangeFilter() {
      return cy.get('[data-test="transaction-list-filter-amount-range-button"]')
               .contains('Amount: $0 - $1,000')
    }
    selectUser() {
      return cy.get('[data-test="user-list-item-t45AiwidW"]').find('span.MuiListItemText-primary').should('contain', 'Edgar Johns').click({force: true});
    }
    validateButton() {
      cy.get('[data-test="transaction-create-submit-payment"]')
    }
    typeAmount() {
      cy.get('[placeholder="Amount"]').type('100');
    }
    typeAddANote() {
      cy.get('[placeholder="Add a note"]').type('any text');
    }
    validateUserCredentials() {
      cy.get('img').should('have.attr', 'src', 'https://cypress-realworld-app-svgs.s3.amazonaws.com/t45AiwidW.svg')
      cy.contains('h2.MuiTypography-root', 'Edgar Johns');
      return this;
    }
    validateCreateTransactionButton() {
      cy.get('[data-test="new-transaction-create-another-transaction"]')
      .should('have.attr', 'type', 'button')
      .find('.MuiButton-label')
      .should('contain', 'Create Another Transaction');
      return this;
    }
    validateReturnToAnotherButton() {
      cy.get('[data-test="new-transaction-return-to-transactions"]')
      .should('have.attr', 'href', '/')
      .find('.MuiButton-label')
      .should('contain', 'Return To Transactions');
      return this;
    }
    alertMessage() {
      cy.get('h2.MuiTypography-gutterBottom').should('have.text', 'Paid "$0.00" for any. Not enough money');
    }
  }
  export default everyone;
  