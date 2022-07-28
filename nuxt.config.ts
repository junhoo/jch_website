import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {},
  },
  modules: ['nuxt-windicss'],
  css: ['@/assets/styles/global.css', '@/assets/styles/css-icons.css'],
})
