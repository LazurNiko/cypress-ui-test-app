class everyone {
  logo() {
    return cy.get('[xmlns="http://www.w3.org/2000/svg"]');
  }
  transactionButtonTop() {
    return cy.get('[data-test="nav-top-new-transaction"]');
  }
  notificationBell() {
    return cy.get('[data-test="nav-top-notifications-link"]');
  }
  pageTitle() {
    return cy.get(".MuiListSubheader-sticky");
  }
  burgerMenuButton() {
    return cy.get('[data-test="sidenav-toggle"]').should("be.visible");
  }
  mainPageEveryoneLink() {
    return cy.get('[data-test="nav-public-tab"]');
  }
  mainPageFriendsLink() {
    return cy.get('[data-test="nav-contacts-tab"]');
  }
  mainPageMineLink() {
    return cy.get('[data-test="nav-personal-tab"]');
  }
  usersList() {
    return cy
      .get(".ReactVirtualized__Grid__innerScrollContainer")
      .should("have.attr", "role", "rowgroup")
      .within(() => {
        cy.get("div").find("li").eq(0);
        cy.get("div").find("li").eq(1);
        cy.get("div")
          .find("li")
          .eq(2)
          .should("have.attr", "data-test", "transaction-item-Ke0eaLoOG8Dg");
        cy.get("div")
          .find("li")
          .eq(3)
          .should("have.attr", "data-test", "transaction-item-8YnLpItFazLO");
      });
  }
  userComponents() {
    cy.get(".MuiAvatar-root.MuiAvatar-circular").should("be.visible");
    cy.get(".MuiBadge-badge.MuiBadge-anchorOriginBottomRightCircle").should("be.visible");
    cy.get(".MuiTypography-body1").should("contain", "Arely Kertzmann paid Kaylin");
    cy.get(".MuiTypography-body2").should("contain", "Payment:");
    cy.get(".MuiGrid-align-items-xs-flex-start").within(() => {
      cy.get(".MuiGrid-root.MuiGrid-item").eq(0).find("svg");
      cy.get("p")
        .eq(0)
        .should("have.attr", "data-test", "transaction-like-count")
        .and("contain", "0");
      cy.get(".MuiGrid-root.MuiGrid-item").eq(1).find("svg");
      cy.get("p")
        .eq(1)
        .should("have.attr", "data-test", "transaction-comment-count")
        .and("contain", "0");
    });
    return this;
  }
  calendarFilter() {
    return cy.get('[data-test="transaction-list-filter-date-range-button"]');
  }
  amountRangeFilter() {
    return cy.get('[data-test="transaction-list-filter-amount-range-button"]');
  }
  userBalance() {
    return cy.get('[data-test="sidenav-user-balance"]');
  }
  selectUser() {
    return cy.get('[data-test="user-list-item-qywYp6hS0U"]');
  }
  paymentButton() {
    return cy.get('[data-test="transaction-create-submit-payment"]');
  }
  typeAmountField() {
    return cy.get('[placeholder="Amount"]');
  }
  typeAddANoteField() {
    return cy.get('[placeholder="Add a note"]');
  }
  userCredentials() {
    cy.get("img").should(
      "have.attr",
      "src",
      "https://cypress-realworld-app-svgs.s3.amazonaws.com/qywYp6hS0U.svg"
    );
    cy.contains("h2.MuiTypography-root", "Arely Kertzmann");
    return this;
  }
  createTransactionButton() {
    return cy.get('[data-test="new-transaction-create-another-transaction"]');
  }
  returnToAnotherButton() {
    return cy.get('[data-test="new-transaction-return-to-transactions"]');
  }
  alertTransactionMessage() {
    return cy.get("h2.MuiTypography-gutterBottom");
  }
}
export default everyone;
