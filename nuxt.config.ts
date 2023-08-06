// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxthq/ui", "nuxt-icon"],
  // colorMode: {
  //   classSuffix: ''
  // },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    configPath: "tailwind.config",
    exposeConfig: false,
    exposeLevel: 2,
    config: {},
    injectPosition: "first",
    viewer: true,
  },
  // googleFonts: {
  //   display: "swap",
  //   families: {
  //     'Raleway': true,
  //     'Architects Daughter': true,
  //   }
  // },
  css: ["@/assets/css/tailwind.css"],
  app: {
    head: {
      title: "DARQBA",
      titleTemplate: "%s",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }],
    },
  },
});