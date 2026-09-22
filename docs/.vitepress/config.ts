import { defineConfig } from 'vitepress'
import { minifyHtml, useSidebar } from 'vitepress-openapi'
import spec from '../src/openapi.json' with { type: "json" }
import mcfunctionTmLanguage from '../src/mcfunction.tmLanguage.json' with { type: "json" }

const sidebar = useSidebar({ spec })

export default defineConfig({
  title: "Legitimoose API Docs",
  titleTemplate: ':title - Legitimoose API',
  head: [
    ['link', { rel: 'icon', href: '/assets/legitidevs_logo.webp' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'LegitiDevs', link: 'https://legiti.dev' }
    ],

    logo: '/assets/legitidevs_logo.webp',

    sidebar: sidebar.generateSidebarGroups({
      linkPrefix: "/operations/",
      sidebarItemTemplate: ({
        method,
        path,
        title
      }) => {
        // @ts-ignore
        const operation = spec.paths[path]?.[method];
        const displayText = title || (operation ? operation.summary : path);
        return minifyHtml(`
            <span class="OASidebarItem group/oaOperationLink" style="display: grid; grid-template-columns: 1fr auto;">
              <span class="text" style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${displayText}</span>
              <span class="OASidebarItem-badge OAMethodBadge--${method.toLowerCase()}">${method.toUpperCase()}</span>
            </span>
          `);
      }
    }),

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
    },
  },

  markdown: {
    languages: [
      // @ts-ignore
      {
        ...mcfunctionTmLanguage,
        name: 'mcfunction',
        aliases: ['bolt']
      }
    ]
  },
  cleanUrls: true,

  transformPageData(pageData) {
      if (pageData.params?.pageTitle) {
          pageData.title = pageData.params.pageTitle
      }
      if (pageData.params?.description) {
          pageData.description = pageData.params.description
      }
  }
})
