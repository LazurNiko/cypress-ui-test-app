/* eslint-disable prettier/prettier */
import signin from './PO/Signin'

describe("Sign in suite", () => {
  const signIn = new signin()

  beforeEach(function() {
    cy.visit("/signin");
    cy.fixture('credentials').then(function(testdata) {
      this.testdata = testdata
    })
  });

  let unexcitingUser = {
    username: "Chris",
    password: "12345Qwert!"
  }

  it('Sign in page has Logo, Sign in title, Sign up link and text form fields', () => {
    signIn.logo();
    signIn.placeholderUsername();
    signIn.placeholderPassword();
    signIn.hypertextSignUp();
    signIn.loginBtn().find(".MuiButton-label").should("contain", "Sign In");;
  });

  it(`User can't login with blank username field - page shows message "Username is required"`, () => {
    signIn.userName().click();
    signIn.password().click();
    signIn.errorMessage();
    signIn.loginBtn().should("be.disabled");
  });
  
  it('Existing user should be able to login', function () {
    signIn.loginBtn().click().should("be.disabled");

    signIn.userName().type(this.testdata.username);
    signIn.password().type(this.testdata.password);

    signIn.checkbox();
      
    signIn.loginBtn().should("not.be.disabled");
  });

  it(`User with unexciting username shouldn't be able to Log in`, function () {
    signIn.userName().type(unexcitingUser.username);
    signIn.password().type(unexcitingUser.password);
    signIn.loginBtn().click();
    signIn.alertMessage();
  });

  it(`User with existing username and invalid password shouldn't be able to Log in`, function () {
    signIn.userName().type(this.testdata.username);
    signIn.password().type(unexcitingUser.password);
    signIn.loginBtn().click();
    signIn.alertMessage();
  });
});
