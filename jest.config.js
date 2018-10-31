module.exports = {
  clearMocks: true,
  restoreMocks: true,
  collectCoverageFrom: [
    'src/components/**/*.{js,vue}',
    'src/views/**/*.{js,vue}',
    'src/store/**/*.{js,vue}',
    'src/tool/**/*.{js,vue}',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!(babel-jest|jest-vue-preprocessor)/)',
  ],
  // '<rootDir>/node_modules/(?!(babel-jest|jest-vue-preprocessor)/)',
  setupFiles: ['<rootDir>/jest/setup.js'],
  testURL: 'http://localhost/',
  testMatch: ['<rootDir>/__tests__/**/?(*.)(spec|test).{js,jsx,mjs}'],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$':
      'jest-transform-stub',
    '^.+\\.(js|jsx|mjs)?$': '<rootDir>/node_modules/babel-jest',
  },
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^components/(.+)$': '<rootDir>/src/components/$1',
    '^views/(.+)$': '<rootDir>/src/views/$1',
    '^tool/(.+)$': '<rootDir>/src/tool/$1',
    '^store/(.+)$': '<rootDir>/src/store/$1',
    '^src/(.+)$': '<rootDir>/src/$1',
    '^fixture/(.+)$': '<rootDir>/__tests__/fixture/$1',
  },
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
  snapshotSerializers: ['jest-serializer-vue'],
}
