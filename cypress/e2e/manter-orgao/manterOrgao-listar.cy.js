/// <reference types="cypress" />

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

  it("Listar orgão pesquisa livre por nome", () => {
    cy.get(":nth-child(11) > .collapsible-header > .menu-title").as("gerencia").click();
    cy.wait(500);
    cy.get(".active > div.collapsible-body > .collapsible > :nth-child(8) > .collapsible-body > span").as("tabelasAuxiliares").click();
    cy.get("#ctl00_cphSistema_hlkEmpresa").as("orgaos").click();
    cy.wait(500);
    cy.get("#ctl00_cphSistema_pesquisa1_txt_pesquisa").type("AGÊNCIA DO DESENVOLVIMENTO DO TURISMO");
    cy.get("#ctl00_cphSistema_pesquisa1_btnPesquisa").click();
    cy.wait(500);
    cy.get('.linha > [valign="top"]').should("be.visible").should("contain", "AGÊNCIA DO DESENVOLVIMENTO DO TURISMO");
  });

  it("Listar orgão pesquisa livre por sigla", () => {
    cy.get(":nth-child(11) > .collapsible-header > .menu-title").as("gerencia").click();
    cy.wait(500);
    cy.get(".active > div.collapsible-body > .collapsible > :nth-child(8) > .collapsible-body > span").as("tabelasAuxiliares").click();
    cy.get("#ctl00_cphSistema_hlkEmpresa").as("orgaos").click();
    cy.wait(500);

    cy.wait(500);
    cy.get("#ctl00_cphSistema_pesquisa1_txt_pesquisa").type("ADETUC");
    cy.get("#ctl00_cphSistema_pesquisa1_btnPesquisa").click();
    cy.wait(500);
    cy.get('.linha > [valign="top"]').should("be.visible").should("contain", "AGÊNCIA DO DESENVOLVIMENTO DO TURISMO");
  });

  it("Apresenta qtd de registros encontrados", () => {
    cy.get(":nth-child(11) > .collapsible-header > .menu-title").as("gerencia").click();
    cy.wait(500);
    cy.get(".active > div.collapsible-body > .collapsible > :nth-child(8) > .collapsible-body > span").as("tabelasAuxiliares").click();
    cy.get("#ctl00_cphSistema_hlkEmpresa").as("orgaos").click();
    cy.wait(500);
    cy.get("#ctl00_cphSistema_td_direita")
      .as("qtdRegistros")
      .should("have.text", "\n\t\t\t\t\t\t\t\tHÁ\n\t\t\t\t\t75\n\t\t\t\t\t\t\t\tREGISTROS.\n\t\t\t\t\t\t\t");
  });

  it("Validação do Orgão, Sigla, Logotipo e Ativo", () => {
    cy.get(":nth-child(11) > .collapsible-header > .menu-title").as("gerencia").click();
    cy.wait(500);
    cy.get(".active > div.collapsible-body > .collapsible > :nth-child(8) > .collapsible-body > span").as("tabelasAuxiliares").click();
    cy.get("#ctl00_cphSistema_hlkEmpresa").as("orgaos").click();
    cy.wait(500);
    cy.get('[valign="top"] > #ctl00_cphSistema_grdEmpresa_ctl02_lbl_txt_empresa')
      .as("orgao")
      .should("have.text", "AGÊNCIA DE DEFESA AGROPECUÁRIA DO ESTADO DO TOCANTINS");
    cy.get("#ctl00_cphSistema_grdEmpresa > :nth-child(1) > :nth-child(2) > :nth-child(2)").as("sigla").should("have.text", "ADFDFGC");
    cy.get(":nth-child(1) > :nth-child(2) > :nth-child(3) > img").as("logotipo").should("be.visible");
    cy.get("#ctl00_cphSistema_grdEmpresa > tbody > tr:nth-child(2) > td:nth-child(4) > font > b").as("ativo").should("have.text", "SIM");
  });
  it('Deve apresentar a tela de alteração do orgão', () => {
    cy.get(":nth-child(11) > .collapsible-header > .menu-title").as("gerencia").click();
    cy.wait(500);
    cy.get(".active > div.collapsible-body > .collapsible > :nth-child(8) > .collapsible-body > span").as("tabelasAuxiliares").click();
    cy.get("#ctl00_cphSistema_hlkEmpresa").as("orgaos").click();
    cy.wait(500);
    cy.get('[valign="top"] > #ctl00_cphSistema_grdEmpresa_ctl02_lbl_txt_empresa').should('have.text', 'AGÊNCIA DE DEFESA AGROPECUÁRIA DO ESTADO DO TOCANTINS')
    cy.get('#ctl00_cphSistema_grdEmpresa_ctl02_ddlAcao').select('ALTERAR')
    cy.get('#ctl00_cphSistema_cabecalho_lbl_txt_acao').should('contain', 'Alterar')
  })

  it('Deve apresentar a tela de atributos do orgão', () => {
    cy.get(":nth-child(11) > .collapsible-header > .menu-title").as("gerencia").click();
    cy.wait(500);
    cy.get(".active > div.collapsible-body > .collapsible > :nth-child(8) > .collapsible-body > span").as("tabelasAuxiliares").click();
    cy.get("#ctl00_cphSistema_hlkEmpresa").as("orgaos").click();
    cy.wait(500);
    cy.get('[valign="top"] > #ctl00_cphSistema_grdEmpresa_ctl02_lbl_txt_empresa').should('have.text', 'AGÊNCIA DE DEFESA AGROPECUÁRIA DO ESTADO DO TOCANTINS')
    cy.get('#ctl00_cphSistema_grdEmpresa_ctl02_ddlAcao').select('ATRIBUTOS')
    cy.get('#ctl00_cphSistema_cabecalho_lbl_txt_acao').should('contain', 'Atributos')
  })
  it('Deve apresentar a tela de atributos do orgão', () => {
    cy.get(":nth-child(11) > .collapsible-header > .menu-title").as("gerencia").click();
    cy.wait(500);
    cy.get(".active > div.collapsible-body > .collapsible > :nth-child(8) > .collapsible-body > span").as("tabelasAuxiliares").click();
    cy.get("#ctl00_cphSistema_hlkEmpresa").as("orgaos").click();
    cy.wait(500);
    cy.get('[valign="top"] > #ctl00_cphSistema_grdEmpresa_ctl02_lbl_txt_empresa').should('have.text', 'AGÊNCIA DE DEFESA AGROPECUÁRIA DO ESTADO DO TOCANTINS')
    cy.get('#ctl00_cphSistema_grdEmpresa_ctl02_ddlAcao').select('EXCLUIR')
    cy.get('#ctl00_cphSistema_cabecalho_lbl_txt_acao').should('contain', 'Excluir')
  })
  it('Deve apresentar a tela de Informações do Portal', () => {
    cy.get(":nth-child(11) > .collapsible-header > .menu-title").as("gerencia").click();
    cy.wait(500);
    cy.get(".active > div.collapsible-body > .collapsible > :nth-child(8) > .collapsible-body > span").as("tabelasAuxiliares").click();
    cy.get("#ctl00_cphSistema_hlkEmpresa").as("orgaos").click();
    cy.wait(500);
    cy.get('[valign="top"] > #ctl00_cphSistema_grdEmpresa_ctl02_lbl_txt_empresa').should('have.text', 'AGÊNCIA DE DEFESA AGROPECUÁRIA DO ESTADO DO TOCANTINS')
    cy.get('#ctl00_cphSistema_grdEmpresa_ctl02_ddlAcao').select('INFORMAÇÕES DO PORTAL')
    cy.get('#ctl00_cphSistema_cabecalho_lbl_txt_acao').should('contain', 'Informações do Portal')
  })
  it('Deve apresentar a tela de Histórico', () => {
    cy.get(":nth-child(11) > .collapsible-header > .menu-title").as("gerencia").click();
    cy.wait(500);
    cy.get(".active > div.collapsible-body > .collapsible > :nth-child(8) > .collapsible-body > span").as("tabelasAuxiliares").click();
    cy.get("#ctl00_cphSistema_hlkEmpresa").as("orgaos").click();
    cy.wait(500);
    cy.get('[valign="top"] > #ctl00_cphSistema_grdEmpresa_ctl02_lbl_txt_empresa').should('have.text', 'AGÊNCIA DE DEFESA AGROPECUÁRIA DO ESTADO DO TOCANTINS')
    cy.get('#ctl00_cphSistema_grdEmpresa_ctl02_ddlAcao').select('HISTÓRICO')
    cy.get('#ctl00_cphSistema_cabecalho_lbl_txt_acao').should('contain', 'Histórico')
  })

});
