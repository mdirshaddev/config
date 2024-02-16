/** @type {import("jest").Config} */
const jestConfig = {
  testEnvironment: 'node',
  testMatch: ['**/__tests__/**/*.cjs'],
  // setupFiles: ['esm'],
  transform: {
    '^.+\\.cjs$': 'babel-jest' // Add Babel Jest transform for CommonJS files
  },
  collectCoverageFrom: ['__tests__'],
  coverageReporters: ['html', 'lcov', 'text-summary'],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100
    }
  }
};

export default jestConfig;
