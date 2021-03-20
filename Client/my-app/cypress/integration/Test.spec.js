import "cypress-wait-until";

Cypress.Commands.add("login", () => {
  cy.request({
    method: "POST",
    url: "http://localhost:8000/api/login",
    body: {
      email: "mahen@gmail.com",
      password: "123456",
    },
  }).then((resp) => {
    window.localStorage.setItem("token", resp.body.token);
  });
});

describe("Login Test", () => {
  beforeEach(() => {
    cy.visit("/login");
    cy.login();
    cy.visit("/home");
  });
  // it("visit login page", () => {

  // });

  // it("on typing email and password it should have correct value", () => {
  //   const email = "mahen@gmail.com";
  //   const password = "123456";
  //   cy.get(".loginEmail").type(email).should("have.value", email);
  //   cy.get(".loginPassword").type(password).should("have.value", password);
  // });

  // it("on login you should go to home page", () => {
  //   cy.get("form").submit();

  //   cy.waitUntil(() => cy.url().should("contain", "/home"));
  // });

  it("Bucket list test", () => {
    let bucketTitle = "Emergnecy";

    cy.contains("+ Create a Bucket").click();
    cy.get(".options").click();
    cy.contains("Custom").click();

    cy.focused().type(bucketTitle);
    cy.contains("ADD BUCKET").click();
  });

  it("on clicking logout you shold go to login page", () => {
    cy.get(".logoutBtn").click();
    cy.waitUntil(() => cy.url().should("contain", "/login"));
  });
});
