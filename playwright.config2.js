// @ts-check
const { defineConfig, devices } = require('@playwright/test');

const dotenv = require('dotenv');

dotenv.config({ path: `./ENV/.env.${process.env.ENV}`, override: true })

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests',
  // timeout
  timeout: 30 * 1000,

  expect: {

    timeout: 10 * 1000,

  },
  /* Run tests in files in parallel */
  // fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: 0,
  /* Opt out of parallel tests on CI. */
  workers: 8,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['list'], // optional: shows progress in terminal
    ['allure-playwright', {
      resultsDir: 'allure-results', // this folder will be auto-created
    }]
  ],


  /* Configure projects for major browsers */
  projects: [
    {
      name: 'ChromeTest',
      use: {
        browserName: 'chromium',
        channel: 'msedge',
        headless: false,
        screenshot: 'on', // Options: 'on', 'off', 'only-on-failure'
        trace: 'on',// Options: 'on', 'off', 'retain-on-failure', 'on-first-retry'
        ignoreHTTPSErrors: true,
        permissions: ['notifications'],
        ...devices['Desktop Edge'],


        // viewport: { width: 720, height: 720 },

      },


    },
    // {
    //   name: 'MobileTest',
    //   use: {
    //     browserName: 'chromium',
    //     channel: 'chrome',
    //     headless: false,
    //     screenshot: 'on', // Options: 'on', 'off', 'only-on-failure'
    //     trace: 'on',// Options: 'on', 'off', 'retain-on-failure', 'on-first-retry'
    //     ignoreHTTPSErrors: true,
    //     permissions: ['notifications'],
    //     ...devices['iPhone 15 Pro'],


    //     // viewport: { width: 720, height: 720 },

    //   },


    // },

    // {
    //   name: 'FirefoxTest',
    //   use: {
    //     browserName: 'firefox',
    //     headless: true,
    //     screenshot: 'only-on-failure', // Options: 'on', 'off', 'only-on-failure'
    //     trace: 'retain-on-failure',// Options: 'on', 'off', 'retain-on-failure', 'on-first-retry'

    //   },

    // },

  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

