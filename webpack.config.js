const nodeExternals = require('webpack-node-externals')
const VueLoadPlugin = require('vue-loader/lib/plugin')
module.exports = env => {
  return {
    // publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    assetsDir: 'assets/',
    entry: 'main.js',
    output: {
      path: './dist',
      filename: 'build.js'
    },
    mode: 'development',
    target: 'node', // in order too ignore built-in modules like path, fs, etc.
    externals: [nodeExternals()], // in order to ignore all modules in node_modules folder
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.jsx$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        }
      ]
    },
    plugins: [
      new VueLoadPlugin()
    ],
    chainWebpack: config => {
      config.module
        .rule('fonts')
        .test(/\.(ttf|otf|eot|woff|woff2)$/)
        .use('url-loader')
        .loader('url-loader')
        .tap(options => {
          options = {
            // limit: 10000,
            name: '/assets/fonts/[name].[ext]'
          }
          return options
        }).end()

      const svgRule = config.module.rule('svg')
      svgRule.uses.clear()
      svgRule
        .use('vue-svg-loader')
        .loader('vue-svg-loader')
    }
  }
}
