let Htmlwebpackplugin = require('html-webpack-plugin');
let UglifyJsPlugin = require('uglifyjs-webpack-plugin');
let OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

Htmlwebpackplugin = new Htmlwebpackplugin({
  template: './src/index.html'
});

UglifyJsPlugin = new UglifyJsPlugin({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  cache: true,
  parallel: true,
});

OptimizeCSSAssetsPlugin = new OptimizeCSSAssetsPlugin({});

module.exports = { Htmlwebpackplugin, UglifyJsPlugin, OptimizeCSSAssetsPlugin };
