/* eslint-disable prettier/prettier */
import everyone from './PO/Everyone'

describe('Everyone', () => {
  const Everyone = new everyone();

  beforeEach(() => {
    Everyone.login();
  });

  it('"Everyone" page has logo, [New] "button, pages links, bell icon, users list and filter fields', () => {
    Everyone.logo();
    Everyone.transactionButtonTop();
    Everyone.notificationBell();
    Everyone.burgerMenuButton();
    Everyone.pageTitle();
    Everyone.mainPageLinks();
    Everyone.usersList();
    Everyone.userComponents();
    Everyone.calendarFilter();
    Everyone.amountRangeFilter();
  });

  it('User not be able to create payment request if account balance is "$0.00', () => {
    Everyone.transactionButtonTop().click();
    Everyone.selectUser();
    Everyone.validateButton().should('contain', 'Pay').and('be.disabled')
    Everyone.typeAmount();
    Everyone.typeAddANote();
    Everyone.validateButton().should('not.be.disabled').click();
    Everyone.validateUserCredentials();
    Everyone.validateCreateTransactionButton();
    Everyone.validateReturnToAnotherButton();
    Everyone.alertMessage();
  })
})
