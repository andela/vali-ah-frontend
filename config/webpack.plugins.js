/* eslint-disable import/no-extraneous-dependencies */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: './src/index.html',
  title: '1kbIdeas',
});

const terserPlugin = new TerserPlugin({
  cache: true,
  parallel: true,
  sourceMap: true
});

const optimizeCSSAssetsPlugin = new OptimizeCSSAssetsPlugin({});

const cleanWebpackPlugin = new CleanWebpackPlugin();

module.exports = {
  htmlWebpackPlugin, terserPlugin, optimizeCSSAssetsPlugin, cleanWebpackPlugin
};