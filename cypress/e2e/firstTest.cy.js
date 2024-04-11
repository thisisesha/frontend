describe("Login", () => {
  it("Should log in without issues", () => {
    cy.visit("http://localhost:3000/signin")
    cy.get("#username").type("esha")
    cy.get("#password").type("esha123", {log:false})
    cy.get("#Signin").click()
    cy.location().then((location) => {
      cy.wrap(location.href).should(
        "contain",
        "signin"
      )
    })
  })
 })