class range {
  amountRangeButton() {
    return cy.get('[data-test="transaction-list-filter-amount-range-button"]');
  }
  amountRangeButtonText() {
    return cy.get('[data-test="transaction-list-filter-amount-range-text"]');
  }
  amountRangeSetValue() {
    cy.get('[data-test="transaction-list-filter-amount-range-slider"]')
      .invoke("val", 500)
      .trigger("change")
      .click();
    cy.get('[data-test="transaction-list-filter-amount-range-text"]')
      .contains("Amount Range: $0 - $500")
      .and("be.visible");
    return this;
  }
  amountRangeClearValue() {
    cy.get('[data-test="transaction-list-filter-amount-clear-button"]')
      .contains("Clear")
      .click({ force: true });
    cy.get('[data-test="transaction-list-filter-amount-range-text"]').contains(
      "Amount Range: $0 - $1,000"
    );
    return this;
  }
}
export default range;
