// -------------------------------------------------------------------------------
//
// Description: Add common webpack configurations
// ===============================================================================
//

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const SvgSpriteHtmlWebpackPlugin = require('svg-sprite-html-webpack')
const glob_entries = require('webpack-glob-folder-entries')

let src = `./src`
let styles = `${src}/styles/scss`
let images = `${src}/images`
let scripts = `${src}/scripts`
let templates = `${src}/templates`

function returnEntries(globPath) {
  let entries = glob_entries(globPath, true)
  let folderList = new Array()
  for (let folder in entries) {
    folderList.push(path.join(__dirname, entries[folder]))
  }
  return folderList
}

module.exports = {
  entry: [`${scripts}/main.js`, `${styles}/wb-styles.scss`],

  module: {
    rules: [
      {
        test: /\.html$|njk|nunjucks/,
        use: [
          'html-loader',
          {
            loader: 'nunjucks-html-loader',
            options: {
              searchPaths: [...returnEntries(`${templates}/**/`)],
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: SvgSpriteHtmlWebpackPlugin.getLoader(),
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: `nunjucks-html-loader!${templates}/index.njk`,
      filename: 'index.html',
      inject: 'body',
    }),
    new SvgSpriteHtmlWebpackPlugin({
      includeFiles: [`${images}/icons/*.svg`],
    }),
  ],
}
