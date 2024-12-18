import { Given, Then } from "cypress-cucumber-preprocessor/steps";

Given('I send a POST request with valid credentials', (time) => {
    cy.request({
        method: 'POST',
        url: Cypress.env('API_URL') + '/auth/v2/at/login',
        headers: {
          'accept': 'application/json',
          'Sae-Device-Type': 'browser',
          'Content-Type': 'application/json'
        },
        body: {
          'username': Cypress.env('USERNAME'),
          'password': Cypress.env('PASSWORD')
        }
    }).as('response');
});

Given('I send a POST request with some missing credentials', (time) => {
    cy.request({
        method: 'POST',
        url: Cypress.env('API_URL') + '/auth/v2/at/login',
        headers: {
          'accept': 'application/json',
          'Sae-Device-Type': 'browser',
          'Content-Type': 'application/json'
        },
        body: {
          'username': Cypress.env('USERNAME'),
          'password': ''
        }
      }).as('response');
});

Given('I send a POST request with invalid credentials', (time) => {
    cy.request({
        method: 'POST',
        url: Cypress.env('API_URL') + '/auth/v2/at/login',
        headers: {
          'accept': 'application/json',
          'Sae-Device-Type': 'browser',
          'Content-Type': 'application/json'
        },
        body: {
          'username': Cypress.env('USERNAME'),
          'password': 'wrongpassword'
        }
      }).as('response');
});

Then('I should get a {int} response status', (status) => {
    cy.get('@response').its('status').should('equal', status);
});

Then('I should get {string} in response body', (token) => {
    cy.get('@response').its('body').should('have.property', 'token'); 
});

Then('I should not get {string} in response body', (token) => {
    cy.get('@response').its('body').should('not.have.property', 'token');
});

Then('I should get error message {string} in response body', (err) => {
  cy.get('@response').its('body').should('have.property', 'error');
  cy.get('@response').its('body').should('contain', err);
});
