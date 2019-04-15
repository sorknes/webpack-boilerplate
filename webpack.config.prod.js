// -------------------------------------------------------------------------------
//
// Description: Add production specific webpack configurations
// ===============================================================================
//

const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const jsonImporter = require('node-sass-json-importer')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

const merge = require('webpack-merge')
const common = require('./webpack.config.common.js')

module.exports = merge(common, {
  mode: 'production',

  output: {
    filename: './assets/scripts/[name].bundle.js',
    path: path.join(__dirname, '/dist'),
  },

  module: {
    rules: [
      {
        test: /\.(scss|sass)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              importer: jsonImporter(),
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: '../../assets/images',
            },
          },
        ],
      },
    ],
  },

  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
      new OptimizeCSSAssetsPlugin({}),
    ],
  },

  plugins: [
    new CleanWebpackPlugin(['./dist']),
    new CopyWebpackPlugin([
      { from: './src/assets/images', to: './assets/images', ignore: ['*.svg'] },
      { from: './src/humans.txt', to: './' },
      { from: './src/robots.txt', to: './' },
    ]),
    new MiniCssExtractPlugin({
      filename: './assets/styles/[name].css',
      chunkFilename: './assets/styles/[id].css',
    }),
  ],
})
