const { defineConfig } = require("cypress");
// const allureWriter = require("@shelex/cypress-allure-plugin/writer");
// import { addMatchImageSnapshotPlugin } from "@simonsmith/cypress-image-snapshot/plugin";

const path = require("path");
const fs = require("fs");

const getConfig = (env) => {
  const configPath = path.resolve(
    process.cwd(),
    `cypress/fixtures/config/config.${env}.json`,
  );
  return JSON.parse(fs.readFileSync(configPath, "utf-8"));
};

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
  reporter: "cypress-mochawesome-reporter",
  // reporterOptions: {
  //   reportDir: "cypress/reports",
  //   overwrite: false,
  //   html: false,
  //   json: true,
  // },

  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);

      // addMatchImageSnapshotPlugin(on); // snapshot testing setup - needs `allowCypressEnv: true`
      // allureWriter(on, config); // allure reporter setup - needs `allowCypressEnv: true`

      // implement node event listeners here
      on("task", {
        log(message) {
          console.log(message);
          return null;
        },
      });

      // --------- Config loading logic ---------
      // const isDev = config.env.TEST_ENV === "dev";
      // if (isDev) {
      //   config.baseUrl = "https://qauto.forstudy.space";
      //   config.env.defaultUserCreds = {
      //     username: "hillel-1@aaa.com",
      //     password: "testHillel1!",
      //   };
      // } else {
      //   config.baseUrl = "https://qauto2.forstudy.space";
      //   config.env.defaultUserCreds = {
      //     username: "hillel-2@aaa.com",
      //     password: "testHillel2!",
      //   };
      // }
      // --------- Config loading logic ---------

      // --------- Config loading from JSON logic ---------
      const configValue = getConfig(process.env.TEST_ENV || "dev");
      console.log(
        `Loaded config for ${process.env.TEST_ENV || "dev"}:`,
        configValue,
      );
      config.env = { ...config.env, ...configValue.env };
      config = { ...config, ...configValue };
      // return require("@testomatio/reporter/cypress")(on, config); // this is handling of Testomat, breaks config loading from JSON
      return config;
    },
    baseUrl: "https://qauto.forstudy.space",
    specPattern: "cypress/e2e/**/*.test.js",
  },
});
