// // -------------------------------------------------------------------------------
// //
// // Description: Add development specific webpack configurations
// // ===============================================================================
// //

// const merge = require('webpack-merge')
// const common = require('./webpack.config.common.js')
// const jsonImporter = require('node-sass-json-importer')

// module.exports = merge(common, {
//   mode: 'development',

//   module: {
//     rules: [
//       {
//         test: /\.(sass|scss)$/,
//         use: [
//           'style-loader',
//           {
//             loader: 'css-loader',
//             options: {
//               importLoaders: 1,
//             },
//           },
//           'postcss-loader',
//           'resolve-url-loader',
//           {
//             loader: 'sass-loader',
//             options: {
//               importer: jsonImporter(),
//             },
//           },
//         ],
//       },
//       {
//         test: /\.svg$/,
//         exclude: /node_modules/,
//         use: [
//           {
//             loader: 'url-loader',
//             options: {
//               limit: 10000,
//               fallback: 'file-loader',
//               name: '[name].[ext]',
//             },
//           },
//         ],
//       },
//       {
//         test: /\.(png|jpg|gif)$/,
//         loader: 'file-loader',
//         options: {
//           name: '[name].[ext]',
//         },
//       },
//     ],
//   },

//   devtool: 'inline-source-map',

//   devServer: {
//     port: 2010,
//     contentBase: './src',
//   },
// })
