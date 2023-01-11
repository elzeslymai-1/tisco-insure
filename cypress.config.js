const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  //mochawesome reporter
  reporter: 'cypress-mochawesome-reporter',

  e2e: {
    testIsolation: false,
    watchForFileChanges: false,
    defaultCommandTimeout: 5000,
    
    setupNodeEvents(on, config) {
      // implement node event listeners here

      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
