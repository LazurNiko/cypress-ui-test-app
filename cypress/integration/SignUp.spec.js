/* eslint-disable prettier/prettier */
import signup from './PO/Signup'

describe("Signup suite", () => {
  let user;
  const userSignup = new signup();

  beforeEach(() => {
    cy.task("newUser").then((newUser) => {
      user = newUser;
    });
    cy.visit("/");
    userSignup.hyperlinkSignup().click();
  });

  it("Sign up page should have title with logo, 'Sign up' text, 'Sign up' button, First Name, Last Name and text form fields", () => {
    userSignup.signupUrl();
    userSignup.userAvatar()
    userSignup.signupTitle();
    userSignup.submitBtn().click().should("be.disabled");
    userSignup.validateFieldsPlaceholders();
    userSignup.hypertextSignin();
  });

  it(`User can't sign up with blank fields - page shows messages for blank field`, () => {
    userSignup.firstName().click();
    userSignup.lastName().click();
    userSignup.userName().click();
    userSignup.password().click();
    userSignup.passwordConfirm().click();
    userSignup.submitBtn().should("be.disabled").click({force: true});
    userSignup.validateWarningFieldsMessages();
});

  it("User with password length less then 4 characters shouldn't be able to sign up - page shows warning message", () => {
    userSignup.firstName().type(user.userFirstName);
    userSignup.lastName().type(user.userLastName);
    userSignup.userName().type(user.username);
    userSignup.password().type('1');
    userSignup.warningPasswordMessage().should('contain', 'Password must contain at least 4 characters');
    userSignup.submitBtn().should("be.disabled");
  });

  it("User with different 'password' field & 'confirm password' field shouldn't be able to sign up - page shows warning message", () => {
    userSignup.firstName().type(user.userFirstName);
    userSignup.lastName().type(user.userLastName);
    userSignup.userName().type(user.username);
    userSignup.password().type(user.password);
    userSignup.passwordConfirm().type("123456qwert!");
    userSignup.warningConfirmPasswordMessage().should('contain', 'Password does not match')
    userSignup.submitBtn().should("be.disabled");
  });

  it("User should have an ability to create a new account", () => {
    userSignup.firstName().type(user.userFirstName);
    userSignup.lastName().type(user.userLastName);
    userSignup.userName().type(user.username);
    userSignup.password().type(user.password);
    userSignup.passwordConfirm().type(user.passwordConfirm);
    userSignup.submitBtn().should("not.be.disabled");
    userSignup.validateButtonText();
  });
});
