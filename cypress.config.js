const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('@cypress/grep/src/plugin')(config);
      return config;
    },
  },
  chromeWebSecurity: false,
  projectId: "k439nf",
  "experimentalStudio": true   //requerido para el Record
 // projectId: "8c1ca87c-23d6-47b3-8c94-2e6206c662b9",
});
