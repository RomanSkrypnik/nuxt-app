// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/supabase'],
    css: ['~/assets/styles/main.scss'],
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    }
})
