class mine {
    login() {
        cy.visit('/signin');
        cy.get("#username").type('Snow');
        cy.get("#password").type('12345Qwert!');
        cy.get('[data-test="signin-submit"]').click();
      }
    mineLink() {
        cy.get('[href="/personal"]').click();
    }
    logo() {
      return cy.get('[xmlns="http://www.w3.org/2000/svg"]').should("be.visible");
    }
    transactionButtonTop() {
      return cy.get('[data-test="nav-top-new-transaction"]').should('be.visible').and("contain", " New");
    }
    transactionButtonTop() {
        return cy.get('[data-test="nav-top-new-transaction"]').should('be.visible').and("contain", " New");
      }
    notificationBell(){
        return cy.get(".MuiBadge-root").should('have.attr', 'data-test', 'nav-top-notifications-count').find("path")
    }
    burgerMenuButton() {
        return cy.get('[data-test="drawer-icon"]').should('be.visible')
      }   
    mainPageLinks(){
        return cy.get('.MuiTabs-centered').within(() => {
              cy.get(".MuiButtonBase-root").eq(0).should('have.attr', 'href', '/').and("contain", "Everyone");
              cy.get(".MuiButtonBase-root").eq(1).should('have.attr', 'href', '/contacts').and("contain", "Friends");
              cy.get(".MuiButtonBase-root").eq(2).should('have.attr', 'href', '/personal').and("contain", "Mine");
        })
    }
    pageTitle () {
      return cy.get('.MuiListSubheader-sticky').should('contain', 'Personal');
    }    
    pageBody() {
        return cy.get('[data-test="empty-list-header"]')
        .contains("No Transactions");
    }
    transactionButton() {
        return cy.contains('[data-test="transaction-list-empty-create-transaction-button"]', 'Create A Transaction')
             .should('have.attr', 'href', '/transaction/new')
             .and('exist')
    }
    calendarFilter() {
        return cy.get('[data-test="transaction-list-filter-date-range-button"]')
        .contains('span', 'Date: ALL');
    }
    amountRangeFilter() {
        return cy.get('[data-test="transaction-list-filter-amount-range-button"]')
        .contains('Amount: $0 - $1,000');
    }

}
export default mine;