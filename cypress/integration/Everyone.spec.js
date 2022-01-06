import everyone from "./PO/Everyone";

describe("Everyone", () => {
  const Everyone = new everyone();

  beforeEach(() => {
    cy.login();
  });

  it('"Everyone" page has logo, [New] "button, pages links, bell icon, users list and filter fields', () => {
    cy.intercept('GET', Cypress.env('apiserver') + '/transactions/public', {
      fixture: 'pageEveryone.json'
    }).as('Everyone');
    Everyone.logo().should("be.visible");
    Everyone.transactionButtonTop().should("be.visible").and("contain", " New");
    Everyone.notificationBell().should("be.visible").should("have.attr", "href", "/notifications");
    Everyone.burgerMenuButton();
    Everyone.pageTitle().should("contain", "Public");
    Everyone.mainPageEveryoneLink().should("have.attr", "href", "/").and("contain", "Everyone");
    Everyone.mainPageFriendsLink()
      .should("have.attr", "href", "/contacts")
      .and("contain", "Friends");
    Everyone.mainPageMineLink().should("have.attr", "href", "/personal").and("contain", "Mine");
    Everyone.usersList();
    Everyone.userComponents();
    Everyone.calendarFilter().contains("span", "Date: ALL");
    Everyone.amountRangeFilter().contains("Amount: $0 - $1,000");
  });

  it('User not be able to create payment request if account balance is "$0.00', () => {
    Everyone.userBalance().should("contain", "$0.00");
    Everyone.transactionButtonTop().click();
    Everyone.selectUser()
      .scrollIntoView()
      .find("span.MuiListItemText-primary")
      .should("contain", "Edgar Johns")
      .click({ force: true });
    Everyone.paymentButton().should("contain", "Pay").and("be.disabled");
    Everyone.typeAmountField().type("100");
    Everyone.typeAddANoteField().type("any text");
    Everyone.paymentButton().should("not.be.disabled").click();
    Everyone.userCredentials();
    Everyone.createTransactionButton()
      .should("have.attr", "type", "button")
      .find(".MuiButton-label")
      .should("contain", "Create Another Transaction");
    Everyone.returnToAnotherButton()
      .should("have.attr", "href", "/")
      .find(".MuiButton-label")
      .should("contain", "Return To Transactions");
    Everyone.alertTransactionMessage().should(
      "have.text",
      'Paid "$0.00" for any. Not enough money'
    );
  });
});
