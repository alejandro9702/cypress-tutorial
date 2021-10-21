class TerminalPage {

    elements = {
        terminalSection: () => cy.xpath('//p[@class="iconlink__text"and text()="Terminales"]'),
        terminalTitle: () => cy.get('.header__title > .txt'),
        addTerminalButton: () => cy.get('#idBtnAdd'),
        loginButton: () => cy.get('#idBtnSubmit'),
        TerminalNameInput: () => cy.get('#name'),

    }


    addNewTerminal(name,branch){
        cy.waitLoading();
        this.elements.terminalSection().click();
        cy.waitLoading();
        this.elements.addTerminalButton().click();
        this.elements.TerminalNameInput().type(name)
    }
    
}

module.exports = new TerminalPage();