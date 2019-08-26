const merge = require('webpack-merge');

const { UglifyJsPlugin, OptimizeCSSAssetsPlugin } = require('./webpack.plugins.js');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      UglifyJsPlugin,
      OptimizeCSSAssetsPlugin
    ]
  },
});
