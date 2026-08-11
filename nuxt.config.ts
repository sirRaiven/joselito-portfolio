export default defineNuxtConfig({
  compatibilityDate: "2026-06-30",

  devtools: {
    enabled: process.env.NODE_ENV !== "production",
  },

  modules: ["@nuxt/ui"],

  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true },
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Joselito D. Faylogna | Graphic Designer & IT Instructor",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Creative portfolio of Joselito D. Faylogna, a Graphic Designer and IT Instructor working across visual design, digital products, and technology education.",
        },
        { name: "theme-color", content: "#7D39EB" },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg?v=1" },
      ],
    },
  },
});
