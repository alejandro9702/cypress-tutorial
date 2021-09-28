describe("formas de encontrar un elemento", () => {
  let sucursalABuscar = "MEDEELIN-ESTADIO";
  it("buscar sucursal", () => {
    login();
    buscarSucursal(sucursalABuscar);
  });
});

function login() {
  cy.visit("https://d7hvvm01tiopu.cloudfront.net/");
  cy.get(":nth-child(1) > #userEmail").type("arestrepo@lean-tech.io");
  cy.get("#userPassword").type("Prueba1234");
  cy.waitFor("#idBtnSubmit");
  cy.get("#idBtnSubmit").click();
  cy.get(".active > .iconlink__text").contains("Sucursales");
}

function buscarSucursal(sucursal) {
  cy.get("#search").type(sucursal + "\n");
}

function validarSucursalEncontrada(nombreSucursal) {
    cy.expect(cy.get("cy.get('.card__title')").contains(nombreSucursal))
    cy.expect(cy.get('//*[@id="root"]/div/div[3]/div[3]/div/div[1]/div[2]/div/div/div/p[1]').contains(nombreSucursal))// xpath

}
