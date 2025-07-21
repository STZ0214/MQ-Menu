const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

module.exports = withNextra({
  i18n: {
    locales: ['en', 'zh-CN', 'zh-TW'],
    defaultLocale: 'en',
    localeDetection: true // Automatically detect user's browser language
  }
});