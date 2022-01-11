class signin {
  loginBtn() {
    return cy.get('[data-test="signin-submit"]');
  }
  logo() {
    return cy.get("svg");
  }
  placeholderUsername() {
    return cy.get("#username-label");
  }
  placeholderPassword() {
    return cy.get("#password-label");
  }
  userName() {
    return cy.get("#username");
  }
  password() {
    return cy.get("#password");
  }
  checkboxText() {
    return cy.get(".MuiFormControlLabel-root");
  }
  checkbox() {
    return cy.get(".PrivateSwitchBase-input-14");
  }
  errorMessage() {
    return cy.get("#username-helper-text");
  }
  alertMessage() {
    return cy.get(".MuiAlert-message");
  }
  hypertextSignUp() {
    return cy.get('[data-test="signup"]');
  }
  modalWindow() {
    cy.get(".MuiDialog-container.MuiDialog-scrollPaper").contains(
      "h2.MuiTypography-h6",
      "Get Started with Real World App"
    );
    cy.contains(
      "p.MuiTypography-body1",
      "Real World App requires a Bank Account to perform transactions."
    );
    return this;
  }
  fieldNewBankName() {
    return cy.get('[placeholder="Bank Name"]');
  }
  fieldNewRoutingNumber() {
    return cy.get('[placeholder="Routing Number"]');
  }
  fieldNewAccountNumber() {
    return cy.get('[placeholder="Account Number"]');
  }
}
export default signin;
