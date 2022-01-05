import range from "./PO/AmountRangeFilter";

describe("Amount Range Filter", () => {
  const amountRangeFilter = new range();

  before(() => {
    cy.login();
  });

  it("User can view filtered transactions by amount range, by setting values in amount range field", () => {
    amountRangeFilter.amountRangeButton().contains("Amount: $0 - $1,000").click({ force: true });
    amountRangeFilter.amountRangeButtonText().should("be.visible");
    amountRangeFilter.amountRangeSetValue();
    amountRangeFilter.amountRangeClearValue();
  });
});
