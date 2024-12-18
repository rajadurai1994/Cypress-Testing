import { Given } from "cypress-cucumber-preprocessor/steps";
import { PD } from "../../page_objects/productDetails.po";

Given('I add the product to the cart', () => {
    PD.addProduct();
});

Given('the product is successfully added to the cart', () => {
    PD.isProductAdded();
});
