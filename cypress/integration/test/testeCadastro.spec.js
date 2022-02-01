/// <reference types="Cypress" />

//Faker-br
var faker = require('faker-br');

//Criação de constantes para os dados do cadastro
const nome = faker.name.findName();
const sobrenome = faker.name.lastName();
const nomeCompleto = `${nome} ${sobrenome}`;
const email = faker.internet.email(nome)
const site = faker.internet.url()

context('Cadastro gratúito blip', () => {
    beforeEach(() => {
        cy.visit('/register')
    });

    it('Cadastro preenchendo apenas os campos obrigatórios', () => {
        cy.get('input[name="FullName"]')
            .type(nomeCompleto)
        cy.get('input[name="Email"]')
            .type(email)
        cy.get('input[name="Password"]')
            .type('Q1234567a*')
        cy.get('input[name="PhoneNumber"]')
            .type('(11) 99999-9999')
        cy.get('input[id="CompanySite"]')
            .type(site);
        cy.get('.items-center > .hydrated')
            .click()
        cy.get('div[id="rc-anchor-container"] div[class="recaptcha-checkbox-border"]')
            .click()

        //Terminar teste, de uma forma que consiga validar o recaptcha
        //Rescrever testes usando page objects ou cucumber

    });

    it.only('Cadastro preenchendo campos com espaço', () => {
        //Neste teste eu iria validar cada mensaem de erro, para garantir que a mensagem está correta conforme cada campo

        cy.get('input[name="FullName"]')
            .type(' ')
        cy.get('#ncid-2822 > .error')
            //.should('contain', 'Ops! Seu nome completo precisa ter pelo menos 6 caracteres')
        cy.get('input[name="Email"]')
            .type(' ')
        cy.get('input[name="Password"]')
            .type(' ')
        cy.get('input[name="PhoneNumber"]')
            .type(' ')
        cy.get('input[id="CompanySite"]')
            .type(' ')
        cy.get('.items-center > .hydrated')
            .click()
            .click()


    });
});