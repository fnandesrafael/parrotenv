const nextJest = require('next/jest.js')

const createJestConfig = nextJest({
  dir: './',
})

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom',
  preset: 'ts-jest',
  collectCoverageFrom: ['src/**/*.tsx'],
}

module.exports =  createJestConfig(config)
