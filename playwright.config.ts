import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  use: {
    trace: 'on-first-retry',
    screenshot: 'only-on-failure'
  },
  reporter: [
    ['list'],
    ['html', {
      open: 'never',
      outputFolder: 'test-results'
    }],
    ['junit', {
      outputFile: 'test-results/junit-results.xml'
    }]
  ],
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
};
export default config;