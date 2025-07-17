// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Slugmoon Developer Docs',
  tagline: 'Welcome to the Slugmoon Developer Docs!',
  favicon: '/img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://dev.slugmoon.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'mrslugmoon', // Usually your GitHub org/user name.
  projectName: 'slugmoon-dev-docs', // Usually your repo name.

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
            remarkPlugins: [
              require('./plugins/remark-icon-plugin') // NO COMMA HERE IF THE NEXT LINE IS COMMENTED OUT!
              // This is where remark-admonitions is correctly added as a plugin
              // If you want to disable it, uncomment the entire block:
              /*
              , // If you uncomment this block, make sure to add this comma back
              [ // This is an array for a plugin that takes options
                require('remark-admonitions'),
                {
                  customTypes: {
                    slugmoon: {
                      emoji: '🌕',
                      // You can optionally add a default title here if you don't want to always type it in markdown:
                      // title: 'Slugmoon',
                    },
                  },
                },
              ],
              */
            ],
          routeBasePath: '/', // Set the base path for the docs
          editUrl:
            'https://github.com/mrslugmoon/slugmoon-dev-docs/tree/main/',
        },
        blog: false, // Disable the blog feature for now
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ], // END of presets array


  // This is the correct top-level markdown configuration.
  // Only include general markdown options here (like mermaid).
  // Admonition configuration (for custom types) goes in docs.remarkPlugins.
  markdown: {
    mermaid: true, // Keep this if you use Mermaid diagrams
  },


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Slugmoon Developer Docs',
        logo: {
          alt: 'Logo',
          src: '/img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Docs',
          },
          {to: '/suggestions', label: 'Suggestions', position: 'left'},
          {to: '/slugmoondirectory', label: 'Slugmoon Directory', position: 'left'},
          {
            href: 'https://github.com/mrslugmoon/slugmoon-dev-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      algolia: {
      // The application ID provided by Algolia
      appId: 'JS2ZZOVYSK',
      // Public API key: it is safe to commit it
      apiKey: '5067c0ca60c0904fbc4305d6a9c425e0',
      indexName: 'Docs',
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
      // externalUrlRegex: 'external\\.com|domain\\.com',
      // Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
      replaceSearchResultPathname: {
        from: '/docs/', // or as RegExp: /\/docs\//
        to: '/',
      },
      // Optional: Algolia search parameters
      searchParameters: {},
      // Optional: path for search page that enabled by default (`false` to disable it)
      searchPagePath: 'search',
      // Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
      insights: false,
      //... other Algolia params
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Suite Links',
            items: [
              {
                label: 'CDN',
                to: 'https://slugmoon.lol',
              },
                {
                label: 'Mail',
                to: 'https://mail.slugmoon.com',
              },
              {
                label: 'Forum',
                to: 'https://forum.slugmoon.com',
              },
              {
                label: 'Warp',
                to: 'https://warp.slugmoon.lol',
              }
            ],
          }
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Slugmoon.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // THIS IS THE THEME CONFIGURATION FOR ADMONITIONS TO MAP CUSTOM TYPES TO COMPONENTS
      admonitions: {
        keywords: ['slugmoon'],
        extendDefaults: true, // This allows you to extend the default types
        customTypes: {
          slugmoon: {
            component: 'Admonition/Type/Slugmoon', // Path relative to src/theme
          },
        },
      },
    }),
};

export default config;