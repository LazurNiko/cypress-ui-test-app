import friends from "./PO/Friends";

describe("Friends", () => {
  const Friends = new friends();

  before(() => {
    cy.login();
    cy.intercept('GET', Cypress.env('apiserver') + '/transactions/contacts', {
      fixture: 'pageFriends.json'
    }).as('Friends')
    
  });

  it('"Friends" page has logo, [Create a Transaction] button, pages links, bell icon, users list and filter fields', () => {
    Friends.friendsLink();
    Friends.logo().should("be.visible");
    Friends.transactionButtonTop().should("be.visible").and("contain", " New");
    Friends.notificationBell().should("be.visible").should("have.attr", "href", "/notifications");
    Friends.burgerMenuButton().should("have.attr", "type", "button").and("be.visible");
    Friends.mainPageEveryoneLink().should("have.attr", "href", "/").and("contain", "Everyone");
    Friends.mainPageFriendsLink()
      .should("have.attr", "href", "/contacts")
      .and("contain", "Friends");
    Friends.mainPageMineLink().should("have.attr", "href", "/personal").and("contain", "Mine");
    Friends.pageTitle().should("contain", "Contacts");
    Friends.calendarFilter().contains("span", "Date: ALL");
    Friends.amountRangeFilter().contains("Amount: $0 - $1,000");
    
  });
});
