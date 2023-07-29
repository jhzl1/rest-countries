const nextJest = require("next/jest")
const createJestConfig = nextJest({
  dir: "./",
})
const customJestConfig = {
  moduleDirectories: ["node_modules", "<rootDir>/"],
  testPathIgnorePatterns: ["/__tests__/__mocks__/"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
}
module.exports = createJestConfig(customJestConfig)
