const cypressConfig = require("../../cypress.config");

describe('API login', () => {
    beforeEach(() => {
        cy.visit(Cypress.env('APP_URL'));
    //    cy.get('li[name="login-icon"]').click();
    //    cy.get('input[type="email"]').first().type(Cypress.env('USERNAME'));
    //    cy.get('input[type="password"]').first().type(Cypress.env('PASSWORD'));
    //    cy.get('button[name="loginForm-submit-button"]').invoke('attr', 'disabled', null);
    //    cy.get('button[name="loginForm-submit-button"]').click();
        cy.get('input[type="search"]').eq(0).type('IBUPROFEN AL akut 400 mg').wait(2000).type("{enter}");
        cy.get('button[type="submit"]').eq(3).click();
    });
    it('Add a product to cart', () => {
        cy.get('.m-Notification--success').should('be.visible');
        cy.get('.a-RoundBadge').first().invoke('text').should('eq', '1');
    });
    it('Product details are shown in cart page', () => {
        cy.visit(Cypress.env('APP_URL') + '/nx/cart/');
        cy.get('.o-ProductItemWrapper').should('be.visible');
    });
    it('Select quantity of the product', () => {
        cy.visit(Cypress.env('APP_URL') + '/nx/cart/');
        cy.get('.o-ProductListing__select').click();
        cy.get('div[data-value="2"]').click();
        cy.wait(2000);
        cy.get('.a-RoundBadge').first().invoke('text').should('eq', '2');
    });
});
