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
    cy.get('[data-date="2022-01-25"]').should("contain", "25").click({ force: true });
    cy.get(".Cal__Day__selection")
      .should("have.attr", "data-date", "2022-01-25")
      .within(() => {
        cy.get(".Cal__Day__month").contains("Jan");
        cy.get(".Cal__Day__day").contains("25");
      });
    cy.contains('[title="Change year"]', "2022").and("be.visible");
    cy.contains('[title="Scroll to Jan 25th"]', "25th").and("be.visible");
    cy.get(".Cal__Day__selection").click({ force: true });
    return this;
  }
  validateDate() {
    cy.get(".MuiChip-label").should("contain", "Date: Jan, 24 2022 - Jan, 25 2022");
    cy.get('[data-test="transaction-list-filter-date-clear-button"] > path').click({ force: true });
    cy.get('[data-test="transaction-list-filter-date-range-button"]').contains("span", "Date: ALL");
    return this;
  }
}
export default calendar;
