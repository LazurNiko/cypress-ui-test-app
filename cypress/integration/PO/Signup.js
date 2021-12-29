class signup {
  validateSignupPage() {
    return cy.get("[href='/signup']");
  }
  signUpBtn() {
    return cy.get('[href="https://www.usertesting.com/plans"]');
  }
  signupUrl() {
    return cy.url().should("include", "/signup");;
  }
  userAvatar() {
    return cy.get("svg").should("have.attr", "xmlns", "http://www.w3.org/2000/svg").and("be.visible");;
  }
  signupTitle() {
    return cy.get('[data-test="signup-title"]').should("have.attr", "data-test", "signup-title").and("contain", "Sign Up");;
  }
  submitBtn() {
    return cy.get('[data-test="signup-submit"]');
  }
  formSignUp() {
    return cy.get('[action="#"]');
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
    return cy.get('fieldset');
  }
  warningFirstNameMessage() {
    return cy.get('#firstName-helper-text')
  }
  warningLastNameMessage() {
    return cy.get('#lastName-helper-text')
  }
  warningUserNameMessage() {
    return cy.get('#username-helper-text')
  }
  warningPasswordMessage() {
    return cy.get('#password-helper-text');
  }
  warningPasswordMessage() {
    return cy.get('#password-helper-text');
  }
  warningConfirmPasswordMessage() {
    return cy.get('#confirmPassword-helper-text');
  }
  hypertextSignin() {
    return cy.get('[href="/signin"]').should("contain", "Have an account? Sign In").and('be.visible');
  }
  validateButtonText() {
    return cy.get("button.MuiButton-containedPrimary")
      .should("have.attr", "type", "submit")
      .and("contain", "Sign Up")
      .click();
  }
}
export default signup;
