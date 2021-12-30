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
})
