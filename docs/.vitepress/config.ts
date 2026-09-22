import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Legitimoose API Docs",
  titleTemplate: ':title - Legitimoose API',
  head: [
    ['link', { rel: 'icon', href: '/assets/legitidevs_logo.webp' }]
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'LegitiDevs', link: 'https://legiti.dev' }
    ],

    logo: '/assets/legitidevs_logo.webp',

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
      { icon: 'github', link: 'https://github.com/LegitiDevs' }
    ],

    footer: {
      message: "This is not an official legitimoose.com project and is made by the community." +
               "<br>" +
               'LegitiDevs is supported by <a href="https://store.skyemc.net/">SkyeNetwork</a><br>' +
               '<a href="https://legiti.dev">LegitiDevs Site</a> | ' +
               '<a href="https://discord.com/invite/gnk7ZtBSjZ">LegitiDevs Discord</a> | ' +
               '<a href="https://store.legitimoose.com/">store.legitimoose.com</a>'
    }
  }
})
