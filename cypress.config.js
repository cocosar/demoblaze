const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");


async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    createBundler({
      plugins: [createEsbuildPlugin.default(config)],
    })
  );

  on("task", {
    setTestData: (testData) => {
      global.testData = testData;
      return null;
    },
    getTestData: () => {
      return global.testData;
    }
  })

  return config;
}

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1440,
    viewportHeight: 900,
    specPattern: "cypress/e2e/features/*.feature",
    baseUrl: 'https://www.demoblaze.com',
    setupNodeEvents
  },
});
