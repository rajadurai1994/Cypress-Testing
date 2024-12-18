class ShoppingCart {
    visit() {
        cy.visit(Cypress.env('APP_URL') + '/nx/cart/');
    }

    isProductInfoShown() {
        cy.get('.o-ProductItemWrapper').should('be.visible');
    }

    selectQuantity(qty) {
        cy.get('.o-ProductListing__select').click();
        cy.get(`div[data-value="${qty}"]`).click();
    }

    isQtyCorrect(qty) {
        cy.get('.a-RoundBadge').first().invoke('text').should('eq', `${qty}`);
    }
}

export var SC = new ShoppingCart();
