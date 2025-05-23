// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'LegitimooseAPI Documentation',
  tagline: 'Dinosaurs are cool',
  favicon: 'img/legitimoose-api-mark.png',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'LegitiDevs', // Usually your GitHub org/user name.
  projectName: 'documentation', // Usually your repo name.

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
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/LegitiDevs/documentation',
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
      navbar: {
        title: '  Documentation',
        logo: {
          alt: 'My Site Logo',
          src: 'img/legitimoose-api-logo.png',
        },
        items: [
          {
            href: 'https://github.com/LegitiDevs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Socials',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/FQUmnbgV5S',
              },
              {
                label: 'Bluesky',
                href: 'https://bsky.app/profile/legitimoose.net',
              },
              {
                label: 'Github',
                href: 'https://github.com/LegitiDevs',
              },
            ],
          },
          {
            title: 'Legitimoose MC Server',
            items: [
              {
                label: 'store.legitimoose.com',
                href: 'https://store.legitimoose.com',
              },
              {
                label: 'Legitimoose YT Channel',
                href: 'https://youtube.com/legitimoose',
              }
            ],
          },
          {
            title: 'Sponsors',
            items: [
              {
                label: 'SkyeNetwork Discord',
                href: 'https://discord.gg/xjS7VKmamB',
              },
            ],
          },
        ]
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
