/// <reference types="cypress" />

import { faker } from "@faker-js/faker";
faker.locale = "pt_BR";

require("cypress-xpath");

describe("Manter Orgao Listar Orgão", () => {
  beforeEach(() => {
    cy.viewport(1920, 1080);
    cy.visit("https://seplan-d.ikhon.com.br/transforma-d_evol/proton/login.aspx");
    cy.get("#ctl00_cphSistema_txt_login").type("723.134.030-09");
    cy.get("#ctl00_cphSistema_txt_senha").type("Usuarioteste123@");
    cy.get("#ctl00_cphSistema_btnEntrar").click();
    cy.wait(500);
  });

  it("Validar campos obrigatórios", () => {
    cy.get(":nth-child(11) > .collapsible-header > .menu-title").as("gerencia").click();
    cy.wait(500);
    cy.get(".active > div.collapsible-body > .collapsible > :nth-child(8) > .collapsible-body > span").as("tabelasAuxiliares").click();
    cy.get("#ctl00_cphSistema_hlkEmpresa").as("orgaos").click();
    cy.wait(500);
    cy.get("#ctl00_cphSistema_hypNovaEmpresa").as("novoOrgao").click();
    cy.get("span").invoke("text").should("contain", "não pode ser vazio");
  });

  it("Deve Incluir um novo orgão", () => {
    cy.get(":nth-child(11) > .collapsible-header > .menu-title").as("gerencia").click();
    cy.wait(500);
    cy.get(".active > div.collapsible-body > .collapsible > :nth-child(8) > .collapsible-body > span").as("tabelasAuxiliares").click();
    cy.get("#ctl00_cphSistema_hlkEmpresa").as("orgaos").click();
    cy.wait(500);
    cy.get("#ctl00_cphSistema_hypNovaEmpresa").as("novoOrgao").click();

    // Cadastro
    cy.get("#ctl00_cphSistema_txt_empresa").type(faker.company.name());
    cy.get("#ctl00_cphSistema_cod_orgao_ergon").type(faker.company.name());
    cy.get("#ctl00_cphSistema_cod_empresa_superior").select(1);

    // Carregar logotipo
    cy.get("#ctl00_cphSistema_txt_logotipo").selectFile("cypress/downloads/logo_to.png");
    cy.get("#ctl00_cphSistema_txt_sigla").type(faker.company.name());
    cy.get("#ctl00_cphSistema_txt_cabecalho").type(faker.lorem.word());
    cy.get("#ctl00_cphSistema_txt_rodape").type(faker.lorem.word());
    cy.wait(500);
    cy.get("#ctl00_cphSistema_txt_orgao").type(5658763126);
    cy.wait(500);
    cy.get("#ctl00_cphSistema_txt_orgao_protocolo").type(54321);
    cy.wait(500);
    cy.get("#ctl00_cphSistema_txt_orgao_protocolo_documento").type(54321);
    cy.get("#ctl00_cphSistema_cod_permite_teletrabalho_1").click();
    cy.get("#ctl00_cphSistema_cod_ativo_0").click();

    //Não está exibindo a msg de “Operação realizada com sucesso.”
  });

  it("Deve falhar se o arquivo não for PNG", () => {
    const filePath = "cypress/fixtures/logo_to.jpg"; 
    cy.get(":nth-child(11) > .collapsible-header > .menu-title").as("gerencia").click();
    cy.wait(500);
    cy.get(".active > div.collapsible-body > .collapsible > :nth-child(8) > .collapsible-body > span").as("tabelasAuxiliares").click();
    cy.get("#ctl00_cphSistema_hlkEmpresa").as("orgaos").click();
    cy.wait(500);
    cy.get("#ctl00_cphSistema_hypNovaEmpresa").as("novoOrgao").click();

    // Cadastro
    cy.get("#ctl00_cphSistema_txt_empresa").type(faker.company.name());
    cy.get("#ctl00_cphSistema_cod_orgao_ergon").type(faker.company.name());
    cy.get("#ctl00_cphSistema_cod_empresa_superior").select(1);

    // Carregar logotipo
    cy.uploadPngFile("#ctl00_cphSistema_txt_logotipo", filePath);
    cy.contains("O formato do arquivo não é permitido.").should("be.visible");
    
    cy.get("#ctl00_cphSistema_txt_sigla").type(faker.company.name());
    cy.get("#ctl00_cphSistema_txt_cabecalho").type(faker.lorem.word());
    cy.get("#ctl00_cphSistema_txt_rodape").type(faker.lorem.word());
    cy.wait(500);
    cy.get("#ctl00_cphSistema_txt_orgao").type(5658763126);
    cy.wait(500);
    cy.get("#ctl00_cphSistema_txt_orgao_protocolo").type(54321);
    cy.wait(500);
    cy.get("#ctl00_cphSistema_txt_orgao_protocolo_documento").type(54321);
    cy.get("#ctl00_cphSistema_cod_permite_teletrabalho_1").click();
    cy.get("#ctl00_cphSistema_cod_ativo_0").click();
  });
  
  it.only("Clicar no botão do Volta redireciona a pagina de listar orgão", () => {
    cy.get(":nth-child(11) > .collapsible-header > .menu-title").as("gerencia").click();
    cy.wait(500);
    cy.get(".active > div.collapsible-body > .collapsible > :nth-child(8) > .collapsible-body > span").as("tabelasAuxiliares").click();
    cy.get("#ctl00_cphSistema_hlkEmpresa").as("orgaos").click();
    cy.wait(500);
    cy.get("#ctl00_cphSistema_hypNovaEmpresa").as("novoOrgao").click();
    cy.get('#ctl00_cphSistema_btnVoltar').should('be.visible').click()
    cy.get('#ctl00_cphSistema_hypNovaEmpresa').should('be.visible')
  })
});
