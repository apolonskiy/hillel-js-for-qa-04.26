const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  // env: {
  //   TEST_VAR_1: 'test value 1 in config',
  // },
  // expose: {
  //   TEST_VAR_2: 'test value 2 in expose',
  // },
  retries: {
    runMode: 1,
    openMode: 0,
  },
  video: true,
  viewportHeight: 720,
  viewportWidth: 1080,


  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
       on('task', {
        log(message) {
          console.log(message)
          return null
        },
      })
    },
    baseUrl: 'https://example.cypress.io',
    specPattern: 'cypress/e2e/**/*.test.js',
  },
});
