import { PlaywrightTestConfig, devices } from '@playwright/test';

export {};

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: 3,
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  reporter: [
    ['list'],
    [
      'html',
      {
        open: 'never',
        outputFolder: 'test-results'
      }
    ],
    [
      'junit',
      {
        outputFile: 'test-results/junit-results.xml'
      }
    ]
  ],
  projects: [
    {
      name: 'setup',
      testMatch: /global\.setup\.ts/
    },
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      dependencies: ['setup']
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
      dependencies: ['setup']
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
      dependencies: ['setup']
    },
    /* Test against branded browsers. */
    {
      name: 'chrome',
      use: { ...devices['Desktop Chrome'], channel: 'chrome' },
      dependencies: ['setup']
    },
    {
      name: 'msedge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
      dependencies: ['setup']
    }
  ]
};
export default config;
