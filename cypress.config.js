const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {

    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
