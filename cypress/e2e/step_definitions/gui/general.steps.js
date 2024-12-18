import { Given } from "cypress-cucumber-preprocessor/steps";

Given('I wait for {int} seconds', (time) => {
    cy.wait(time*1000);
});
