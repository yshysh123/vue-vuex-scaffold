module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['last 2 versions', '> 0%', 'Firefox > 20', 'IE 10'],
      cascade: false,
    }),
  ],
}
