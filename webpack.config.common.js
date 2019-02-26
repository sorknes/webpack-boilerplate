// -------------------------------------------------------------------------------
//
// Description: Add common webpack configurations
// ===============================================================================
//

const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  glob_entries = require('webpack-glob-folder-entries')

let src = path.resolve(__dirname, 'src')
let styles = `${src}/styles/scss`
let scripts = `${src}/scripts`

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
              searchPaths: [...returnEntries('./src/templates/**/')],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'nunjucks-html-loader!./src/templates/index.njk',
      filename: 'index.html',
      inject: 'body',
    }),
  ],
}
