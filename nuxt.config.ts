// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    modules: ['@nuxtjs/supabase', '@nuxtjs/tailwindcss'],
    css: ['~/assets/styles/main.scss'],
    build: {
        postcss: {
            postcssOptions: require('./postcss.config.js'),
        },
    },
    tailwindcss: {
        cssPath: '~/assets/styles/main.scss',
        configPath: 'tailwind.config.js',
        exposeConfig: false,
        config: {},
        injectPosition: 0,
        viewer: true,
    },
})
