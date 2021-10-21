class LoginPage {

    elements = {
        userNameInput: () => cy.get(':nth-child(1) > #userEmail'),
        passwordInput: () => cy.get('#userPassword'),
        loginButton: () => cy.get('#idBtnSubmit'),

    }

    typeUserName(email){
        this.elements.userNameInput().type(email);
    }
    typeUserPassword(password){
        this.elements.passwordInput().type(password);
    }

    loginAsAdmin(){
        this.typeUserName("porter_jr01@yopmail.com");
        this.typeUserPassword("Munoz970217");
        this.elements.loginButton().should('be.enabled').click();
    }
    

}

module.exports = new LoginPage();