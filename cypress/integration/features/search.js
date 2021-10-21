describe("search test cases", () => {
  beforeEach(() => {
    cy.log("Ejecutando precondiciones");
    cy.visit("https://d7hvvm01tiopu.cloudfront.net/");
    cy.get(":nth-child(1) > #userEmail").type("arestrepo@lean-tech.io");
    cy.get("#userPassword").type("Prueba1234");
    cy.waitFor("#idBtnSubmit");
    cy.get("#idBtnSubmit").click();
    cy.get(".active > .iconlink__text").contains("Sucursales");
  });

  after(() => {
    cy.log("Ejecutando postCondiciones");
  });

  it("reports section", () => {
    cy.get('[href="/auth/report"]').click();
    cy.waitFor('.header__title > .txt');

  });

  it("users section", () => {
    cy.get('[href="/auth/user"]').click();
    cy.waitFor('.header__title > .txt');

  });
});
