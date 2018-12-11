const webpack = require('webpack');
const path = require('path');
const loaders = require('./webpack.loaders');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  mode: 'development',
  entry: {
    app: ['react-hot-loader/patch', './src/index.jsx'],
    vendor: [
      'react',
      'react-dom',
    ],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].threejs-experiment.js',
    publicPath: '/',
    sourceMapFilename: '[name].map'
  },
  devtool: "cheap-eval-source-map",
  module: {
    rules: loaders,
  },

  resolve: {
    extensions: ['.js', '.json', '.jsx', '.sass']
  },

  devServer: {
    historyApiFallback: true,
    hot: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: 'Output Management',
      template: './src/template.html'
    }),
    new HtmlWebpackIncludeAssetsPlugin({
      assets: [],
      append: false,
      hash: true
    }),
    new BundleAnalyzerPlugin()
  ]
};
