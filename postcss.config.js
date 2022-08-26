/* eslint-disable unicorn/prefer-module */
module.exports = {
  plugins: {
    autoprefixer: {},
    ...process.env.NODE_ENV === 'production' ? { cssnano: {} } : {},
  },
}
