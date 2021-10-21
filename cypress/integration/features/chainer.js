
import { barraBusqueda,BWA_URL} from './searchElementWithGet';

var loginBWA = require("./searchElementWithGet");
describe("Escribir en busqueda varios strings", function () {
  it("Vamos a escribir y limpiar", function () {
    loginBWA.login();
    loginBWA.buscarSucursal("hola");
    cy.get(barraBusqueda).clear().type("de nuevo");
    
  });
});
