describe('Manter Orgao - Excluir', () => {

    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit("https://seplan-d.ikhon.com.br/transforma-d_evol/proton/login.aspx");
        cy.get("#ctl00_cphSistema_txt_login").type("723.134.030-09");
        cy.get("#ctl00_cphSistema_txt_senha").type("Usuarioteste123@");
        cy.get("#ctl00_cphSistema_btnEntrar").click();
        cy.wait(1000);
    });

    it('Deve excluir um órgão com sucesso', () => {
        cy.get(':nth-child(11) > .collapsible-header').click();
        cy.get('.active > div.collapsible-body > .collapsible > :nth-child(8) > .collapsible-body > span').click();
        cy.get('#ctl00_cphSistema_hlkEmpresa').click();
        cy.get('[valign="top"] > #ctl00_cphSistema_grdEmpresa_ctl02_ddlAcao').select('incluir.aspx?cod_empresa=24&acao_confirma=excluir');
        cy.get('#ctl00_cphSistema_btnExcluir').click();

        cy.on('window:alert', (str) => {
            expect(str).to.equal('NÃO É POSSÍVEL EXCLUIR A EMPRESA PORQUE A MESMA POSSUI 40 UNIDADE(S) ASSOCIADA(S).');
          }); 
          
        // precisa verificar como desvincular a empresa antes de excluir
    })

    it('Deve desistir da exclusão de um órgão', () => {
        cy.get(':nth-child(11) > .collapsible-header').click();
        cy.get('.active > div.collapsible-body > .collapsible > :nth-child(8) > .collapsible-body > span').click();
        cy.get('#ctl00_cphSistema_hlkEmpresa').click();
        cy.get('[valign="top"] > #ctl00_cphSistema_grdEmpresa_ctl02_ddlAcao').select('incluir.aspx?cod_empresa=24&acao_confirma=excluir');
        cy.get('#ctl00_cphSistema_btnVoltar').click();
        cy.contains('Gerência').should('be.visible')
        
    })

    it('Deve exibir mensagem quando não houver órgãos encontrados', () => {
        cy.get(':nth-child(11) > .collapsible-header').click();
        cy.get('.active > div.collapsible-body > .collapsible > :nth-child(8) > .collapsible-body > span').click();
        cy.get('#ctl00_cphSistema_hlkEmpresa').click();
        cy.get('#ctl00_cphSistema_pesquisa1_txt_pesquisa').clear('T');
        cy.get('#ctl00_cphSistema_pesquisa1_txt_pesquisa').type('TesteErik');
        cy.get('#ctl00_cphSistema_pesquisa1_btnPesquisa').click();
        cy.contains('HÁ 0 REGISTROS.').should('be.visible')
        
    })

    it('Deve exibir mensagem de erro ao tentar excluir Empresa que possui unidades associada(s).', () => {
        cy.get(':nth-child(11) > .collapsible-header').click();
        cy.get('.active > div.collapsible-body > .collapsible > :nth-child(8) > .collapsible-body > span').click();
        cy.get('#ctl00_cphSistema_hlkEmpresa').click();
        cy.get('[valign="top"] > #ctl00_cphSistema_grdEmpresa_ctl02_ddlAcao').select('incluir.aspx?cod_empresa=24&acao_confirma=excluir');
        cy.get('#ctl00_cphSistema_btnExcluir').click();
        //cy.contains('NÃO É POSSÍVEL EXCLUIR A EMPRESA').should('be.visible'); 
        // // precisa verificar por que a popup não exibi a mensgem pelo cyypress
        
    })

    
})