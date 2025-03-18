module.exports={
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  coverageDirectory: 'coverage',
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.jsx'],

}
if (
  typeof globalThis.TextEncoder === "undefined" ||
  typeof globalThis.TextDecoder === "undefined"
) {
  const utils = require("util");
  globalThis.TextEncoder = utils.TextEncoder;
  globalThis.TextDecoder = utils.TextDecoder;
  globalThis.Uint8Array = Uint8Array;
}
