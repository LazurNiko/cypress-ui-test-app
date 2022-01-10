import sidebar from "./PO/Sidebar";

describe("Sidebar", () => {
  const sideBar = new sidebar();

  beforeEach(() => {
    cy.login();
  });

  it("Sidebar has avatar, username, account balance and menu list", () => {
    sideBar
      .sidebarMenu()
      .should("have.attr", "data-test", "sidenav")
      .and("be.visible")
      .within(() => {
        sideBar.avatar().should("be.visible");
        sideBar.username().should("contain", "John");
        sideBar.userFirstName().should("contain", "Snow");
        sideBar.accountBalanceAmount().should("contain", "$0.00");
        sideBar.accountBalanceTitle().should("contain", "Account Balance");
        sideBar.homeIcon().should("be.visible");
        sideBar.homeLink().should("have.attr", "href", "/").and("be.visible");
        sideBar.myAccountIcon().should("be.visible");
        sideBar.myAccountLink().should("have.attr", "href", "/user/settings").and("be.visible");
        sideBar.bankAccountsIcon().should("be.visible");
        sideBar.bankAccountsLink().should("have.attr", "href", "/bankaccounts").and("be.visible");
        sideBar.notificationsIcon().should("be.visible");
        sideBar.notificationsLink().should("have.attr", "href", "/notifications").and("be.visible");
        sideBar.logoutIcon().should("be.visible");
        sideBar.logoutLink().should("be.visible").contains("Logout");
      });
  });

  it('User be able to edit profile settings at "User Settings" page by clicking "My account" link in sidebar', () => {

    sideBar.sidebarMenu().should('be.visible');
    cy.clickButton('My Account');
    sideBar.linkUrl().should('include', '/user/settings');
  });

  it('User can create a new bank account at "Bank Accounts" page by clicking it link in sidebar', () => {

    cy.clickButton('Bank Accounts');
    sideBar.linkUrl().should('include', '/bankaccounts');
  });

  it('User can view notifications by clicking "Notifications" link in sidebar', () => {

    cy.clickButton('Notifications');
    sideBar.linkUrl().should('include', '/notifications');
  });

  it('When click "Home" link in sidebar - "Everyone" page opens"', () => {
    cy.intercept('GET', Cypress.env('apiserver') + '/transactions/public', {
      fixture: 'pageEveryone.json'
    }).as('Everyone');

    cy.clickButton('Home');
    sideBar.linkUrl().should('include', '/');
  });

  it('User be able to logout by clicking "Logout" link in sidebar', () => {
    
    cy.clickButton('Logout');
    sideBar.linkUrl().should('include', '/signin');
  });

});
