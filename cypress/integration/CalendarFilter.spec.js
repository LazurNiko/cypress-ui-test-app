import calendar from './PO/CalendarFilter'

describe('Calendar Filter', () => {
const Calendar = new calendar();

before(() => {
  Calendar.login();
})

    it('User can view filtered transactions by data, by setting values in data field', () => {
        Calendar.calendarButton();
        Calendar.calendarModalWindow().should('be.visible');
        Calendar.setDate();
        Calendar.validateDate();
    })
});
