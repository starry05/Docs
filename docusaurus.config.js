// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '珞石',
  tagline: '珞石在线文档',
  //tagline: 'Dinosaurs are cool',
  favicon: 'img/logo/珞石_logo_红底.jpg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: false, // Improve compatibility with the upcoming Docusaurus v4
  },

  url: 'https://starry05.github.io',
  baseUrl:'/Docs/',
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'starry05', // Usually your GitHub org/user name.
  projectName: 'Docs', // Usually your repo name.


  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  scripts: [
     {src: '/js/mathjax.js', async: true},
  ],

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans','en'],
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
          //editUrl:
          //  'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          
          lastVersion: 'current',
          editLocalizedFiles: true,
          //showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          remarkPlugins: [require('remark-math')],
          rehypePlugins: [require('rehype-katex')],
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
      image: 'img/logo/珞石_logo_红底.jpg',
      //backToTopButton: false,
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true,

        },
      },
      navbar: {
        title: '珞石',
        logo: {
          alt: 'Rokae DOC',
          src: 'img/logo/珞石_logo_红底.jpg',
        },

        items: [
          {
            type: 'docSidebar', 
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '文档',
          },
          { type: 'localeDropdown', position: 'right' },
          { type: 'docsVersionDropdown', position: 'right' },

        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} ROKAE`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),   

};

export default config;
