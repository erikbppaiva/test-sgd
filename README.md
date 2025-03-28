## 📌 Descrição
Este projeto tem como objetivo automatizar testes de operações CRUD (Create, Read, Update e Delete) utilizando o Cypress, garantindo a qualidade e a integridade das funcionalidades de uma aplicação web.
Ter o Node.js 18+



## 🚀 Tecnologias Utilizadas
1.Cypress - Framework de testes end-to-end
2.JavaScript - Linguagem utilizada para os testes
3.Node.js - Runtime do JavaScript para executar os testes
4.Mocha - Estrutura de testes utilizada pelo Cypress

## 📂 Estrutura do Projeto

📁 projeto-cypress
│-- 📁 cypress
│   │-- 📁 e2e  # Testes de CRUD
│   │   │-- 📄 create.cy.js
│   │   │-- 📄 read.cy.js
│   │   │-- 📄 update.cy.js
│   │   │-- 📄 delete.cy.js
│   │-- 📁 support  # Comandos customizados e configurações adicionais
│   │-- 📁 fixtures # Arquivos JSON com dados mockados
│-- 📄 cypress.config.js  # Configuração do Cypress
│-- 📄 package.json  # Dependências do projeto
│-- 📄 README.md  # Documentação

## 🔧 Pré-requisitos

Antes de iniciar, você precisará ter instalado em sua máquina:

1.Node.js
2.Git
3.Cypress

## 📦 Instalação

Clone o repositório e instale as dependências:

# Clonar o repositório
git clone https://github.com/erikbppaiva/test-sgd.git
cd cypress

# Instalar dependências
npm install

▶️ Executando os Testes

## Modo Interativo (GUI):
```
npx cypress open
```

Isso abrirá a interface gráfica do Cypress, onde você poderá rodar os testes manualmente.

## Modo Headless (CLI):
```
npx cypress run
```
Isso executará os testes no modo headless, sem abrir o navegador.

# 📌 Boas Práticas

✔️ Utilizar data-test ou data-cy como atributos nos elementos para facilitar a seleção e evitar quebras em caso de mudanças no HTML.
✔️ Escrever testes independentes para garantir que cada operação CRUD seja testada isoladamente.
✔️ Utilizar comandos customizados (cy.customCommand()) para reaproveitar ações repetitivas.

# 🔗 Referências

Documentação Oficial do Cypress
Cypress Best Practices