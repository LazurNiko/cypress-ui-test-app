class signin {
    loginBtn() {
        return cy.get('[data-test="signin-submit"]');
      }
      logo() {
        return cy.get("svg").should("have.attr", "xmlns", "http://www.w3.org/2000/svg").and("be.visible");
      }
      placeholderUsername() {
        return cy.get("#username-label").should("contain", "Username");
      }
      placeholderPassword() {
        return cy.get("#password-label").should("contain", "Password");
      }
      userName() {
        return cy.get("#username");
      }
      password() {
        return cy.get("#password");
      }
      checkbox() {
        cy.contains(".MuiFormControlLabel-root", "Remember me")
          .find(".PrivateSwitchBase-input-14")
          .should('be.not.checked');
        cy.get(".PrivateSwitchBase-input-14")
          .check()
          .should('be.checked')
          .uncheck()
          .should("not.be.checked");
      }
      errorMessage() {
          return cy.get("#username-helper-text")
            .should("contain", "Username is required");
      }
      alertMessage() {
        return cy.get('.MuiAlert-message')
          .should('contain', 'Username or password is invalid')
          .and('be.visible');
      }
      hypertextSignUp() {
        return cy.get('[data-test="signup"]')
          .should("have.attr", "href", "/signup")
          .and("contain", "Don't have an account? Sign Up");
      }
}
export default signin;