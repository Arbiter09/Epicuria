/** @type {import('jest').Config} */
const config = {
  // Test environment for DOM testing
  testEnvironment: "jsdom",

  // Setup files to run before each test
  setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],

  // Clear mocks automatically between tests
  clearMocks: true,

  // Collect coverage information
  collectCoverage: true,
  coverageDirectory: "coverage",

  // Coverage reporters
  coverageReporters: ["text", "lcov", "html"],

  // Files to include in coverage
  collectCoverageFrom: [
    "src/**/*.{js,jsx}",
    "!src/index.js",
    "!src/setupTests.js",
    "!src/**/*.test.{js,jsx}",
    "!src/**/__tests__/**",
  ],

  // Transform files with Babel
  transform: {
    "^.+\\.(js|jsx)$": "babel-jest",
  },

  // Module name mapping for CSS and asset files
  moduleNameMapper: {
    "\\.(css|less|scss|sass)$": "identity-obj-proxy",
    "\\.(gif|ttf|eot|svg|png|jpg|jpeg)$": "jest-transform-stub",
  },

  // Test file patterns
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx}",
    "<rootDir>/src/**/*.{test,spec}.{js,jsx}",
  ],

  // Ignore node_modules except for ES modules that need transformation
  transformIgnorePatterns: [
    "node_modules/(?!(react-router|@testing-library)/)",
  ],

  // Verbose output for better debugging
  verbose: true,
};

module.exports = config;
