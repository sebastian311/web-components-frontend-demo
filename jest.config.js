module.exports = {
    preset: 'ts-jest/presets/default-esm',
    testEnvironment: 'jest-environment-jsdom',
    transform: {
      '^.+\\.ts$': [
        'ts-jest',
        {
          useESM: true,
        },
      ],
    },
    extensionsToTreatAsEsm: ['.ts'],
    moduleNameMapper: {
      '^lit$': '<rootDir>/node_modules/lit/index.js',
    },
    resolver: undefined,
  };
  