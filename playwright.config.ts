import { PlaywrightTestConfig, devices } from "@playwright/test";

const PORT = 3000;

const config: PlaywrightTestConfig = {
  use: {
    baseURL: `http://localhost:${PORT}`,
    headless: true,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  webServer: {
    reuseExistingServer: !process.env.CI,
    command: `yarn dev -p ${PORT}`,
    port: PORT,
  },
  retries: 2,
  projects: [
    { name: "desktop-chrome", use: { ...devices["Desktop Chrome"] } },
    { name: "desktop-safari", use: { ...devices["Desktop Safari"] } },
    { name: "desktop-firefox", use: { ...devices["Desktop Firefox"] } },
    { name: "mobile-chrome", use: { ...devices["Pixel 5"] } },
    { name: "mobile-safari", use: { ...devices["iPhone 12"] } },
  ],
};

export default config;
