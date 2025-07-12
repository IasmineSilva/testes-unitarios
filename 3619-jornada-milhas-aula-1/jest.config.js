// jest.config.js
module.exports = {
  preset: 'jest-preset-angular',
  setupFilesAfterEnv: ['<rootDir>/setup-jest.ts'],
  globalSetup: 'jest-preset-angular/global-setup',
  roots: ['<rootDir>/src'],
  moduleDirectories: ['node_modules', 'src', __dirname],
  moduleNameMapper: {
    "^@shared/(.*)$": "<rootDir>/src/app/shared/$1",
    "^@services/(.*)$": "<rootDir>/src/app/core/services/$1"
  },
};