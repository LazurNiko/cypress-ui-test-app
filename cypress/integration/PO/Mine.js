class mine {
  logo() {
    return cy.get('[xmlns="http://www.w3.org/2000/svg"]');
  }
  transactionButtonTop() {
    return cy.get('[data-test="nav-top-new-transaction"]');
  }
  notificationBell() {
    return cy.get('[data-test="nav-top-notifications-link"]');
  }
  burgerMenuButton() {
    return cy.get('[data-test="sidenav-toggle"]');
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
  pageTitle() {
    return cy.get(".MuiListSubheader-sticky");
  }
  pageBody() {
    return cy.get('[data-test="transaction-sender-RSTDWxZFg"]');
  }
  calendarFilter() {
    return cy.get('[data-test="transaction-list-filter-date-range-button"]');
  }
  amountRangeFilter() {
    return cy.get('[data-test="transaction-list-filter-amount-range-button"]');
  }
}
export default mine;
