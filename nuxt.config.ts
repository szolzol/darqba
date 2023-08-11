// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // ssr: false,
  // nitro: {
  //   preset: "service-worker",
  // },
  devtools: { enabled: true },
  modules: ["@nuxthq/ui", "nuxt-icon"],
  // colorMode: {
  //   classSuffix: ''
  // },
  // vuefire: {
  //   config: {
  //     apiKey: "AIzaSyAuBLiMU_gBTIReCTFnYkpOyA0EfjOqOgI",
  //     authDomain: "darqba-b5273.firebaseapp.com",
  //     projectId: "darqba-b5273",
  //     storageBucket: "darqba-b5273.appspot.com",
  //     messagingSenderId: "170640110079",
  //     appId: "1:170640110079:web:827118ac4c8738d19bb7ca",
  //     measurementId: "G-VTNK6KQ23K",
  //   },
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
    // baseURL: '/darqba-vue/', // baseURL: '/<repository>/'
    head: {
      title: "DARQBA",
      titleTemplate: "%s",
      link: [{ rel: "icon", type: "image/png", href: "/favicon.png" }]
    },
  },
});
