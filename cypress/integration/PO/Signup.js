class signup {
  signUpBtn() {
    return cy.get('[href="https://www.usertesting.com/plans"]');
  }
  signupUrl() {
    return cy.url();
  }
  userAvatar() {
    return cy.get("svg");
  }
  signupTitle() {
    return cy.get('[data-test="signup-title"]');
  }
  submitBtn() {
    return cy.get('[data-test="signup-submit"]');
  }
  formSignUp() {
    return cy.get('[action="#"]');
  }
  fieldsPlaceholders() {
    return cy.get('[action="#"]').within(() => {
      cy.get("fieldset").eq(0).find("span").should("contain", "First Name");
      cy.get("fieldset").eq(1).find("span").should("contain", "Last Name");
      cy.get("fieldset").eq(2).find("span").should("contain", "Username");
      cy.get("fieldset").eq(3).find("span").should("contain", "Password");
      cy.get("fieldset").eq(4).find("span").should("contain", "Confirm Password");
    });
  }
  warningFirstNameFieldMessage() {
    return cy.get("#firstName-helper-text");
  }
  warningLastNameFieldMessage() {
    return cy.get("#lastName-helper-text");
  }
  warningUserNameFieldMessage() {
    return cy.get("#username-helper-text");
  }
  warningPasswordFieldMessage() {
    return cy.get("#password-helper-text");
  }
  warningConfirmPasswordFieldMessage() {
    return cy.get("#confirmPassword-helper-text");
  }
  firstName() {
    return cy.get("#firstName");
  }
  lastName() {
    return cy.get("#lastName");
  }
  userName() {
    return cy.get("#username");
  }
  password() {
    return cy.get("#password");
  }
  passwordConfirm() {
    return cy.get("#confirmPassword");
  }
  placeholder() {
    return cy.get("fieldset");
  }
  warningFirstNameMessage() {
    return cy.get("#firstName-helper-text");
  }
  warningLastNameMessage() {
    return cy.get("#lastName-helper-text");
  }
  warningUserNameMessage() {
    return cy.get("#username-helper-text");
  }
  warningPasswordMessage() {
    return cy.get("#password-helper-text");
  }
  warningConfirmPasswordMessage() {
    return cy.get("#confirmPassword-helper-text");
  }
  hypertextSignin() {
    return cy.get('[href="/signin"]');
  }
  signUpButtonText() {
    return cy.get("button.MuiButton-containedPrimary");
  }
}
export default signup;
