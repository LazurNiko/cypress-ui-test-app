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
        sideBar.avatar();
        sideBar.username();
        sideBar.userFirstName();
        sideBar.accountBalanceAmount();
        sideBar.accountBalanceTitle();
        sideBar.homeIcon();
        sideBar.homeLink();
        sideBar.myAccountIcon();
        sideBar.myAccountLink();
        sideBar.bankAccountsIcon();
        sideBar.bankAccountsLink();
        sideBar.notificationsIcon();
        sideBar.notificationsLink();
        sideBar.logoutIcon();
        sideBar.logoutLink();
    });
  });
});
