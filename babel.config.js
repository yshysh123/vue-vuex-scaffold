module.exports = {
  presets: ['@vue/app'],
  plugins: [
    [
      'component',
      {
        libraryName: 'element-ui',
        styleLibraryName: 'theme-chalk',
        // styleLibraryName: '~theme',
      },
    ],
    '@babel/plugin-proposal-optional-chaining',
  ],
}
