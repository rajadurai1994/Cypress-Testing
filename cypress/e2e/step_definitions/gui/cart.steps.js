import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { SC } from "../../page_objects/shoppingCart.po";

Given('I visit the cart page', () => {
    SC.visit();
});

When('I select the product quantity as {int}', (qty) => {
    SC.selectQuantity(qty);
});

Then('the product info is show in the cart', () => {
    SC.isProductInfoShown();
});

Then('the quantity of the products in the cart is shown as {int}', (qty) => {
    SC.isQtyCorrect(qty);
});
