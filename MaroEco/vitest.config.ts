/// <reference types="vitest/globals" />
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    reporters: ['vitest-sonar-reporter', 'default'],
    outputFile: './coverage/test-report.xml',
    coverage: {
      reporter: ['lcov', 'json', 'html'],
      reportsDirectory: './coverage',
    },
    passWithNoTests: true,
  },
  build: {
    outDir: 'dist',
  },
});
