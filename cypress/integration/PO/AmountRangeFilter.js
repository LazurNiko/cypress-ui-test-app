class range {
    login() {
      cy.visit('/signin');
      cy.get("#username").type('Snow');
      cy.get("#password").type('12345Qwert!');
      cy.get('[data-test="signin-submit"]').click();
    }
    amountRangeButton() {
      return cy.get('[data-test="transaction-list-filter-amount-range-button"]').contains('Amount: $0 - $1,000').click({force: true});
    }
    amountRangeButtonText() {
      cy.get('[data-test="transaction-list-filter-amount-range-text"]')
          .should('be.visible');
    }
    amountRangeSetValue() {
      cy.get('[data-test="transaction-list-filter-amount-range-slider"]')
          .invoke('val', 500)
          .trigger('change')
          .click();
        cy.get('[data-test="transaction-list-filter-amount-range-text"]')
          .contains('Amount Range: $0 - $500')
          .and('be.visible');
        return this;
    }
    amountRangeClearValue() {
      cy.get('[data-test="transaction-list-filter-amount-clear-button"]')
          .contains('Clear')
          .click({force: true});
        cy.get('[data-test="transaction-list-filter-amount-range-text"]')
          .contains('Amount Range: $0 - $1,000');
        return this;
    }
}
export default range;