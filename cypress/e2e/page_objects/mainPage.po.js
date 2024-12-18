class MainPage {
    visit() {
        cy.visit(Cypress.env('APP_URL'));
    }

    productSearch(product) {
        cy.get('input[type="search"]').eq(0).type(product).wait(2000).type("{enter}");
    }
}

export var MP = new MainPage();
