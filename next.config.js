const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  // Enable Nextra's auto image import, not comptible with `next export`...
  // unstable_staticImage: true
})
module.exports = withNextra()
