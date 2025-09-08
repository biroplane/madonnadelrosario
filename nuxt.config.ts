import tailwindcss from "@tailwindcss/vite"
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: [
    '@/assets/css/app.css'
  ],
  content: {
    build: {
      markdown: {
        toc: {
          depth: 1
        }
      }
    }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/ui'
  ],
  vite: {
    plugins: [
      tailwindcss()
    ]
  }
})