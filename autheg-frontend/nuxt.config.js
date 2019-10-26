module.exports = {
  /*
   ** Headers of the page
   */
  head: {
    title: "autheg-frontend",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "Nuxt.js project" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress bar color
   */
  loading: { color: "#3B8070" },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: "pre",
          test: /\.(js|vue)$/,
          loader: "eslint-loader",
          exclude: /(node_modules)/
        });
      }
    }
  },
  modules: ["@nuxtjs/vuetify", "@nuxtjs/axios", "@nuxtjs/auth"],
  axios: {
    // baseURL: "http://10.4.1.228:8080/api"
    // baseURL: "http://10.4.1.228:3001/api"
    baseURL: "http://10.4.1.228:3001"
  },
  auth: {
    endpoints: {
      login: {
        url: "/users/sign_in.json",
        propertyName: "token"
      },
      logout: false,
      user: { url: "/users/current.json" }
    }
  }

  /*
notes.. 
      logout: { url: "/users/sign_out.json", method: "delete" },
      user: { url: "/users/current.json" }

*/
};
