const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  screenshotOnRunFailure: true,
  screenshotsFolder: 'cypress/screenshots/tests',
  video:true,
  e2e: {
    baseUrl: 'https://demo.realworld.io/#',
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      charts:true,
      embeddedScreenshots:true,
      inlineAssets:true,
      reportPageTitle:'Cypress Test Automation Report '
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
  },
});
