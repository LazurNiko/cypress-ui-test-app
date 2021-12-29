class signup {
  hyperlinkSignup() {
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
  validateFieldsPlaceholders() {
    return cy.get('[action="#"]').within(() => {
            cy.get('fieldset').eq(0).find("span").should("contain", "First Name");
            cy.get('fieldset').eq(1).find("span").should("contain", "Last Name");
            cy.get('fieldset').eq(2).find("span").should("contain", "Username");
            cy.get('fieldset').eq(3).find("span").should("contain", "Password");
            cy.get('fieldset').eq(4).find("span").should("contain", "Confirm Password");
          });
  }
  validateWarningFieldsMessages() {
    return cy.get('[action="#"]').within(() => {
           cy.get('#firstName-helper-text')
             .should('have.css', 'color', 'rgb(244, 67, 54)')
             .and("contain", "First Name is required");
           cy.get('#lastName-helper-text')
            .should('have.css', 'color', 'rgb(244, 67, 54)')
            .and("contain", "Last Name is required");
           cy.get('#username-helper-text')
            .should('have.css', 'color', 'rgb(244, 67, 54)')
            .and("contain", "Username is required");
           cy.get('#password-helper-text')
            .should('have.css', 'color', 'rgb(244, 67, 54)')
            .and("contain", "Enter your password");
           cy.get('#confirmPassword-helper-text')
            .should('have.css', 'color', 'rgb(244, 67, 54)')
            .and("contain", "Confirm your password");
          });
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
