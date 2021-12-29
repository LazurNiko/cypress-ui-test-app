import range from './PO/AmountRangeFilter'

describe('Amount Range Filter', () => {
const amountRangeFilter = new range();

before(() => {
  amountRangeFilter.login();
});

  it('User can view filtered transactions by amount range, by setting values in amount range field', () => {
    amountRangeFilter.amountRangeButton();
    amountRangeFilter.amountRangeButtonText();
    amountRangeFilter.amountRangeSetValue();
    amountRangeFilter.amountRangeClearValue();
  });
});
