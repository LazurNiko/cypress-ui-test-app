class sidebar {
  login() {
    cy.visit('/signin');
    cy.get("#username").type('Snow');
    cy.get("#password").type('12345Qwert!');
    cy.get('[data-test="signin-submit"]').click();
  }
  sidebarMenu() {
    return cy.get('.MuiDrawer-root.MuiDrawer-docked');
  }
  avatar() {
    return cy.get('.MuiSvgIcon-root.MuiAvatar-fallback').should('be.visible');
  }
  username() {
    return cy.get('[data-test="sidenav-user-full-name"]').should('contain', 'John');
  }
  userFirstName() {
    return cy.get('[data-test="sidenav-username"]').should('contain', 'Snow');
  }
  accountBalanceAmount() {
    return cy.get('[data-test="sidenav-user-balance"]').should('contain', '$0.00');
  }
  accountBalanceTitle() {
    return cy.get('h6.MuiTypography-subtitle2').eq(1).should('contain', 'Account Balance');
  }
  homeIcon() {
    return cy.get('.MuiListItemIcon-root').eq(0).find('svg');
  }
  myAccountIcon() {
    return cy.get('.MuiListItemIcon-root').eq(1).find('svg');
  }
  bankAccountsIcon() {
    return cy.get('.MuiListItemIcon-root').eq(2).find('svg');
  }
  notificationsIcon() {
    return cy.get('.MuiListItemIcon-root').eq(3).find('svg');
  }
  logoutIcon() {
    return cy.get('.MuiListItemIcon-root').eq(4).find('svg');
  }
  homeLink() {
    return cy.get('[data-test="sidenav-home"]').should('have.attr', 'href', '/').and('be.visible');
  }
  myAccountLink() {
    return cy.get('[data-test="sidenav-user-settings"]').should('have.attr', 'href', '/user/settings').and('be.visible');
  }
  bankAccountsLink() {
    return cy.get('[data-test="sidenav-bankaccounts"]').should('have.attr', 'href', '/bankaccounts').and('be.visible');
  }
  notificationsLink() {
    return cy.get('[data-test="sidenav-notifications"]').should('have.attr', 'href', '/notifications').and('be.visible');
  }
  logoutLink() {
    return cy.get('[data-test="sidenav-signout"]').should('be.visible').contains('Logout');
  }
}
export default sidebar;
