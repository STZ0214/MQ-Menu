import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import { useRouter } from 'next/router';
import { useTranslations } from 'next-intl';

const config: DocsThemeConfig = {
  logo: (
    <span style={{ fontWeight: 600, fontSize: '1.2rem' }}>
      🎱 MASTER Q
    </span>
  ),
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath === '/') {
      return {
        title: 'Master Q Menu'
      };
    }
    return {
      titleTemplate: '%s – Master Q Menu'
    };
  },
  i18n: [
    { locale: 'en', text: 'English' },
    { locale: 'zh-CN', text: '简体中文' },
    { locale: 'zh-TW', text: '繁體中文' }
  ],
  sidebar: {
    titleComponent({ title, type }) {
      if (type != 'page') {
        const { locale } = useRouter();
        const titles = {
          Homepage: {
            en: 'Homepage',
            'zh-CN': '首页',
            'zh-TW': '首頁'
          },
          'Billiard Rates': {
            en: 'Billiard Rates',
            'zh-CN': '台球价格',
            'zh-TW': '桌球價格'
          },
          'Food Menu': {
            en: 'Food Menu',
            'zh-CN': '食品菜单',
            'zh-TW': '食品菜單'
          },
          'Drinks Menu': {
            en: 'Drinks Menu',
            'zh-CN': '饮品菜单',
            'zh-TW': '飲品菜單'
          },
          'About Us': {
            en: 'About Us',
            'zh-CN': '关于我们',
            'zh-TW': '關於我們'
          },
          'Facebook ↗': {
            en: 'Facebook ↗',
            'zh-CN': 'Facebook ↗',
            'zh-TW': 'Facebook ↗'
          }
        };
        return titles[title]?.[locale] || titles[title]?.en || title;
      }
      return title;
    }
  },
  search: {
    placeholder: "Looking for...", // Custom placeholder
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
  primaryHue: 500, // Reddish tint
  banner: {
    key: 'beer-specials',
    text: (
      <div className="banner-scroll px-2">
        🎉 Weekday Beer Bottle Special: $5 for all domestic beers and $6 for all imported beers!
      </div>
    )
  }
}

export default config
