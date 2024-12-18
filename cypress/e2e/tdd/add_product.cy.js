import { MP } from "../page_objects/mainPage.po";
import { PD } from "../page_objects/productDetails.po";
import { SC } from "../page_objects/shoppingCart.po";

describe('Add product in Cart', () => {
    beforeEach(() => {
        MP.visit();
    //    cy.get('li[name="login-icon"]').click();
    //    cy.get('input[type="email"]').first().type(Cypress.env('USERNAME'));
    //    cy.get('input[type="password"]').first().type(Cypress.env('PASSWORD'));
    //    cy.get('button[name="loginForm-submit-button"]').invoke('attr', 'disabled', null);
    //    cy.get('button[name="loginForm-submit-button"]').click();
        MP.productSearch('IBUPROFEN AL 400 mg');
        PD.addProduct();
    });

    it('Product is successfully added in cart', () => {
        PD.isProductAdded();
    });

    it('Product details are shown in cart page', () => {
        SC.visit();
        SC.isProductInfoShown();
    });

    it('Select quantity of the product', () => {
        SC.visit();
        SC.selectQuantity(2);
        cy.wait(5000);
        SC.isQtyCorrect(2);
    });
});
