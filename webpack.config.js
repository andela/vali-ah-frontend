// eslint-disable-next-line import/no-extraneous-dependencies
const path = require('path');
const Htmlwebpackplugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, '../public'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  mode: 'development',
  devServer: {
    overlay: true,
    stats: 'minimal',
    historyApiFallback: true,
    open: true,
    port: 6001
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components/')
    },
    extensions: ['.js', '.jsx']
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        loader: 'file-loader',
      }
    ]
  },
  plugins: [
    new Htmlwebpackplugin({
      template: './src/index.html'
    }),
  ],
};
