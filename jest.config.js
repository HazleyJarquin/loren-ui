module.exports = {
  preset: "jest-expo",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testPathIgnorePatterns: ["/node_modules/", "/android/", "/ios/"],
  setupFilesAfterEnv: ["@testing-library/jest-native/extend-expect"],

  coverageDirectory: "./coverage/",
  collectCoverage: true,
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
      statements: 90,
    },
  },
  collectCoverageFrom: [
    "src/components/**/*.{ts,tsx}",
    "src/utils/**/*.{ts,tsx}",
    "!**/node_modules/**",
    "!**/coverage/**",
    "!**/*.stories.tsx",
    "!**/index.d.ts",
  ],

  moduleNameMapper: {
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^utils/(.*)$": "<rootDir>/src/utils/$1",
  },
};
