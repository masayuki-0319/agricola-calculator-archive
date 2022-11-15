module.exports = {
  roots: ['<rootDir>/src/hooks/agricola-score-calculator'],
  testMatch: [
    '**/__tests__/**/*.+(ts|tsx|js)',
    '**/?(*.)+(spec|test).+(ts|tsx|js)',
  ],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/src/hooks/agricola-score-calculator/__tests__/util/',
  ],
};
