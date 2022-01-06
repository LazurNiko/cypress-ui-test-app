import signin from "./PO/Signin";

describe("Sign in suite", () => {
  const signIn = new signin();

  beforeEach(function () {
    cy.visit("/");
    cy.intercept('POST', 'http://localhost:3001/login', {
      fixture: 'loginResponse.json'
    })
    cy.fixture("credentials").then(function (testdata) {
      this.testdata = testdata;
    });
  });

  let unexcitingUser = {
    username: "Chris",
    password: "12345qwert!",
  };

  it("Sign in page has Logo, Sign in title, Sign up link and text form fields", () => {
    signIn.logo().should("have.attr", "xmlns", "http://www.w3.org/2000/svg").and("be.visible");
    signIn.placeholderUsername().should("contain", "Username");
    signIn.placeholderPassword().should("contain", "Password");
    signIn
      .hypertextSignUp()
      .should("have.attr", "href", "/signup")
      .and("contain", "Don't have an account? Sign Up");
    signIn.loginBtn().find(".MuiButton-label").should("contain", "Sign In");
  });

  it(`User can't login with blank username field - page shows message "Username is required"`, () => {
    signIn.userName().click();
    signIn.password().click();
    signIn.errorMessage().should("contain", "Username is required");
    signIn.loginBtn().should("be.disabled");
  });

  it("Existing user should be able to login", function () {
    signIn.loginBtn().click().should("be.disabled");
    signIn.userName().type(this.testdata.username);
    signIn.password().type(this.testdata.password, { sensitive: true });
    signIn.checkboxText().should("contain", "Remember me");
    signIn.checkbox().should("be.not.checked").check();
    signIn.checkbox().should("be.checked").uncheck().should("not.be.checked");
    signIn.loginBtn().should("not.be.disabled");
    cy.clickButton("Sign In");
  });

  it(`User with unexciting username shouldn't be able to Log in`, function () {
    signIn.userName().type(unexcitingUser.username);
    signIn.password().type(unexcitingUser.password);
    cy.clickButton("Sign In");
    signIn.alertMessage().should("contain", "Username or password is invalid").and("be.visible");
  });

  it(`User with existing username and invalid password shouldn't be able to Log in`, function () {
    signIn.userName().type(this.testdata.username);
    signIn.password().type(unexcitingUser.password);
    cy.clickButton('Sign In');
    signIn.alertMessage().should("contain", "Username or password is invalid").and("be.visible");
  });
});
