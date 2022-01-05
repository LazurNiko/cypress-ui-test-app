Cypress.Commands.add("login", (username = "Snow", password = "12345Qwert!") => {
  cy.visit("/");
  cy.request({
    method: "POST",
    url: Cypress.env("apiserver") + "/login",
    headers: {
      Pragma: "no-cache",
      Origin: Cypress.config().baseUrl,
      Accept_Encoding: "gzip, deflate, br",
      "Accept-Language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7,uk;q=0.6",
      "User-Agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36",
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json, text/plain, */*",
      "Cache-Control": "no-cache",
      Referer: Cypress.config().baseUrl,
      Connection: "keep-alive",
    },
    body: {
      username,
      password,
    },
  }).then((resp) => {
    expect(resp.status).to.eq(200);
    const cookies = resp.headers["set-cookie"];
    cookies.forEach((cookie) => {
      const firstPart = cookie.split(";")[0];
      const separator = firstPart.indexOf("=");
      const name = firstPart.substring(0, separator);
      const value = firstPart.substring(separator + 1);
      cy.setCookie(name, value);
    });
  });
  cy.get("#username").type(Cypress.env("username"));
  cy.get("#password").type("12345Qwert!", { sensitive: true });
  cy.get('[data-test="signin-submit"]').click();
});

// Cypress.Commands.add('loginByForm', (username="Snow", password="12345Qwert!") => {
//   cy.visit('/')

//   return cy.request({
//     method: 'POST',
//     url: Cypress.env("apiserver") + "/login",
//     form: true,
//     body: {
//       username,
//       password,
//     },
//   })
// })
