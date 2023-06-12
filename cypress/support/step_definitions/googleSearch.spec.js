import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import GoogleHomePage from '../../e2e/pageObjects/googleHomePage';

const googleHomePage = new GoogleHomePage();

Given('I am on the Google home page', () => {
    googleHomePage.visit();
});

When('I search for {string}', (text) => {
    googleHomePage.search(text);
});

Then('I see search results related to {string}', (text) => {
    cy.contains(text);
});

Then('I accept the cookies', (text) => {
    cy.contains('Accept all').click({force: true});
});
