import { Given } from "cypress-cucumber-preprocessor/steps";
import { MP } from "../../page_objects/mainPage.po";

Given('I visit the main page', () => {
    MP.visit();
});

Given('I search for product {string}', (product) => {
    MP.productSearch(product);
});
