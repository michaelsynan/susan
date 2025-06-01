// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",

  modules: ["@nuxt/image", "@nuxt/ui", "@nuxt/fonts"],
  devtools: { enabled: true },
  colorMode: {
    preference: "light",
  },

  future: {
    compatibilityVersion: 4,
  },
  css: ["~/assets/css/main.css"],
});
