const {defineConfig} = require("cypress");

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        specPattern: "/Users/francislainycampos/IdeaProjects/hello-talk-web/cypress/e2e/googleSearch.feature",

        // integrationFolder: "cypress/e2e",
        supportFile: "cypress/support/commands.js",
    },
});
