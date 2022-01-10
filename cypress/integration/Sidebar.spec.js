import sidebar from "./PO/Sidebar";

describe("Sidebar", () => {
  const sideBar = new sidebar();
  let account;

  beforeEach(() => {
    cy.login();
    cy.task("newBankAccount").then((newBankAccount) => {
      account = newBankAccount;
    });
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
    cy.intercept("GET", Cypress.env("apiserver") + "/checkAuth", {
      fixture: "myAccountLinkResponse.json",
    }).as("editedAccount");
    sideBar.sidebarMenu().should("be.visible");
    cy.clickButton("My Account");
    sideBar.linkUrl().should("include", "/user/settings");
    sideBar.editFirstName().clear().type("John1");
    sideBar.editLastName().clear().type("Gates1");
    sideBar.editEmail().clear().type("Snow@mail.com");
    sideBar.editPhoneNumber().clear().type("12345678910");
    cy.clickButton("Save");
    sideBar.username().should("contain", "John1");
    sideBar.editFirstName().clear().type("John");
    sideBar.editLastName().clear().type("Gates");
    cy.clickButton("Save");
    sideBar.username().should("contain", "John");
  });

  it.only('User can create a new bank account at "Bank Accounts" page by clicking it link in sidebar', () => {
    cy.intercept("POST", Cypress.env("apiserver") + "/graphql", {
      fixture: "myAccountLinkResponse.json",
    }).as("createdBankAccount");
    cy.clickButton("Bank Accounts");
    sideBar.linkUrl().should("include", "/bankaccounts");
    sideBar.createNewTransactionButton().click({ force: true });
    sideBar.fieldBankName().type(account.bankName);
    sideBar.fieldRoutingNumber().type(account.routingNumber);
    sideBar.fieldAccountNumber().type(account.accountNumber);
    cy.clickButton("Save");
  });

  it('User can view notifications by clicking "Notifications" link in sidebar', () => {
    cy.clickButton("Notifications");
    sideBar.linkUrl().should("include", "/notifications");
  });

  it('When click "Home" link in sidebar - "Everyone" page opens"', () => {
    cy.intercept("GET", Cypress.env("apiserver") + "/transactions/public", {
      fixture: "pageEveryone.json",
    }).as("Everyone");

    cy.clickButton("Home");
    sideBar.linkUrl().should("include", "/");
  });

  it('User be able to logout by clicking "Logout" link in sidebar', () => {
    cy.clickButton("Logout");
    sideBar.linkUrl().should("include", "/signin");
  });
});
