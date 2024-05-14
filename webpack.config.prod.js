var webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');
var baseConfig = require('./webpack.config.base');

var config = Object.create(baseConfig);
config.mode = 'production';
config.plugins = [
  new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify('production')
  }),
];
config.optimization = {
  minimize: true,
  minimizer: [new TerserPlugin()],
};

module.exports = config;
