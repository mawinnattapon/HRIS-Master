// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "@nuxt/ui"],
  runtimeConfig: {
    apiBase: 'BASE_API', // can be overridden by NUXT_API_SECRET environment variable
    public: {
      apiBase: 'NUXT_PUBLIC_API_BASE', // can be overridden by NUXT_PUBLIC_API_BASE environment variable
    }
  },
  app: {
    title: `HRIS Register`,
    description: `HRIS Register`,
    head: {
      titleTemplate: `HRIS Register`,

      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap",
        },
        {
          rel: "stylesheet",
          href: "/plugins/custom/datatables/datatables.bundle.css",
        },{
          rel: "stylesheet",
          href: "/plugins/global/plugins.bundle.css",
        },{
          rel: "stylesheet",
          href: "/css/style.bundle.css",
        },
      ],
      script: [
        { src: "/plugins/global/plugins.bundle.js" },
        { src: "/js/scripts.bundle.js" },
        { src: "https://cdn.jsdelivr.net/npm/sweetalert2@11" },

        { src: "https://cdn.amcharts.com/lib/4/core.js" },
        { src: "https://cdn.amcharts.com/lib/4/charts.js" },
        { src: "https://cdn.amcharts.com/lib/4/themes/animated.js" },
        { src: "https://cdn.jsdelivr.net/npm/sweetalert2@11" },
      ],
    },
  }
})