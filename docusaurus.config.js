// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cidaas SDKs',
  tagline: 'Documentation for Cidaas SDKs',
  favicon: 'img/favicon.ico',
  themes: ['@docusaurus/theme-live-codeblock'],

  // Set the production url of your site here
  url: 'https://tujit.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/sdk-demo-doc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tujit', // Usually your GitHub org/user name.
  projectName: 'sdk-demo-doc', // Usually your repo name.

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
        },
        blog: false,
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
      navbar: {
        // title: 'Cidaas PHP SDK',
        style: 'dark',
        logo: {
          alt: 'Cidaas Logo',
          src: 'img/cidaas-logo.svg',
        },
        items: [
          // {
          //   type: 'docSidebar',
          //   sidebarId: 'tutorialSidebar',
          //   position: 'left',
          //   label: 'Documentation',
          // },
          {
            type: 'doc',
            docId: 'sdk-doc/intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'dropdown',
            label: 'OAuth Flows',
            position: 'left',
            items: [
              {
                type: 'doc',
                label: 'Overview',
                docId: 'sdk-doc/oauth-flows/overview',
              },
              {
                type: 'doc',
                label: 'Authorization Code',
                docId: 'sdk-doc/oauth-flows/authorization-code',
              },
              {
                type: 'doc',
                label: 'PKCE',
                docId: 'sdk-doc/oauth-flows/pkce',
              },
              {
                type: 'doc',
                label: 'Implicit',
                docId: 'sdk-doc/oauth-flows/implicit',
              },
              {
                type: 'doc',
                label: 'Device Code',
                docId: 'sdk-doc/oauth-flows/device-code',
              },
            ],
          },
          {
            type: 'doc',
            docId: 'json-web-token/intro',
            position: 'left',
            label: 'JSON Web Token',
          },
          {
            href: 'https://github.com/Cidaas/cidaas-sdk-php',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      // footer: {
      //   style: 'dark',
      //   links: [
      //     {
      //       title: 'Docs',
      //       items: [
      //         {
      //           label: 'Tutorial',
      //           to: '/docs/intro',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'Community',
      //       items: [
      //         {
      //           label: 'Stack Overflow',
      //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
      //         },
      //         {
      //           label: 'Discord',
      //           href: 'https://discordapp.com/invite/docusaurus',
      //         },
      //         {
      //           label: 'X',
      //           href: 'https://x.com/docusaurus',
      //         },
      //       ],
      //     },
      //     {
      //       title: 'More',
      //       items: [
      //         {
      //           label: 'Blog',
      //           to: '/blog',
      //         },
      //         {
      //           label: 'GitHub',
      //           href: 'https://github.com/facebook/docusaurus',
      //         },
      //       ],
      //     },
      //   ],
      //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
      // },
      prism: {
        // theme: prismThemes.github,
        theme: prismThemes.vsDark,
        darkTheme: prismThemes.dracula,
        additionalLanguages: ['php'],
      },
    }),
};

export default config;
