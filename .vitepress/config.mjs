import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Shinobi Code",
  description: "Code like a shinobi from your fav. anime Naruto",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  ignoreDeadLinks: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: { light: '/shinobi-dark.png', dark: '/shinobi-light.png', alt: 'Shinobi Code Logo'},
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/docs/intro' }
    ],

    sidebar: [
        {
          text: 'Get Started',
          items: [
            { text: 'Introduction', link: '/docs/intro' },
            { text: 'Getting Started', link: '/docs/getting-started' },
            { text: 'Hand Sign', link: '/docs/handsign' },
            { text: 'Jutsu', link: '/docs/jutsu' },
            { text: 'Speech', link: '/docs/speech' },
          ],
        },
        {
          text: 'Further Reading',
          items: [
            { text: 'Disclaimer', link: '/docs/disclaimer' },
            { text: 'Detection Model', link: '/docs/model' },
            { text: 'Known Issues', link: '/docs/issues' },
          ]
        }
      ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/shinobi-c0de/' }
    ],

    footer: {
      message: 'Built with ❤️ in this chaotic world. Built with <a href="https://vitepress.dev/" target="_blank">VitePress</a>',
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://github.com/shinobi-c0de" target="_blank">Shinobi Code</a>`
    }
  }
})
