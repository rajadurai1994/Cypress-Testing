class ProductDetails {
    addProduct() {
        cy.get('button[type="submit"]').eq(3).click();
    }

    isProductAdded() {
        cy.get('.m-Notification--success').should('be.visible');
        cy.get('.a-RoundBadge').first().invoke('text').should('eq', '1');
    }
}

export var PD = new ProductDetails();
