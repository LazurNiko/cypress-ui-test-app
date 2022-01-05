import mine from "./PO/Mine";

describe("Mine", () => {
  const minePage = new mine();

  before(() => {
    cy.login();
    minePage.mainPageMineLink().click();
  });

  it('"Mine" page has logo, [Create a Transaction] button, pages links, bell icon, users list and filter fields', () => {
    minePage.logo().should("be.visible");
    minePage.transactionButtonTop().should("be.visible").and("contain", " New");
    minePage.notificationBell().should("be.visible").should("have.attr", "href", "/notifications");
    minePage.burgerMenuButton().should("have.attr", "type", "button").and("be.visible");
    minePage.mainPageEveryoneLink().should("have.attr", "href", "/").and("contain", "Everyone");
    minePage
      .mainPageFriendsLink()
      .should("have.attr", "href", "/contacts")
      .and("contain", "Friends");
    minePage.mainPageMineLink().should("have.attr", "href", "/personal").and("contain", "Mine");
    minePage.pageTitle().should("contain", "Personal");
    minePage.pageBody().should("contain", "John Gates");
    minePage.calendarFilter().contains("span", "Date: ALL");
    minePage.amountRangeFilter().contains("Amount: $0 - $1,000");
  });
});
