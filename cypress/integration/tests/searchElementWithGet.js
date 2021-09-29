// describe("formas de encontrar un elemento", () => {
//   let sucursalABuscar = "MEDEELIN-ESTADIO";
//   it("buscar sucursal", () => {
//     login();
//     buscarSucursal(sucursalABuscar);
//   });
// });

function login() {
  cy.visit("https://d7hvvm01tiopu.cloudfront.net/");
  cy.get(inputEmail).type("arestrepo@lean-tech.io");
  cy.get(inputContraseña).type("Prueba1234");
  cy.waitFor(botonIngresar);
  cy.get(botonIngresar).click();
  cy.get(tituloSeccion).contains("Sucursales");
}

function buscarSucursal(sucursal) {
  cy.get(barraBusqueda).type(sucursal + "\n");
}

function validarSucursalEncontrada(nombreSucursal) {
  cy.expect(cy.get(nombreSucursalDetalle).contains(nombreSucursal));
  // cy.expect(cy.get('//*[@id="root"]/div/div[3]/div[3]/div/div[1]/div[2]/div/div/div/p[1]').contains(nombreSucursal))// xpath
}

// elementos
const BWA_URL = "https://d7hvvm01tiopu.cloudfront.net/";
var inputEmail = ":nth-child(1) > #userEmail";
var inputContraseña = "#userPassword";
var botonIngresar = "#idBtnSubmit";
var tituloSeccion = ".active > .iconlink__text";
var barraBusqueda = "#search";
var nombreSucursalDetalle = "cy.get('.card__title')";

export {
  BWA_URL,
  inputEmail,
  inputContraseña,
  botonIngresar,
  tituloSeccion,
  nombreSucursalDetalle,
  barraBusqueda,
  login,
  validarSucursalEncontrada,
  buscarSucursal,
};
