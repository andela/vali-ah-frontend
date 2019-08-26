const path = require('path');
const { Htmlwebpackplugin } = require('./webpack.plugins.js');

module.exports = {
  entry: './src/index.jsx',
  output: {
    path: path.resolve(__dirname, '../public'),
    filename: 'bundle.js',
    sourceMapFilename: 'bundle.map',
    publicPath: '/',
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, '../src/components')
    },
    extensions: ['.js', '.jsx']
  },
  devtool: '#source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: ['babel-loader', 'eslint-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        loader: 'file-loader',
      }
    ]
  },
  plugins: [
    Htmlwebpackplugin,
  ],
};
