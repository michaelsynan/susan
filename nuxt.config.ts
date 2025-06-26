// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",

  modules: [
    "@nuxt/image",
    "@nuxt/ui",
    "@nuxt/fonts",
    "nuxt-resend",
    "@nuxtjs/seo",
  ],
  devtools: { enabled: true },
  colorMode: {
    preference: "light",
  },

  future: {
    compatibilityVersion: 4,
  },
  site: {
    url: "https://shanshanpeercoaching.com",
    name: "Shan Shan Peer Coaching",
  },
  css: ["~/assets/css/main.css"],
  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },
  runtimeConfig: {
    resendApiKey: process.env.RESEND_API_KEY,
  },
});
