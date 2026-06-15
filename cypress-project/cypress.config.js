const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  env: {
    defaultUserCreds: {
      username: "hillel-1@aaa.com",
      password: "testHillel1!",
    },
  },
  expose: {
    basicAuth: {
      username: "guest",
      password: "welcome2qauto",
    },
  },
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
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });
    },
    baseUrl: "https://qauto.forstudy.space",
    specPattern: "cypress/e2e/**/*.test.js",
  },
});
