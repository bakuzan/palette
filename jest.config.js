/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  coveragePathIgnorePatterns: ['/node_modules/', '/bin/'],
  testPathIgnorePatterns: ['/node_modules/', '/bin/'],
  transformIgnorePatterns: ['/node_modules/', '/bin/']
};
