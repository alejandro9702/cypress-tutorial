describe('search test cases',() => {
    it ('search with results',() => {
        cy.visit("https://d7hvvm01tiopu.cloudfront.net/");

        cy.get(':nth-child(1) > #userEmail').type("arestrepo@lean-tech.io");
        cy.get('#userPassword').type("Prueba1234");
        cy.waitFor('#idBtnSubmit');
        cy.get('#idBtnSubmit').click();
        cy.get('.active > .iconlink__text').contains('Sucursales')






        
    })
})