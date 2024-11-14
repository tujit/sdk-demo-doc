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
  themes: ['@docusaurus/theme-live-codeblock', 'docusaurus-theme-openapi-docs'],
  // themes: ['@docusaurus/theme-live-codeblock'],


  // Set the production url of your site here
  url: 'https://tujit.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/sdk-demo-doc/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'tujit', // Usually your GitHub org/user name.
  projectName: 'sdk-demo-doc', // Usually your repo name.
  // deploymentBranch: 'master',
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',


  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
    // locales: ['en', 'de'],
    // localeConfigs: {
    //   en: {
    //     htmlLang: 'en-US',
    //   },
    // },
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
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
            type: "doc",
            label: "API",
            position: "left",
            docId: 'api/user-migration',
          },
          {
            type: "doc",
            label: "Integration Documentation",
            position: "left",
            docId: 'integration-doc/intro',
          },
          // {
          //   type: 'localeDropdown',
          //   position: 'right',
          // },
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
  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          // petstore_versioned: {
          //   specPath: "examples/user-migration.yaml",
          //   outputDir: "docs/api", // No trailing slash
          //   sidebarOptions: {
          //     groupPathsBy: "tag",
          //     categoryLinkSource: "tag",
          //   },
          //   version: "2.0.0", // Current version
          //   label: "v2.0.0", // Current version label
          //   baseUrl: "/petstore_versioned/swagger-petstore-yaml", // Leading slash is important
          //   downloadUrl:
          //     "https://raw.githubusercontent.com/PaloAltoNetworks/docusaurus-openapi-docs/main/demo/examples/petstore.yaml",
          //   versions: {
          //     "1.0.0": {
          //       specPath: "examples/petstore-1.0.0.yaml",
          //       outputDir: "docs/petstore_versioned/1.0.0", // No trailing slash
          //       label: "v1.0.0",
          //       baseUrl: "/petstore_versioned/1.0.0/swagger-petstore-yaml", // Leading slash is important
          //       downloadUrl:
          //         "https://redocly.com/_spec/docs/openapi/petstore.json",
          //     },
          //   },
          // },
          apis: {
            specPath: "examples/user-migration.yaml",
            // proxy: "https://cors.pan.dev",
            outputDir: "docs/api",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
            // template: "api.mustache", // Customize API MDX with mustache template
            downloadUrl: "/user-migration.yaml",
            hideSendButton: false,
            showSchemas: true,
          },
        },
      },
    ],
  ],
};

export default config;
