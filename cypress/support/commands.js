// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';
Cypress.Commands.add('uploadPngFile', (selector, filePath) => {
    cy.fixture(filePath, 'base64').then((fileContent) => {
      cy.get(selector).upload(
        {
          fileContent,
          fileName: filePath.split('/').pop(), // Extrai o nome do arquivo
          mimeType: 'image/png'  // Define o MIME type como PNG
        },
        { subjectType: 'input' }
      );
    });
  });