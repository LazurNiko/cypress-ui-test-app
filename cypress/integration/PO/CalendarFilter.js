class calendar {
  calendarButton() {
    return cy
      .get('[data-test="transaction-list-filter-date-range-button"]')
      .contains("span", "Date: ALL")
      .click({ force: true });
  }
  calendarModalWindow() {
    return cy.get('[aria-label="Calendar"]').should("be.visible");
  }
  setDate() {
    cy.get('[data-date="2021-12-25"]').should("contain", "25").click();
    cy.get(".Cal__Day__selection")
      .should("have.attr", "data-date", "2021-12-25")
      .within(() => {
        cy.get(".Cal__Day__month").contains("Dec");
        cy.get(".Cal__Day__day").contains("25");
      });
    cy.contains('[title="Change year"]', "2021").and("be.visible");
    cy.contains('[title="Scroll to Dec 25th"]', "25th").and("be.visible");
    cy.get(".Cal__Day__selection").click();
    return this;
  }
  validateDate() {
    cy.get(".MuiChip-label").should("contain", "Date: Dec, 24 2021 - Dec, 25 2021");
    cy.get('[data-test="transaction-list-filter-date-clear-button"] > path').click({ force: true });
    cy.get('[data-test="transaction-list-filter-date-range-button"]').contains("span", "Date: ALL");
    return this;
  }
}
export default calendar;
