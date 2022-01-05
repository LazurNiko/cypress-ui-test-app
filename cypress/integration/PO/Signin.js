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
}
export default signin;
