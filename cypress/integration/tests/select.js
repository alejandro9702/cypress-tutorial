
import { barraBusqueda,BWA_URL,login,terminalesSeccion} from './searchElementWithGet';
var btnAgregarTerminal= "#idBtnAdd";
describe("elementos select", function()
{

    beforeEach(()=>{
        cy.log("before: login")
        login();
    })


    it("seccion terminales, agregar terminal",()=>{
        cy.waitFor(terminalesSeccion);
        cy.get(terminalesSeccion).click();
        agregarTerminal();

    });

   
})

function agregarTerminal(){
    cy.waitFor(btnAgregarTerminal);
    cy.get(btnAgregarTerminal).click();
    seleccionarUnaSucursal();
}


function seleccionarUnaSucursal(){
    cy.get(".searchWrapper > #ddid_input").click();
    // cy.xpath('//li[@class="  hasFirstOption"]').first().click();
    cy.get('.hasFirstOption').eq(2).click();
}







