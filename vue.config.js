const path = require('path');
const PrerenderSpaPlugin = require('prerender-spa-plugin');

// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import "@/assets/styles/partials/_variables.scss";
          @import "@/assets/styles/modules/_functions.scss";
          @import "@/assets/styles/modules/_mixins.scss";
        `,
      },
    },
  },
  configureWebpack: {
    plugins: [
      new PrerenderSpaPlugin({
        staticDir: path.join(__dirname, 'dist'),
        routes: ['/'],
      }),
    ],
  },

  chainWebpack: config => {
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('svg-inline-loader')
      .loader('svg-inline-loader')
      .end();
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
    },
  },
};
