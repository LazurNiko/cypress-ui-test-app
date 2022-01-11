import sidebar from "./PO/Sidebar";

describe("Sidebar", () => {
  const sideBar = new sidebar();

  beforeEach(() => {
    cy.clearCookie("connect.sid");
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
    cy.clickButton("Logout");
  });

  it('User can create a new bank account at "Bank Accounts" page by clicking it link in sidebar', () => {
    cy.intercept("POST", Cypress.env("apiserver") + "/graphql", {
      fixture: "myAccountLinkResponse.json",
    }).as("createdBankAccount");
    cy.clickButton("Bank Accounts");
    sideBar.linkUrl().should("include", "/bankaccounts");
    sideBar.createNewTransactionButton().click({ force: true });
    sideBar.fieldBankName().type("Gates");
    sideBar.fieldRoutingNumber().type("123456789");
    sideBar.fieldAccountNumber().type("123456789");
    cy.clickButton("Save");
    cy.wait("@createdBankAccount").its("response.statusCode").should("eq", 200);
  });

  it('User can delete a bank account at "Bank Accounts" page by clicking it link in sidebar', () => {
    cy.clickButton("Bank Accounts");
    cy.intercept("POST", Cypress.env("apiserver") + "/graphql", {
      fixture: "deleteAccount.json",
    }).as("deletedBankAccount");
    sideBar.linkUrl().should("include", "/bankaccounts");
    sideBar.existingBankAccount().should("contain", "Gates");
    sideBar.existingBankAccount().contains("Delete").click();
    sideBar.deletedAccount().should("contain", "Gates (Deleted)");
    cy.intercept("/graphql", (req) => {
      req.reply((res) => {
        expect(res.status_code).to.equal("200");
        expect(res.body.data.deleteBankAccount).to.equal("true");
      });
    });
  });

  it('User can view notifications by clicking "Notifications" link in sidebar', () => {
    cy.intercept("GET", Cypress.env("apiserver") + "/notifications", {
      fixture: "notificationsResponse.json",
    }).as("availableNotifications");
    cy.clickButton("Notifications");
    sideBar.linkUrl().should("include", "/notifications");
    sideBar
      .notificationsList()
      .should("contain", "Notifications")
      .find('[data-test="empty-list-header"]')
      .should("contain", "No Notifications");
  });

  it('When click "Home" link in sidebar - "Everyone" page opens"', () => {
    cy.clickButton("Notifications");
    cy.intercept("GET", Cypress.env("apiserver") + "/transactions/public", {
      fixture: "homeLinkResponse.json",
    }).as("homeLink");
    cy.clickButton("Home");
    sideBar.linkUrl().should("include", "/");
  });

  it('User be able to logout by clicking "Logout" link in sidebar', () => {
    cy.intercept("POST", Cypress.env("apiserver") + "/logout").as("logoutResponse");
    cy.clickButton("Logout");
    cy.wait("@logoutResponse").its("response.statusCode").should("eq", 302);
    sideBar.linkUrl().should("include", "/signin");
  });
});
