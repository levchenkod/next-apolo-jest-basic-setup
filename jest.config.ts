import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./",
});

// Add any custom config to be passed to Jest
const customJestConfig = {
  testEnvironment: "jsdom",
  preset: 'ts-jest',
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    '^.+\\.(ts|tsx)?$': 'ts-jest',
    '^.+\\.(js|jsx)$': 'babel-jest',
  }
};

module.exports = createJestConfig(customJestConfig);
