///<reference types="Cypress"/>

const {Given, When, Then} = require("cypress-cucumber-preprocessor/steps");
const loginPage = require("../pages/zunifyPanel/LoginPage");
const TerminalPage = require("../pages/zunifyPanel/TerminalPage")

Given('I open zunify panel and I logging', function(){
    cy.visit("https://d7hvvm01tiopu.cloudfront.net/");
    loginPage.loginAsAdmin();
    
 
});


When('I add a new terminal {string}',terminalName=>{
    TerminalPage.addNewTerminal(terminalName,"branch");
})