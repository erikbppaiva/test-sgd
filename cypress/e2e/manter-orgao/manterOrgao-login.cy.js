/// <reference types="cypress" />
require("cypress-xpath");

describe("Manter Orgao Listar Orgão", () => {
    beforeEach(() => {
        cy.visit("https://seplan-d.ikhon.com.br/transforma-d_evol/proton/login.aspx");
        
    })

    it('Tela de Login de sucesso', () => {
        cy.get("#ctl00_cphSistema_txt_login").type("723.134.030-09");
        cy.get("#ctl00_cphSistema_txt_senha").type("Usuarioteste123@");
        cy.get("#ctl00_cphSistema_btnEntrar").click();
        cy.wait(500);
        cy.get('[href="contadores.aspx"]').should('be.visible')
    })
    it('Tela de Login sem cpf', () => {
        // cy.get("#ctl00_cphSistema_txt_login").type("723.134.030-09");
        cy.get("#ctl00_cphSistema_txt_senha").type("Usuarioteste123@");
        cy.get("#ctl00_cphSistema_btnEntrar").click();
        cy.wait(500);

        cy.on('window:alert', (str) => {
            expect(str).to.equal('O CAMPO IDENTIFICAÇÃO DEVE SER PREENCHIDO.');
          });   
    })
    it('Tela de Login sem passord', () => {
        // cy.get("#ctl00_cphSistema_txt_login").type("723.134.030-09");
        cy.get("#ctl00_cphSistema_txt_senha").type("Usuarioteste123@");
        cy.get("#ctl00_cphSistema_btnEntrar").click();
        cy.wait(500);
        cy.on('window:alert', (str) => {
            expect(str).to.equal('O CAMPO IDENTIFICAÇÃO DEVE SER PREENCHIDO.');
          });   
    })
})
