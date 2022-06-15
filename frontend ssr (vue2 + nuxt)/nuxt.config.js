export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Front',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/static/css/main.css',
  ],

  publicRuntimeConfig: {
    axios: {
      baseURL: 'http://127.0.0.1:8000/api' // апишка в ларку
    },
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxt/postcss8',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/toast',
  ],

  toast: {
    position: 'bottom-center',
    duration : 5000,
    register: [ // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error'
        }
      }
    ]
},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins:{
        'postcss-import': {},
        'tailwindcss/nesting': 'postcss-nested',
        tailwindcss: {},
        autoprefixer: {},
      },
    }
  },
}
