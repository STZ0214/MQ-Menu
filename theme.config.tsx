import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 600, fontSize: '1.2rem' }}>
      🎱 Master Q Snooker, Billiards & Lounge
    </span>
  ),
  project: {
    link: 'https://github.com/shuding/nextra-docs-template',
  },
  chat: {
    link: 'https://discord.com',
  },
  docsRepositoryBase: 'https://github.com/shuding/nextra-docs-template',
  footer: {
    text: (
      <div className="footer-content">
        <div>© {new Date().getFullYear()} Master Q Billiards</div>
        <div>20 Apple Creek Blvd #4, Markham, ON L3R 5Z1</div>
        <div>Tel: (905) 307-8828</div>
        <div>
          <a href="https://www.facebook.com/pages/Master%20Q%20Billiards%20&%20Lounge/151066128275191/" target="_blank" rel="noopener">Facebook</a> • 
          <a href="https://www.instagram.com/masterq.billiards/?hl=en" target="_blank" rel="noopener">Instagram</a>
        </div>
      </div>
    ),
  },
  primaryHue: 350, // Reddish tint
  banner: {
    key: 'beer-specials',
    text: (
      <div className="truncate whitespace-nowrap px-2">
        <span className="hidden md:inline">
          🎉 Weekday Beer Special: $5 Domestic / $6 Imported
        </span>
        <span className="md:hidden">
          🎉 $5 Dom. • $6 Imp. Beers.
        </span>
      </div>
    ),
  }
}

export default config
