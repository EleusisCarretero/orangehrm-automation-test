import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    headless: false, // Cambia a true si no quieres ver el navegador
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
  },
  reporter: [['list'], ['html', { outputFolder: 'test-results' }]],
  timeout: 60000,
});
