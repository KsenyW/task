const path = require('path');
const webpack = require('webpack');
const merge = require("webpack-merge");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

const APP_DIR = path.resolve(__dirname, '../client/index.js');

module.exports = env => {
  const { PLATFORM } = env;
  return merge([
      {
        entry: ['@babel/polyfill', APP_DIR],
        output: {
          filename: 'bundle.js',
          path: path.resolve(__dirname, '../client/dist')
        },
        context: __dirname,
        resolve: {
          extensions: ['.js', '.jsx', '.json', '*']
        },
        module: {
          rules: [
            {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              use: {
                loader: 'babel-loader'
              }
            },
            {
              test: /\.scss$/,
              use: [
                'style-loader',
                'css-loader',
                'sass-loader'
              ]
            }
          ]
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: '../client/index.html',
            filename: './index.html'
          })
          // new CopyWebpackPlugin([ { from: 'client/assets' } ])
        ],
    }
  ])
};