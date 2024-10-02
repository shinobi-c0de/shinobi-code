import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Shinobi Code",
  description: "Code like a shinobi from your fav. anime Naruto",
  head: [
    ['link', { rel: 'icon', href: '/shinobi-light.png' }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    home: 'coming-soon',
    logo: { light: '/shinobi-dark.png', dark: '/shinobi-light.png', alt: 'Shinobi Code Logo'},
    nav: [
      { text: 'Home', link: '/' },
      //{ text: 'Get Started', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shinobi-c0de/' }
    ],

    footer: {
      message: 'Built with ❤️ in this chaotic world. Built using <a href="https://vitepress.dev/" target="_blank">VitePress</a>',
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/shinobi-c0de" target="_blank">Shinobi Code</a>`
    }
  }
})
