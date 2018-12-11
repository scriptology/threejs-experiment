const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: ['./src/index.jsx'],
    vendor: [ 'react', 'react-dom' ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].threejs-experiment.min.js',
    publicPath: '/',
  },
  module: {
    rules: loaders,
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx', '.sass']
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false
    }),
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [
        'config/apiconfig.js'
      ],
      append: false,
      hash: true
    })
  ]
};
