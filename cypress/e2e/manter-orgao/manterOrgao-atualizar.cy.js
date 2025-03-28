/// <reference types="cypress" />
require("cypress-xpath");
import { faker } from "@faker-js/faker";
faker.locale = "pt_BR";

describe("Manter Orgao Listar Orgão", () => {
    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit("https://seplan-d.ikhon.com.br/transforma-d_evol/proton/login.aspx");
        cy.get("#ctl00_cphSistema_txt_login").type("723.134.030-09");
        cy.get("#ctl00_cphSistema_txt_senha").type("Usuarioteste123@");
        cy.get("#ctl00_cphSistema_btnEntrar").click();
        cy.wait(500);
    })

    it.only('Atualizar orgão', () => {
        cy.get(":nth-child(11) > .collapsible-header > .menu-title").as("gerencia").click();
        cy.wait(1000);
        cy.get(".active > div.collapsible-body > .collapsible > :nth-child(8) > .collapsible-body > span").as("tabelasAuxiliares").click();
        cy.get("#ctl00_cphSistema_hlkEmpresa").as("orgaos").click();
        cy.wait(1000);
        cy.get('[valign="top"] > #ctl00_cphSistema_grdEmpresa_ctl02_lbl_txt_empresa').should('have.text', 'AGÊNCIA DE DEFESA AGROPECUÁRIA DO ESTADO DO TOCANTINS')
        cy.get('#ctl00_cphSistema_grdEmpresa_ctl02_ddlAcao').select('ALTERAR')

        // // Cadastro
        cy.get("#ctl00_cphSistema_txt_empresa").clear().type(faker.company.name());
        cy.get("#ctl00_cphSistema_cod_orgao_ergon").clear().type(faker.company.name());
        cy.get("#ctl00_cphSistema_cod_empresa_superior").select(1);

        // // Carregar logotipo
        cy.get("#ctl00_cphSistema_txt_logotipo").selectFile("cypress/downloads/logo_to.png");

        cy.get("#ctl00_cphSistema_txt_sigla").clear().type(faker.company.name());
        cy.get("#ctl00_cphSistema_txt_cabecalho").clear().type(faker.lorem.word());
        cy.get("#ctl00_cphSistema_txt_rodape").clear().type(faker.lorem.word());
        cy.wait(500);
        cy.get("#ctl00_cphSistema_txt_orgao").clear().type(5658763126);
        cy.wait(500);
        cy.get("#ctl00_cphSistema_txt_orgao_protocolo").clear().type(54321);
        cy.wait(500);
        cy.get("#ctl00_cphSistema_txt_orgao_protocolo_documento").clear().type(54321);
        cy.get("#ctl00_cphSistema_cod_permite_teletrabalho_1").click();
        cy.get("#ctl00_cphSistema_cod_ativo_0").click();

        
        cy.get('iframe').then(iframe=>{
            const body = iframe.contents().find('body')
        })
        
    })
    it('Tela de Login sem cpf', () => {

    })
    it('Tela de Login sem passord', () => {

    })
})
