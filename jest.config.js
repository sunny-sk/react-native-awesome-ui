module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  testPathIgnorePatterns: ['node_modules'],
  clearMocks: true,
  testTimeout: 2100,
  transform: { '\\.[jp]sx?$': 'babel-jest' },
  moduleFileExtensions: ['js', 'jsx', 'ps'],
  testMatch: [
    '**/__tests__/**/*.js?(x)',
    '**/?(*.)+(spec|test).[jt]s?(x)',
    '**/?(*.)+(spec|test).[pj]s?(x)',
  ],
  collectCoverageFrom: [
    '__tests__',
    'components/__tests__',
    'src',
    'e2e',
    '*.(js|jsx)',
  ],
  coverageReporters: ['lcov'],
  coverageDirectory: 'coverage',
};
