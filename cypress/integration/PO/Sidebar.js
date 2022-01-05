class sidebar {
  sidebarMenu() {
    return cy.get(".MuiDrawer-root.MuiDrawer-docked");
  }
  avatar() {
    return cy.get(".MuiSvgIcon-root.MuiAvatar-fallback");
  }
  username() {
    return cy.get('[data-test="sidenav-user-full-name"]');
  }
  userFirstName() {
    return cy.get('[data-test="sidenav-username"]');
  }
  accountBalanceAmount() {
    return cy.get('[data-test="sidenav-user-balance"]');
  }
  accountBalanceTitle() {
    return cy.get("h6.MuiTypography-subtitle2").eq(1);
  }
  homeIcon() {
    return cy.get(".MuiListItemIcon-root").eq(0).find("svg");
  }
  myAccountIcon() {
    return cy.get(".MuiListItemIcon-root").eq(1).find("svg");
  }
  bankAccountsIcon() {
    return cy.get(".MuiListItemIcon-root").eq(2).find("svg");
  }
  notificationsIcon() {
    return cy.get(".MuiListItemIcon-root").eq(3).find("svg");
  }
  logoutIcon() {
    return cy.get(".MuiListItemIcon-root").eq(4).find("svg");
  }
  homeLink() {
    return cy.get('[data-test="sidenav-home"]');
  }
  myAccountLink() {
    return cy.get('[data-test="sidenav-user-settings"]');
  }
  bankAccountsLink() {
    return cy.get('[data-test="sidenav-bankaccounts"]');
  }
  notificationsLink() {
    return cy.get('[data-test="sidenav-notifications"]');
  }
  logoutLink() {
    return cy.get('[data-test="sidenav-signout"]');
  }
}
export default sidebar;
