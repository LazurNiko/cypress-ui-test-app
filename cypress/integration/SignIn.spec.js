import signin from "./PO/Signin";

describe("Sign in suite", () => {
  const signIn = new signin();

  beforeEach(function () {
    cy.visit("/");
    cy.fixture("credentials").then(function (testdata) {
      this.testdata = testdata;
    });
  });

  let unexcitingUser = {
    username: "Chris",
    password: "12345qwert!",
  };

  it(`New user without bank account should create a bank account after login"`, () => {
    cy.login();
    cy.clearCookie('connect.sid');
    signIn.modalWindow();
    cy.clickButton("Next");
    signIn.fieldNewBankName().type("Gates");
    signIn.fieldNewRoutingNumber().type("123456789");
    signIn.fieldNewAccountNumber().type("123456789");
    cy.clickButton("Save");
  });

  it("Existing user with bank account should be able to login", function () {
    cy.intercept("POST", Cypress.env("apiserver") + "/login", {
      fixture: "loginResponse.json",
    }).as("successfulLogin");
    signIn.loginBtn().click().should("be.disabled");
    signIn.userName().type(this.testdata.username);
    signIn.password().type(this.testdata.password, { sensitive: true });
    signIn.checkboxText().should("contain", "Remember me");
    signIn.checkbox().should("be.not.checked").check();
    signIn.checkbox().should("be.checked").uncheck().should("not.be.checked");
    signIn.loginBtn().should("not.be.disabled");
    cy.clickButton("Sign In");
    cy.wait("@successfulLogin").its("response.statusCode").should("eq", 200);
  });

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

  it(`User with unexciting username shouldn't be able to Log in`, function () {
    cy.intercept("POST", Cypress.env("apiserver") + "/login").as("unSuccessfulLogin");
    signIn.userName().type(unexcitingUser.username);
    signIn.password().type(unexcitingUser.password);
    cy.clickButton("Sign In");
    cy.wait("@unSuccessfulLogin").its("response.statusCode").should("eq", 401);
    signIn.alertMessage().should("contain", "Username or password is invalid").and("be.visible");
  });

  it(`User with existing username and invalid password shouldn't be able to Log in`, function () {
    signIn.userName().type(this.testdata.username);
    signIn.password().type(unexcitingUser.password);
    cy.clickButton("Sign In");
    signIn.alertMessage().should("contain", "Username or password is invalid").and("be.visible");
  });
});
