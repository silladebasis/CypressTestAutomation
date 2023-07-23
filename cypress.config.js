const { defineConfig } = require("cypress");

module.exports = defineConfig({
  watchForFileChanges: false,
  screenshotOnRunFailure: true,
  video:false,
  e2e: {
    baseUrl: 'https://demo.realworld.io/#',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
