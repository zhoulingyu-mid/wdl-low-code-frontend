/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  preset: 'ts-jest',
  testEnvironment: "jsdom",
  moduleNameMapper: {
    '^src/(.*)$': '<rootDir>/src/$1'
  }
};