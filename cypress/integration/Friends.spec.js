/* eslint-disable prettier/prettier */
import friends from './PO/Friends'

describe('Friends', () => {
  const Friends = new friends();

  beforeEach(() => {
    Friends.login();
    Friends.friendsLink();
  });

  it('"Friends" page has logo, [Create Transaction] button, pages links, bell icon, users list and filter fields', () => {
    Friends.logo();
    Friends.transactionButtonTop();
    Friends.notificationBell();
    Friends.mainPageLinks();
    Friends.pageBody();
    Friends.transactionButton();
    Friends.calendarFilter();
    Friends.amountRangeFilter();
  })
});
