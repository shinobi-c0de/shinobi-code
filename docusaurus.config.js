// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const organizationName = 'shinobi-c0de'; // Usually your GitHub org/user name.
const projectName = 'shinobi-code'; // Usually your repo name.

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shinobi Code',
  tagline: 'Code like a shinobi from your fav. anime Naruto',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://shinobi-code.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, 
  projectName,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${organizationName}/${projectName}/tree/main/`,
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            `https://github.com/${organizationName}/${projectName}/tree/main/`,
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      
      colorMode: {
        defaultMode: 'dark',  // Sets dark mode as the default
        disableSwitch: false, // Allows users to switch between dark and light modes
        respectPrefersColorScheme: false, // Ignores the user's OS setting
      },

      navbar: {
        title: 'Shinobi Code',
        logo: {
          alt: 'My Site Logo',
          src: 'img/shinobi-dark.png',
          srcDark: 'img/shinobi-light.png'
        },
        items: [
          /*{
            type: 'docSidebar',
            sidebarId: 'docSidebar',
            label: 'Get Started',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'faqSidebar',
            label: 'FAQ',
            position: 'left',
          },
          {to: '/blog', label: 'Blog', position: 'left'},*/
          {
            to: `https://github.com/${organizationName}/${projectName}`,
            position: 'right',
            label: 'GitHub',
            className: "navbar--github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: 'dark',
        /*links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Getting Started',
                to: '/docs/getting-started',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/shinobi-c0de',
              },
            ],
          },
        ],*/
        copyright: `Copyright © ${new Date().getFullYear()} Shinobi-Code. Built with ❤️ in this chaotic world.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
