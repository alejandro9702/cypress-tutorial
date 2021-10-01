describe("pruebas con check", () =>{


    beforeEach(() => {
        cy.log("Ejecutando precondiciones");
        cy.visit("https://d7hvvm01tiopu.cloudfront.net/");
      });

      it("solicitud de negocio", () =>{
        cy.get('#userName').type("alejandro");
        cy.get(':nth-child(3) > #userEmail').type("alejo@gmail.com");
        cy.get('#userPhone').type("12345678");
        cy.get('.checkbox--unchecked').click()
        cy.get('#idBtnAdd').click();
          })
});