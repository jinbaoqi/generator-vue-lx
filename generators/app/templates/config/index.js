// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')
var moduleName = process.argv[2];
module.exports = {
  moduleName: moduleName,
  webbuild: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/web/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist/web'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    definePlugin:{
        'process.env':require('./prod.env'),
        'moduleName':JSON.stringify('webbuild'),
        'i18nUrl':JSON.stringify('https://github.com/resource/i18n')
    }
  },
  webdev: {
    env: require('./dev.env'),
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
    definePlugin:{
        'process.env':require('./dev.env'),
        'moduleName':JSON.stringify('webdev'),
        'API_ROOT':JSON.stringify('https://github.com/search'),
        'i18nUrl':JSON.stringify('/resource/i18n')
    }
  },
  wxdev: {
    env: require('./dev.env'),
    port: 8080,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {},
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false,
    definePlugin:{
        'process.env':require('./dev.env'),
        moduleName:JSON.stringify('wxdev')
    }
  },
  wxbuild: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/wx/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist/wx'),
    assetsSubDirectory: 'static/wx',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    definePlugin:{
        'process.env':require('./prod.env'),
        moduleName:JSON.stringify('wxbuild')
    }
  }
}
