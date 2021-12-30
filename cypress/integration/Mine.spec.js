import mine from './PO/Mine';

describe('Mine', () => {
const minePage = new mine();

before(() => {
    minePage.login();
    minePage.mineLink();
});

    it('"Mine" page has logo, [Create a Transaction] button, pages links, bell icon, users list and filter fields', () => {
        minePage.logo();
        minePage.transactionButtonTop();
        minePage.notificationBell();
        minePage.burgerMenuButton();
        minePage.mainPageLinks();
        minePage.pageTitle();
        minePage.pageBody();
        minePage.transactionButton();
        minePage.calendarFilter();
        minePage.amountRangeFilter();
    })
})
