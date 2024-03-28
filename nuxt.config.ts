// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: true,
  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],
  imports: {
    dirs: ["stores", "composables", "types"],
  },
  runtimeConfig: {
    public: {
      apiUrl: "https://restcountries.com/v3.1",
    },
  },
});
