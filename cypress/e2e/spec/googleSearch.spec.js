import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import GooglePage from '../pageObjects/googlePage';

const googlePage = new GooglePage();

Given('I open Google page', () => {
    googlePage.visit();
});

When('I search for {string}', (text) => {
    googlePage.search(text);
});

Then('I see {string} in the results', (text) => {
    cy.contains(text);
});