const { defineConfig } = require("cypress");

module.exports = defineConfig({
  specPattern: "googleSearch.feature",

  // integrationFolder: "cypress/e2e",
  supportFile: "cypress/support/commands.js",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
