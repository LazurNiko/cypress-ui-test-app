import sidebar from './PO/Sidebar';

describe('Sidebar', () => {
  const sideBar = new sidebar();

  before(() => {
    sideBar.login();
  });
  
  it('Sidebar has avatar, username, account balance and menu list', () => {
    sideBar.sidebarMenu()
      .should('have.attr', 'data-test', 'sidenav')
      .and('be.visible')
      .within(() => {
        sideBar.avatar().should('be.visible');
        sideBar.username().should('contain', 'John');
        sideBar.userFirstName().should('contain', 'Snow');
        sideBar.accountBalanceAmount().should('contain', '$0.00');
        sideBar.accountBalanceTitle().should('contain', 'Account Balance');
        sideBar.homeIcon().should('be.visible');
        sideBar.homeLink().should('have.attr', 'href', '/').and('be.visible');
        sideBar.myAccountIcon().should('be.visible');
        sideBar.myAccountLink().should('have.attr', 'href', '/user/settings').and('be.visible');
        sideBar.bankAccountsIcon().should('be.visible');
        sideBar.bankAccountsLink().should('have.attr', 'href', '/bankaccounts').and('be.visible');
        sideBar.notificationsIcon().should('be.visible');
        sideBar.notificationsLink().should('have.attr', 'href', '/notifications').and('be.visible');;
        sideBar.logoutIcon().should('be.visible');
        sideBar.logoutLink().should('be.visible').contains('Logout');;
    });
  });
});
