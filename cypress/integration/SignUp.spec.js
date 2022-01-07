import signup from "./PO/Signup";

describe("Signup suite", () => {
  let user;
  const userSignup = new signup();

  beforeEach(() => {
    cy.task("newUser").then((newUser) => {
      user = newUser;
    });
    cy.visit("/");
    cy.clickButton("Don't have an account? Sign Up");
  });

  it("User should have an ability to create a new account", () => {
    cy.intercept('POST', Cypress.env('apiserver') + '/users', {
      fixture: 'registerResponse.json'
    }).as('Signup')
    userSignup.firstName().type(user.userFirstName);
    userSignup.lastName().type(user.userLastName);
    userSignup.userName().type(user.username);
    userSignup.password().type(user.password);
    userSignup.passwordConfirm().type(user.passwordConfirm);
    userSignup.signUpButtonText().should("have.attr", "type", "submit").and("contain", "Sign Up");
    userSignup.submitBtn().should("not.be.disabled");
    cy.clickButton("Sign Up");
    userSignup.signupUrl().should("include", "/signin");
  });

  it("Sign up page should have title with logo, 'Sign up' text, 'Sign up' button, First Name, Last Name and text form fields", () => {
    userSignup.signupUrl().should("include", "/signup");
    userSignup
      .userAvatar()
      .should("have.attr", "xmlns", "http://www.w3.org/2000/svg")
      .and("be.visible");
    userSignup
      .signupTitle()
      .should("have.attr", "data-test", "signup-title")
      .and("contain", "Sign Up");
      userSignup.submitBtn().click().should("be.disabled");
    userSignup.fieldsPlaceholders();
    userSignup.hypertextSignin().should("contain", "Have an account? Sign In").and("be.visible");
  });

  it(`User can't sign up with blank fields - page shows messages for blank field`, () => {
    userSignup.firstName().click();
    userSignup.lastName().click();
    userSignup.userName().click();
    userSignup.password().click();
    userSignup.passwordConfirm().click();
    userSignup.submitBtn().should("be.disabled").click({ force: true });
    userSignup
      .warningFirstNameFieldMessage()
      .should("have.css", "color", "rgb(244, 67, 54)")
      .and("contain", "First Name is required");
    userSignup
      .warningLastNameFieldMessage()
      .should("have.css", "color", "rgb(244, 67, 54)")
      .and("contain", "Last Name is required");
    userSignup
      .warningUserNameFieldMessage()
      .should("have.css", "color", "rgb(244, 67, 54)")
      .and("contain", "Username is required");
    userSignup
      .warningPasswordFieldMessage()
      .should("have.css", "color", "rgb(244, 67, 54)")
      .and("contain", "Enter your password");
    userSignup
      .warningConfirmPasswordFieldMessage()
      .should("have.css", "color", "rgb(244, 67, 54)")
      .and("contain", "Confirm your password");
  });

  it("User with password length less then 4 characters shouldn't be able to sign up - page shows warning message", () => {
    userSignup.firstName().type(user.userFirstName);
    userSignup.lastName().type(user.userLastName);
    userSignup.userName().type(user.username);
    userSignup.password().type("1");
    userSignup
      .warningPasswordMessage()
      .should("contain", "Password must contain at least 4 characters");
    userSignup.submitBtn().should("be.disabled");
  });

  it("User with different 'password' field & 'confirm password' field shouldn't be able to sign up - page shows warning message", () => {
    userSignup.firstName().type(user.userFirstName);
    userSignup.lastName().type(user.userLastName);
    userSignup.userName().type(user.username);
    userSignup.password().type(user.password);
    userSignup.passwordConfirm().type("123456qwert!");
    userSignup.warningConfirmPasswordMessage().should("contain", "Password does not match");
    userSignup.submitBtn().should("be.disabled");
  });
});
