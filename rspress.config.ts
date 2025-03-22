import path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  globalStyles: path.join(__dirname, 'styles/index.css'),
  title: 'Shinobi Code',
  icon: '/shinobi-dark-logo.png',
  logo: {
    light: '/shinobi-light-logo.png',
    dark: '/shinobi-dark-logo.png',
  },
  logoText: 'Shinobi Code',
  route: {
    exclude: ['custom.tsx', 'component/**/*'],
  },
  builderConfig: {
    resolve: {
      alias: {
        '@src': path.join(__dirname, 'src'),
      }
    }
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/shinobi-c0de', },
      { icon: 'discord', mode: 'link', content: 'https://discord.gg/5ttwEvRrYt', },
    ],
    footer: {
      message: `Built with ❤️ in this chaotic world.<br>Copyright © ${new Date().getFullYear()} <a href="https://github.com/shinobi-c0de" target="_blank"><strong>Shinobi Code</strong></a>`,
    },
  },
  
});
